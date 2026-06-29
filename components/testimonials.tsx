import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Veno Media transformed our social presence into a real growth engine. The creative quality and consistency are unmatched, and the results speak for themselves.',
    name: 'Ayesha Rahman',
    role: 'Founder, Lumière Skincare',
  },
  {
    quote:
      'Working with the team felt like having an in-house marketing department — only sharper. Strategy, content, and reporting were all handled flawlessly.',
    name: 'Daniel Brooks',
    role: 'CEO, Brooks Realty Group',
  },
  {
    quote:
      'They understood our luxury positioning immediately. Every deliverable was premium, on-brand, and clearly designed to convert. A true growth partner.',
    name: 'Sofia Marchetti',
    role: 'Brand Director, Auré Atelier',
  },
]

export function Testimonials() {
  return (
    <section className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Client Stories
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Trusted by Ambitious Brands
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="flex gap-1 text-accent" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
