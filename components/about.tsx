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
    <section
      id="about"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
                About Veno Media
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                More Than an Agency.
                <br className="hidden sm:block" />
                We&apos;re Your Growth Partner.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
                Veno Media helps ambitious brands grow through creativity,
                strategy, and measurable marketing performance. We don&apos;t
                just create content—we build complete marketing systems that
                generate real business growth.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4 sm:space-y-5">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:border-accent/40 hover:shadow-lg sm:p-6 lg:hover:-translate-y-1">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-primary transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                    <pillar.icon className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                      {pillar.text}
                    </p>
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