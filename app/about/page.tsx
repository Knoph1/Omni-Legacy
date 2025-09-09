import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyOverview } from "@/components/company-overview"
import { CompanyValues } from "@/components/company-values"
import { TeamSection } from "@/components/team-section"
import { CompanyStats } from "@/components/company-stats"

export const metadata: Metadata = {
  title: "About Omni-Legacy Ltd. | Leading Kenyan IT Company | Mary Muthoni Muraguri CEO",
  description:
    "Learn about Omni-Legacy Limited (O.L Ltd.), a woman-led Kenyan IT company founded by CEO Mary Muthoni Muraguri and CTO Knoph Oluoch Ayieko. Discover our mission, values, and expertise in software development and IT consultancy across Kenya and East Africa.",
  keywords: [
    "Omni-Legacy Limited about",
    "Mary Muthoni Muraguri CEO",
    "Knoph Oluoch Ayieko CTO",
    "woman-led IT company Kenya",
    "Kenyan IT company founders",
    "O.L Ltd team",
    "IT company Nairobi",
    "software development team Kenya",
    "AGPO certified IT company",
    "East Africa IT services",
  ].join(", "),
  openGraph: {
    title: "About Omni-Legacy Ltd. | Leading Kenyan IT Company",
    description:
      "Woman-led Kenyan IT company founded by CEO Mary Muthoni Muraguri. Expert team delivering innovative software solutions across Kenya and East Africa.",
    url: "https://omni-legacy.tech/about",
    siteName: "Omni-Legacy Ltd.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Omni-Legacy Limited - About Our Team",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Omni-Legacy Ltd. | Leading Kenyan IT Company",
    description: "Woman-led Kenyan IT company with expert team delivering innovative software solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://omni-legacy.tech/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyOverview />
      <CompanyStats />
      <CompanyValues />
      <TeamSection />
      <Footer />
    </main>
  )
}
