import { ReactNode } from 'react'

// Component Props
export interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer'
  size?: 'narrow' | 'default' | 'wide' | 'full'
}

export interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'light' | 'dark' | 'gradient' | 'transparent'
  padding?: 'none' | 'small' | 'default' | 'large'
}

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  animation?: 'words' | 'letters' | 'lines'
  delay?: number
}

export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export interface DiagonalDividerProps {
  direction?: 'up' | 'down'
  fromColor?: string
  toColor?: string
  className?: string
}

// Content Types
export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface PainPoint {
  id: string
  icon: string
  title: string
  description: string
}

export interface AppFeature {
  id: string
  icon: string
  title: string
  description: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

// Form Types
export interface EmailFormData {
  email: string
}

// Animation Types
export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string | number[]
}
