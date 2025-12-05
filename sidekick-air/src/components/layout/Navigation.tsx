'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Container from './Container'
import Button from '../ui/Button'

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'App', href: '#app' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-soft py-3'
            : 'bg-transparent py-5'
        )}
      >
        <Container size="wide">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className={clsx(
                'font-display font-bold text-xl md:text-2xl transition-colors',
                isScrolled ? 'text-graphite' : 'text-white'
              )}
            >
              Sidekick<span className="text-steel-blue">Air</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'font-medium text-sm transition-colors animated-underline',
                    isScrolled
                      ? 'text-graphite/70 hover:text-graphite'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant={isScrolled ? 'primary' : 'outline'}
                size="sm"
                href="#join"
                className={clsx(
                  !isScrolled && 'border-white text-white hover:bg-white hover:text-graphite'
                )}
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                'md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors',
                isScrolled ? 'text-graphite' : 'text-white'
              )}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-current"
              />
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-white shadow-elevated"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-graphite/70 hover:text-graphite py-2 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="primary"
                href="#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2"
              >
                Join Waitlist
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
