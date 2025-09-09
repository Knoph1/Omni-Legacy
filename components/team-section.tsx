import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const founders = [
  {
    name: "Mary Muthoni Muraguri",
    role: "CEO / Founder / Director",
    ownership: "75%",
    bio: "Visionary leader and strategic thinker with expertise in business development, tendering, and governance. Drives company strategy, partnerships, operations, and tender compliance.",
    vision: "Our mission is to create technology solutions that empower businesses and communities across Kenya.",
    image: "/professional-woman-ceo.png",
    skills: ["Business Development", "Strategic Planning", "Governance", "Tender Compliance"],
  },
  {
    name: "Knoph Oluoch Ayieko",
    role: "CTO / Cofounder / Co-Director",
    ownership: "20%",
    bio: "IT/Web Developer and software specialist with experience in digital health systems, full-stack web development, and IT consultancy. Leads software development, technical strategy, and cybersecurity.",
    vision: "I aim to create sustainable, innovative, and scalable IT solutions that solve real-world challenges.",
    image: "/professional-man-cto-tech-leader.jpg",
    skills: ["Full-Stack Development", "Digital Health Systems", "Cybersecurity", "Technical Strategy"],
  },
]

export function TeamSection() {
  return (
    <section id="founders" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Meet Our <span className="text-primary">Founders</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Our leadership team combines strategic business expertise with deep technical knowledge to deliver
            innovative IT solutions across Kenya and East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card key={index} className="border-border overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                  <p className="text-sm text-muted-foreground">Ownership: {founder.ownership}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{founder.bio}</p>

                <div className="bg-background p-3 rounded-lg">
                  <p className="text-sm italic text-muted-foreground">"{founder.vision}"</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {founder.skills.map((skill, skillIndex) => (
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
