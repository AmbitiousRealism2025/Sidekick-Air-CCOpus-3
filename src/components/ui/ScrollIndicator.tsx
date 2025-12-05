'use client'

import { motion } from 'framer-motion'
import { scrollIndicator } from '@/lib/animations'

export default function ScrollIndicator() {
  return (
    <motion.div
      variants={scrollIndicator}
      initial="hidden"
      animate="visible"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-white/60 text-sm font-medium tracking-wider uppercase">
        Scroll
      </span>
      <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-1.5 h-1.5 bg-white rounded-full"
        />
      </div>
    </motion.div>
  )
}
