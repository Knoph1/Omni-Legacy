import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react"

const jobOpenings = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Join our development team to build scalable web applications and enterprise software solutions for clients across Kenya.",
    requirements: [
      "Strong experience with React, Node.js, and Python",
      "Database experience with PostgreSQL/MySQL",
      "Experience with cloud platforms (AWS/Azure)",
      "Knowledge of modern development practices",
    ],
    skills: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
  },
  {
    title: "IT Consultant",
    department: "Consulting",
    location: "Nairobi/Mombasa, Kenya",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Provide strategic IT guidance and system integration services to government agencies, NGOs, and enterprises.",
    requirements: [
      "Experience in IT infrastructure assessment",
      "Knowledge of system integration practices",
      "Strong communication and client management skills",
      "Understanding of Kenyan business environment",
    ],
    skills: ["IT Strategy", "System Integration", "Client Management", "Project Management"],
  },
  {
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "2-3 years",
    description:
      "Implement and maintain security solutions, conduct audits, and ensure compliance with data protection regulations.",
    requirements: [
      "Experience with network security and firewalls",
      "Knowledge of compliance frameworks",
      "Understanding of Kenya Data Protection Act",
      "Security certification preferred",
    ],
    skills: ["Network Security", "Compliance", "Risk Assessment", "Security Audits"],
  },
  {
    title: "Junior Software Developer",
    department: "Engineering",
    location: "Nairobi/Eldoret, Kenya",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Start your career with us! Learn from experienced developers while contributing to real-world projects.",
    requirements: [
      "Computer Science degree or equivalent",
      "Basic programming knowledge (Python, JavaScript, or PHP)",
      "Eagerness to learn and grow",
      "Strong problem-solving skills",
    ],
    skills: ["Python", "JavaScript", "HTML/CSS", "Git", "Problem Solving"],
  },
]

export function JobOpenings() {
  return (
    <section id="openings" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Current <span className="text-primary">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Explore exciting career opportunities with Omni-Legacy Ltd. and help shape the future of technology in
            Kenya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{job.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{job.department}</Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {job.experience}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full group">
                  Apply for this Position
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
