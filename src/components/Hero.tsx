import { Fragment, useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const stats = [
  { value: '5', label: 'PROYECTOS ENTREGADOS' },
  { value: '4–8 sem', label: 'ENTREGA ESTIMADA' },
  { value: 'Tuyo', label: 'CÓDIGO FUENTE' },
];

const WHATSAPP_URL = `https://wa.me/51908576452?text=${encodeURIComponent(
  'Hola GPTech Core, quiero cotizar una página web o sistema para mi negocio. ¿Podemos conversar?'
)}`;

const showcase = [
  { label: 'PROYECTO', value: 'MVES' },
  { label: 'TIPO', value: 'Trámites municipales' },
  { label: 'STACK', value: 'Spring Boot + Camunda', highlight: true },
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
              Páginas web y sistemas{' '}
              <span className="text-mint-400">a medida</span>{' '}
              para negocios en Perú.
            </h1>

            <p
              className={`text-lg text-ink-100 leading-relaxed mb-8 ${enter()}`}
              style={enterStyle(160)}
            >
              ¿Tus clientes te buscan en Google y no te encuentran? Diseñamos y
              programamos páginas web, plataformas con pagos en línea y sistemas
              internos para negocios en Lima y todo el Perú. Al completar el pago,
              el código es tuyo.
            </p>

            <div
              className={`flex items-start gap-4 sm:gap-6 mb-10 font-mono ${enter()}`}
              style={enterStyle(240)}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4 sm:gap-6">
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg bg-mint-500 text-ink-950 font-semibold hover:bg-mint-400 active:scale-[0.97] transition-[background-color,transform,box-shadow] duration-150 ease-out-binance shadow-[0_0_24px_-6px_rgba(0,224,140,0.5)]"
              >
                Cotizar mi proyecto
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg border border-white/10 text-white font-semibold hover:border-mint-400/40 hover:text-mint-400 hover:bg-white/[0.03] active:scale-[0.97] transition-[border-color,color,background-color,transform] duration-150 ease-out-binance"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          {/* Right - Real screenshot of a shipped project inside a browser frame */}
          <div
            className={`relative hidden lg:block transition-[opacity,transform] duration-700 ease-out-expo motion-reduce:transition-none ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
            style={enterStyle(120)}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <div className="h-[480px] bg-gradient-to-br from-ink-700 via-brand-950 to-ink-700 flex flex-col">
                <div className="flex items-center gap-2 px-5 pt-5 pb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-mint-400/80" />
                  <div className="ml-3 flex-1 h-6 rounded-md bg-white/[0.06] flex items-center px-3">
                    <span className="text-[11px] text-white/40 font-mono">mves.tech</span>
                  </div>
                </div>

                {/* Slight top-anchored zoom keeps the site's own stats band hidden under the overlay card */}
                <div className="flex-1 min-h-0 overflow-hidden border-t border-white/10 bg-ink-800">
                  <img
                    src={`${import.meta.env.BASE_URL}projects/mves.jpg`}
                    alt="Plataforma MVES de trámites municipales digitales desarrollada por GPTech Core"
                    width={1200}
                    height={750}
                    decoding="async"
                    className="w-full h-full object-cover object-left-top origin-top scale-[1.08]"
                  />
                </div>
              </div>
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-ink-900/90 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg font-mono">
                <div className="flex items-center justify-between gap-3">
                  {showcase.map((item, i) => (
                    <Fragment key={item.label}>
                      {i > 0 && <div className="h-10 w-px shrink-0 bg-white/10" />}
                      <div>
                        <p className="text-[10px] text-ink-100 tracking-wider mb-0.5">{item.label}</p>
                        <p
                          className={`text-xs xl:text-sm font-bold whitespace-nowrap ${
                            item.highlight ? 'text-mint-400' : 'text-white'
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </Fragment>
                  ))}
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
