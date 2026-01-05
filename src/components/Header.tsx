const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="layout-shell flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold text-slate-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/20 text-brand-200 ring-1 ring-white/10">
            RN
          </span>
          <div className="leading-tight">
            <div>Radha Nagzirkar</div>
            <p className="text-xs font-normal text-slate-400">Product Engineer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <a
            href="mailto:radha.nagzirkar@gmail.com"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-slate-100 hover:border-white/30 hover:text-white md:inline-flex"
          >
            Say hello
          </a>
          <a
            href="https://github.com/radhanagzirkar"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-4 py-2 font-medium text-slate-950 shadow-md shadow-brand-500/30 transition hover:from-brand-400 hover:to-brand-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
