const links = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#experience', label: 'EXPERIENCE' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#certifications', label: 'CERTIFICATIONS' },
  { href: '#contact', label: 'CONTACT' },
];

export default function Navbar({ shortName }: { shortName: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c0c0c]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#home" className="font-semibold tracking-wide text-zinc-200">
          {shortName}
        </a>
        <ul className="flex gap-5 overflow-x-auto text-xs tracking-widest text-zinc-400">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="whitespace-nowrap hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
