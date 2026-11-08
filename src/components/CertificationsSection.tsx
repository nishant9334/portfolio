import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Star } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';

export default function CertificationsSection() {
  const { certifications } = usePortfolio();

  const sortedCerts = [...certifications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="certifications" className="section-container">
      <div className="section-header">
        <span className="section-label">06 · CERTIFICATIONS</span>
        <h2 className="section-title-gradient">Certifications</h2>
        <p className="section-description">
          Professional certifications and completed courses demonstrating continuous learning and expertise.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedCerts.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl bg-bg-card border border-border p-6 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Star size={20} className="text-accent" />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award size={28} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono tracking-widest uppercase text-accent mb-1">{cert.issuer}</p>
                  <h3 className="font-bold text-fg group-hover:text-accent transition-colors mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-fg-muted">
                    <Calendar size={14} />
                    <span>{formatDate(cert.date)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-fg-muted">
                  <CheckCircle size={12} className="text-success" />
                  <span>Verified</span>
                </div>
                {cert.issuer.toLowerCase().includes('aws') || cert.issuer.toLowerCase().includes('cisco') || cert.issuer.toLowerCase().includes('deloitte') || cert.issuer.toLowerCase().includes('tata') ? (
                  <a
                    href="#"
                    className="btn-ghost text-xs px-3 py-1.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-r from-accent/10 to-accent-warm/10 border border-border p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-fg mb-2">Always Learning</h3>
          <p className="text-fg-muted max-w-xl mx-auto mb-6">
            Currently pursuing advanced certifications in cloud architecture, machine learning, and mobile development.
            Stay tuned for new additions!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              AWS Certifications
            </a>
            <a href="https://www.cisco.com/c/en/us/training-events/training-certifications.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Cisco Certifications
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
