import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';

export default function ServicesSection() {
  const { services } = usePortfolio();
  return (
    <section className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="03 · SERVICES" title="What I can build" />
      <ol className="divide-y divide-white/10">
        {services.map((s, i) => (
          <li key={s.title} className="grid gap-3 py-6 md:grid-cols-[80px_1fr_2fr] md:items-baseline">
            <span className="font-mono text-2xl text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="text-lg font-semibold text-zinc-100">{s.title}</h3>
            <p className="text-zinc-400">{s.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
