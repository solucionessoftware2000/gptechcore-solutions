import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink-900">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-landing max-w-3xl">
          <a
            href={import.meta.env.BASE_URL}
            className="text-xs font-mono uppercase tracking-widest text-mint-400 hover:text-mint-300 transition-colors duration-150 ease-out-binance"
          >
            ← Volver al inicio
          </a>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-4 mb-2">
            {title}
          </h1>
          <p className="text-xs font-mono text-white/30 mb-10">
            Última actualización: {updatedAt}
          </p>
          <div className="space-y-8 text-sm text-ink-100 leading-relaxed [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mb-2 [&_p]:mb-3 [&_li]:mb-1.5">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
