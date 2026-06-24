
import logotech from '/logotech.png';

const footerLinks = [
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Términos de Servicio', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900">
      <div className="container-landing py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img src={logotech} alt="GPTech Core logo" className="w-7 h-7 rounded-md object-cover" />
            <span className="text-base font-semibold text-white font-mono">
              GPTech <span className="text-mint-400">Core</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-ink-100 hover:text-mint-400 transition-colors duration-150 ease-out-binance"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-white/10" />

          {/* Copyright */}
          <p className="text-xs font-mono text-white/30">
            &copy; {new Date().getFullYear()} GPTech Core. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
