const stats = [
  { label: 'Products shipped', value: '15+' },
  { label: 'Experiments run', value: '120+' },
  { label: 'Team size led', value: '8' },
]

export function Hero() {
  return (
    <section id="top" className="layout-shell relative overflow-hidden pb-16 pt-14 md:pb-20">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-500/15 via-brand-500/5 to-transparent blur-3xl" />
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-6">
          <div className="pill w-fit bg-white/10 text-brand-100">Product-minded engineer</div>
          <h1 className="text-4xl font-semibold leading-snug text-white sm:text-5xl">
            I design, build, and ship calm software that teams love to use.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            From zero-to-one to incremental polish, I bridge product strategy, interaction design, and
            hands-on engineering. I care about clarity, latency, and reducing cognitive load.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-brand-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/35"
            >
              Book a call
            </a>
            <div className="text-sm text-slate-400">
              Available for product engineering roles and advisory.
            </div>
          </div>
        </div>

        <div className="card-surface gradient-border relative max-w-sm rounded-2xl p-6 text-slate-100">
          <p className="text-sm text-slate-300">Current focus</p>
          <h3 className="mt-2 text-xl font-semibold">Building resilient product loops</h3>
          <p className="mt-3 text-sm text-slate-300">
            Crafting onboarding that feels inevitable, tightening activation, and instrumenting outcomes so teams can learn faster.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center">
                <div className="text-lg font-semibold text-white">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
