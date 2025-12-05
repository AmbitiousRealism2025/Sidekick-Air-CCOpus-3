'use client'

import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionWrapper from '../ui/SectionWrapper'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '@/lib/animations'

const futureFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    title: 'QR Code Integration',
    description: 'Scan to instantly connect to your personalized Clinical AI Coach',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Treatment Planning',
    description: 'AI-assisted protocols tailored to each client\'s needs',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Business Analytics',
    description: 'Track practice growth and optimize your workflow',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Professional Growth',
    description: 'Continuous learning and skill development pathways',
  },
]

export default function NewStandard() {
  return (
    <SectionWrapper id="technology" background="light" padding="large">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative order-2 lg:order-1"
          >
            {/* Main visual container */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-steel-blue/20"
              />

              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-dashed border-copper/20"
              />

              {/* Center content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-graphite to-graphite/90 flex items-center justify-center shadow-elevated">
                <div className="text-center">
                  {/* QR Code placeholder */}
                  <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-lg p-2 shadow-soft">
                    <div className="w-full h-full bg-graphite rounded grid grid-cols-5 gap-0.5 p-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-sm ${Math.random() > 0.5 ? 'bg-white' : 'bg-graphite'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white text-sm font-medium">Scan to Connect</p>
                  <p className="text-white/50 text-xs mt-1">Clinical AI Coach</p>
                </div>
              </div>

              {/* Floating feature badges */}
              {futureFeatures.map((feature, index) => {
                const positions = [
                  'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
                  'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
                  'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
                  'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
                ]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`absolute ${positions[index]} bg-white rounded-xl shadow-soft p-3 w-40`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-steel-blue/10 flex items-center justify-center text-steel-blue">
                        {feature.icon}
                      </div>
                      <span className="text-xs font-medium text-graphite">{feature.title}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-steel-blue/10 text-steel-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Coming Soon
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-graphite mb-6 tracking-tight">
              A New Industry{' '}
              <span className="text-steel-blue">Standard</span>
            </h2>

            <p className="text-lg text-graphite/70 leading-relaxed mb-8">
              Sidekick Air isn&apos;t just a new product — it&apos;s the beginning of a new standard.
              Future models will feature built-in AI technology, connecting through a simple
              QR code to a personalized &apos;Clinical AI Coach.&apos;
            </p>

            {/* Future features list */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-4"
            >
              {futureFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-mist/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-steel-blue/10 flex items-center justify-center text-steel-blue flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-graphite mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-graphite/60">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-8 text-graphite/50 text-sm italic">
              Creating a seamless connection between technology and hands-on care.
            </p>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
