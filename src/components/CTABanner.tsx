import { MessageCircle, ArrowRight, Phone } from 'lucide-react';
import Reveal from './Reveal';

const WHATSAPP_URL =
  'https://wa.me/51908576452?text=Hola%20GPTech%20Core%2C%20quiero%20digitalizar%20mi%20empresa.%20%C2%BFPodemos%20conversar%20sobre%20un%20proyecto%3F';

export default function CTABanner() {
  return (
    <section id="contacto" className="section-padding relative bg-ink-900">
      <div className="container-landing">
        <Reveal className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-ink-700 via-brand-950 to-ink-800">
          {/* Technical dot-grid texture, no stock photography */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-mint-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 text-center">
            <p className="text-sm font-semibold text-mint-400 font-mono tracking-widest uppercase mb-4">
              // Comience hoy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Menos floro, más resultados.
            </h2>
            <p className="text-lg text-ink-50 mb-10 max-w-xl mx-auto">
              Digitalicemos tu empresa hoy mismo. Conversemos y le mostramos
              cómo transformar sus procesos en semanas, no meses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-mint-500 text-ink-950 text-base font-bold hover:bg-mint-400 hover:scale-[1.02] active:scale-[0.97] transition-[background-color,transform,box-shadow] duration-150 ease-out-binance shadow-[0_0_28px_-6px_rgba(0,224,140,0.5)]"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbenos por WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+51908576452"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 text-white/90 font-semibold hover:bg-white/10 active:scale-[0.97] transition-[background-color,transform] duration-150 ease-out-binance"
              >
                <Phone className="w-4 h-4" />
                +51 908 576 452
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
