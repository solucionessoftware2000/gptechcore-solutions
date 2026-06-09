import { MessageCircle, ArrowRight, Phone } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/51908576452?text=Hola%20GPTech%20Core%2C%20quiero%20digitalizar%20mi%20empresa.%20%C2%BFPodemos%20conversar%20sobre%20un%20proyecto%3F';

export default function CTABanner() {
  return (
    <section id="contacto" className="section-padding relative bg-white">
      <div className="container-landing">
        <div className="relative rounded-2xl overflow-hidden border border-surface-200">
          {/* Background image with overlay */}
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Equipo de trabajo digital"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900/90 via-surface-900/80 to-surface-900/60" />

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 text-center">
            <p className="text-sm font-semibold text-accent-400 tracking-wider uppercase mb-4">
              Comience hoy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Menos floro, más resultados.
            </h2>
            <p className="text-lg text-surface-300 mb-10 max-w-xl mx-auto">
              Digitalicemos tu empresa hoy mismo. Conversemos y le mostramos
              cómo transformar sus procesos en semanas, no meses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent-500 text-white text-base font-bold hover:bg-accent-600 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/25 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbenos por WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+51908576452"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/90 font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                +51 908 576 452
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
