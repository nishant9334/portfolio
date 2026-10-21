import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';

export default function ServicesSection() {
  const { services } = usePortfolio();

  return (
 <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="03 · SERVICES" title="What I can build" />
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-[#141414] p-7 transition hover:border-fuchsia-400/60"
          >
            <span className="font-mono text-sm text-fuchsia-400">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 text-xl font-semibold text-zinc-100">{s.title}</h3>
            <p className="mt-3 text-zinc-400">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}