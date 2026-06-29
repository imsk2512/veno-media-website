import { PhoneCall, Lightbulb, Clapperboard, Rocket, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    n: '01',
    icon: PhoneCall,
    title: 'Discovery Call',
    text: 'We learn your brand, goals, and challenges to align on what success looks like.',
  },
  {
    n: '02',
    icon: Lightbulb,
    title: 'Strategy',
    text: 'A tailored marketing roadmap built around your audience and objectives.',
  },
  {
    n: '03',
    icon: Clapperboard,
    title: 'Content Production',
    text: 'Premium creative and content crafted to bring the strategy to life.',
  },
  {
    n: '04',
    icon: Rocket,
    title: 'Campaign Launch',
    text: 'We deploy across the right channels with precision and consistency.',
  },
  {
    n: '05',
    icon: TrendingUp,
    title: 'Growth Optimization',
    text: 'Continuous testing and reporting to compound results over time.',
  },
]

export function Process() {
  return (
    <section className="relative scroll-mt-24 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            How We Work
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A proven five-step framework that turns ideas into measurable growth.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent via-secondary to-transparent lg:left-0 lg:top-12 lg:h-px lg:w-full lg:bg-gradient-to-r"
          />
          <ol className="grid gap-8 lg:grid-cols-5">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 90} className="relative pl-16 lg:pl-0">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="absolute left-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow lg:relative lg:mb-5">
                    <step.icon className="h-5 w-5" />
                  </span>
                </div>
                <span className="font-mono text-sm font-semibold text-accent">{step.n}</span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
