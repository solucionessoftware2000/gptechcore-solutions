import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const path = window.location.pathname.replace(import.meta.env.BASE_URL, '');

export default function App() {
  if (path === 'politica-de-privacidad') return <PrivacyPolicy />;
  if (path === 'terminos-de-servicio') return <TermsOfService />;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
