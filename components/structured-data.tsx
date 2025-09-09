export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Omni-Legacy Limited",
    alternateName: "O.L Ltd.",
    url: "https://omni-legacy.tech",
    logo: "https://omni-legacy.tech/logo.png",
    description:
      "Leading Kenyan IT company specializing in custom software development, IT consultancy, digital transformation, cybersecurity, and cloud solutions across Kenya and East Africa.",
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Mary Muthoni Muraguri",
        jobTitle: "Chief Executive Officer",
      },
      {
        "@type": "Person",
        name: "Knoph Oluoch Ayieko",
        jobTitle: "Chief Technology Officer",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "Kenya",
      addressRegion: "Nairobi County",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-790-558-956",
      contactType: "customer service",
      email: "info@omni-legacy.tech",
      availableLanguage: ["English", "Swahili"],
    },
    sameAs: [
      "https://linkedin.com/company/omni-legacy",
      "https://twitter.com/omnilegacy",
      "https://github.com/omni-legacy",
    ],
    serviceArea: {
      "@type": "Country",
      name: "Kenya",
    },
    areaServed: ["Kenya", "East Africa"],
    knowsAbout: [
      "Software Development",
      "IT Consultancy",
      "Cybersecurity",
      "Cloud Solutions",
      "Digital Transformation",
      "Technical Training",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
            description: "Tailored software solutions for businesses and government projects",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consultancy & Systems Integration",
            description: "Strategic IT planning and seamless system integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cybersecurity & IT Infrastructure",
            description: "Comprehensive security solutions and infrastructure management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Solutions & Digital Transformation",
            description: "Scalable cloud infrastructure and business process automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Training & Technical Support",
            description: "Staff training and ongoing IT support services",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
}
