import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePortfolio } from '../hooks/usePortfolio';
import { useState, useCallback, useEffect } from 'react';

export default function TestimonialsSection() {
  const { testimonials } = usePortfolio();
  if (testimonials.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section id="testimonials" className="section-container">
      <div className="section-header">
        <span className="section-label">07 · TESTIMONIALS</span>
        <h2 className="section-title-gradient">What People Say</h2>
        <p className="section-description">
          Feedback from colleagues, mentors, and collaborators I've had the pleasure of working with.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="relative">
          <Quote size={64} className="absolute -top-8 -left-4 text-accent/10" />

          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="flex gap-8"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={() => { prev(); setIsAutoPlaying(false); }}
              className="p-3 rounded-full bg-bg-card border border-border text-fg-muted hover:text-fg hover:border-border-hover hover:bg-bg-elevated transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-fg-subtle hover:bg-fg-muted'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="p-3 rounded-full bg-bg-card border border-border text-fg-muted hover:text-fg hover:border-border-hover hover:bg-bg-elevated transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-fg-muted">
            {testimonials.length} testimonial{'s' : ''} · Click dots or use arrows to navigate · Auto-play pauses on interaction
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: { quote: string; name: string; role: string; avatarColor: string } }) {
  return (
    <div className="w-full min-w-0 rounded-2xl bg-bg-card border border-border p-8">
      <div className="flex gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-amber-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-xl md:text-2xl text-fg leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white" style={{ backgroundColor: testimonial.avatarColor }}>
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-fg">{testimonial.name}</p>
          <p className="text-sm text-fg-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
