import Image from "next/image";
import { cn } from '@/lib/utils'

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
     <Image
  src="/veno-media-logo.png"
  alt="Veno Media"
  width={40}
  height={40}
  className="h-9 w-9 object-contain bg-transparent"
 />

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

