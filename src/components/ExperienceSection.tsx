import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, CheckCircle, Star } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

export default function ExperienceSection() {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-label">02 · EXPERIENCE</span>
        <h2 className="section-title-gradient">Experience</h2>
        <p className="section-description">
          My professional journey — from internships to self-directed learning, every step has shaped how I build.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent-warm/30 to-transparent" />

        <div className="pl-20 space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute left-[-20px] top-2 w-4 h-4 rounded-full bg-bg border-2 border-accent z-10 group-hover:border-accent-warm group-hover:scale-125 transition-all" />
              <div className="absolute left-[-20px] top-6 bottom-0 w-0.5 bg-border" />

              <motion.div
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-bg-card border border-border p-6 md:p-8 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Building2 size={24} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-fg">{job.role}</h3>
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-sm font-medium text-accent">{job.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-fg-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-fg-muted leading-relaxed mb-6">{job.summary}</p>

                <div className="space-y-3">
                  {job.highlights.map((highlight, highlightIndex) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + highlightIndex * 0.05, duration: 0.3 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-bg border border-border hover:border-border-hover transition-all"
                    >
                      <CheckCircle size={20} className="flex-shrink-0 text-accent mt-0.5" />
                      <p className="text-fg text-sm leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: experience.length * 0.15 + 0.2, duration: 0.5 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-accent/10 to-accent-warm/10 border border-border p-8 text-center"
        >
          <Star size={32} className="mx-auto mb-4 text-accent" />
          <h3 className="text-2xl font-bold text-fg mb-2">Always Learning</h3>
          <p className="text-fg-muted max-w-xl mx-auto mb-6">
            Currently expanding my expertise in mobile development and data visualization.
            Open to Full Stack Developer and Data Analyst roles where I can grow and contribute.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Let's Work Together
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
