import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ProjectsHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
            Delivering Innovative <span className="text-primary">IT Solutions</span> Across Kenya & Beyond
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            From government systems to enterprise software, O.L Co. Ltd. builds technology solutions that drive efficiency,
            security and growth for our clients across Kenya and East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Request a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Hire Our Team
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
