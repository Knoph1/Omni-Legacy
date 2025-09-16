"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IntersectionObserver } from "@/components/intersection-observer"
import { Code, Shield, Zap, Users, BarChart3, Cloud } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions for businesses and government projects, built to your exact specifications.",
  },
  {
    icon: Users,
    title: "IT Consultancy & Systems Integration",
    description: "Strategic advice and seamless technology adoption to maximize operational efficiency.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Infrastructure",
    description: "Protecting your digital assets with best-in-class security practices and compliance.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Transformation",
    description: "Modernizing operations with scalable cloud solutions and digital innovation.",
  },
  {
    icon: BarChart3,
    title: "Training & Technical Support",
    description: "Upskilling teams and providing continuous support for sustainable growth.",
  },
  {
    icon: Zap,
    title: "Tender-Ready Solutions",
    description: "Fully compliant with AGPO and government standards for seamless procurement.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <IntersectionObserver>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Our Expertise – Transforming Your Business Through <span className="text-primary">Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Omni-Legacy Limited combines software development expertise with strategic IT consultancy to deliver
              tailored solutions for enterprises, institutions/organizations, government & agencies, NGOs, SMEs and individual clients across Kenya and beyond.
            </p>
          </div>
        </IntersectionObserver>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <IntersectionObserver key={index} className={`delay-${index * 100}`}>
              <Card className="border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </IntersectionObserver>
          ))}
        </div>
      </div>
    </section>
  )
}
