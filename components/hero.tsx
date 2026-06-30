import Image from 'next/image'
import {
  ArrowUpRight,
  Play,
  Sparkles,
  CheckCircle2,
  Users,
  TrendingUp,
  Star,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const marqueeItems = [
  'Performance Ads',
  'Content Production',
  'Creator Campaigns',
  'Lead Generation',
  'Influencer Marketing',
  'Video Editing',
  'Brand Strategy',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,rgba(25,198,212,0.16),transparent_38%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                Premium Creative Growth Agency
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                We Turn Attention Into{' '}
                <span className="text-gradient">Revenue</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We help ambitious brands grow through branding, influencer marketing,
                premium content, and performance-driven campaigns.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-7 grid gap-3 text-sm font-medium text-muted-foreground sm:grid-cols-3">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Influencer Campaigns
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Video Production
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Social Growth
                </span>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glow hover:brightness-110"
                >
                  Let's Build Your Brand
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-muted"
                >
                  <Play className="h-4 w-4 text-accent" />
                  View Our Work
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220} className="relative">
            <div className="relative">
              <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(25,198,212,0.22),transparent_60%)] blur-2xl" />

              <div className="overflow-hidden rounded-[1.7rem] border border-border bg-primary shadow-soft">
                <Image
                  src="/hero-dashboard.png"
                  alt="Veno Media campaign performance dashboard"
                  width={1000}
                  height={780}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -left-8 bottom-12 hidden rounded-2xl bg-white px-5 py-4 shadow-soft sm:block">
                <Users className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-semibold text-primary">250+</p>
                <p className="text-sm text-muted-foreground">Campaigns Delivered</p>
              </div>

              <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-white px-5 py-4 shadow-soft sm:block">
                <TrendingUp className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-semibold text-primary">120M+</p>
                <p className="text-sm text-muted-foreground">Views Generated</p>
              </div>

              <div className="absolute -right-4 bottom-8 hidden rounded-2xl bg-white px-5 py-4 shadow-soft sm:block">
                <Star className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-semibold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Client Retention</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-border py-5">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-medium text-muted-foreground">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}