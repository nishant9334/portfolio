import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, BarChart3, Layers, Zap, Sparkles } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

const serviceIcons: Record<string, typeof Code> = {
  'Full Stack Web Development': Code,
  'Android App Development': Smartphone,
  'Mobile Apps': Globe,
  'Data Analysis and Dashboards': Database,
};

export default function ServicesSection() {
  const { services } = usePortfolio();

  const enhancedServices = services.map((service, index) => ({
    ...service,
    icon: serviceIcons[service.title] || Layers,
    features: getServiceFeatures(service.title),
    color: getServiceColor(index),
  }));

  return (
    <section id="services" className="section-container">
      <div className="section-header">
        <span className="section-label">03 · SERVICES</span>
        <h2 className="section-title-gradient">What I Build</h2>
        <p className="section-description">
          End-to-end development services — from concept to deployment, I handle the full lifecycle.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {enhancedServices.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl bg-bg-card border border-border p-6 md:p-8 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-warm/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest uppercase text-fg-subtle">
                  0{index + 1}
                </span>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color.bg} group-hover:scale-110 transition-transform`}>
                  <service.icon size={24} className={service.color.icon} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-fg group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="mt-3 text-fg-muted leading-relaxed">{service.description}</p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="text-xs font-mono tracking-widest uppercase text-fg-subtle mb-3">Key Capabilities</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + featureIndex * 0.05, duration: 0.3 }}
                      className="flex items-center gap-2 text-sm text-fg-muted group-hover:text-fg transition-colors"
                    >
                      <Zap size={14} className={service.color.icon} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="pt-4"
              >
                <button className="btn-ghost w-full justify-start group">
                  Learn More
                  <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 rounded-2xl bg-gradient-to-r from-accent/10 to-accent-warm/10 border border-border p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-fg mb-2">Need Something Custom?</h3>
        <p className="text-fg-muted max-w-xl mx-auto mb-6">
          Have a unique project in mind? Let's discuss how I can bring your vision to life.
        </p>
        <a href="#contact" className="btn-primary inline-flex">
          Start a Project
        </a>
      </motion.div>
    </section>
  );
}

function getServiceFeatures(title: string): string[] {
  const features: Record<string, string[]> = {
    'Full Stack Web Development': [
      'React/Next.js Frontend',
      'REST & GraphQL APIs',
      'Database Design',
      'Authentication & Auth',
      'CI/CD Pipelines',
      'Cloud Deployment',
    ],
    'Android App Development': [
      'Jetpack Compose UI',
      'Room Database',
      'MVVM Architecture',
      'Offline-First Design',
      'Material Design 3',
      'Play Store Publishing',
    ],
    'Mobile Apps': [
      'React Native (Expo)',
      'Cross-Platform UI',
      'Native Module Bridge',
      'Push Notifications',
      'App Store Deployment',
      'OTA Updates',
    ],
    'Data Analysis and Dashboards': [
      'Python & Pandas',
      'Interactive Visualizations',
      'Statistical Analysis',
      'Automated Reports',
      'Real-time Dashboards',
      'ML Integration',
    ],
  };
  return features[title] || ['Custom Development', 'Clean Architecture', 'Testing', 'Documentation', 'Maintenance', 'Support'];
}

function getServiceColor(index: number) {
  const colors = [
    { bg: 'bg-accent/10', icon: 'text-accent' },
    { bg: 'bg-accent-warm/10', icon: 'text-accent-warm' },
    { bg: 'bg-accent-cool/10', icon: 'text-accent-cool' },
    { bg: 'bg-success/10', icon: 'text-success' },
  ];
  return colors[index % colors.length];
}
