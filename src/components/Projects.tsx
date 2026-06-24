import { ArrowUpRight, Smartphone, QrCode, Lock, Heart, Clock, Shield, Wifi, Cloud, MonitorCheck, Scale, Brain, FileText } from 'lucide-react';
import Reveal from './Reveal';

const projects = [
  {
    id: 'itapp',
    index: 'P01',
    logo: 'IT',
    name: 'Itapp LLC',
    domain: 'itapp.llc',
    href: 'https://itapp.llc',
    description:
      'SaaS de perfiles digitales, tarjetas NFC y herramientas para impulsar tu negocio. Presencia profesional en segundos.',
    pills: [
      { icon: Smartphone, label: 'Tarjetas NFC' },
      { icon: QrCode, label: 'QR Personalizable' },
      { icon: Lock, label: 'Encriptación E2E' },
    ],
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Prisma', 'Cloudflare', 'Zoho', 'ZeptoMail', 'CRM'],
  },
  {
    id: 'enfermeras24',
    index: 'P02',
    logo: 'E24',
    name: 'Enfermeras 24 Horas',
    domain: 'enfermeras24horas.com',
    href: 'https://enfermeras24horas.com',
    description:
      'Servicios de enfermería a domicilio en Lima Metropolitana con disponibilidad 24/7. +3,000 pacientes atendidos.',
    pills: [
      { icon: Clock, label: 'Disponible 24/7' },
      { icon: Heart, label: 'Cuidado a domicilio' },
      { icon: Shield, label: 'Personal certificado' },
    ],
    tags: ['React', 'WhatsApp API', 'SEO', 'Landing Page'],
  },
  {
    id: 'icp',
    index: 'P03',
    logo: 'ICP',
    name: 'ICP Pericias Forenses',
    domain: 'periciasforences.com',
    href: 'https://periciasforences.com',
    description:
      'Plataforma de consultoría pericial psicológica para abogados litigantes en Perú. Pericias penales y civiles, contrapericias e informes con validez judicial.',
    pills: [
      { icon: Scale, label: 'Pericias Judiciales' },
      { icon: Brain, label: 'Psicología Forense' },
      { icon: FileText, label: 'Informes Periciales' },
    ],
    tags: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'Izipay', 'Email Transaccional'],
  },
  {
    id: 'daz',
    index: 'P04',
    logo: 'DAZ',
    name: 'DAZ Solutions Corp',
    domain: 'daz-solutions.com',
    href: 'https://daz-solutions.com',
    description:
      'Soluciones tecnológicas integrales en Panamá: infraestructura, cloud, videovigilancia, conectividad y desarrollo. 10+ años, 100+ proyectos exitosos.',
    pills: [
      { icon: Cloud, label: 'Infraestructura & Cloud' },
      { icon: Wifi, label: 'Conectividad' },
      { icon: MonitorCheck, label: 'Soporte Proactivo' },
    ],
    tags: ['React', 'Microsoft Azure', 'Cisco', 'Fortinet', 'VMware', 'Ubiquiti'],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding relative bg-ink-800">
      <div className="container-landing">
        <Reveal className="text-center mb-16">
          <p className="text-sm font-semibold text-mint-400 font-mono tracking-widest uppercase mb-3">
            // Proyectos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Resultados que hablan por sí solos
          </h2>
          <p className="mt-4 text-ink-100 max-w-2xl mx-auto">
            Cada proyecto que entregamos es software funcional que resuelve un problema real de negocio.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60} className="h-full">
              <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-mint-500/5 transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out-binance flex flex-col">
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-sm shadow-brand-500/20 shrink-0">
                        <span className="text-white font-bold text-sm">{project.logo}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight">{project.name}</h3>
                        <p className="text-xs text-ink-100 font-mono">$ {project.domain}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-white/30 tracking-widest">{project.index}</span>
                  </div>

                  <p className="text-sm text-ink-100 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.pills.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-mint-500/10 text-mint-400 text-xs font-medium border border-mint-400/20"
                      >
                        <Icon className="w-3 h-3" />
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="flex-1" />

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/10 bg-white/[0.03] text-[10px] font-mono text-white/50 tracking-wide"
                      >
                        <span className="w-1 h-1 rounded-full bg-mint-400/70" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-white/10 text-white text-sm font-medium hover:border-mint-400/40 hover:bg-mint-500/10 hover:text-mint-400 active:scale-[0.97] transition-[background-color,border-color,color,transform] duration-150 ease-out-binance"
                  >
                    Ver sitio
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
