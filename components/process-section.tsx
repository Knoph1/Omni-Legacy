import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, FileText, Code, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, technical requirements, and project constraints.",
    duration: "1-2 weeks",
  },
  {
    icon: FileText,
    title: "Design & Architecture",
    description: "Our team creates detailed technical specifications and user experience designs for your project.",
    duration: "2-3 weeks",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "We build your solution using agile methodologies with continuous testing and quality assurance.",
    duration: "4-12 weeks",
  },
  {
    icon: Rocket,
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance and growth.",
    duration: "Ongoing",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology that ensures successful project delivery and exceeds client expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="border-border text-center relative">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                <div className="text-sm font-semibold text-primary">{step.duration}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
