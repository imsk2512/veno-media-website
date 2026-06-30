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
    <section id="process" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(25,198,212,0.12),transparent_40%)]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 sm:text-sm">
              Our Process
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:mt-6 sm:text-5xl">
              A Simple Process.
              <span className="text-gradient"> Powerful Results.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-relaxed">
              From strategy to execution, every step is designed to deliver measurable growth and long-term brand success.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <Reveal key={step.number} delay={index * 80}>
                <div className="group relative h-full rounded-3xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-soft sm:p-6 lg:hover:-translate-y-2">
                  <div className="mb-5 flex items-center justify-between sm:mb-6">
                    <span className="text-sm font-semibold text-muted-foreground">{step.number}</span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-cyan-600">{step.title}</p>

                  <h3 className="mt-3 text-lg font-semibold leading-tight text-foreground sm:text-xl">
                    {step.heading}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-4">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={420}>
          <div className="mt-12 rounded-3xl border border-border bg-white p-6 text-center shadow-sm sm:mt-14 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
              Ready to grow your brand?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Let&apos;s turn your vision into measurable business growth with creative strategy and performance-driven execution.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-110 sm:w-auto"
            >
              Start Your Project →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}