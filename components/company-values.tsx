import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Shield, Users, Heart, Handshake } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We create solutions that push boundaries and solve unique challenges, staying ahead of technology trends.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent, ethical, and honest in all dealings with clients, partners and stakeholders.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description:
      "High-quality delivery on every project, maintaining the highest standards in code quality and service.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description:
      "Tailored services to meet each client's unique needs, building long-term partnerships based on trust.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Building strong relationships with clients, partners and stakeholders across Kenya and East Africa.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide our approach to technology solutions and shape how we serve businesses
            across Kenya and East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-border text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
