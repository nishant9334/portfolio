import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, TrendingUp, Target, Database, Code, Smartphone, Server, Globe } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const categoryIcons: Record<string, typeof Code> = {
  Languages: Code,
  'Data & Analytics': Database,
  'Full Stack & Mobile': Smartphone,
  Databases: Server,
  'Tools & Cloud': Globe,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Languages: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/30' },
  'Data & Analytics': { bg: 'bg-accent-cool/10', text: 'text-accent-cool', border: 'border-accent-cool/30' },
  'Full Stack & Mobile': { bg: 'bg-accent-warm/10', text: 'text-accent-warm', border: 'border-accent-warm/30' },
  Databases: { bg: 'bg-success/10', text: 'text-success', border: 'border-success/30' },
  'Tools & Cloud': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
};

export default function SkillsSection() {
  const { skills, achievements } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const allSkills = useMemo(
    () =>
      skills.categories.flatMap((cat) =>
        cat.items.map((name: string) => ({ name, category: cat.name }))
      ),
    [skills]
  );

  const filteredSkills = selectedCategory
    ? allSkills.filter((s) => s.category === selectedCategory)
    : allSkills;

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-label">04 · SKILLS</span>
        <h2 className="section-title-gradient">Skills & Expertise</h2>
        <p className="section-description">
          Technologies and tools I work with daily — constantly expanding my toolkit to build better solutions.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                !selectedCategory
                  ? 'bg-accent text-bg shadow-lg shadow-accent/30'
                  : 'bg-bg-card border border-border text-fg-muted hover:text-fg hover:border-border-hover'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Skills
            </motion.button>
            {skills.categories.map((cat) => (
              <motion.button
                key={cat.name}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat.name
                    ? `${categoryColors[cat.name]?.bg} ${categoryColors[cat.name]?.text} shadow-lg`
                    : 'bg-bg-card border border-border text-fg-muted hover:text-fg hover:border-border-hover'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory || 'all'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredSkills.map((skill, index) => {
                const Icon = categoryIcons[skill.category] ?? Code;
                return (
                  <motion.div
                    key={`${skill.category}-${skill.name}`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    className="group relative"
                  >
                    <button
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`w-full rounded-2xl bg-bg-card border border-border p-5 text-left transition-all hover:border-border-hover hover:shadow-lg ${
                        hoveredSkill === skill.name ? 'border-accent/50 shadow-accent/10' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${categoryColors[skill.category]?.bg}`}
                        >
                          <Icon size={20} className={categoryColors[skill.category]?.text} />
                        </div>
                        <div>
                          <span className="text-xs font-mono tracking-widest uppercase text-fg-subtle">
                            {skill.category}
                          </span>
                          <motion.div
                            key={String(hoveredSkill === skill.name)}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="overflow-hidden text-xs text-accent font-medium"
                          >
                            {getProficiency(skill.name)}
                          </motion.div>
                        </div>
                      </div>
                      <h4 className="font-medium text-fg group-hover:text-accent transition-colors">
                        {skill.name}
                      </h4>
                    </button>

                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute bottom-full left-0 right-0 mb-2 p-3 rounded-xl bg-bg-elevated border border-border shadow-lg z-10"
                        >
                          <div className="flex items-center gap-2 text-xs text-fg-muted">
                            <TrendingUp size={12} className="text-accent" />
                            <span>Proficiency: {getProficiency(skill.name)}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-r from-accent/10 to-accent-warm/10 border border-border p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Target size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-fg mb-4">Achievements & Recognition</h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-center gap-3 text-fg-muted"
                    >
                      <CheckCircle size={20} className="flex-shrink-0 text-accent" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

function getProficiency(skill: string): string {
  const proficiencyMap: Record<string, string> = {
    Python: 'Advanced',
    SQL: 'Advanced',
    JavaScript: 'Advanced',
    Kotlin: 'Intermediate',
    Java: 'Intermediate',
    C: 'Intermediate',
    Swift: 'Learning',
    pandas: 'Advanced',
    'Data Cleaning': 'Advanced',
    'Exploratory Data Analysis': 'Advanced',
    'Chart.js': 'Intermediate',
    Tableau: 'Intermediate',
    'React Native (Expo)': 'Intermediate',
    'Jetpack Compose': 'Intermediate',
    HTML5: 'Advanced',
    CSS3: 'Advanced',
    Flask: 'Intermediate',
    'REST APIs': 'Advanced',
    MongoDB: 'Intermediate',
    Room: 'Intermediate',
    Git: 'Advanced',
    GitHub: 'Advanced',
    Vercel: 'Advanced',
    'Android Studio': 'Advanced',
    Xcode: 'Learning',
    'Visual Studio Code': 'Advanced',
    'AWS Cloud Practitioner': 'Intermediate',
  };
  return proficiencyMap[skill] || 'Intermediate';
}
