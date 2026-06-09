import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Software 100% a medida',
  'Automatización inteligente',
  'Soporte dedicado post-lanzamiento',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-brand-50/30 to-surface-50 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[600px] h-[500px] bg-brand-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-landing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-200 bg-brand-50 text-brand-700 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Desarrollo de software a medida en Perú
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-surface-900 mb-6">
              Desarrollo de software a medida{' '}
              <span className="text-brand-600">para tu empresa</span>{' '}
              en Perú.
            </h1>

            <p className="text-lg text-surface-500 leading-relaxed mb-8">
              Creamos páginas web, aplicaciones móviles y sistemas empresariales
              exactamente a tu medida. Deja los genéricos: automatiza procesos,
              digitaliza tu negocio y aumenta ventas desde Lima.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-surface-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/51908576452?text=Hola%20GPTech%20Core%2C%20me%20interesa%20iniciar%20un%20proyecto%20de%20desarrollo%20de%20software.%20%C2%BFPodemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-accent-500/15"
              >
                Iniciar Proyecto
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg border border-surface-300 text-surface-700 font-semibold hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 transition-all duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Right - Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10 border border-surface-200/60">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de desarrollo colaborando en proyecto de software"
                className="w-full h-[480px] object-cover"
                loading="eager"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-surface-200/50 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-surface-500 mb-0.5">Entrega promedio</p>
                    <p className="text-lg font-bold text-surface-900">4-8 semanas</p>
                  </div>
                  <div className="h-10 w-px bg-surface-200" />
                  <div>
                    <p className="text-xs text-surface-500 mb-0.5">Clientes activos</p>
                    <p className="text-lg font-bold text-surface-900">+35</p>
                  </div>
                  <div className="h-10 w-px bg-surface-200" />
                  <div>
                    <p className="text-xs text-surface-500 mb-0.5">Satisfacción</p>
                    <p className="text-lg font-bold text-brand-600">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-surface-400 hover:text-brand-600 transition-colors duration-300 animate-bounce"
        aria-label="Ir a servicios"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
