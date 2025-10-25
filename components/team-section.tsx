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
    bio: "Visionary leader and strategic business executive with expertise in corporate leadership, governance, finance, and business growth.",
    vision:
      "To position Omni-Legacy Co. Ltd. as a trusted Kenyan, woman-led technology company delivering sustainable IT solutions and transformative partnerships across Africa.",
    image: "/ceo-mary-muraguri.png",
    skills: ["Leadership", "Corporate Governance", "Strategic Vision"],
  },
  {
    name: "Knoph O. Ayieko",
    role: "Chief Technology Officer (CTO)",
    status: "Founder | Director | Owner",
    bio: "Technology strategist and system architect passionate about innovation, digital transformation and sustainable IT development.",
    vision:
      "To pioneer scalable, secure, and human-centered technology solutions that transform organizations and empower African communities.",
    image: "/cto-knoph-ayieko.png",
    skills: ["Software Architecture", "Cybersecurity", "Innovation"],
  },
  // Add others as above...
]

export function TeamSection() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    })
  }

  return (
    <section id="executives" className="py-20 bg-muted relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Meet Our <span className="text-primary">Executive Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our leadership combines strategic vision, technical innovation, and operational excellence.
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="flex justify-between mb-6">
          <Button variant="outline" size="icon" onClick={() => scroll("left")}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/40 pb-4 snap-x snap-mandatory"
        >
          {executives.map((exec, i) => (
            <Card
              key={i}
              className="flex flex-col min-w-[320px] max-w-[360px] flex-shrink-0 border rounded-2xl shadow-md snap-center bg-background hover:scale-[1.02] transition-transform h-[800px]"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <CardContent className="flex flex-col justify-between flex-1 p-6 text-center">
                <div>
                  <h3 className="text-xl font-semibold">{exec.name}</h3>
                  <p className="text-primary font-medium mt-1">{exec.role}</p>
                  <p className="text-sm mt-2 text-muted-foreground">{exec.status}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {exec.bio}
                </p>

                <div className="bg-background p-3 rounded-lg mt-4">
                  <p className="text-sm italic text-muted-foreground">
                    “{exec.vision}”
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {exec.skills.map((skill, s) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2 pt-4 justify-center">
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
