'use client'

import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionWrapper from '../ui/SectionWrapper'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Excessive Weight',
    description: 'Traditional tables exceed 35-45 lbs, creating daily physical strain',
    stat: '45 lbs',
    statLabel: 'average weight',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: 'Awkward Balance',
    description: 'Wrestling through tight spaces, stairs, and vehicles feels like carrying an anchor',
    stat: '100%',
    statLabel: 'frustration',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Bulky Storage',
    description: 'Tables consume valuable space in homes, clinics, and vehicles',
    stat: '6ft+',
    statLabel: 'when stored',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Setup Fatigue',
    description: 'Complex assembly wastes energy before a single client session begins',
    stat: '10 min',
    statLabel: 'to set up',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Durability Trade-offs',
    description: 'Lighter tables sacrifice strength, causing instability during treatment',
    stat: '0',
    statLabel: 'good options',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'High Shipping Costs',
    description: 'Oversized dimensions drive up freight costs and limit reach',
    stat: '$$$',
    statLabel: 'to ship',
  },
]

export default function Problem() {
  return (
    <SectionWrapper id="problem" background="gradient" padding="large">
      <Container size="wide">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-copper font-medium text-sm tracking-widest uppercase mb-4">
            The Problem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-graphite mb-6 tracking-tight">
            Therapy Tables Haven&apos;t{' '}
            <span className="text-copper">Evolved in Decades</span>
          </h2>
          <p className="text-lg text-graphite/70 leading-relaxed">
            While therapists have advanced their techniques, their equipment has stayed
            the same — heavy, bulky, and burdensome. These aren&apos;t minor inconveniences.
            They&apos;re obstacles that silently wear down even the most passionate professionals.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white rounded-2xl p-6 border border-mist/50 hover:border-copper/30 hover:shadow-soft transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center text-copper mb-4 group-hover:bg-copper group-hover:text-white transition-colors duration-300">
                {point.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-graphite mb-2">
                {point.title}
              </h3>
              <p className="text-graphite/60 text-sm leading-relaxed mb-4">
                {point.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-bold text-copper">
                  {point.stat}
                </span>
                <span className="text-xs text-graphite/50 uppercase tracking-wide">
                  {point.statLabel}
                </span>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-copper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl font-display font-medium text-graphite">
            It&apos;s time for something{' '}
            <span className="text-steel-blue">fundamentally better</span>.
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
