import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects-hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { PortfolioHighlights } from "@/components/portfolio-highlights"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "IT Projects Portfolio Kenya | KDHE | NASCOP | Government Solutions - Omni-Legacy Ltd.",
  description:
    "Explore our successful IT projects in Kenya: Kenya Digital Health Ecosystem (KDHE), NASCOP website, Ashker Credit Solution, AcePapers platform, and University of Kabianga Research Portal. Proven track record in government, healthcare, fintech, and education sectors.",
  keywords: [
    "IT projects Kenya",
    "KDHE Kenya Digital Health Ecosystem",
    "NASCOP website development",
    "government IT projects Kenya",
    "healthcare IT solutions Kenya",
    "fintech development Kenya",
    "university portal development",
    "Ashker Credit Solution",
    "AcePapers platform",
    "IT portfolio Kenya",
  ].join(", "),
  openGraph: {
    title: "IT Projects Portfolio Kenya | KDHE | NASCOP | Government Solutions",
    description:
      "Successful IT projects including Kenya Digital Health Ecosystem, NASCOP website, and various government, healthcare, and fintech solutions.",
    url: "https://omni-legacy.tech/projects",
    siteName: "Omni-Legacy Ltd.",
    images: [
      {
        url: "/healthcare-system.png",
        width: 1200,
        height: 630,
        alt: "Omni-Legacy Limited IT Projects Portfolio Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Projects Portfolio Kenya | KDHE | NASCOP - Omni-Legacy Ltd.",
    description: "Successful IT projects in government, healthcare, fintech, and education sectors across Kenya.",
    images: ["/healthcare-system.png"],
  },
  alternates: {
    canonical: "https://omni-legacy.tech/projects",
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProjectsHero />
      <FeaturedProjects />
      <PortfolioHighlights />
      <CTASection />
      <Footer />
    </main>
  )
}
