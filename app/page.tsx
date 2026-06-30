import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from "@/components/services";
import { Portfolio } from '@/components/portfolio'
import { Process } from '@/components/process'
import { WhyVeno } from '@/components/why-veno'
import { Founder } from '@/components/founder'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
  <Hero />
  <Services />
  <About />
  <Portfolio />
  <Process />
  <WhyVeno />
  <Founder />
  <Testimonials />
  <Faq />
  <Contact />
</main>
      <SiteFooter />
    </div>
  )
}
