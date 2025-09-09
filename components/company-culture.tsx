import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Trophy, Globe } from "lucide-react"

const cultureValues = [
  {
    icon: Lightbulb,
    title: "Innovation & Learning",
    description:
      "We encourage continuous learning, experimentation with new technologies, and creative problem-solving approaches.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Work alongside talented professionals in a supportive team environment that values diverse perspectives and ideas.",
  },
  {
    icon: Trophy,
    title: "Excellence & Growth",
    description:
      "We're committed to delivering high-quality solutions while providing opportunities for professional development and career advancement.",
  },
  {
    icon: Globe,
    title: "Regional Impact",
    description:
      "Contribute to meaningful projects that make a real difference for businesses and communities across Kenya and East Africa.",
  },
]

export function CompanyCulture() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Why Work at <span className="text-primary">Omni-Legacy Ltd.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Join a company that values innovation, integrity, and excellence while making a meaningful impact on Kenya's
            digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cultureValues.map((value, index) => (
            <Card key={index} className="border-border text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
