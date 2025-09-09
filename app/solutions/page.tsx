import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions-hero"
import { IndustrySolutions } from "@/components/industry-solutions"
import { CaseStudies } from "@/components/case-studies"
import { CTASection } from "@/components/cta-section"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SolutionsHero />
      <IndustrySolutions />
      <CaseStudies />
      <CTASection />
      <Footer />
    </main>
  )
}
