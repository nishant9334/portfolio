import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import SocialLinks from './SocialLinks';

export default function HeroSection() {
  const { profile } = usePortfolio();
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
        {profile.avatarSvg ? (
          <img src={profile.avatarSvg} alt={profile.name} className="mb-6 h-40 w-40 object-contain" />
        ) : (
          <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full btn-accent text-4xl font-semibold text-white">
            {initials}
          </div>
        )}
        <h1 className="hero-heading whitespace-nowrap text-[clamp(2.5rem,11vw,12rem)] font-bold leading-none">
          Hi, I'm {profile.shortName}
        </h1>
        <p className="mt-6 text-xl font-medium text-zinc-100 md:text-2xl">{profile.role}</p>
        <p className="mt-2 max-w-2xl text-zinc-400">{profile.tagline}</p>
        <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-500">
          <MapPin size={14} /> {profile.location}
        </p>
        <div className="mt-8">
          <SocialLinks social={profile.social} />
        </div>
        <a href="#projects" className="btn-accent mt-10 rounded-full px-7 py-3 text-sm font-semibold tracking-wider text-white">
          VIEW PROJECTS
        </a>
      </motion.div>
    </section>
  );
}
