import { Globe, Brain, Plug, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Plataformas Web & Apps Móviles',
    description:
      'Desarrollo rápido, seguro, responsivo y a medida. Aplicaciones que sus clientes y equipo realmente quieren usar.',
    image:
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Brain,
    title: 'Soluciones con Inteligencia Artificial',
    description:
      'Automatización inteligente para optimizar tiempos operativos. IA que trabaja dentro de sus procesos existentes.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Plug,
    title: 'Integraciones y APIs',
    description:
      'Conexión fluida de pasarelas de pago, sistemas de correos transaccionales y arquitecturas internas robustas.',
    image:
      'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Zap,
    title: 'Power Platform & Automatización',
    description:
      'Soluciones ágiles con Power Apps y Power Automate para digitalizar procesos internos sin fricción.',
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding relative bg-white">
      <div className="container-landing">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 tracking-wider uppercase mb-3">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
            Servicios de desarrollo de software en Lima, Perú
          </h2>
          <p className="mt-4 text-surface-500 max-w-2xl mx-auto">
            Desde crear tu página web hasta automatizar procesos internos con IA — cada solución está diseñada para resolver problemas reales de tu negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-surface-200 bg-surface-50 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 hover:border-brand-200 transition-[transform,box-shadow,border-color] duration-300 ease-out-expo"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 h-40 bg-gradient-to-t from-surface-50 via-surface-50/30 to-transparent pointer-events-none" />
              </div>
              <div className="relative p-6 pt-2">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-4 -mt-8 relative z-10 group-hover:bg-brand-100 transition-colors duration-300">
                  <service.icon
                    className="w-5 h-5 text-brand-600"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-base font-semibold text-surface-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
