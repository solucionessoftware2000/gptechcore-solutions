import { useState } from 'react';
import { Eye, Smartphone, QrCode, Lock, Heart, Clock, Shield, Wifi, Cloud, MonitorCheck } from 'lucide-react';

const projects = [
  {
    id: 'itapp',
    logo: 'IT',
    name: 'Itapp LLC',
    domain: 'itapp.llc',
    href: 'https://itapp.llc',
    description:
      'SaaS de perfiles digitales, tarjetas NFC y herramientas para impulsar tu negocio. Presencia profesional en segundos.',
    pills: [
      { icon: Smartphone, label: 'Tarjetas NFC' },
      { icon: QrCode, label: 'QR Personalizable' },
      { icon: Lock, label: 'Encriptación E2E' },
    ],
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Prisma', 'Cloudflare', 'Zoho', 'ZeptoMail', 'CRM'],
  },
  {
    id: 'enfermeras24',
    logo: 'E24',
    name: 'Enfermeras 24 Horas',
    domain: 'enfermeras24horas.com',
    href: 'https://enfermeras24horas.com',
    description:
      'Servicios de enfermería a domicilio en Lima Metropolitana con disponibilidad 24/7. +3,000 pacientes atendidos.',
    pills: [
      { icon: Clock, label: 'Disponible 24/7' },
      { icon: Heart, label: 'Cuidado a domicilio' },
      { icon: Shield, label: 'Personal certificado' },
    ],
    tags: ['React', 'WhatsApp API', 'SEO', 'Landing Page'],
  },
  {
    id: 'daz',
    logo: 'DAZ',
    name: 'DAZ Solutions Corp',
    domain: 'daz-solutions.com',
    href: 'https://daz-solutions.com',
    description:
      'Soluciones tecnológicas integrales en Panamá: infraestructura, cloud, videovigilancia, conectividad y desarrollo. 10+ años, 100+ proyectos exitosos.',
    pills: [
      { icon: Cloud, label: 'Infraestructura & Cloud' },
      { icon: Wifi, label: 'Conectividad' },
      { icon: MonitorCheck, label: 'Soporte Proactivo' },
    ],
    tags: ['React', 'Microsoft Azure', 'Cisco', 'Fortinet', 'VMware', 'Ubiquiti'],
  },
];

export default function Projects() {
  const [likes, setLikes] = useState<Record<string, number>>(
    Object.fromEntries(projects.map((p) => [p.id, 0]))
  );
  const [liked, setLiked] = useState<Record<string, boolean>>(
    Object.fromEntries(projects.map((p) => [p.id, false]))
  );

  function toggleLike(id: string) {
    setLiked((prev) => {
      const next = !prev[id];
      setLikes((l) => ({ ...l, [id]: l[id] + (next ? 1 : -1) }));
      return { ...prev, [id]: next };
    });
  }

  return (
    <section id="proyectos" className="section-padding relative bg-surface-50">
      <div className="container-landing">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 tracking-wider uppercase mb-3">
            Proyectos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
            Resultados que hablan por sí solos
          </h2>
          <p className="mt-4 text-surface-500 max-w-2xl mx-auto">
            Cada proyecto que entregamos es software funcional que resuelve un problema real de negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-surface-200 bg-white overflow-hidden hover:shadow-xl hover:shadow-brand-900/5 hover:border-brand-200 transition-all duration-300 flex flex-col"
            >
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-sm shadow-brand-500/20 shrink-0">
                    <span className="text-white font-bold text-sm">{project.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-surface-900 leading-tight">{project.name}</h3>
                    <p className="text-xs text-surface-400">{project.domain}</p>
                  </div>
                </div>

                <p className="text-sm text-surface-500 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.pills.map(({ icon: Icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-medium border border-brand-100">
                      <Icon className="w-3 h-3" />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex-1" />

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-surface-50 text-surface-500 text-[11px] font-medium border border-surface-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    Ver sitio
                  </a>
                  <button
                    onClick={() => toggleLike(project.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      liked[project.id]
                        ? 'bg-red-50 border-red-200 text-red-500'
                        : 'bg-surface-50 border-surface-200 text-surface-400 hover:bg-red-50 hover:border-red-200 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-4 h-4 transition-all duration-200 ${liked[project.id] ? 'fill-red-500' : ''}`} />
                    {likes[project.id] > 0 && <span>{likes[project.id]}</span>}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
