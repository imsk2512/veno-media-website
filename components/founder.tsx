import Image from 'next/image'
import { Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/social-icons'

const socials = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/salman-khan-4aab39406',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://www.instagram.com/venomedia.in',
  },
  {
    icon: WhatsappIcon,
    label: 'WhatsApp',
    href: 'https://wa.me/917589011809',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hello@venomedia.in',
  },
]

export function Founder() {
  return (
    <section
      id="founder"
      className="relative scroll-mt-24 bg-muted py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Mobile Layout */}
          <Reveal className="lg:hidden">
            <div className="flex items-start gap-5">

              <div className="w-32 shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <Image
                  src="/founder.png"
                  alt="Salman Khan"
                  width={300}
                  height={380}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Founder
                </p>

                <h2 className="mt-2 text-2xl font-bold text-foreground">
                  Salman Khan
                </h2>

                <p className="text-sm font-medium text-secondary">
                  Founder & CEO
                </p>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  I'm Salman Khan, Founder of Veno Media. We help ambitious
                  brands grow through influencer marketing, premium content,
                  branding and performance-driven campaigns.
                </p>

              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              Today, I lead a team of strategists, creators and performance
              marketers dedicated to helping brands build trust and achieve
              measurable business growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Desktop Image */}
          <Reveal className="relative hidden lg:block">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(25,198,212,0.22),transparent_65%)] blur-2xl" />

            <div className="overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-soft">
              <Image
                src="/founder.png"
                alt="Salman Khan"
                width={640}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Desktop Text */}
          <Reveal delay={120} className="hidden lg:block">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Founder
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-foreground">
              Salman Khan
            </h2>

            <p className="mt-2 text-lg font-medium text-secondary">
              Founder & CEO
            </p>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Salman Khan, Founder of Veno Media. We help ambitious
                brands grow through influencer marketing, premium content,
                branding and performance-driven campaigns.
              </p>

              <p>
                Today, I lead a team of strategists, creators, and performance
                marketers dedicated to helping brands stand out, build trust,
                and achieve long-term success.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
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