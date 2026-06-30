import Image from 'next/image'
import { Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/social-icons'

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/salman-khan-4aab39406' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/venomedia.in' },
  { icon: WhatsappIcon, label: 'WhatsApp', href: 'https://wa.me/917589011809' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@venomedia.in' },
]

export function Founder() {
  return (
    <section id="founder" className="relative scroll-mt-24 bg-muted py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(25,198,212,0.22),transparent_65%)] blur-2xl" />

            <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:max-w-none lg:rounded-[1.6rem]">
              <Image
                src="/founder.png"
                alt="Salman Khan"
                width={640}
                height={760}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">
              Founder
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Salman Khan
            </h2>

            <p className="mt-2 text-base font-medium text-secondary sm:text-lg">
              Founder & CEO
            </p>

            <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-relaxed">
              <p>
                I&apos;m Salman Khan, Founder of Veno Media. We help ambitious
                brands grow through influencer marketing, premium content,
                branding and performance-driven campaigns.
              </p>

              <p>
                Today, I lead a team of strategists, creators, and performance
                marketers dedicated to helping brands stand out, build trust,
                and achieve long-term success.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent sm:py-2.5"
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