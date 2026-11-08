import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Tag, ArrowUpRight } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group flex h-full flex-col overflow-hidden rounded-2xl bg-bg-card border border-border transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
    >
      <div className="relative overflow-hidden">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="relative h-56 w-full bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 flex items-center justify-center">
            <div className="text-center p-6">
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-fg mb-2">{project.title}</h3>
                <p className="text-fg-muted">{project.subtitle}</p>
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          </div>
        )}

        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <span className="font-mono text-sm text-fg-subtle bg-bg/80 backdrop-blur px-3 py-1 rounded-full">{num}</span>
          {project.highlight && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-r from-accent to-accent-warm text-bg px-3 py-1 rounded-full text-xs font-bold"
            >
              <Star size={12} className="inline mr-1" /> FEATURED
            </motion.span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.stack.slice(0, 4).map((tech) => (
            <motion.span
              key={tech}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-bg/90 backdrop-blur border border-border px-3 py-1 rounded-full text-xs font-medium text-fg"
            >
              {tech}
            </motion.span>
          ))}
          {project.stack.length > 4 && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="bg-bg/90 backdrop-blur border border-border px-3 py-1 rounded-full text-xs font-medium text-fg-muted"
            >
              +{project.stack.length - 4} more
            </motion.span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest uppercase text-fg-subtle">{getProjectCategory(project)}</span>
          {project.role && (
            <span className="text-xs font-medium px-2 py-1 rounded bg-accent/10 text-accent">{project.role}</span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-fg mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-fg-muted mb-4">{project.subtitle}</p>
        <p className="text-fg-subtle leading-relaxed mb-6 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 6).map((tech) => (
            <span key={tech} className="rounded-full bg-bg border border-border px-3 py-1 text-xs text-fg-muted hover:text-fg hover:border-border-hover transition-all">
              {tech}
            </span>
          ))}
          {project.stack.length > 6 && (
            <span className="rounded-full bg-bg border border-border px-3 py-1 text-xs text-fg-muted">
              +{project.stack.length - 6}
            </span>
          )}
        </div>

        <div className="mt-auto pt-6 border-t border-border/50">
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 sm:flex-none justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
            {project.source && (
              <motion.a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 sm:flex-none justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={16} />
                Source Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function getProjectCategory(project: Project): string {
  const stack = project.stack.map(s => s.toLowerCase()).join(' ');
  const title = project.title.toLowerCase();
  const subtitle = project.subtitle.toLowerCase();

  if (stack.includes('kotlin') || stack.includes('jetpack') || stack.includes('android') || stack.includes('swift') || stack.includes('react native')) {
    return 'Mobile';
  }
  if (stack.includes('pandas') || stack.includes('chart.js') || stack.includes('tableau') || stack.includes('data') || title.includes('dashboard') || subtitle.includes('analysis')) {
    return 'Data';
  }
  if (stack.includes('flask') || stack.includes('mongodb') || stack.includes('rest') || (stack.includes('react') && stack.includes('python'))) {
    return 'Full Stack';
  }
  if (stack.includes('react') || stack.includes('html') || stack.includes('javascript') || stack.includes('css') || stack.includes('vercel')) {
    return 'Web';
  }
  return 'Web';
}
