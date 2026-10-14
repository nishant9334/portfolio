import { useState } from 'react';
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
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="border-t border-white/10 px-5 pt-16 pb-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="hero-heading text-3xl font-bold">{profile.name}</p>
          <p className="mt-2 text-sm text-zinc-400">{profile.specialization}</p>
          <p className="mt-1 text-sm text-zinc-500">{profile.location}</p>
        </div>
        <nav>
          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500">NAVIGATE</p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#experience">Experience</a></li>
            <li><a className="hover:text-white" href="#projects">Projects</a></li>
            <li><a className="hover:text-white" href="#certifications">Certifications</a></li>
          </ul>
        </nav>
        <div>
          <p className="mb-3 text-xs font-semibold tracking-widest text-zinc-500">REACH OUT</p>
          <div className="flex items-center gap-3 text-sm text-zinc-300">
            <span>{profile.social.email}</span>
            <button onClick={copyEmail} className="rounded-full border border-white/15 px-3 py-1 text-xs hover:border-fuchsia-400">
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <p className="mt-2 text-sm text-zinc-300">{profile.social.phone}</p>
          <div className="mt-5">
            <SocialLinks social={profile.social} />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-between gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500">
        <span>© {year} {profile.name}</span>
        <span>Built with React, TypeScript, Vite and Tailwind</span>
      </div>
    </footer>
  );
}
