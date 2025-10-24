import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const executives = [
  {
    name: "Mary M. Muraguri",
    role: "Chief Executive Officer (CEO) & Managing Director (MD)",
    status: "Director | Owner",
    bio: "Visionary leader and strategic business executive with expertise in corporate leadership, governance and business growth. Oversees company strategy, finance, HR, legal compliance and tender acquisition across government and private sectors.",
    vision:
      "To position Omni-Legacy Co. Ltd. as a trusted Kenyan, woman-led technology company delivering sustainable IT solutions and impactful partnerships.",
    image: "/professional-woman-ceo.png",
    skills: [
      "Business Development",
      "Strategic Leadership",
      "Governance",
      "Tendering",
      "Investor Relations",
      "Strategic Vision",
      "Financial Acumen",
      "Market Analysis",
      "Negotiation",
      "Talent Management",
    ],
  },
  {
    name: "Knoph O. Ayieko",
    role: "Chief Technology Officer (CTO)",
    status: "Founder | Director | Owner",
    bio: "Founder and technology strategist with deep expertise in IT, software engineering and digital health systems. Leads Omni-Legacy’s technology vision, innovation strategy, quality assurance and compliance with industry standards and the Companies Act (Kenya).",
    vision:
      "To pioneer scalable, secure and innovative technology solutions that transform businesses and empower communities across Africa.",
    image: "/CTO - Knoph Ayieko.png",
    skills: [
      "Full-Stack Development",
      "Cybersecurity",
      "Digital Systems",
      "Innovation Strategy",
      "Compliance",
      "Systems Architecture",
      "Cloud & Infrastructure Management",
      "Data & AI Integration",
      "DevOps & Automation",
    ],
  },
  {
    name: "Gaudencia Nyarangi",
    role: "Chief Operations & Partnerships Officer (COPO)",
    status: "Non-Director",
    bio: "Operations and partnerships specialist ensuring efficiency, collaboration and execution. Oversees company operations, project management, tender documentation and partnership development while aligning strategy with the CEO and CTO.",
    vision:
      "To drive operational excellence and build strong partnerships that enable Omni-Legacy to deliver value-driven projects and solutions.",
    image: "/professional-woman-copo.png",
    skills: [
      "Operations Management",
      "Partnerships",
      "Project Execution",
      "Tender Documentation",
      "Client Relations",
      "Product Management",
      "Agile Methodologies",
      "Risk Management",
      "Business Process Optimization",
    ],
  },
]

export function TeamSection() {
  return (
    <section id="executives" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Meet Our <span className="text-primary">Executive Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our leadership combines strategic vision, technical innovation and
            operational excellence to drive Omni-Legacy Co. Ltd. forward as a
            woman-led technology company in Kenya.
          </p>
        </div>

        {/* Executives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {executives.map((exec, index) => {
            // Split the status string by "|" to handle multiple tags dynamically
            const statuses = exec.status.split("|").map((s) => s.trim())

            return (
              <Card
                key={index}
                className="flex flex-col h-full border-border overflow-hidden rounded-2xl shadow-md p-0"
              >
                {/* Executive Image */}
                <img
                  src={exec.image || "/placeholder.svg"}
                  alt={exec.name}
                  className="w-full h-auto object-contain rounded-t-2xl m-0"
                />

                {/* Executive Content */}
                <CardContent className="flex flex-col flex-1 p-6 justify-between">
                  <div>
                    {/* Header */}
                    <header className="mb-2 text-center">
                      <div className="min-h-[100px] flex flex-col justify-start items-center">
                        <h3 className="text-xl font-semibold">{exec.name}</h3>
                        <p className="text-primary font-medium mt-1">
                          {exec.role}
                        </p>
                      </div>

                      {/* Status Section */}
                      <p className="text-sm mt-2 italic text-muted-foreground">
                        {statuses.map((status, i) => {
                          let element = null

                          if (status === "Founder") {
                            element = (
                              <>
                                <span
                                  key={`${status}-1`}
                                  className="font-semibold"
                                >
                                  Founder
                                </span>{" "}
                              </>
                            )
                          } else if (status === "Owner") {
                            element = (
                              <span
                                key={status}
                                className="italic font-normal text-muted-foreground"
                              >
                                Owner
                              </span>
                            )
                          } else if (status === "Director") {
                            element = (
                              <span
                                key={status}
                                className="font-bold not-italic text-foreground"
                              >
                                Director
                              </span>
                            )
                          } else if (status === "Non-Director") {
                            element = (
                              <span
                                key={status}
                                className="italic font-normal text-muted-foreground"
                              >
                                Non-Director
                              </span>
                            )
                          }

                          // Add separators between statuses
                          return (
                            <span key={i}>
                              {element}
                              {i < statuses.length - 1 && " | "}
                            </span>
                          )
                        })}
                      </p>
                    </header>

                    {/* Bio */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exec.bio}
                    </p>

                    {/* Vision */}
                    <div className="bg-background p-3 rounded-lg min-h-[140px] flex items-center justify-center mt-4">
                      <p className="text-sm italic text-muted-foreground text-center">
                        "{exec.vision}"
                      </p>
                    </div>
                  </div>

                  {/* Skills & Actions */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {exec.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs transition-colors duration-200 cursor-pointer 
                                     hover:bg-primary hover:text-primary-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-2 pt-3 justify-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label={`${exec.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label={`${exec.name} Email`}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
