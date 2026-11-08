import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'services', label: 'SERVICES' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar({ shortName }: { shortName: string }) {
  const { profile } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle('light');
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-bg/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-12 lg:px-16">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center gap-2 font-bold text-xl text-fg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-gradient">{shortName}</span>
            <span className="text-fg-muted text-sm font-normal hidden sm:inline">Portfolio</span>
          </motion.a>

          <div className="hidden md:flex md:items-center md:gap-6">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-3 py-2 text-xs font-medium tracking-widest uppercase transition-colors ${
                  activeSection === section.id
                    ? 'text-accent'
                    : 'text-fg-muted hover:text-fg'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {section.label}
                <AnimatePresence mode="wait">
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '100%', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-warm rounded-full"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ))}

            <motion.button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-xl bg-bg-card border border-border text-fg-muted hover:text-fg hover:border-border-hover hover:bg-bg-elevated transition-all"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-bg-card border border-border text-fg-muted hover:text-fg hover:border-border-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-bg-card border border-border text-fg-muted hover:text-fg hover:border-border-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(section.id);
                  }}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`w-full max-w-xs text-center py-4 text-2xl font-medium tracking-widest uppercase transition-colors ${
                    activeSection === section.id ? 'text-accent' : 'text-fg-muted hover:text-fg'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sections.length * 0.05 + 0.1, duration: 0.3 }}
                className="flex items-center gap-4 pt-8 border-t border-border w-full max-w-xs"
              >
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-card border border-border text-fg-muted hover:text-accent hover:border-accent transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-card border border-border text-fg-muted hover:text-accent hover:border-accent transition-all"
                >
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
