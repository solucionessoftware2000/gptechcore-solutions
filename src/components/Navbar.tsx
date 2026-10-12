import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logotech from '/logotech.png';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
];

const WHATSAPP_URL = `https://wa.me/51908576452?text=${encodeURIComponent(
  'Hola GPTech Core, quiero cotizar una página web o sistema para mi negocio. ¿Podemos conversar?'
)}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-200 ease-out-binance ${
        scrolled
          ? 'bg-ink-900/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-landing flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logotech}
            alt="GPTech Core logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="text-lg font-semibold tracking-tight text-white font-mono">
            GPTech <span className="text-mint-400">Core</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium font-mono uppercase tracking-widest text-ink-50 hover:text-mint-400 transition-colors duration-150 ease-out-binance"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-mint-500 text-ink-950 text-sm font-semibold hover:bg-mint-400 active:scale-[0.97] transition-[background-color,transform] duration-150 ease-out-binance shadow-[0_0_20px_-4px_rgba(0,224,140,0.5)]"
          >
            Cotizar proyecto
          </a>
        </div>

        <button
          className="md:hidden text-ink-50 hover:text-white active:scale-90 transition-[color,transform] duration-150 ease-out-binance"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-ink-900/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg transition-[max-height,opacity] duration-300 ease-out-expo ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-landing flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xs font-medium font-mono uppercase tracking-widest text-ink-50 hover:text-mint-400 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-mint-500 text-ink-950 text-sm font-semibold hover:bg-mint-400 active:scale-[0.97] transition-[background-color,transform] duration-150 ease-out-binance"
          >
            Cotizar proyecto
          </a>
        </div>
      </div>
    </nav>
  );
}
