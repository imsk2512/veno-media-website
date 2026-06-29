import { Palette, Gauge, MessagesSquare, Timer, Gem, Handshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: Palette,
    title: 'Creative Thinking',
    text: 'Original ideas and standout design that set your brand apart from the noise.',
  },
  {
    icon: Gauge,
    title: 'Performance Driven',
    text: 'Decisions guided by data and tied directly to your business outcomes.',
  },
  {
    icon: MessagesSquare,
    title: 'Transparent Communication',
    text: 'Clear reporting and proactive updates at every stage of the partnership.',
  },
  {
    icon: Timer,
    title: 'Fast Turnaround',
    text: 'Efficient workflows that keep your campaigns moving without delays.',
  },
  {
    icon: Gem,
    title: 'Premium Quality',
    text: 'A meticulous standard of craft applied to every deliverable we produce.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    text: 'We invest in your growth as a dedicated extension of your team.',
  },
]

export function WhyVeno() {
  return (
    <section id="why" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why Veno Media
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Built for Brands That Want to Win
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <reason.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
