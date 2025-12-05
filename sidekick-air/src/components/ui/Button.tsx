'use client'

import { ButtonProps } from '@/types'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const variantClasses = {
  primary: 'bg-steel-blue text-white hover:bg-steel-blue-600 hover:shadow-glow-blue',
  secondary: 'bg-copper text-white hover:bg-copper-500 hover:shadow-glow-copper',
  outline: 'border-2 border-graphite text-graphite hover:bg-graphite hover:text-white',
  ghost: 'text-graphite hover:bg-graphite/5',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className,
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full font-display font-medium transition-all duration-300',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
    >
      {content}
    </motion.button>
  )
}
