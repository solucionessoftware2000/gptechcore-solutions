// Checks every project link in src/data/projects.json and writes src/data/project-status.json.
// Projects marked `up: false` are hidden from the landing page until a later run finds them up again.
// Plain Node ESM (Node 20+), no dependencies. Exits 1 only when projects.json is malformed.
import { readFileSync, writeFileSync } from 'node:fs';

const PROJECTS_FILE = new URL('../src/data/projects.json', import.meta.url);
const STATUS_FILE = new URL('../src/data/project-status.json', import.meta.url);

const TIMEOUT_MS = 15_000;
const MAX_ATTEMPTS = 3;
const BACKOFF_MS = [1_000, 3_000];

const REQUEST_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'es-PE,es;q=0.9,en;q=0.8',
};

// Bot-protection pages mean the site exists; it only blocks automated clients
const CHALLENGE_STATUSES = [403, 429, 503];
const CHALLENGE_BODY_MARKERS = ['challenge-platform', 'just a moment', 'verificación de seguridad'];

// Typical parking / suspended-hosting / expired-domain pages
const DEAD_BODY_MARKERS = [
  'account has been suspended',
  'account suspended',
  'this account has been suspended',
  'suspendedpage',
  'domain has expired',
  'this domain has expired',
  'domain is for sale',
  'buy this domain',
  'website is no longer available',
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function loadProjects() {
  let data;
  try {
    data = JSON.parse(readFileSync(PROJECTS_FILE, 'utf8'));
  } catch (error) {
    throw new Error(`Cannot read or parse projects.json: ${error.message}`);
  }
  if (!Array.isArray(data) || data.length === 0) throw new Error('projects.json must be a non-empty array');

  const seen = new Set();
  data.forEach((project, i) => {
    if (!project || typeof project.id !== 'string' || project.id === '') {
      throw new Error(`projects.json[${i}] is missing a string "id"`);
    }
    if (seen.has(project.id)) throw new Error(`projects.json has a duplicate id "${project.id}"`);
    seen.add(project.id);
    let url;
    try {
      url = new URL(project.href);
    } catch {
      throw new Error(`projects.json "${project.id}" has an invalid "href": ${project.href}`);
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new Error(`projects.json "${project.id}" href must be http(s): ${project.href}`);
    }
  });
  return data;
}

function isCloudflareChallenge(status, headers, body) {
  if (!CHALLENGE_STATUSES.includes(status)) return false;
  if ((headers.get('cf-mitigated') ?? '').toLowerCase() === 'challenge') return true;
  const server = (headers.get('server') ?? '').toLowerCase();
  return server.includes('cloudflare') && CHALLENGE_BODY_MARKERS.some((marker) => body.includes(marker));
}

// Returns { up, reason, retry }; `retry` marks verdicts that may be transient
function classify(response, body) {
  const { status, headers } = response;
  const finalUrl = response.url || '';

  if (finalUrl.toLowerCase().includes('suspendedpage')) {
    return { up: false, reason: `redirected to suspended page (${finalUrl})`, retry: false };
  }
  if (isCloudflareChallenge(status, headers, body)) {
    return { up: true, reason: `HTTP ${status} Cloudflare challenge (bot protection)`, retry: false };
  }
  if (status >= 400) {
    return { up: false, reason: `HTTP ${status}`, retry: status >= 500 || status === 429 };
  }
  const marker = DEAD_BODY_MARKERS.find((m) => body.includes(m));
  if (marker) return { up: false, reason: `HTTP ${status} body contains "${marker}"`, retry: false };

  // A near-empty body is fine: SPAs ship an empty #root
  return { up: true, reason: `HTTP ${status}`, retry: false };
}

async function attempt(url) {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: REQUEST_HEADERS,
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    const body = (await response.text()).toLowerCase();
    return classify(response, body);
  } catch (error) {
    const timedOut = error?.name === 'TimeoutError' || error?.name === 'AbortError';
    const detail = error?.cause?.code ?? error?.cause?.message ?? error?.message ?? String(error);
    return { up: false, reason: timedOut ? `timeout after ${TIMEOUT_MS / 1000}s` : `network error: ${detail}`, retry: true };
  }
}

async function checkProject(project) {
  const started = Date.now();
  let verdict;
  let attempts = 0;
  while (attempts < MAX_ATTEMPTS) {
    attempts += 1;
    verdict = await attempt(project.href);
    if (verdict.up || !verdict.retry || attempts === MAX_ATTEMPTS) break;
    await sleep(BACKOFF_MS[attempts - 1] ?? BACKOFF_MS[BACKOFF_MS.length - 1]);
  }
  return { id: project.id, href: project.href, up: verdict.up, reason: verdict.reason, attempts, ms: Date.now() - started };
}

function printTable(rows) {
  const columns = [
    ['ID', (r) => r.id],
    ['STATUS', (r) => (r.up ? 'UP' : 'DOWN')],
    ['TRIES', (r) => String(r.attempts)],
    ['TIME', (r) => `${(r.ms / 1000).toFixed(1)}s`],
    ['URL', (r) => r.href],
    ['REASON', (r) => r.reason],
  ];
  const widths = columns.map(([title, get]) => Math.max(title.length, ...rows.map((r) => get(r).length)));
  const line = (cells) => cells.map((cell, i) => cell.padEnd(widths[i])).join('  ').trimEnd();
  console.log(line(columns.map(([title]) => title)));
  console.log(line(widths.map((w) => '-'.repeat(w))));
  rows.forEach((r) => console.log(line(columns.map(([, get]) => get(r)))));
}

async function main() {
  let projects;
  try {
    projects = loadProjects();
  } catch (error) {
    console.error(`[check-projects] ${error.message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`[check-projects] Checking ${projects.length} project links...\n`);
  const results = await Promise.all(projects.map(checkProject));

  // Fail-open: if nothing is reachable the runner's network is the likely culprit, never empty the section
  if (results.every((r) => !r.up)) {
    console.warn('[check-projects] WARNING: every project is down; assuming a network problem and marking all as up.\n');
    results.forEach((r) => {
      r.up = true;
      r.reason = `fail-open (all down): ${r.reason}`;
    });
  }

  printTable(results);

  const status = {
    checkedAt: new Date().toISOString(),
    projects: Object.fromEntries(results.map((r) => [r.id, { up: r.up, reason: r.reason }])),
  };
  try {
    writeFileSync(STATUS_FILE, `${JSON.stringify(status, null, 2)}\n`);
    const upCount = results.filter((r) => r.up).length;
    console.log(`\n[check-projects] ${upCount}/${results.length} up. Wrote src/data/project-status.json`);
  } catch (error) {
    // Without a status file the site simply shows every project
    console.warn(`[check-projects] WARNING: could not write status file: ${error.message}`);
  }
}

await main();
