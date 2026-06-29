import Image from 'next/image'
import { ArrowUpRight, Play, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const marqueeItems = [
  'Social Media',
  'Branding',
  'Influencer Marketing',
  'Video Production',
  'Paid Ads',
  'SEO',
  'Performance Marketing',
  'Content Strategy',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24">
      {/* Background gradient shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(25,198,212,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute -left-24 top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(13,46,115,0.16),transparent_60%)] blur-2xl" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(125,234,242,0.22),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-secondary">
                <Sparkles className="h-4 w-4 text-accent" />
                Where Creativity Meets Growth
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                We Help Brands Grow Through{' '}
                <span className="text-gradient">Creative Marketing.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Helping businesses scale with strategic content, social media management, influencer
                marketing, branding, video production, paid advertising, and performance-driven
                campaigns.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glow hover:brightness-110"
                >
                  Book Free Consultation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-accent hover:bg-muted"
                >
                  <Play className="h-4 w-4 text-accent" />
                  View Portfolio
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={200} className="relative">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_70%_30%,rgba(25,198,212,0.25),transparent_60%)] blur-2xl" />
              <div className="overflow-hidden rounded-[1.6rem] border border-border bg-primary shadow-soft">
                <Image
                  src="/hero-dashboard.png"
                  alt="Premium marketing analytics dashboard with social media growth charts and glassmorphism cards"
                  width={900}
                  height={760}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating glass card */}
              <div className="absolute -bottom-5 -left-4 animate-float rounded-2xl glass px-4 py-3 shadow-soft sm:-left-8">
                <p className="text-xs font-medium text-muted-foreground">Avg. Engagement Lift</p>
                <p className="text-lg font-semibold text-primary">Sustained growth</p>
              </div>
              <div className="absolute -top-4 right-2 animate-float-slow rounded-2xl glass px-4 py-3 shadow-soft sm:right-4">
                <p className="text-xs font-medium text-muted-foreground">Campaigns</p>
                <p className="text-lg font-semibold text-primary">Performance-driven</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee */}
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
