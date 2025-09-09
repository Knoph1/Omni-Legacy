import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollToTopLogo } from "@/components/scroll-to-top-logo"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: "Omni-Legacy Ltd. | Leading IT Solutions & Software Development in Kenya",
  description:
    "Omni-Legacy Limited (O.L Ltd.) - Premier Kenyan IT company specializing in custom software development, IT consultancy, digital transformation, cybersecurity, and cloud solutions across Kenya and East Africa. AGPO certified.",
  keywords: [
    "IT solutions Kenya",
    "software development Kenya",
    "Omni-Legacy Limited",
    "O.L Ltd",
    "IT consultancy Kenya",
    "digital transformation Kenya",
    "cybersecurity Kenya",
    "cloud solutions Kenya",
    "custom software Kenya",
    "AGPO certified IT company",
    "Nairobi IT company",
    "East Africa IT services",
  ].join(", "),
  authors: [{ name: "Omni-Legacy Limited" }],
  creator: "Omni-Legacy Limited",
  publisher: "Omni-Legacy Limited",
  generator: "Omni-Legacy Ltd.",
  applicationName: "Omni-Legacy Ltd. Website",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#3b82f6" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://omni-legacy.tech",
    siteName: "Omni-Legacy Ltd.",
    title: "Omni-Legacy Ltd. | Leading IT Solutions & Software Development in Kenya",
    description:
      "Premier Kenyan IT company specializing in custom software development, IT consultancy, digital transformation, and cybersecurity services.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Omni-Legacy Limited - IT Solutions Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omni-Legacy Ltd. | Leading IT Solutions Kenya",
    description: "Premier Kenyan IT company specializing in custom software development and IT consultancy services.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://omni-legacy.tech",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <ScrollToTop />
          <ScrollToTopLogo />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
