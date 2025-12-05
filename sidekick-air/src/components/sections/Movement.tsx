'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionWrapper from '../ui/SectionWrapper'
import Button from '../ui/Button'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

export default function Movement() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <SectionWrapper id="join" background="dark" padding="large">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-steel-blue/20 blur-3xl"
        />
      </div>

      <Container size="default" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          {/* Heading */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-steel-blue font-medium text-sm tracking-widest uppercase mb-4">
              Join the Movement
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Be Part of the{' '}
              <span className="text-gradient bg-gradient-to-r from-steel-blue to-copper bg-clip-text text-transparent">
                Revolution
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Sidekick Air is more than a product — it&apos;s a movement to empower therapists
              everywhere. Join our community of pioneering professionals who are ready to
              redefine how care is delivered.
            </p>
          </motion.div>

          {/* Email Form */}
          <motion.div variants={fadeInUp} className="max-w-md mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-steel-blue focus:ring-2 focus:ring-steel-blue/20 transition-all"
                  />
                  <Button
                    variant="primary"
                    size="lg"
                    disabled={isLoading}
                    className="whitespace-nowrap"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Joining...
                      </span>
                    ) : (
                      'Join Waitlist'
                    )}
                  </Button>
                </div>
                <p className="text-white/40 text-xs mt-4">
                  By joining, you agree to receive updates about Sidekick Air. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-steel-blue/20 border border-steel-blue/30 rounded-2xl p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel-blue/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-steel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-white/70">
                  Thank you for joining. We&apos;ll keep you updated on our progress.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <p className="text-white/40 text-sm mb-6">Trusted by professionals in</p>
            <div className="flex flex-wrap justify-center gap-8 text-white/50">
              {['Massage Therapy', 'Athletic Training', 'Physical Therapy', 'Sports Medicine', 'Rehabilitation'].map((field) => (
                <span key={field} className="text-sm font-medium">
                  {field}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            {/* Avatars */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-steel-blue to-copper border-2 border-graphite flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-display font-semibold">500+ Professionals</div>
              <div className="text-white/50 text-sm">Already on the waitlist</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
