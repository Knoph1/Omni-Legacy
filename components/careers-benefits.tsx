import { Card, CardContent } from "@/components/ui/card"
import { Heart, GraduationCap, Zap, Users, MapPin, Trophy } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Competitive Compensation",
    description: "Attractive salary packages with performance-based bonuses and regular reviews",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Training opportunities, conference attendance, and certification support",
  },
  {
    icon: Zap,
    title: "Flexible Work Environment",
    description: "Hybrid work options and flexible hours to support work-life balance",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work with talented professionals in a supportive and inclusive environment",
  },
  {
    icon: MapPin,
    title: "Multiple Locations",
    description: "Opportunities across our Nairobi, Mombasa, and Eldoret offices",
  },
  {
    icon: Trophy,
    title: "Career Growth",
    description: "Clear advancement paths and leadership development opportunities",
  },
]

export function CareersBenefits() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Benefits & <span className="text-primary">Perks</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            We believe in taking care of our team members and providing an environment where everyone can thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
