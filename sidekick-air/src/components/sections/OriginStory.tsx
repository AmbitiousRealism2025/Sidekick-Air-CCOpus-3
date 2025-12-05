'use client'

import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionWrapper from '../ui/SectionWrapper'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from '@/lib/animations'

export default function OriginStory() {
  return (
    <SectionWrapper id="story" background="light" padding="large">
      <Container size="wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image/Visual Side */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-mist to-arctic">
              {/* Placeholder for origin story imagery */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-copper/10 flex items-center justify-center">
                    <svg className="w-12 h-12 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-graphite/50 text-sm">25 Years of Healing</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-copper/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-steel-blue/10 rounded-lg" />
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-white rounded-xl shadow-elevated p-6 max-w-xs"
            >
              <svg className="w-8 h-8 text-copper/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-graphite/80 text-sm italic leading-relaxed">
                &quot;True healing comes from connection — between hands and body,
                between purpose and practice.&quot;
              </p>
              <p className="text-graphite font-medium text-sm mt-3">— Drew Freedman</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={fadeInRight}>
            <span className="inline-block text-copper font-medium text-sm tracking-widest uppercase mb-4">
              The Origin Story
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-graphite mb-6 tracking-tight">
              Where Purpose{' '}
              <span className="text-copper">Meets Innovation</span>
            </h2>

            <div className="space-y-5 text-graphite/70 leading-relaxed">
              <p>
                For over 25 years, Drew Freedman built his career around a single mission —
                to help people feel better. As the founder of The Boston Bodyworker, his
                work was hands-on, relational, and deeply rooted in purpose.
              </p>

              <p>
                When it came time to close the practice, it marked the end of a defining
                chapter and the beginning of a new one. During that time of reflection,
                Drew bought a stand-up paddleboard — meant to bring balance, physically
                and mentally.
              </p>

              <p className="text-graphite font-medium">
                But as he inflated it one quiet afternoon, something extraordinary happened.
                The strength, structure, and feel beneath his hands echoed the support he
                had depended on throughout his entire career.
              </p>

              <p>
                The realization struck like a clap of thunder — this material could redefine
                the therapy table. Not just another version of what already existed, but
                something fundamentally better.
              </p>
            </div>

            {/* Timeline markers */}
            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-steel-blue">25+</div>
                <div className="text-sm text-graphite/60">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-mist" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-copper">1000s</div>
                <div className="text-sm text-graphite/60">Clients Helped</div>
              </div>
              <div className="w-px h-12 bg-mist" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-graphite">1</div>
                <div className="text-sm text-graphite/60">Big Idea</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
