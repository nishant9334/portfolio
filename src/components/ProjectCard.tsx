import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition hover:border-fuchsia-400/60"
    >
      {project.image ? (
        <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
      ) : (
        <div className="relative flex h-40 items-end bg-gradient-to-br from-zinc-900 to-zinc-800 p-6">
          <span className="text-3xl font-semibold text-zinc-300/70">{project.title}</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-sm text-fuchsia-400">{num}</span>
          {project.highlight && (
            <span className="btn-accent rounded-full px-3 py-1 text-xs font-semibold text-white">FEATURED</span>
          )}
        </div>

        <h3 className="mt-3 text-2xl font-semibold text-zinc-100">{project.title}</h3>
        <p className="text-zinc-400">{project.subtitle}</p>
        <p className="mt-4 text-zinc-300">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
              {t}
            </span>
          ))}
        </div>

        {project.role && <p className="mt-4 text-sm text-zinc-500">Role: {project.role}</p>}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wider text-white"
            >
              LIVE PROJECT <ExternalLink size={14} />
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold tracking-wider text-zinc-200 hover:border-fuchsia-400"
            >
              SOURCE CODE <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}