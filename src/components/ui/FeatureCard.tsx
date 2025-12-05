'use client'

import { motion } from 'framer-motion'
import { cardHover, fadeInUp } from '@/lib/animations'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={clsx(
        'group relative p-6 md:p-8 rounded-2xl bg-white border border-mist/50 transition-shadow duration-300 hover:shadow-elevated',
        className
      )}
    >
      <motion.div variants={cardHover}>
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-steel-blue/10 flex items-center justify-center text-steel-blue mb-5 group-hover:bg-steel-blue group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl text-graphite mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-graphite/70 leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-steel-blue/5 to-transparent" />
      </div>
    </motion.div>
  )
}
