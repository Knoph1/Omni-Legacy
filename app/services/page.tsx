import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "IT Services Kenya | Custom Software Development | Cybersecurity | Cloud Solutions - Omni-Legacy Co. Ltd.",
  description:
    "Comprehensive IT services in Kenya: Custom software development, IT consultancy, cybersecurity, cloud solutions and technical training. AGPO certified. Serving Nairobi, Mombasa, Eldoret and across East Africa.",
  keywords: [
    "IT services Kenya",
    "custom software development Kenya",
    "cybersecurity services Kenya",
    "cloud solutions Kenya",
    "IT consultancy Kenya",
    "digital transformation Kenya",
    "technical training Kenya",
    "AGPO certified IT services",
    "enterprise software Kenya",
    "government IT solutions Kenya",
  ].join(", "),
  openGraph: {
    title: "IT Services Kenya | Custom Software Development | Cybersecurity - Omni-Legacy Co. Ltd.",
    description:
      "Comprehensive IT services including custom software development, cybersecurity, cloud solutions and IT consultancy across Kenya and East Africa.",
    url: "https://omni-legacy.tech/services",
    siteName: "Omni-Legacy Co. Ltd.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Omni-Legacy Company Limited IT Services Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services Kenya | Custom Software Development - Omni-Legacy Co. Ltd.",
    description:
      "Comprehensive IT services including software development, cybersecurity and cloud solutions in Kenya.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://omni-legacy.tech/services",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}
