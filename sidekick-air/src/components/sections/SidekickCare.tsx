'use client'

import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionWrapper from '../ui/SectionWrapper'
import Button from '../ui/Button'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

const appFeatures = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Treatment Protocols',
    description: 'Condition-based guides across massage, sports medicine, and rehab',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Client Tracking',
    description: 'Progress notes, outcomes, and comprehensive follow-up care',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Professional Network',
    description: 'Integration for collaboration and referrals with peers',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Smart Scheduling',
    description: 'Client-side booking with Sidekick-certified therapists nearby',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'At-Home Care',
    description: 'Remote functionality for clients who own a Sidekick Air',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Continuing Education',
    description: 'Modules and skills development pathways',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data Insights',
    description: 'Refine outcomes and elevate performance with analytics',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Smart Reminders',
    description: 'Automated home programs and progress reports',
  },
]

export default function SidekickCare() {
  return (
    <SectionWrapper id="app" background="gradient" padding="large">
      <Container size="wide">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-copper font-medium text-sm tracking-widest uppercase mb-4">
            Sidekick Care App
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-graphite mb-6 tracking-tight">
            Care That Continues{' '}
            <span className="text-copper">Beyond the Session</span>
          </h2>
          <p className="text-lg text-graphite/70 leading-relaxed">
            The Sidekick Care app extends your reach and impact by connecting therapists,
            clients, and performance data into one intelligent platform.
          </p>
        </motion.div>

        {/* App Mockup and Features */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-4 space-y-4"
          >
            {appFeatures.slice(0, 4).map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/50 hover:bg-white hover:shadow-soft transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center text-copper flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-graphite">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-graphite/60 mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Phone Mockup */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-64 h-[520px] bg-graphite rounded-[3rem] p-3 shadow-elevated">
                {/* Screen */}
                <div className="w-full h-full bg-arctic rounded-[2.25rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-12 bg-steel-blue flex items-center justify-center">
                    <span className="text-white text-xs font-medium">Sidekick Care</span>
                  </div>

                  {/* App content */}
                  <div className="p-4 space-y-4">
                    {/* User card */}
                    <div className="bg-white rounded-xl p-4 shadow-soft">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-copper/20 flex items-center justify-center text-copper font-bold">
                          JD
                        </div>
                        <div>
                          <div className="font-medium text-sm text-graphite">John Doe</div>
                          <div className="text-xs text-graphite/50">Next: Today 2:00 PM</div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded-xl p-3 shadow-soft text-center">
                        <div className="text-2xl font-display font-bold text-steel-blue">12</div>
                        <div className="text-xs text-graphite/50">Sessions</div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-soft text-center">
                        <div className="text-2xl font-display font-bold text-copper">85%</div>
                        <div className="text-xs text-graphite/50">Progress</div>
                      </div>
                    </div>

                    {/* Progress chart placeholder */}
                    <div className="bg-white rounded-xl p-4 shadow-soft">
                      <div className="text-xs font-medium text-graphite mb-3">Recovery Progress</div>
                      <div className="h-16 flex items-end gap-1">
                        {[40, 55, 45, 70, 60, 80, 85].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-steel-blue/20 rounded-t"
                            style={{ height: `${height}%` }}
                          >
                            <div
                              className="w-full bg-steel-blue rounded-t transition-all"
                              style={{ height: `${height}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="flex justify-around pt-2">
                      {['Schedule', 'Notes', 'Message'].map((action) => (
                        <div key={action} className="text-center">
                          <div className="w-10 h-10 mx-auto rounded-full bg-mist flex items-center justify-center mb-1">
                            <div className="w-5 h-5 bg-graphite/20 rounded" />
                          </div>
                          <span className="text-xs text-graphite/50">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-graphite rounded-full" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-steel-blue/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-copper/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-4 space-y-4"
          >
            {appFeatures.slice(4, 8).map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/50 hover:bg-white hover:shadow-soft transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-copper/10 flex items-center justify-center text-copper flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-graphite">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-graphite/60 mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <p className="text-graphite/70 mb-6">
            Be the first to experience the Sidekick Care ecosystem.
          </p>
          <Button variant="secondary" size="lg" href="#join">
            Get Early Access
          </Button>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
