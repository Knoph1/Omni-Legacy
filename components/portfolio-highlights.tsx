import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Award, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

const highlights = [
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored to client-specific needs and requirements",
  },
  {
    icon: Award,
    title: "Technical Excellence",
    description: "Robust, scalable and secure solutions",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Tender-ready, government & NGO standards",
  },
  {
    icon: TrendingUp,
    title: "Impact-Focused",
    description: "Measurable outcomes and efficiency gains",
  },
]

export function PortfolioHighlights() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Why Our Projects <span className="text-primary">Stand Out</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Every project we deliver demonstrates our commitment to excellence, innovation and measurable business
            impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-border text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Since 2025</div>
              <div className="text-sm text-muted-foreground">Years of Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3 Cities</div>
              <div className="text-sm text-muted-foreground">Regional Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          <Button size="lg" asChild>
            <Link href="/contact">Discuss Your Project With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
