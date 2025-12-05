import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'graphite': {
          DEFAULT: '#1C1C1E',
          50: '#4A4A4D',
          100: '#404042',
          200: '#2C2C2E',
          300: '#1C1C1E',
          400: '#0C0C0D',
          500: '#000000',
        },
        'steel-blue': {
          DEFAULT: '#387CFF',
          50: '#E8F0FF',
          100: '#D1E1FF',
          200: '#A3C3FF',
          300: '#75A5FF',
          400: '#4790FF',
          500: '#387CFF',
          600: '#0057FF',
          700: '#0044C7',
          800: '#00318F',
          900: '#001E57',
        },
        'copper': {
          DEFAULT: '#D36C3E',
          50: '#F8E8E1',
          100: '#F3D6C9',
          200: '#E9B399',
          300: '#DF9069',
          400: '#D36C3E',
          500: '#B35428',
          600: '#843E1D',
          700: '#552813',
          800: '#261208',
          900: '#000000',
        },
        'arctic': {
          DEFAULT: '#F7F8FA',
          50: '#FFFFFF',
          100: '#F7F8FA',
          200: '#E2E5EB',
          300: '#CDD2DC',
          400: '#B8BFCD',
          500: '#A3ACBE',
        },
        'mist': {
          DEFAULT: '#E2E2E4',
          50: '#FFFFFF',
          100: '#F5F5F6',
          200: '#E2E2E4',
          300: '#C5C5C8',
          400: '#A8A8AC',
          500: '#8B8B90',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1C1C1E 0%, #2C2C2E 50%, #1C1C1E 100%)',
        'section-gradient': 'linear-gradient(180deg, #F7F8FA 0%, #E2E2E4 100%)',
        'copper-gradient': 'linear-gradient(135deg, #D36C3E 0%, #B35428 100%)',
        'blue-gradient': 'linear-gradient(135deg, #387CFF 0%, #0057FF 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(56, 124, 255, 0.3)',
        'glow-copper': '0 0 40px rgba(211, 108, 62, 0.3)',
        'soft': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'elevated': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
