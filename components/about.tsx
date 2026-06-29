import { Target, Layers, LineChart } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: Target,
    title: 'Strategy First',
    text: 'Every campaign starts with sharp positioning and clear, measurable objectives.',
  },
  {
    icon: Layers,
    title: 'Creative That Converts',
    text: 'Scroll-stopping content engineered to build brand equity and drive action.',
  },
  {
    icon: LineChart,
    title: 'Measurable Growth',
    text: 'Transparent reporting tied to the metrics that move your business forward.',
  },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                About Veno Media
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                More Than an Agency. We&apos;re Your Growth Partner.
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                Veno Media helps ambitious brands grow through creativity, strategy, and measurable
                marketing performance. We don&apos;t just create content — we build complete
                marketing systems that generate real business growth.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{pillar.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
