import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, Zap, Target, Heart } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const stats = [
  { label: 'Projects Built', value: '4+', icon: Code2, color: 'text-accent' },
  { label: 'Certifications', value: '7', icon: Award, color: 'text-accent-warm' },
  { label: 'Years Learning', value: '3+', icon: Zap, color: 'text-accent-cool' },
  { label: 'Passion Level', value: '∞', icon: Heart, color: 'text-red-500' },
];

const highlights = [
  {
    title: 'Problem Solver',
    description: 'I love breaking down complex problems into manageable pieces and building elegant solutions.',
    icon: Target,
    color: 'text-accent',
  },
  {
    title: 'Continuous Learner',
    description: 'Currently mastering React Native, Swift, and advanced data visualization techniques.',
    icon: GraduationCap,
    color: 'text-accent-warm',
  },
  {
    title: 'Code Quality',
    description: 'Writing clean, maintainable code with proper architecture and testing practices.',
    icon: Code2,
    color: 'text-accent-cool',
  },
];

export default function AboutSection() {
  const { profile, education } = usePortfolio();

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-label">01 · ABOUT</span>
        <h2 className="section-title-gradient">About Me</h2>
        <p className="section-description">
          Get to know the person behind the code — my journey, values, and what drives me to build.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="grid gap-12 lg:grid-cols-[1fr_1.5fr]"
      >
        <div className="space-y-8">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 via-bg-card to-accent-warm/20 p-[1px]"
            >
              <div className="rounded-[2rem] bg-bg-card p-8 md:p-12">
                <div className="space-y-6 text-fg-muted leading-relaxed">
                  <p>{profile.bio.split('. ').slice(0, 2).join('. ')}.</p>
                  <p>{profile.bio.split('. ').slice(2).join('. ')}.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent-warm p-6 shadow-lg shadow-accent/30"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-bg">{profile.yearsOfExperience.split(' ')[0]}+</div>
                <div className="text-xs font-mono tracking-widest uppercase text-bg/80">Years Experience</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                className="rounded-2xl bg-bg-card border border-border p-5 text-center hover:border-border-hover transition-all"
              >
                <stat.icon size={28} className={`mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-fg">{stat.value}</div>
                <div className="text-xs font-mono tracking-widest uppercase text-fg-subtle">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-fg mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-accent" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 rounded-xl bg-bg-card border border-border p-4 hover:border-border-hover transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-fg">{edu.degree}</p>
                    <p className="text-sm text-fg-muted">{edu.school}</p>
                    <p className="text-xs font-mono text-fg-subtle mt-1">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-fg mb-6">What I Stand For</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="group rounded-2xl bg-bg-card border border-border p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <highlight.icon size={24} className={highlight.color} />
                  </div>
                  <h4 className="text-lg font-semibold text-fg mb-2">{highlight.title}</h4>
                  <p className="text-fg-muted text-sm leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-accent/10 via-bg-card to-accent-warm/10 border border-border p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <Code2 size={28} className="text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-fg mb-2">Currently Exploring</h4>
                <p className="text-fg-muted leading-relaxed mb-4">
                  I'm currently diving deep into React Native with Expo for cross-platform mobile development,
                  learning Swift for native iOS apps, and experimenting with advanced data visualization
                  using D3.js and Three.js for immersive dashboard experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">React Native</span>
                  <span className="rounded-full bg-accent-warm/10 px-3 py-1 text-sm font-medium text-accent-warm">Swift</span>
                  <span className="rounded-full bg-accent-cool/10 px-3 py-1 text-sm font-medium text-accent-cool">D3.js</span>
                  <span className="rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">Three.js</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
