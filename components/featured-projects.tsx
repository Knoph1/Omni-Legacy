import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Code, ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "Kenya Digital Health Ecosystem (KDHE)",
    client: "UNES Ltd. / USAID",
    year: "2024–2025",
    category: "HealthIT Project",
    description:
      "Comprehensive digital health systems for health data management, automated reporting, and patient record integration across Kenya's health infrastructure.",
    techStack: ["Python (Flask)", "PostgreSQL", "MySQL", "React.js"],
    scope: [
      "Developed digital health systems for health data management",
      "Automated reporting and analytics for government health departments",
      "Integrated patient record management (KMHFR, CPIMS, KenyaEMR)",
    ],
    outcomes: [
      "Streamlined health data collection and reporting",
      "Enhanced patient record accessibility and analytics",
    ],
    image: "/healthcare-system.png",
  },
  {
    title: "NASCOP Website Revamp & Digital Solutions",
    client: "Ministry of Health (Kenya)",
    year: "2025",
    category: "Government Digital Solutions",
    description:
      "Complete website redesign and digital transformation for Kenya's National AIDS & STI Control Programme with enhanced security and user experience.",
    techStack: ["PHP", "WordPress", "MySQL"],
    scope: [
      "Redesigned website for responsive, secure, and user-friendly access",
      "Integrated content management and interactive dashboards",
    ],
    outcomes: ["Improved public access to health information", "Enabled real-time content updates for staff"],
    image: "/government-website.jpg",
  },
  {
    title: "Ashker Credit Solution MVP",
    client: "ALX Africa (Fintech Pilot)",
    year: "2024–2025",
    category: "Fintech Development",
    description:
      "Minimum viable product for innovative credit solutions with secure backend infrastructure and customer portal for financial services pilot testing.",
    techStack: ["Python (Flask)", "PostgreSQL"],
    scope: ["Built a minimum viable product for credit solutions", "Developed secure backend and customer portal"],
    outcomes: ["Fast, reliable, and secure platform for financial pilot testing"],
    image: "/fintech-dashboard.jpg",
  },
  {
    title: "AcePapers Writers Platform",
    client: "Private SME",
    year: "2024",
    category: "Platform Development",
    description:
      "Comprehensive platform connecting clients with professional writers, featuring secure payment processing and project management tools.",
    techStack: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
    scope: ["Developed a platform connecting clients with writers", "Implemented secure payments and project tracking"],
    outcomes: ["Streamlined freelance operations and payment workflow"],
    image: "/writers-platform.jpg",
  },
  {
    title: "UoK Research Grants Portal",
    client: "University of Kabianga",
    year: "2024",
    category: "Educational Technology",
    description:
      "Digital portal for research grant applications and management with automated approval workflows and comprehensive reporting systems.",
    techStack: ["Laravel", "MySQL"],
    scope: [
      "Built portal for research grant applications and management",
      "Automated approval workflows and reporting",
    ],
    outcomes: ["Reduced administrative workload and enhanced transparency"],
    image: "/university-portal.jpg",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Featured <span className="text-primary">Projects & Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Our portfolio reflects our expertise across software development, IT systems integration, digital
            transformation, and technical support. Every project is tailored to meet unique client needs.
          </p>
        </div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="border-border overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                      <Users className="h-4 w-4 ml-2" />
                      {project.client}
                    </div>
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Project Scope:</h4>
                      <ul className="space-y-1">
                        {project.scope.map((item, scopeIndex) => (
                          <li key={scopeIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Outcomes:</h4>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button variant="outline" className="group bg-transparent">
                    View Case Study
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
