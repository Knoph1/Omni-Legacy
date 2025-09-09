import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"

export function CareersHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
            Join Our Mission to <span className="text-primary">Transform Kenya's</span> Digital Future
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Be part of Omni-Legacy Ltd.'s growing team of innovators, developers, and technology experts. Help us build
            cutting-edge solutions that empower businesses across Kenya and East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#openings" className="flex items-center gap-2">
                View Open Positions
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
                <Users className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
