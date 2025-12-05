'use client'

import clsx from 'clsx'

interface DiagonalDividerProps {
  direction?: 'up' | 'down'
  fromColor?: string
  toColor?: string
  className?: string
}

export default function DiagonalDivider({
  direction = 'down',
  fromColor = 'bg-graphite',
  toColor = 'bg-arctic',
  className,
}: DiagonalDividerProps) {
  return (
    <div
      className={clsx(
        'relative h-24 md:h-32 lg:h-40 w-full overflow-hidden',
        fromColor,
        className
      )}
      aria-hidden="true"
    >
      <svg
        className={clsx(
          'absolute bottom-0 w-full h-full',
          direction === 'up' && 'rotate-180'
        )}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120L1440 0V120H0Z"
          className={clsx(
            toColor === 'bg-arctic' && 'fill-arctic',
            toColor === 'bg-graphite' && 'fill-graphite',
            toColor === 'bg-white' && 'fill-white',
            toColor === 'bg-mist' && 'fill-mist'
          )}
        />
      </svg>
    </div>
  )
}
