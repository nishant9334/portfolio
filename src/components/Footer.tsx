import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer id="contact" className="border-t border-border bg-bg/50 backdrop-blur">
      <div className="section-container pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-3"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-gradient text-2xl font-bold">{profile.shortName}</span>
              <span className="text-fg-muted text-sm">Portfolio</span>
            </div>
            <p className="text-fg-muted leading-relaxed max-w-xs">
              {profile.bio.split('. ').slice(0, 2).join('. ')}.
            </p>
            <div className="flex items-center gap-3 text-sm text-fg-muted">
              <MapPin size={16} className="text-accent" />
              <span>{profile.location}</span>
            </div>
            <SocialLinks social={profile.social} variant="compact" />
          </div>

          <nav className="space-y-4">
            <h3 className="font-semibold text-fg">Navigate</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="text-fg-muted hover:text-accent transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            <h3 className="font-semibold text-fg">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent" />
                <div>
                  <p className="text-sm text-fg-muted">Email</p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${profile.social.email}`}
                      className="text-fg hover:text-accent transition-colors"
                    >
                      {profile.social.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-xl bg-bg-card border border-border text-fg-muted hover:text-accent hover:border-accent/50 transition-all"
                      aria-label={copied ? 'Copied to clipboard' : 'Copy email'}
                    >
                      {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent-warm" />
                <div>
                  <p className="text-sm text-fg-muted">Phone</p>
                  <a href={`tel:${profile.social.phone?.replace(/\s/g, '')}`} className="text-fg hover:text-accent transition-colors">
                    {profile.social.phone}
                  </a>
                </div>
              </div>
            </div>
            <SocialLinks social={profile.social} variant="footer" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8"
        >
          <p className="text-sm text-fg-muted">
            © {year} {profile.name}. Built with React, TypeScript, Vite, Tailwind CSS & Framer Motion.
          </p>
          <div className="flex items-center gap-4 text-sm text-fg-muted">
            <a href="#home" className="hover:text-accent transition-colors flex items-center gap-1">
              Back to top
              <ArrowUpRight size={14} />
            </a>
            <span>Designed & Developed by Nishant</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
