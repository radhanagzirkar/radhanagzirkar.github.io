import { projects } from '../data/projects'

const typeLabel: Record<string, string> = {
  product: 'Product',
  experiment: 'Experiment',
  opensource: 'Open Source',
}

export function Projects() {
  return (
    <section id="projects" className="layout-shell py-14 md:py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="section-title">Work</p>
          <h2 className="text-3xl font-semibold text-white">Selected projects</h2>
          <p className="text-slate-300">Shipped product work, experiments, and public tooling.</p>
        </div>
        <a
          href="https://github.com/radhanagzirkar"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/35"
        >
          View GitHub
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group card-surface gradient-border h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/25"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                {typeLabel[project.type]}
              </span>
              <div className="text-xs text-slate-400">{project.stack.join(' • ')}</div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-brand-200">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-slate-50 transition group-hover:border-brand-300/60 group-hover:text-white"
              >
                Open
                <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
