import { Github, Linkedin, Instagram, Mail, Phone, Globe } from 'lucide-react';
import type { Social } from '../types/portfolio';

// Empty social fields are hidden, so no dead links appear.
export default function SocialLinks({ social }: { social: Social }) {
  const items = [
    { href: social.github, label: 'GitHub', Icon: Github },
    { href: social.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: social.instagram, label: 'Instagram', Icon: Instagram },
    { href: social.email ? `mailto:${social.email}` : '', label: 'Email', Icon: Mail },
    { href: social.phone ? `tel:${social.phone.replace(/\s/g, '')}` : '', label: 'Phone', Icon: Phone },
    { href: social.website, label: 'Website', Icon: Globe },
  ].filter((i) => i.href);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-200 transition hover:border-fuchsia-400 hover:text-white"
        >
          <Icon size={16} />
          {label}
        </a>
      ))}
    </div>
  );
}
