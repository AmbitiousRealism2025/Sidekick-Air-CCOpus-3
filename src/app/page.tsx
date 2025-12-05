import Hero from '@/components/sections/Hero'
import OriginStory from '@/components/sections/OriginStory'
import Problem from '@/components/sections/Problem'
import Difference from '@/components/sections/Difference'
import NewStandard from '@/components/sections/NewStandard'
import SidekickCare from '@/components/sections/SidekickCare'
import Movement from '@/components/sections/Movement'
import Footer from '@/components/sections/Footer'
import DiagonalDivider from '@/components/ui/DiagonalDivider'

export default function Home() {
  return (
    <>
      {/* Hero Section - Dark background with animated gradients */}
      <Hero />

      {/* Diagonal transition from dark to light */}
      <DiagonalDivider
        direction="down"
        fromColor="bg-graphite"
        toColor="bg-arctic"
      />

      {/* Origin Story - Light background, Drew's journey */}
      <OriginStory />

      {/* Problem Section - Gradient background, industry pain points */}
      <Problem />

      {/* The Sidekick Air Difference - Dark background, features */}
      <Difference />

      {/* Diagonal transition from dark to light */}
      <DiagonalDivider
        direction="down"
        fromColor="bg-graphite"
        toColor="bg-arctic"
      />

      {/* New Industry Standard - Light background, future vision */}
      <NewStandard />

      {/* Sidekick Care App - Gradient background, app features */}
      <SidekickCare />

      {/* Join the Movement CTA - Dark background, email capture */}
      <Movement />

      {/* Footer */}
      <Footer />
    </>
  )
}
