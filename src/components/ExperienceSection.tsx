import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';

export default function ExperienceSection() {
  const { experience } = usePortfolio();
  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="02 · EXPERIENCE" title="Experience and learning" />
      <ol className="divide-y divide-white/10">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="grid gap-4 py-8 md:grid-cols-[80px_1fr]">
            <span className="font-mono text-3xl text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="text-xl font-semibold text-zinc-100">
                {job.role} <span className="text-zinc-500">· {job.company}</span>
              </h3>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-fuchsia-400/40 px-3 py-1 font-mono text-fuchsia-300">{job.period}</span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-zinc-400">{job.location}</span>
              </div>
              <p className="mt-4 text-zinc-400">{job.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-300">
                {job.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
