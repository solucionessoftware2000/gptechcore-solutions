import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const stats = [
  { value: '12+', label: 'AÑOS' },
  { value: '1200+', label: 'PROYECTOS' },
  { value: '24/7', label: 'SOPORTE' },
];

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  return mounted;
}

export default function Hero() {
  const mounted = useMounted();
  const enter = () =>
    `transition-[opacity,transform] duration-700 ease-out-expo motion-reduce:transition-none ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`;
  const enterStyle = (delay: number) => ({ transitionDelay: mounted ? `${delay}ms` : '0ms' });

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-ink-900">
      {/* Technical background: subtle grid + glow */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-20 right-0 w-[600px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-mint-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-landing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="max-w-xl">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.04] text-mint-400 text-xs font-mono uppercase tracking-widest mb-8 ${enter()}`}
              style={enterStyle(0)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-mint-400 animate-pulse motion-reduce:animate-none" />
              Disponibles para nuevos proyectos
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-white mb-6 ${enter()}`}
              style={enterStyle(80)}
            >
              Desarrollo de software a medida{' '}
              <span className="text-mint-400">para tu empresa</span>{' '}
              en Perú.
            </h1>

            <p
              className={`text-lg text-ink-100 leading-relaxed mb-8 ${enter()}`}
              style={enterStyle(160)}
            >
              Creamos páginas web, aplicaciones móviles y sistemas empresariales
              exactamente a tu medida. Deja los genéricos: automatiza procesos,
              digitaliza tu negocio y aumenta ventas desde Lima.
            </p>

            <div
              className={`flex items-center gap-6 mb-10 font-mono ${enter()}`}
              style={enterStyle(240)}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && <span className="h-8 w-px bg-white/10" />}
                  <div>
                    <p className="text-xl font-bold text-white leading-none">{stat.value}</p>
                    <p className="text-[10px] text-ink-100 tracking-widest mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 ${enter()}`} style={enterStyle(320)}>
              <a
                href="https://wa.me/51908576452?text=Hola%20GPTech%20Core%2C%20me%20interesa%20iniciar%20un%20proyecto%20de%20desarrollo%20de%20software.%20%C2%BFPodemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg bg-mint-500 text-ink-950 font-semibold hover:bg-mint-400 active:scale-[0.97] transition-[background-color,transform,box-shadow] duration-150 ease-out-binance shadow-[0_0_24px_-6px_rgba(0,224,140,0.5)]"
              >
                Iniciar Proyecto
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg border border-white/10 text-white font-semibold hover:border-mint-400/40 hover:text-mint-400 hover:bg-white/[0.03] active:scale-[0.97] transition-[border-color,color,background-color,transform] duration-150 ease-out-binance"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Right - Product mockup (no stock photography) */}
          <div
            className={`relative hidden lg:block transition-[opacity,transform] duration-700 ease-out-expo motion-reduce:transition-none ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
            style={enterStyle(120)}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <div className="h-[480px] bg-gradient-to-br from-ink-700 via-brand-950 to-ink-700 p-5 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-mint-400/80" />
                  <div className="ml-3 flex-1 h-6 rounded-md bg-white/[0.06] flex items-center px-3">
                    <span className="text-[11px] text-white/40 font-mono">tuempresa.com/dashboard</span>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3 flex flex-col gap-2">
                    <div className="w-7 h-7 rounded-md bg-brand-500/30" />
                    <div className="h-2 w-3/4 rounded bg-white/15" />
                    <div className="h-2 w-1/2 rounded bg-white/10" />
                    <div className="h-2 w-2/3 rounded bg-white/10" />
                  </div>
                  <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3 flex flex-col gap-2">
                    <div className="w-7 h-7 rounded-md bg-amber-500/30" />
                    <div className="h-2 w-2/3 rounded bg-white/15" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                    <div className="h-2 w-1/2 rounded bg-white/10" />
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-mint-500/15 to-brand-500/15 border border-mint-400/20 p-3 flex flex-col items-center justify-center gap-1">
                    <span className="text-2xl font-bold font-mono text-mint-400">+98%</span>
                    <span className="text-[10px] text-white/50 text-center font-mono uppercase tracking-wider">Satisfacción</span>
                  </div>
                  <div className="col-span-2 rounded-lg bg-white/[0.04] border border-white/10 p-3 flex items-end gap-1.5">
                    {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-mint-500 to-mint-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3 flex flex-col gap-2 justify-center">
                    <div className="h-2 w-full rounded bg-white/15" />
                    <div className="h-2 w-2/3 rounded bg-white/10" />
                    <div className="h-7 w-7 rounded-full bg-amber-500/40 self-end" />
                  </div>
                </div>
              </div>
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-ink-900/90 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg font-mono">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-ink-100 tracking-wider mb-0.5">ENTREGA</p>
                    <p className="text-lg font-bold text-white">4-8 sem</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-[10px] text-ink-100 tracking-wider mb-0.5">CLIENTES</p>
                    <p className="text-lg font-bold text-white">+35</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div>
                    <p className="text-[10px] text-ink-100 tracking-wider mb-0.5">SATISFACCIÓN</p>
                    <p className="text-lg font-bold text-mint-400">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-100 hover:text-mint-400 transition-colors duration-300 animate-bounce motion-reduce:animate-none"
        aria-label="Ir a servicios"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
