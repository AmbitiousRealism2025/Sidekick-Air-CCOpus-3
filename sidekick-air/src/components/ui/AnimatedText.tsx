'use client'

import { motion, Variants } from 'framer-motion'
import clsx from 'clsx'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  animation?: 'words' | 'letters' | 'lines'
  delay?: number
}

const getStaggerVariants = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: delay,
    },
  },
})

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

const getTextRevealVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  },
})

export default function AnimatedText({
  text,
  className,
  as: Component = 'p',
  animation = 'words',
  delay = 0,
}: AnimatedTextProps) {
  const MotionComponent = motion[Component] as typeof motion.p

  if (animation === 'letters') {
    const letters = text.split('')

    return (
      <MotionComponent
        className={clsx('overflow-hidden', className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={getStaggerVariants(delay)}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </MotionComponent>
    )
  }

  if (animation === 'words') {
    const words = text.split(' ')

    return (
      <MotionComponent
        className={clsx('overflow-hidden', className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={getStaggerVariants(delay)}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </MotionComponent>
    )
  }

  // Lines animation (default)
  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={getTextRevealVariants(delay)}
    >
      {text}
    </MotionComponent>
  )
}
