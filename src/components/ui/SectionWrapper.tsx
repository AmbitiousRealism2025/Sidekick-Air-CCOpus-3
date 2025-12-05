'use client'

import { SectionWrapperProps } from '@/types'
import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '@/lib/animations'
import clsx from 'clsx'

const backgroundClasses = {
  light: 'bg-arctic',
  dark: 'bg-graphite text-white',
  gradient: 'bg-gradient-to-b from-arctic to-mist',
  transparent: 'bg-transparent',
}

const paddingClasses = {
  none: '',
  small: 'py-12 md:py-16',
  default: 'py-16 md:py-24 lg:py-32',
  large: 'py-24 md:py-32 lg:py-40',
}

export default function SectionWrapper({
  children,
  className,
  id,
  background = 'light',
  padding = 'default',
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      className={clsx(
        'relative overflow-hidden',
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </motion.section>
  )
}
