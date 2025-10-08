import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Pioneering Technology Solutions Across <span className="text-primary">Kenya & East Africa</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Omni-Legacy Company Limited (O.L Co. Ltd.) is a Nairobi-based IT company delivering innovative software, IT
                consultancy and digital transformation services to enterprises, institutions/organizations, government & agencies,
                NGOs, SMEs and individual clients across Kenya and East Africa.
              </p>
            </div>

            <Button size="lg" asChild>
              <Link href="/team-section" className="flex items-center gap-2">
                Meet Our Founders
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
              <img
                src="/modern-office-collaboration.png"
                alt="Omni-Legacy Team Collaboration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
