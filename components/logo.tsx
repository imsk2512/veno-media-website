import { cn } from '@/lib/utils'

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
          <path
            d="M4 5l8 14 8-14"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="6.5" r="1.7" fill="#7deaf2" />
        </svg>
      </span>
      <span
        className={cn(
          'text-lg font-semibold tracking-tight',
          light ? 'text-white' : 'text-foreground',
        )}
      >
        Veno<span className="text-accent"> Media</span>
      </span>
    </span>
  )
}
