import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Heart, GraduationCap, ShoppingCart, Banknote, Factory } from "lucide-react"

const solutions = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Scalable systems for large organizations with complex workflows and integration requirements.",
    technologies: ["Microservices", "Enterprise APIs", "Cloud Infrastructure", "Security Compliance"],
    benefits: ["Improved Efficiency", "Cost Reduction", "Scalability", "Enhanced Security"],
  },
  {
    icon: Heart,
    title: "Healthcare Technology",
    description: "HIPAA-compliant solutions for healthcare providers, including patient management and telemedicine.",
    technologies: ["HIPAA Compliance", "EHR Integration", "Telemedicine", "Medical IoT"],
    benefits: ["Patient Care", "Compliance", "Operational Efficiency", "Data Security"],
  },
  {
    icon: GraduationCap,
    title: "Education Platforms",
    description: "Learning management systems and educational tools that enhance student engagement and outcomes.",
    technologies: ["LMS Development", "Mobile Learning", "Analytics", "Video Streaming"],
    benefits: ["Student Engagement", "Learning Analytics", "Accessibility", "Scalable Delivery"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment processing, inventory management, and analytics.",
    technologies: ["Payment Gateways", "Inventory Systems", "Mobile Commerce", "Analytics"],
    benefits: ["Increased Sales", "Better UX", "Inventory Control", "Customer Insights"],
  },
  {
    icon: Banknote,
    title: "Financial Services",
    description: "Secure fintech solutions including payment processing, trading platforms, and compliance tools.",
    technologies: ["Blockchain", "Payment Processing", "Risk Management", "Regulatory Compliance"],
    benefits: ["Security", "Compliance", "Automation", "Risk Reduction"],
  },
  {
    icon: Factory,
    title: "Manufacturing & IoT",
    description:
      "Industrial IoT solutions for smart manufacturing, predictive maintenance, and supply chain optimization.",
    technologies: ["IoT Sensors", "Predictive Analytics", "Supply Chain", "Automation"],
    benefits: ["Predictive Maintenance", "Cost Savings", "Quality Control", "Efficiency"],
  },
]

export function IndustrySolutions() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Tailored <span className="text-primary">Industry Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Our deep industry expertise allows us to deliver solutions that address specific challenges and
            opportunities in your sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
