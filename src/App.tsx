import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { usePortfolio } from './hooks/usePortfolio';

export default function App() {
  const { profile } = usePortfolio();
  return (
    <>
      <Navbar shortName={profile.shortName} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
