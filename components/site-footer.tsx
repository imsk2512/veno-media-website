import { Mail, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/social-icons'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Veno', href: '#why-veno' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Influencer Marketing',
  'Social Media Management',
  'Video Production',
  'Brand Identity',
  'Performance Marketing',
]

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/venomedia.in' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/veno-media/' },
  { icon: WhatsappIcon, label: 'WhatsApp', href: 'https://wa.me/917589011809' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@venomedia.in' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />

            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              Premium creative & influencer marketing agency helping ambitious brands grow through
              strategy, content, and performance-driven campaigns.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
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
                  <Mail className="h-4 w-4 shrink-0" />
                  hello@venomedia.in
                </a>
              </li>

              <li>
                <a
                  href="tel:+917589011809"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +91 75890 11809
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:mt-12 sm:flex-row sm:items-center sm:pt-8">
          <p>© 2026 Veno Media. All Rights Reserved.</p>
          <p>Where Creativity Meets Growth.</p>
        </div>
      </div>
    </footer>
  )
}