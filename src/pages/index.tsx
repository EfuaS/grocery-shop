import HealthyFruits from './_components/homepage_layout/HealthyFruits'
import HeroSection from './_components/homepage_layout/HeroSection'
import QualitySection from './_components/homepage_layout/QualitySection'

export default function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <QualitySection />
      <HealthyFruits/>
    </div>
  )
}
