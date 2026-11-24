import Hero from './components/Hero';
import TrustedBar from './components/TrustedBar';
import AboutShowcase from './components/AboutShowcase';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] font-['Inter',sans-serif] text-[#14241E]">
      <Hero />
      <TrustedBar />
      <main>
        <AboutShowcase />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
