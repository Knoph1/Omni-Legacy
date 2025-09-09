import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function SolutionsHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
            Industry-Specific <span className="text-primary">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            We understand that every industry has unique challenges. Our tailored solutions are designed to address
            specific business needs and drive measurable results across various sectors.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              Explore Solutions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
