import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pt-32 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs tracking-widest text-fuchsia-300">
          <MapPin size={12} /> {profile.location}
        </p>

        <h1 className="hero-heading mt-8 text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95]">
          {profile.name}
        </h1>

        <p className="mt-6 text-2xl font-medium text-zinc-100 md:text-3xl">{profile.role}</p>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">{profile.tagline}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="btn-accent inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wider text-white"
          >
            VIEW PROJECTS <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/15 px-7 py-3 text-sm font-semibold tracking-wider text-zinc-200 hover:border-fuchsia-400"
          >
            CONTACT ME
          </a>
        </div>

        <div className="mt-10">
          <SocialLinks social={profile.social} />
        </div>
      </motion.div>
    </section>
  );
}