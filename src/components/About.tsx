const pillars = [
  {
    title: 'Systems thinking',
    copy: 'I map constraints, define north stars, and keep interfaces lean. Feedback loops beat big bets.',
  },
  {
    title: 'Hands-on delivery',
    copy: 'I prototype quickly, validate with users, and harden for production with telemetry and guardrails.',
  },
  {
    title: 'Calm communication',
    copy: 'I write more than I meet. Clear specs, async updates, and crisp incident notes keep teams aligned.',
  },
]

const stack = ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Node', 'Postgres', 'Supabase', 'AWS', 'Figma', 'Framer']

export function About() {
  return (
    <section id="about" className="layout-shell py-14 md:py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="section-title">About</p>
          <h2 className="text-3xl font-semibold text-white">Calm, practical, product-focused.</h2>
          <p className="text-slate-300">
            I work end-to-end: shaping strategy, designing interactions, and shipping production code. I like crisp
            defaults, meaningful instrumentation, and docs that outlive meetings.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid max-w-xl flex-1 grid-cols-1 gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <article key={item.title} className="card-surface gradient-border rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.copy}</p>
            </article>
          ))}
          <article className="card-surface gradient-border rounded-2xl p-5 md:col-span-2">
            <h3 className="text-lg font-semibold text-white">Currently</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Prototyping a design token handoff tool that syncs with Tailwind presets.</li>
              <li>• Helping a small team harden their onboarding and reduce time-to-value.</li>
              <li>• Writing up incident reviews and playbooks for calmer releases.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
