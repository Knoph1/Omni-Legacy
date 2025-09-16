import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
            Innovative IT Solutions That <span className="text-primary">Empower Your Business</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            From custom software to IT consultancy and cybersecurity, O.L Co. Ltd. provides end-to-end technology services
            for organizations across Kenya and East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Request a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View Projects & Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
