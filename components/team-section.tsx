import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const executives = [
  {
    name: "Mary M. Muraguri",
    role: "Chief Executive Officer (CEO) & Managing Director (MD)",
    ownership: "71% Owner • Director",
    bio: "Visionary leader and strategic business executive with expertise in corporate leadership, governance, and business growth. Oversees company strategy, finance, HR, legal compliance, and tender acquisition across government and private sectors.",
    vision: "To position Omni-Legacy Co. Ltd. as a trusted Kenyan, woman-led technology company delivering sustainable IT solutions and impactful partnerships.",
    image: "/professional-woman-ceo.png",
    skills: ["Business Development", "Strategic Leadership", "Governance", "Tendering", "Investor Relations"],
  },
  {
    name: "Knoph O. Ayieko",
    role: "Founder, Chief Technology Officer (CTO) & Director",
    ownership: "24% Owner • Director",
    bio: "Founder and technology strategist with deep expertise in IT, software engineering, and digital health systems. Leads Omni-Legacy’s technology vision, innovation strategy, quality assurance and compliance with industry standards and the Companies Act (Kenya).",
    vision: "To pioneer scalable, secure, and innovative technology solutions that transform businesses and empower communities across Africa.",
    image: "/professional-man-cto-tech-leader.png",
    skills: ["Full-Stack Development", "Cybersecurity", "Digital Health Systems", "Innovation Strategy", "Compliance"],
  },
  {
    name: "MaryAnn H. Agau",
    role: "Chief Operations & Partnerships Officer (COPO)",
    ownership: "No Ownership • Not a Director",
    bio: "Operations and partnerships specialist ensuring efficiency, collaboration and execution. Oversees company operations, project management, tender documentation and partnership development while aligning strategy with the CEO and CTO.",
    vision: "To drive operational excellence and build strong partnerships that enable Omni-Legacy to deliver value-driven projects and solutions.",
    image: "/professional-woman-copo.png",
    skills: ["Operations Management", "Partnerships", "Project Execution", "Tender Documentation", "Client Relations"],
  },
]

export function TeamSection() {
  return (
    <section id="executives" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Meet Our <span className="text-primary">Executive Team</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Our leadership combines strategic vision, technical innovation, and operational excellence 
            to drive Omni-Legacy Co. Ltd. forward as a woman-led technology company in Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {executives.map((exec, index) => (
            <Card key={index} className="border-border overflow-hidden rounded-2xl shadow-md">
              <div className="aspect-square overflow-hidden">
                <img
                  src={exec.image || "/placeholder.svg"}
                  alt={exec.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{exec.name}</h3>
                  <p className="text-primary font-medium">{exec.role}</p>
                  <p className="text-sm text-muted-foreground">{exec.ownership}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{exec.bio}</p>

                <div className="bg-background p-3 rounded-lg">
                  <p className="text-sm italic text-muted-foreground">"{exec.vision}"</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exec.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
