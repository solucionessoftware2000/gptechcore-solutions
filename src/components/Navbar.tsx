import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-surface-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container-landing flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/logotech.png"
            alt="TechCore logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
          <span className="text-lg font-semibold tracking-tight text-surface-900">
            Tech<span className="text-brand-600">Core</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-surface-600 hover:text-brand-600'
                  : 'text-surface-700 hover:text-brand-600'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/51908576452?text=Hola%20TechCore%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20desarrollo%20de%20software.%20%C2%BFPodemos%20conversar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-500 text-white text-sm font-semibold hover:bg-accent-600 transition-colors duration-300 shadow-sm"
          >
            Cotizar Proyecto
          </a>
        </div>

        <button
          className="md:hidden text-surface-600 hover:text-surface-900 transition-colors duration-300"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-surface-200/60 shadow-lg">
          <div className="container-landing flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-surface-600 hover:text-brand-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/51908576452?text=Hola%20TechCore%2C%20me%20interesa%20cotizar%20un%20proyecto%20de%20desarrollo%20de%20software.%20%C2%BFPodemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent-500 text-white text-sm font-semibold hover:bg-accent-600 transition-colors duration-300"
            >
              Cotizar Proyecto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
