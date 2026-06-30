import Image from 'next/image'
import { Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/social-icons'

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/salman-khan-4aab39406' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.comhttps://www.instagram.com/venomedia.in?igsh=d2N6bnBhbzNvOWpk&utm_source=qr' },
  { icon: WhatsappIcon, label: 'WhatsApp', href: 'https://wa.me/771073210' },
  { icon: Mail, label: 'Email', href: 'mailto:sk@venomedia.in' },
]

export function Founder() {
  return (
    <section id="founder" className="relative scroll-mt-24 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(25,198,212,0.22),transparent_65%)] blur-2xl" />
            <div className="overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-soft">
              <Image
                src="/founder.png"
                alt="Salman Khan, Founder and CEO of Veno Media"
                width={640}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Founder</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Salman Khan
            </h2>
            <p className="mt-1 text-lg font-medium text-secondary">Founder &amp; CEO</p>

            <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
  I'm Salman Khan, Founder of Veno Media. We help ambitious brands grow through
  influencer marketing, premium content, branding, and performance-driven digital
  campaigns. Every strategy we create is focused on measurable business growth.
</p>

<p>
  Today, I lead a team of strategists, creators, and performance marketers
  dedicated to helping brands stand out, build trust, and achieve long-term
  success through creativity, data, and results-driven execution.
</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-primary transition-all hover:border-accent hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
