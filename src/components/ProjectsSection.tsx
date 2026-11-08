import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, Tag, Search, Filter } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import ProjectCard from './ProjectCard';

const allTags = ['All', 'Web', 'Mobile', 'Data', 'Full Stack'];

export default function ProjectsSection() {
  const { projects } = usePortfolio();
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return sortedProjects.filter(project => {
      const matchesFilter = filter === 'All' || getProjectCategory(project) === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [sortedProjects, filter, searchQuery]);

  const categories = useMemo(() => {
    const cats = new Set(sortedProjects.map(getProjectCategory));
    return ['All', ...Array.from(cats)];
  }, [sortedProjects]);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-label">05 · PROJECTS</span>
        <h2 className="section-title-gradient">Selected Work</h2>
        <p className="section-description">
          A collection of projects showcasing my journey across web, mobile, and data domains.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-fg-subtle" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-bg-card border border-border px-10 py-3 text-sm text-fg placeholder-fg-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-accent text-bg shadow-lg shadow-accent/30'
                    : 'bg-bg-card border border-border text-fg-muted hover:text-fg hover:border-border-hover'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={project.highlight ? 'md:col-span-2' : ''}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full text-center py-16 rounded-2xl bg-bg-card border border-border"
              >
                <Search size={48} className="mx-auto mb-4 text-fg-subtle" />
                <h3 className="text-xl font-semibold text-fg mb-2">No projects found</h3>
                <p className="text-fg-muted">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center pt-8"
          >
            <p className="text-fg-muted">
              Showing {filteredProjects.length} of {sortedProjects.length} projects
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

function getProjectCategory(project: { stack: string[]; title: string; subtitle: string }): string {
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
