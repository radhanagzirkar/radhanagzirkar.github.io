export function Footer() {
  return (
    <footer className="layout-shell py-8 text-sm text-slate-400">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Radha Nagzirkar. Built with care.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/radhanagzirkar"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:radha.nagzirkar@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
