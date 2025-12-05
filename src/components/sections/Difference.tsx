'use client'

import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionWrapper from '../ui/SectionWrapper'
import FeatureCard from '../ui/FeatureCard'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '@/lib/animations'

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Aerospace-Grade Material',
    description: 'Built from advanced drop-stitch technology used in aerospace and marine engineering for exceptional strength.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: '800+ lb Capacity',
    description: 'Rock-solid 6-inch inflated surface that supports over 800 pounds without compromise.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Yoga Mat Portability',
    description: 'Packs down to the size of a yoga mat, eliminating storage constraints and enabling true mobility.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Minutes to Setup',
    description: 'Inflates quickly with included pump, getting you ready to work without the usual setup fatigue.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Modular Design',
    description: 'Collapsible stand and advanced fasteners combine to deliver unmatched stability and flexibility.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Custom Branding',
    description: 'Optional color customization and branding makes Sidekick Air an extension of your professional identity.',
  },
]

export default function Difference() {
  return (
    <SectionWrapper id="features" background="dark" padding="large">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="inline-block text-steel-blue font-medium text-sm tracking-widest uppercase mb-4">
              The Sidekick Air Difference
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Power Without the{' '}
              <span className="text-gradient bg-gradient-to-r from-steel-blue to-copper bg-clip-text text-transparent">
                Burden
              </span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Sidekick Air redefines what a therapy table can be — powerful, portable,
              and purpose-built for today&apos;s evolving landscape. It&apos;s not just a table;
              it&apos;s an ally built to move with you.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10">
              <div>
                <div className="text-4xl font-display font-bold text-steel-blue mb-1">6&quot;</div>
                <div className="text-sm text-white/50">Surface Height</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-copper mb-1">&lt;15</div>
                <div className="text-sm text-white/50">Pounds Total</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">800+</div>
                <div className="text-sm text-white/50">lb Capacity</div>
              </div>
            </div>

            {/* Use cases */}
            <div className="mt-8">
              <p className="text-white/50 text-sm mb-3">Perfect for:</p>
              <div className="flex flex-wrap gap-2">
                {['Homes', 'Gyms', 'Sports Venues', 'Clinics', 'Outdoor Events', 'Travel'].map((place) => (
                  <span
                    key={place}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
