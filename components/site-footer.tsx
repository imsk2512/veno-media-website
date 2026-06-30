import { Mail, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/social-icons'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Veno', href: '#why' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Social Media Management',
  'Content & Video',
  'Influencer Marketing',
  'Paid Advertising',
  'SEO & Performance',
]

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.comhttps://www.instagram.com/venomedia.in?igsh=d2N6bnBhbzNvOWpk&utm_source=qr' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/veno-media' },
  { icon: WhatsappIcon, label: 'WhatsApp', href: 'https://wa.me/7589011809' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@venomedia.in' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              A premium creative marketing agency helping ambitious brands grow through creativity,
              strategy, and measurable performance.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-primary transition-all hover:border-accent hover:bg-brand-gradient hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:hello@venomedia.in"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  hello@venomedia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+10000000000"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" />
                  +1 (555) 000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Veno Media. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground">Where Creativity Meets Growth.</p>
        </div>
      </div>
    </footer>
  )
}
