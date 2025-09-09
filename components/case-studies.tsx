import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    client: "RetailCorp",
    industry: "E-commerce",
    challenge: "Legacy system couldn't handle peak traffic, resulting in lost sales and poor user experience.",
    solution: "Built a modern, cloud-native e-commerce platform with microservices architecture and auto-scaling.",
    results: [
      "300% increase in peak traffic handling",
      "45% reduction in page load times",
      "25% increase in conversion rates",
      "99.9% uptime during Black Friday",
    ],
    technologies: ["React", "Node.js", "AWS", "Microservices"],
    image: "/ecommerce-dashboard.png",
  },
  {
    title: "Healthcare Data Integration",
    client: "MedCenter Group",
    industry: "Healthcare",
    challenge: "Multiple disconnected systems made patient data management inefficient and error-prone.",
    solution: "Developed a unified patient management system with HIPAA-compliant data integration and real-time sync.",
    results: [
      "80% reduction in data entry time",
      "95% improvement in data accuracy",
      "50% faster patient processing",
      "Full HIPAA compliance achieved",
    ],
    technologies: ["FHIR", "HL7", "Azure", "React"],
    image: "/healthcare-system.png",
  },
  {
    title: "Manufacturing IoT Solution",
    client: "IndustrialTech",
    industry: "Manufacturing",
    challenge: "No visibility into equipment performance, leading to unexpected downtime and maintenance costs.",
    solution: "Implemented IoT sensors and predictive analytics platform for real-time equipment monitoring.",
    results: [
      "60% reduction in unplanned downtime",
      "$2M annual savings in maintenance",
      "40% improvement in OEE",
      "Real-time visibility across 50+ machines",
    ],
    technologies: ["IoT", "Machine Learning", "Time Series DB", "React"],
    image: "/manufacturing-iot.png",
  },
]

export function CaseStudies() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses across industries achieve their technology goals and drive measurable
            results.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-border overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{study.industry}</Badge>
                      <Badge variant="outline">{study.client}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{study.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge:</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Solution:</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Results:
                      </h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="group bg-transparent">
                      View Full Case Study
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
