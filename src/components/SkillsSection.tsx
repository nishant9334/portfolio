import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';

export default function SkillsSection() {
  const { skills, achievements } = usePortfolio();
  return (
    <section id="skills" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="04 · SKILLS" title="Skills and achievements" />
      <div className="grid gap-5 md:grid-cols-3">
        {skills.categories.map((c) => (
          <div key={c.name} className="rounded-2xl border border-white/10 bg-[#141414] p-6">
            <h3 className="font-semibold text-zinc-100">{c.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.items.map((item) => (
                <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {achievements.length > 0 && (
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#141414] p-6">
          <h3 className="font-semibold text-zinc-100">Achievements</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-300">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
