import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QuoteRequestForm } from "@/components/quote-request-form"

export const metadata: Metadata = {
  title: "Get IT Project Quote Kenya | Free Estimate | Custom Software Development - Omni-Legacy Co. Ltd.",
  description:
    "Get instant quote for your IT project in Kenya. Free consultation and detailed proposal within 24 hours. Custom software development, cybersecurity, cloud solutions and IT consultancy services. AGPO certified company.",
  keywords: [
    "IT project quote Kenya",
    "software development quote",
    "IT consultation Kenya",
    "free IT estimate Kenya",
    "custom software quote",
    "cybersecurity quote Kenya",
    "cloud solutions quote",
    "IT project cost Kenya",
  ].join(", "),
  openGraph: {
    title: "Get IT Project Quote Kenya | Free Estimate - Omni-Legacy Co. Ltd.",
    description: "Get instant quote for your IT project with free consultation and detailed proposal within 24 hours.",
    url: "https://omni-legacy.tech/quote",
    siteName: "Omni-Legacy Co. Ltd.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Get IT Project Quote Kenya - Omni-Legacy Company Limited",
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
    canonical: "https://omni-legacy.tech/quote",
  },
}

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-foreground">Get Your Project Quote</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate and detailed proposal for your IT project. Free consultation included.
          </p>
        </div>
        <QuoteRequestForm />
      </div>
      <Footer />
    </main>
  )
}
