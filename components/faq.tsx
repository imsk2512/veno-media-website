'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Timelines depend on scope. One-off projects like a brand identity or website typically run a few weeks, while ongoing marketing partnerships begin delivering within the first month and compound from there. We confirm a clear timeline during your strategy call.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. We partner with brands worldwide and structure communication and reporting around your time zone, so collaboration stays smooth no matter where you are based.',
  },
  {
    q: 'Do you offer monthly marketing packages?',
    a: 'We do. Our retainer packages cover strategy, content production, channel management, and performance reporting, tailored to your goals and scaled to your stage of growth.',
  },
  {
    q: 'Do you provide influencer marketing?',
    a: 'Absolutely. We identify and manage vetted creator partnerships end to end — from outreach and briefing to content approval and performance tracking.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a free strategy call. We will discuss your goals, audit where you stand today, and outline a tailored plan to move you forward. There is no obligation to continue.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative scroll-mt-24 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Know
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-foreground">{faq.q}</span>
                    <Plus
                      className={cn(
                        'h-5 w-5 shrink-0 text-accent transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
