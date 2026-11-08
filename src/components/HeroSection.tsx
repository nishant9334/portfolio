import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Code, Database, Smartphone, BarChart3 } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

const specialties = [
  { icon: Code, label: 'Full Stack Web', color: 'text-accent' },
  { icon: Smartphone, label: 'Mobile Apps', color: 'text-accent-warm' },
  { icon: Database, label: 'Data Analysis', color: 'text-accent-cool' },
  { icon: BarChart3, label: 'Dashboards', color: 'text-success' },
];

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 md:px-12 lg:px-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={false}
        animate={{ opacity: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-warm/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent/5 to-accent-warm/5 blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-5xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-bg-card/50 border border-border px-4 py-1.5 text-sm font-mono text-fg-muted backdrop-blur"
        >
          <MapPin size={14} className="text-accent" />
          {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]"
        >
          <span className="text-fg">{profile.name.split(' ')[0]}</span>
          <span className="text-gradient block">{profile.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-xl md:text-2xl lg:text-3xl font-medium text-fg-muted max-w-3xl mx-auto text-balance"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-fg-subtle leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#projects"
            className="btn-primary group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {specialties.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 rounded-xl bg-bg-card/50 border border-border px-4 py-2.5 text-sm transition-all hover:border-border-hover hover:bg-bg-card"
            >
              <item.icon size={16} className={item.color} />
              <span className="font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12"
        >
          <SocialLinks social={profile.social} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-fg-subtle">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
