export function Contact() {
  return (
    <section id="contact" className="layout-shell py-14 md:py-16">
      <div className="card-surface gradient-border rounded-3xl p-10 text-center">
        <p className="section-title">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Let us ship the next thing together.</h2>
        <p className="mt-3 text-slate-300">
          Whether it is a new product slice, a refactor that needs a calm hand, or a design-to-engineering bridge,
          I can help you get to clarity and launch faster.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
          <a
            href="mailto:radha.nagzirkar@gmail.com"
            className="rounded-full bg-white px-5 py-3 text-slate-950 shadow-lg shadow-brand-500/20 transition hover:-translate-y-0.5"
          >
            Email Radha
          </a>
          <a
            href="https://www.linkedin.com/in/radha-nagzirkar"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-5 py-3 text-slate-100 transition hover:border-white/35"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
