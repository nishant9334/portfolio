import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { projects } = usePortfolio();
  // Highlighted project first.
  const sorted = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="05 · PROJECTS" title="Selected work" />
      <div className="grid gap-6 md:grid-cols-2">
        {sorted.map((p, i) => (
          <div key={p.id} className={p.highlight ? 'md:col-span-2' : ''}>
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}