import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const projects = [
  {
    title: 'Social Media Management',
    category: 'Social Media',
    image: '/portfolio-instagram.png',
    result:
      'Content planning, creative posts, reels, captions, and consistent social media management.',
    span: 'lg:col-span-2',
  },
  {
    title: 'Meta Ads Campaigns',
    category: 'Meta Ads',
    image: '/portfolio-branding.png',
    result:
      'Facebook and Instagram advertising creatives and campaign management focused on reaching the right audience.',
    span: '',
  },
  {
    title: 'Google Ads Campaigns',
    category: 'Google Ads',
    image: '/portfolio-real-estate.png',
    result:
      'Search advertising campaigns designed to connect businesses with customers actively searching for their services.',
    span: '',
  },
  {
    title: 'SEO Growth Strategy',
    category: 'SEO',
    image: '/portfolio-luxury.png',
    result:
      'Keyword research, on-page optimization, content planning, and SEO improvements for better search visibility.',
    span: 'lg:col-span-2',
  },
  {
    title: 'Social Media Content',
    category: 'Content Creation',
    image: '/portfolio-restaurant.png',
    result:
      'Social-first graphics, reels, carousels, and promotional content created for modern businesses.',
    span: 'lg:col-span-2',
  },
  {
    title: 'Business Website',
    category: 'Website Development',
    image: '/portfolio-video.png',
    result:
      'Modern responsive websites designed to present services clearly and create a professional online presence.',
    span: '',
  },
]

const tags = [
  'Social Media',
  'Meta Ads',
  'Google Ads',
  'SEO',
  'Content Creation',
  'Websites',
]

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
              Our Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Digital Work Built for Business Growth
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Explore our work across social media management, paid advertising,
              SEO, content creation, and modern business websites.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-secondary sm:px-3.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 80}
              className={project.span}
            >
              <article className="group relative h-72 overflow-hidden rounded-3xl border border-border bg-primary shadow-soft sm:h-80">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/95 via-[#071A3D]/35 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                    {project.result}
                  </p>
                </div>

                <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-100 backdrop-blur-md transition-all duration-300 sm:right-5 sm:top-5 sm:h-11 sm:w-11 lg:opacity-0 lg:group-hover:opacity-100">
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