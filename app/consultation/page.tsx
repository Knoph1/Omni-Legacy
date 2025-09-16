import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ConsultationBooking } from "@/components/consultation-booking"

export const metadata: Metadata = {
  title: "Book IT Consultation Kenya | Expert IT Advice | Strategy & Security - Omni-Legacy Co. Ltd.",
  description:
    "Book paid IT consultation with our experts in Kenya. IT strategy, technical architecture review, cybersecurity assessment and project scoping sessions. Professional advice from experienced CTO and technical team.",
  keywords: [
    "IT consultation Kenya",
    "IT strategy consultation",
    "cybersecurity consultation Kenya",
    "technical architecture review",
    "IT expert advice Kenya",
    "project scoping session",
    "IT consultant Kenya",
    "technology consultation",
  ].join(", "),
  openGraph: {
    title: "Book IT Consultation Kenya | Expert IT Advice - Omni-Legacy Co. Ltd.",
    description:
      "Book paid IT consultation with our experts. IT strategy, security assessment and technical architecture review sessions available.",
    url: "https://omni-legacy.tech/consultation",
    siteName: "Omni-Legacy Co. Ltd.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Book IT Consultation Kenya - Omni-Legacy Company Limited",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://omni-legacy.tech/consultation",
  },
}

export default function ConsultationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-foreground">Book a Consultation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get expert advice from our IT professionals. Choose from strategy, technical, security or project consultations.
          </p>
        </div>
        <ConsultationBooking />
      </div>
      <Footer />
    </main>
  )
}
