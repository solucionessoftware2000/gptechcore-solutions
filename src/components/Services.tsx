import { Globe, Brain, Plug, Zap } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    id: 'SVC_01',
    icon: Globe,
    title: 'Plataformas Web & Apps Móviles',
    description:
      'Desarrollo rápido, seguro, responsivo y a medida. Aplicaciones que sus clientes y equipo realmente quieren usar.',
    stack: ['React', 'React Native', 'Next.js'],
    features: ['Core Web Vitals 95+', 'PWA-ready', 'CI/CD automatizado'],
    span: 'lg:col-span-2 lg:row-span-2',
    accent: 'mint' as const,
  },
  {
    id: 'SVC_02',
    icon: Brain,
    title: 'Soluciones con Inteligencia Artificial',
    description:
      'Automatización inteligente para optimizar tiempos operativos. IA que trabaja dentro de sus procesos existentes.',
    stack: ['LLMs', 'RAG', 'Automatización'],
    span: 'lg:col-span-2',
    accent: 'brand' as const,
  },
  {
    id: 'SVC_03',
    icon: Plug,
    title: 'Integraciones y APIs',
    description:
      'Conexión fluida de pasarelas de pago, correos transaccionales y arquitecturas internas robustas.',
    stack: ['REST', 'Webhooks'],
    span: 'lg:col-span-1',
    accent: 'amber' as const,
  },
  {
    id: 'SVC_04',
    icon: Zap,
    title: 'Power Platform & Automatización',
    description:
      'Soluciones ágiles con Power Apps y Power Automate para digitalizar procesos sin fricción.',
    stack: ['Power Apps', 'Power Automate'],
    span: 'lg:col-span-1',
    accent: 'brand' as const,
  },
];

const accentClasses = {
  mint: { icon: 'bg-mint-500/15 text-mint-400 border-mint-400/20', glow: 'hover:shadow-mint-500/10' },
  brand: { icon: 'bg-brand-500/15 text-brand-400 border-brand-400/20', glow: 'hover:shadow-brand-500/10' },
  amber: { icon: 'bg-amber-500/15 text-amber-400 border-amber-400/20', glow: 'hover:shadow-amber-500/10' },
};

export default function Services() {
  return (
    <section id="servicios" className="section-padding relative bg-ink-900">
      <div className="container-landing">
        <Reveal className="text-center mb-16">
          <p className="text-sm font-semibold text-mint-400 font-mono tracking-widest uppercase mb-3">
            // Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Servicios de desarrollo de software en Lima, Perú
          </h2>
          <p className="mt-4 text-ink-100 max-w-2xl mx-auto">
            Desde crear tu página web hasta automatizar procesos internos con IA — cada solución está diseñada para resolver problemas reales de tu negocio.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
          {services.map((service, index) => {
            const accent = accentClasses[service.accent];
            return (
              <Reveal key={service.id} delay={index * 60} className={`h-full ${service.span}`}>
                <div
                  className={`group h-full flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.04] hover:shadow-2xl ${accent.glow} transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out-binance`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl border ${accent.icon} flex items-center justify-center group-hover:scale-105 transition-transform duration-200 ease-out-binance`}
                    >
                      <service.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] font-mono text-white/30 tracking-widest">{service.id}</span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-100 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && (
                    <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/20 p-4 space-y-2.5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 font-mono text-xs text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-mint-400 shadow-[0_0_8px_rgba(0,224,140,0.8)]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex-1" />

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.03] text-[10px] font-mono text-white/50 tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
