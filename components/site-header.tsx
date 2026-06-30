'use client'

import { useEffect, useState } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Veno', href: '#why-veno' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            'mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-all duration-300 sm:px-6 lg:px-8',
            scrolled
              ? 'border-b border-white/20 bg-white/90 shadow-lg backdrop-blur-xl'
              : 'bg-white/100 backdrop-blur-md'
          )}
        >
          <a href="#top" aria-label="Veno Media home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
            >
              <PhoneCall className="h-4 w-4" />
              Book a Discovery Call
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "absolute right-0 top-0 flex h-screen w-[82%] max-w-sm flex-col bg-white p-7 shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="mb-10 flex items-center justify-between">
            <Logo />

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 transition hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-4 text-lg font-medium text-slate-800 transition hover:bg-slate-100 hover:text-cyan-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            <PhoneCall className="h-4 w-4" />
            Book a Discovery Call
          </a>
        </div>
      </div>
    </>
  )
}