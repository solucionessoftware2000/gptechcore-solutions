import { Plus } from 'lucide-react';
import Reveal from './Reveal';
import { faqs } from './faqs';

export default function FAQ() {
  return (
    <section id="preguntas" className="section-padding relative bg-ink-900">
      <div className="container-landing">
        <Reveal className="text-center mb-16">
          <p className="text-sm font-semibold text-mint-400 font-mono tracking-widest uppercase mb-3">
            // Preguntas frecuentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Lo que preguntan antes de cotizar una página web
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              {/* Native disclosure: answers stay in the DOM for crawlers */}
              <details className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.16] open:border-white/[0.16] open:bg-white/[0.04] transition-[border-color,background-color] duration-200 ease-out-binance">
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none rounded-2xl [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-400/50">
                  <h3 className="text-base font-semibold text-white leading-snug">{faq.question}</h3>
                  <span className="w-8 h-8 shrink-0 rounded-lg border border-white/10 bg-white/[0.03] text-mint-400 flex items-center justify-center">
                    <Plus
                      className="w-4 h-4 transition-transform duration-200 ease-out-binance group-open:rotate-45 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-sm text-ink-100 leading-relaxed">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
