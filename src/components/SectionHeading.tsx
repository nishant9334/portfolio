export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  // "01 · ABOUT" becomes "/About"
  const label = eyebrow.replace(/^\d+\s*·\s*/, '');
  return (
    <div className="mb-10">
      <p className="font-mono text-xs tracking-widest text-fuchsia-400">/{label.charAt(0) + label.slice(1).toLowerCase()}</p>
      <h2 className="mt-2 text-3xl font-semibold text-zinc-100 md:text-4xl">{title}</h2>
    </div>
  );
}