import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  const { profile, education } = usePortfolio();
  return (
    <section id="about" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="01 · ABOUT" title="A bit about me" />
      <p className="text-lg leading-relaxed text-zinc-300" style={{ wordBreak: 'normal', overflowWrap: 'normal' }}>
        {profile.bio}
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="rounded-2xl border border-white/10 bg-[#141414] p-5">
            <h3 className="font-semibold text-zinc-100">{e.school}</h3>
            <p className="text-sm text-zinc-400">{e.degree}</p>
            <p className="mt-2 font-mono text-xs text-fuchsia-300">{e.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
