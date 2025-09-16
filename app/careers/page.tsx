import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers-hero"
import { CompanyCulture } from "@/components/company-culture"
import { JobOpenings } from "@/components/job-openings"
import { CareersBenefits } from "@/components/careers-benefits"
import { ApplicationProcess } from "@/components/application-process"

export const metadata: Metadata = {
  title: "IT Jobs Kenya | Software Developer | IT Consultant | Cybersecurity Careers - Omni-Legacy Co. Ltd.",
  description:
    "Join Omni-Legacy Company Limited's growing team in Kenya. Current openings: Senior Full-Stack Developer, IT Consultant, Cybersecurity Specialist, Junior Software Developer. Competitive benefits, remote work options and career growth opportunities in Nairobi, Mombasa & Eldoret.",
  keywords: [
    "IT jobs Kenya",
    "software developer jobs Kenya",
    "IT consultant jobs Kenya",
    "cybersecurity jobs Kenya",
    "tech careers Kenya",
    "remote work Kenya",
    "IT jobs Nairobi",
    "software engineer Kenya",
    "full-stack developer Kenya",
    "tech company careers Kenya",
  ].join(", "),
  openGraph: {
    title: "IT Jobs Kenya | Software Developer | IT Consultant Careers - Omni-Legacy Co. Ltd.",
    description:
      "Join our growing IT team in Kenya. Current openings for developers, consultants and cybersecurity specialists with competitive benefits and growth opportunities.",
    url: "https://omni-legacy.tech/careers",
    siteName: "Omni-Legacy Co. Ltd.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Omni-Legacy Company Limited IT Careers Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Jobs Kenya | Software Developer Careers - Omni-Legacy Co. Ltd.",
    description: "Join our growing IT team in Kenya with competitive benefits and career growth opportunities.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://omni-legacy.tech/careers",
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CareersHero />
      <CompanyCulture />
      <JobOpenings />
      <CareersBenefits />
      <ApplicationProcess />
      <Footer />
    </main>
  )
}
