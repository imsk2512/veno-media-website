import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    title: 'Skyline Estates',
    category: 'Real Estate',
    image: '/portfolio-real-estate.png',
    result: 'Qualified luxury property leads',
    span: 'lg:col-span-2',
  },
  {
    title: 'The Personal Brand',
    category: 'Personal Branding',
    image: '/portfolio-branding.png',
    result: 'Authority-building content system',
    span: '',
  },
  {
    title: 'Maison Dining',
    category: 'Restaurants',
    image: '/portfolio-restaurant.png',
    result: 'Fully booked seasonal launches',
    span: '',
  },
  {
    title: 'Auré Atelier',
    category: 'Luxury Brands',
    image: '/portfolio-luxury.png',
    result: 'Elevated brand positioning',
    span: 'lg:col-span-2',
  },
  {
    title: 'Creator Studio',
    category: 'Instagram Growth',
    image: '/portfolio-instagram.png',
    result: 'Compounding audience growth',
    span: 'lg:col-span-2',
  },
  {
    title: 'Frame & Motion',
    category: 'Video Editing',
    image: '/portfolio-video.png',
    result: 'High-retention short-form edits',
    span: '',
  },
]

const tags = [
  'Social Media Campaigns',
  'Case Studies',
  'Before & After Results',
  'Brand Films',
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Selected Work
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              A Portfolio Built on Real Results
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-xs font-medium text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80} className={project.span}>
              <article className="group relative h-72 overflow-hidden rounded-2xl border border-border shadow-soft sm:h-80">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} project`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{project.result}</p>
                </div>
                <span className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full glass-dark text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
