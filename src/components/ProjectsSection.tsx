import { usePortfolio } from '../hooks/usePortfolio';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const { projects } = usePortfolio();
  // Highlighted project first.
  const sorted = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight));
  return (
    <section id="projects" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHeading eyebrow="05 · PROJECTS" title="Selected work" />
      <div>
        {sorted.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
