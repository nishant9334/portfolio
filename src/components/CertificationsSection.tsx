import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';

export default function CertificationsSection() {
  const { certifications } = usePortfolio();
  return (
    <section id="certifications" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="06 · CERTIFICATIONS" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-[#141414] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400">{c.issuer}</p>
            <h3 className="mt-1 font-semibold text-zinc-100">{c.title}</h3>
            <p className="mt-1 text-sm text-zinc-500">{c.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
