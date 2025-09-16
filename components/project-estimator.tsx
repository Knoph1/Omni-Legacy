"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle } from "lucide-react"

const projectTypes = [
  { id: "web-app", name: "Web Application", basePrice: 25000, complexity: 1 },
  { id: "mobile-app", name: "Mobile App", basePrice: 35000, complexity: 1.2 },
  { id: "enterprise", name: "Enterprise Solution", basePrice: 75000, complexity: 2 },
  { id: "ecommerce", name: "E-commerce Platform", basePrice: 45000, complexity: 1.5 },
  { id: "ai-ml", name: "AI/ML Solution", basePrice: 60000, complexity: 1.8 },
]

const features = [
  { id: "auth", name: "User Authentication", price: 5000 },
  { id: "payments", name: "Payment Processing", price: 8000 },
  { id: "admin", name: "Admin Dashboard", price: 12000 },
  { id: "api", name: "REST API", price: 6000 },
  { id: "mobile-responsive", name: "Mobile Responsive", price: 4000 },
  { id: "analytics", name: "Analytics Integration", price: 7000 },
  { id: "third-party", name: "Third-party Integrations", price: 10000 },
  { id: "real-time", name: "Real-time Features", price: 15000 },
]

const timelines = [
  { id: "rush", name: "Rush (< 2 months)", multiplier: 1.5 },
  { id: "standard", name: "Standard (2-4 months)", multiplier: 1 },
  { id: "extended", name: "Extended (4+ months)", multiplier: 0.9 },
]

export function ProjectEstimator() {
  const [selectedProject, setSelectedProject] = useState<string>("")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard")
  const [showEstimate, setShowEstimate] = useState(false)

  const calculateEstimate = () => {
    if (!selectedProject) return 0

    const project = projectTypes.find((p) => p.id === selectedProject)
    if (!project) return 0

    const basePrice = project.basePrice
    const featuresPrice = selectedFeatures.reduce((total, featureId) => {
      const feature = features.find((f) => f.id === featureId)
      return total + (feature?.price || 0)
    }, 0)

    const timeline = timelines.find((t) => t.id === selectedTimeline)
    const timelineMultiplier = timeline?.multiplier || 1

    return Math.round((basePrice + featuresPrice) * timelineMultiplier)
  }

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
    )
  }

  const handleGetEstimate = () => {
    setShowEstimate(true)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Project <span className="text-primary">Estimator</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Get an instant estimate for your project. This tool provides a rough estimate based on typical project
            requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Project Estimator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Project Type Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">1. Select Project Type</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectTypes.map((project) => (
                    <Card
                      key={project.id}
                      className={`cursor-pointer transition-all ${
                        selectedProject === project.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <h4 className="font-medium">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Starting at ${project.basePrice.toLocaleString()}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Features Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">2. Select Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features.map((feature) => (
                    <Card
                      key={feature.id}
                      className={`cursor-pointer transition-all ${
                        selectedFeatures.includes(feature.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => toggleFeature(feature.id)}
                    >
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{feature.name}</h4>
                          <p className="text-xs text-muted-foreground">+${feature.price.toLocaleString()}</p>
                        </div>
                        {selectedFeatures.includes(feature.id) && <CheckCircle className="h-4 w-4 text-primary" />}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Timeline Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">3. Select Timeline</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {timelines.map((timeline) => (
                    <Card
                      key={timeline.id}
                      className={`cursor-pointer transition-all ${
                        selectedTimeline === timeline.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedTimeline(timeline.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <h4 className="font-medium">{timeline.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {timeline.multiplier > 1 && "+"}
                          {timeline.multiplier < 1 && "-"}
                          {timeline.multiplier !== 1 && Math.abs((timeline.multiplier - 1) * 100).toFixed(0)}
                          {timeline.multiplier !== 1 && "%"}
                          {timeline.multiplier === 1 && "Standard pricing"}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Get Estimate Button */}
              <div className="text-center">
                <Button size="lg" onClick={handleGetEstimate} disabled={!selectedProject} className="min-w-[200px]">
                  Get Estimate
                </Button>
              </div>

              {/* Estimate Result */}
              {showEstimate && selectedProject && (
                <Card className="border-primary bg-primary/5">
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="text-2xl font-bold">Estimated Project Cost</h3>
                    <div className="text-4xl font-bold text-primary">${calculateEstimate().toLocaleString()}</div>
                    <div className="space-y-2">
                      <Badge variant="secondary">Rough Estimate</Badge>
                      <p className="text-sm text-muted-foreground">
                        This is a rough estimate based on typical project requirements. Final pricing may vary based on
                        specific needs, complexity and scope changes.
                      </p>
                    </div>
                    <Button asChild>
                      <a href="#contact-form">Get Detailed Quote</a>
                    </Button>
                  </CardContent>
                </Card>
              )}

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  This estimator provides rough pricing based on typical projects. For accurate quotes, please contact
                  our team with your specific requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
