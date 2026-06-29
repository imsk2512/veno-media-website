import {
  Share2,
  Clapperboard,
  PenTool,
  Users,
  Compass,
  Megaphone,
  Monitor,
  Search,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Share2,
    title: 'Social Media Management',
    text: 'Full-funnel content calendars, community growth, and daily channel management.',
  },
  {
    icon: Clapperboard,
    title: 'Video Editing',
    text: 'Cinematic short-form and long-form edits crafted to stop the scroll.',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    text: 'On-brand photography, graphics, and copy produced at scale.',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    text: 'Vetted creator partnerships that put your brand in front of the right audience.',
  },
  {
    icon: Compass,
    title: 'Brand Strategy',
    text: 'Positioning, messaging, and roadmaps that give your brand a clear direction.',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    text: 'Meta, Google, and TikTok campaigns optimized for profitable returns.',
  },
  {
    icon: Monitor,
    title: 'Website Design',
    text: 'Conversion-focused websites with premium design and fast performance.',
  },
  {
    icon: Search,
    title: 'SEO',
    text: 'Technical and content SEO that earns durable, compounding organic traffic.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    text: 'Data-driven campaigns engineered around your core growth metrics.',
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    text: 'Logos, visual systems, and guidelines that make your brand unforgettable.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            A Complete Marketing System Under One Roof
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Specialized services that work together to build brands and accelerate growth.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{service.text}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-accent"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
