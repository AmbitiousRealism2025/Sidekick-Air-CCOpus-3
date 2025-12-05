'use client'

import { ContainerProps } from '@/types'
import clsx from 'clsx'

const sizeClasses = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  full: 'max-w-full',
}

export default function Container({
  children,
  className,
  as: Component = 'div',
  size = 'default',
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        'mx-auto w-full px-6 md:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  )
}
