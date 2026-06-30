'use client'

import { useState, type FormEvent } from 'react'
import { Mail, CheckCircle2, ArrowUpRight, Loader2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/social-icons'

const channels = [
  { icon: WhatsappIcon, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/7589011809' },
  { icon: InstagramIcon, label: 'Instagram', value: '@venomedia.in', href: 'https://www.instagram.com/venomedia.in?igsh=d2N6bnBhbzNvOWpk&utm_source=qr' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Veno Media', href: 'https://www.linkedin.com/company/veno-media' },
  { icon: Mail, label: 'Email', value: 'hello@venomedia.in', href: 'mailto:hello@venomedia.com' },
]

const fields = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', autoComplete: 'email' },
  { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (555) 000-0000', autoComplete: 'tel' },
  { id: 'company', label: 'Company', type: 'text', placeholder: 'Company name', autoComplete: 'organization' },
] as const

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqevlovv'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      company: data.get('company'),
      'project details': data.get('details'),
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        form.reset()
        setSubmitted(true)
      } else {
        const json = await res.json().catch(() => null)
        const message = json?.errors?.[0]?.message as string | undefined
        setError(message ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Unable to send your message. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[1.8rem] bg-primary shadow-soft">
          <div className="relative grid gap-0 lg:grid-cols-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-80"
            >
              <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(25,198,212,0.4),transparent_60%)] blur-2xl" />
              <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(125,234,242,0.25),transparent_60%)] blur-2xl" />
            </div>

            {/* Left: copy + channels */}
            <Reveal className="relative p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-highlight">
                Get in Touch
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Let&apos;s Build Something Amazing Together.
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-white/75">
                Tell us about your brand and goals. We&apos;ll reply with a tailored plan to help you
                grow.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl glass-dark px-4 py-3.5 text-white transition-all hover:brightness-125"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-highlight">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-white/60">{c.label}</span>
                      <span className="block text-sm font-medium">{c.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={120} className="relative p-8 sm:p-12">
              <div className="rounded-2xl bg-card p-6 shadow-soft sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="h-12 w-12 text-accent" />
                    <h3 className="mt-4 text-xl font-semibold text-foreground">Thank you</h3>
                    <p className="mt-2 text-muted-foreground">
                      Your message is on its way. We&apos;ll be in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {fields.map((field) => (
                        <div key={field.id} className="flex flex-col gap-1.5">
                          <label
                            htmlFor={field.id}
                            className="text-sm font-medium text-foreground"
                          >
                            {field.label}
                          </label>
                          <input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            autoComplete={field.autoComplete}
                            placeholder={field.placeholder}
                            required={field.id === 'name' || field.id === 'email'}
                            className="rounded-xl border border-input bg-muted px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="details" className="text-sm font-medium text-foreground">
                        Project Details
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={4}
                        placeholder="Tell us about your brand, goals, and timeline..."
                        className="resize-none rounded-xl border border-input bg-muted px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                      />
                    </div>
                    {error ? (
                      <p
                        role="alert"
                        className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                      >
                        {error}
                      </p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glow hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? 'Sending...' : 'Schedule a Free Consultation'}
                      {submitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
