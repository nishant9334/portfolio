import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';

// Hidden automatically when there are no testimonials, per the guide's advice
// against placeholder quotes.
export default function TestimonialsSection() {
  const { testimonials } = usePortfolio();
  if (testimonials.length === 0) return null;

  const loop = [...testimonials, ...testimonials];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading eyebrow="07 · TESTIMONIALS" title="What people say" />
      </div>
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex gap-6 px-5">
          {loop.map((t, i) => (
            <figure key={`${t.id}-${i}`} className="w-80 shrink-0 rounded-2xl border border-white/10 bg-[#141414] p-6">
              <blockquote className="italic text-zinc-300">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-zinc-100">{t.name}</span>
                  <span className="block text-xs text-zinc-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
