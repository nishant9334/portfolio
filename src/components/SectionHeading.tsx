import { motion } from 'framer-motion';

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  const label = eyebrow.replace(/^\d+\s*[·\-\|]\s*/, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'left' ? 'text-left' : 'text-center'} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-mono font-medium text-accent mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        /{label.charAt(0).toLowerCase() + label.slice(1)}
      </span>
      <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-fg">
        {title.split(' ').map((word, i) =>
          i === title.split(' ').length - 1 && title.split(' ').length > 1
            ? <span key={word} className="text-gradient block">{word}</span>
            : <span key={word} className="block">{word}</span>
        )}
      </h2>
      {description && (
        <p className="mt-6 text-lg md:text-xl text-fg-muted max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
