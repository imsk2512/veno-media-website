import { Search, Lightbulb, Clapperboard, Rocket, BarChart3 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    heading: 'Understand Your Brand',
    description:
      'We study your business, audience, goals, and competitors to find the right growth direction.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    heading: 'Build the Growth Plan',
    description:
      'We create a clear roadmap for content, branding, influencer campaigns, and performance marketing.',
  },
  {
    number: '03',
    icon: Clapperboard,
    title: 'Create',
    heading: 'Content That Converts',
    description:
      'We produce premium creatives, reels, videos, and campaign assets designed to capture attention.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    heading: 'Execute Across Channels',
    description:
      'We launch campaigns on the right platforms with clean execution and consistent optimization.',
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Scale',
    heading: 'Measure. Improve. Grow.',
    description:
      'We track performance, refine campaigns, and scale what works to drive measurable business results.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(25,198,212,0.12),transparent_40%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              Our Process
            </span>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A Simple Process.
              <span className="text-gradient"> Powerful Results.</span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From strategy to execution, every step is designed to deliver measurable growth and long-term brand success.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <Reveal key={step.number} delay={index * 80}>
                <div className="group relative h-full rounded-3xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-soft">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-muted-foreground">{step.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-cyan-600">{step.title}</p>

                  <h3 className="mt-3 text-xl font-semibold text-foreground">
                    {step.heading}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={420}>
          <div className="mt-14 rounded-3xl border border-border bg-white p-8 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-foreground">
              Ready to grow your brand?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Let&apos;s turn your vision into measurable business growth with creative strategy and performance-driven execution.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-110"
            >
              Start Your Project →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}