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
    <section id="top" className="relative overflow-hidden pt-28 pb-12 sm:pt-32 lg:pt-40 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,rgba(25,198,212,0.16),transparent_38%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm sm:px-4 sm:py-2 sm:text-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                Premium Creative Growth Agency
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                We Turn Attention Into{' '}
                <span className="text-gradient">Revenue</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-relaxed">
                We help ambitious brands grow through branding, influencer marketing,
                premium content, and performance-driven campaigns.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-6 grid grid-cols-1 gap-3 text-sm font-medium text-muted-foreground sm:grid-cols-3">
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:brightness-110 sm:w-auto"
                >
                  Let&apos;s Build Your Brand
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-muted sm:w-auto"
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

              <div className="overflow-hidden rounded-3xl border border-border bg-primary shadow-soft">
                <Image
                  src="/hero-dashboard.png"
                  alt="Veno Media campaign performance dashboard"
                  width={1000}
                  height={780}
                  priority
                  className="aspect-[16/11] w-full object-cover sm:aspect-auto"
                />
              </div>

              <div className="absolute -left-8 bottom-12 hidden rounded-2xl bg-white px-5 py-4 shadow-soft lg:block">
                <Users className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-semibold text-primary">250+</p>
                <p className="text-sm text-muted-foreground">Campaigns Delivered</p>
              </div>

              <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-white px-5 py-4 shadow-soft lg:block">
                <TrendingUp className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-semibold text-primary">120M+</p>
                <p className="text-sm text-muted-foreground">Views Generated</p>
              </div>

              <div className="absolute -right-4 bottom-8 hidden rounded-2xl bg-white px-5 py-4 shadow-soft lg:block">
                <Star className="mb-3 h-6 w-6 text-accent" />
                <p className="text-2xl font-semibold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Client Retention</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 overflow-hidden border-y border-border py-5 sm:mt-16">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-xs font-medium text-muted-foreground sm:text-sm">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}