import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-16 sm:py-20 lg:py-32" role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance leading-tight">
                Transforming Ideas Into <span className="text-primary">Innovative Technology Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Omni-Legacy Limited (O.L Ltd.) delivers cutting-edge software, IT services, and digital transformation
                solutions across Kenya and East Africa — from Nairobi to Mombasa and Eldoret.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Request a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center justify-center gap-2 bg-transparent w-full sm:w-auto"
                asChild
              >
                <Link href="/services">
                  <Play className="h-5 w-5" />
                  Explore Our Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 lg:pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary" aria-label="3 regional offices">
                  3
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Regional Offices</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary" aria-label="100% tender ready">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Tender Ready</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary" aria-label="24/7 support available">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-4 sm:p-8 flex items-center justify-center">
              <Image
                src="/modern-tech-dashboard-interface-with-charts-and-da.jpg"
                alt="Modern technology dashboard interface showing charts and data analytics"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-accent text-accent-foreground px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold shadow-lg text-sm sm:text-base">
              Kenyan Owned
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-primary text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold shadow-lg text-sm sm:text-base">
              Woman-Led
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
