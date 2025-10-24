"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const executives = [
  {
    name: "Mary M. Muraguri",
    role: "Chief Executive Officer (CEO) & Managing Director (MD)",
    status: "Director | Owner",
    bio: "Visionary leader and strategic business executive with expertise in corporate leadership, governance, finance and business growth. Provides overall direction for Omni-Legacy Co. Ltd., steering company strategy, compliance, partnerships and sustainable expansion within Kenya’s public and private sectors.",
    vision:
      "To position Omni-Legacy Co. Ltd. as a trusted Kenyan, woman-led technology company delivering sustainable IT solutions and transformative partnerships across Africa.",
    image: "/professional-woman-ceo.png",
    skills: [
      "Business Development",
      "Corporate Governance",
      "Strategic Leadership",
      "Finance & Risk Oversight",
      "Policy & Compliance",
      "Tendering & Procurement",
      "Investor Relations",
      "Strategic Partnerships",
      "Talent Management",
      "Organizational Vision",
    ],
  },
  {
    name: "Knoph O. Ayieko",
    role: "Chief Technology Officer (CTO)",
    status: "Founder | Director | Owner",
    bio: "Technology strategist and system architect passionate about innovation, digital transformation and sustainable IT development. Leads Omni-Legacy’s technology roadmap, software architecture, cybersecurity and digital compliance to ensure reliable, scalable and secure platforms for clients and communities.",
    vision:
      "To pioneer scalable, secure and human-centered technology solutions that transform organizations and empower African communities through innovation.",
    image: "/CTO - Knoph Ayieko.png",
    skills: [
      "Full-Stack Development",
      "Cloud & Infrastructure Management",
      "Systems Architecture",
      "Digital Health Systems",
      "Cybersecurity",
      "Innovation Strategy",
      "Data & AI Integration",
      "Compliance & Standards",
      "DevOps & Automation",
      "Agile Product Delivery",
    ],
  },
  {
    name: "Moses K. Kimutai",
    role: "Chief Finance & Compliance Officer (CFCO)",
    status: "Director",
    bio: "Finance and compliance professional with broad experience in governance, audit and regulatory affairs. Oversees financial planning, resource optimization and compliance with statutory and industry standards, ensuring Omni-Legacy remains financially sound and operationally accountable.",
    vision:
      "To build a strong financial and compliance framework that supports innovation, transparency and sustainable growth at Omni-Legacy Co. Ltd.",
    image: "/moses-kimutai-cfco.png",
    skills: [
      "Financial Strategy & Planning",
      "Corporate Governance",
      "Regulatory Compliance",
      "Risk Management",
      "Budgeting & Forecasting",
      "Investor Relations",
      "Audit & Control Systems",
      "Performance Management",
      "Data-Driven Finance",
      "Tax & Legal Compliance",
    ],
  },
  {
    name: "Maryann H. Agau",
    role: "Chief People & Partnerships Officer (CPPO)",
    status: "Non-Director",
    bio: "Operations and partnerships leader committed to people development, collaboration and impact-driven performance. Champions Omni-Legacy’s human capital strategy, workplace culture and external partnerships to enhance efficiency and long-term growth.",
    vision:
      "To cultivate a high-performance, inclusive and purpose-driven culture that empowers Omni-Legacy’s people and partnerships to thrive.",
    image: "/maryann-agau-cppo.png",
    skills: [
      "Human Resource Leadership",
      "Strategic Partnerships",
      "Operations Management",
      "Talent Development",
      "Change Management",
      "Organizational Culture",
      "Agile Project Delivery",
      "Stakeholder Engagement",
      "Diversity & Inclusion",
      "Performance Optimization",
    ],
  },
  {
    name: "Gaudencia Nyarangi",
    role: "Chief Strategy & Innovation Officer (CSIO)",
    status: "Non-Director",
    bio: "Strategy and innovation expert focused on future-proofing the company through research, market insights and growth initiatives. Drives Omni-Legacy’s innovation agenda, aligning technological advancement with long-term strategic priorities and client impact.",
    vision:
      "To drive innovation and strategic foresight that strengthen Omni-Legacy’s position as a leader in technology and sustainable business growth.",
    image: "/gaudencia-nyarangi-csio.png",
    skills: [
      "Strategic Planning",
      "Innovation Management",
      "Research & Market Insights",
      "Business Growth Strategy",
      "Product Development",
      "Technology Foresight",
      "Data Analytics",
      "Change Leadership",
      "Corporate Sustainability",
      "Competitive Intelligence",
    ],
  },
]

export function TeamSection() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="executives" className="py-20 bg-muted relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Meet Our <span className="text-primary">Executive Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our leadership combines strategic vision, technical innovation and operational excellence to drive Omni-Legacy Co. Ltd. forward as a woman-led technology company in Kenya.
          </p>
        </div>

        {/* Scrollable Executive Cards */}
        <div className="relative">
          {/* Scroll Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/70 backdrop-blur-sm rounded-full shadow-md hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6 pb-4 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-muted"
          >
            {executives.map((exec, index) => {
              const statuses = exec.status.split("|").map((s) => s.trim())
              return (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[340px] sm:w-[380px] lg:w-[420px] border-border overflow-hidden rounded-2xl shadow-md snap-center bg-background"
                >
                  <img
                    src={exec.image || "/placeholder.svg"}
                    alt={exec.name}
                    className="w-full h-64 object-contain bg-muted rounded-t-2xl"
                  />

                  <CardContent className="flex flex-col p-6 space-y-3">
                    {/* Header */}
                    <header className="text-center">
                      <h3 className="text-xl font-semibold">{exec.name}</h3>
                      <p className="text-primary font-medium">{exec.role}</p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        {statuses.map((status, i) => {
                          let element
                          if (status === "Founder")
                            element = <span key={status} className="font-semibold">Founder</span>
                          else if (status === "Owner")
                            element = <span key={status} className="italic font-normal text-muted-foreground">Owner</span>
                          else if (status === "Director")
                            element = <span key={status} className="font-bold not-italic text-foreground">Director</span>
                          else if (status === "Non-Director")
                            element = <span key={status} className="italic font-normal text-muted-foreground">Non-Director</span>

                          return (
                            <span key={i} className="inline-flex items-center">
                              {element}
                              {i < statuses.length - 1 && (
                                <span className="not-italic mx-1 text-muted-foreground">|</span>
                              )}
                            </span>
                          )
                        })}
                      </p>
                    </header>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground leading-relaxed">{exec.bio}</p>

                    {/* Vision */}
                    <div className="bg-muted p-3 rounded-lg min-h-[100px] flex items-center justify-center">
                      <p className="text-sm italic text-center text-muted-foreground">"{exec.vision}"</p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exec.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs transition-colors duration-200 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Socials */}
                    <div className="flex justify-center space-x-2 pt-2">
                      <Button variant="ghost" size="sm" aria-label={`${exec.name} LinkedIn`}>
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" aria-label={`${exec.name} Email`}>
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/70 backdrop-blur-sm rounded-full shadow-md hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
