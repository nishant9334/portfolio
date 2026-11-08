import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import type { Social } from '../types/portfolio';

const socialItems = [
  { key: 'github', label: 'GitHub', Icon: Github, href: (s: Social) => s.github },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin, href: (s: Social) => s.linkedin },
  { key: 'instagram', label: 'Instagram', Icon: Instagram, href: (s: Social) => s.instagram },
  { key: 'email', label: 'Email', Icon: Mail, href: (s: Social) => s.email ? `mailto:${s.email}` : '' },
  { key: 'phone', label: 'Phone', Icon: Phone, href: (s: Social) => s.phone ? `tel:${s.phone.replace(/\s/g, '')}` : '' },
  { key: 'website', label: 'Website', Icon: Globe, href: (s: Social) => s.website },
] as const;

interface Props {
  social: Social;
  variant?: 'default' | 'compact' | 'footer';
}

export default function SocialLinks({ social, variant = 'default' }: Props) {
  const items = socialItems
    .map(item => ({ ...item, href: item.href(social) }))
    .filter(item => item.href);

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        {items.map((item, index) => (
          <motion.a
            key={item.key}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-bg-card border border-border text-fg-muted hover:text-accent hover:border-accent/50 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <item.Icon size={20} />
          </motion.a>
        ))}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <motion.a
            key={item.key}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-bg-card border border-border px-4 py-2.5 text-sm text-fg-muted hover:text-accent hover:border-accent/50 hover:bg-bg-elevated transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <item.Icon size={18} />
            <span>{item.label}</span>
          </motion.a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <motion.a
          key={item.key}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-bg-card border border-border px-4 py-2.5 text-sm text-fg-muted hover:text-accent hover:border-accent/50 hover:bg-bg-elevated transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <item.Icon size={18} />
          <span>{item.label}</span>
          {item.href.startsWith('http') && <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
        </motion.a>
      ))}
    </div>
  );
}
