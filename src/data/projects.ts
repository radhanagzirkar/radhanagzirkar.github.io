export type Project = {
  title: string
  summary: string
  stack: string[]
  link: string
  type: 'product' | 'experiment' | 'opensource'
}

export const projects: Project[] = [
  {
    title: 'Ops Insight Dashboard',
    summary:
      'A real-time command center for internal ops with live metrics, alert routing, and auto-remediation playbooks.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    link: 'https://github.com/radhanagzirkar',
    type: 'product',
  },
  {
    title: 'Personalized Learning Paths',
    summary:
      'Recommendation engine that sequences micro-lessons based on skills graph and weekly focus, improving completion by 23%.',
    stack: ['Next.js', 'Prisma', 'Postgres', 'Stripe'],
    link: 'https://github.com/radhanagzirkar',
    type: 'product',
  },
  {
    title: 'Design Token Playground',
    summary:
      'A Figma-to-code bridge to preview tokens live, export Tailwind presets, and keep UI libraries consistent.',
    stack: ['Vite', 'Tailwind', 'Figma API'],
    link: 'https://github.com/radhanagzirkar',
    type: 'opensource',
  },
  {
    title: 'Systems Mindset Notes',
    summary:
      'Long-form notes on decision frameworks, incident reviews, and how to keep teams shipping calmly.',
    stack: ['MDX', 'React', 'Content'],
    link: 'https://github.com/radhanagzirkar',
    type: 'experiment',
  },
]
