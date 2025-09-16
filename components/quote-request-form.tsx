"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, CheckCircle, Clock, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function QuoteRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    projectScope: "",
    timeline: "",
    budget: "",
    requirements: "",
    urgency: "",
  })

  const calculateEstimate = () => {
    let baseCost = 0

    // Base cost by service type
    switch (formData.serviceType) {
      case "custom-software":
        baseCost = 15000
        break
      case "it-consultancy":
        baseCost = 5000
        break
      case "cybersecurity":
        baseCost = 8000
        break
      case "cloud-solutions":
        baseCost = 12000
        break
      case "training-support":
        baseCost = 3000
        break
      default:
        baseCost = 10000
    }

    // Adjust by project scope
    switch (formData.projectScope) {
      case "small":
        baseCost *= 0.7
        break
      case "medium":
        baseCost *= 1.0
        break
      case "large":
        baseCost *= 1.5
        break
      case "enterprise":
        baseCost *= 2.5
        break
    }

    // Adjust by timeline (rush jobs cost more)
    switch (formData.timeline) {
      case "1-month":
        baseCost *= 1.3
        break
      case "2-3-months":
        baseCost *= 1.1
        break
      case "3-6-months":
        baseCost *= 1.0
        break
      case "6-12-months":
        baseCost *= 0.9
        break
    }

    setEstimatedCost(Math.round(baseCost))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      calculateEstimate()
      setIsSubmitted(true)

      toast({
        title: "Quote request submitted!",
        description: "We'll send you a detailed proposal within 24 hours.",
      })
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Quote Request Received!</h3>
            <p className="text-muted-foreground">
              Thank you for your interest in our services. We've received your quote request and will prepare a detailed
              proposal.
            </p>
          </div>

          {estimatedCost && (
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Preliminary Estimate
              </h4>
              <div className="flex items-center justify-between">
                <span>Estimated Project Cost:</span>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  ${estimatedCost.toLocaleString()} USD
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                *This is a preliminary estimate. Final pricing will be provided in our detailed proposal based on
                specific requirements.
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Detailed proposal within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span>Free consultation included</span>
            </div>
          </div>

          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">
            Request Another Quote
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          Get Your Project Quote
        </CardTitle>
        <p className="text-muted-foreground">
          Tell us about your project and get an instant estimate with a detailed proposal within 48 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your Company"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+254 7XX XXX XXX"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select required onValueChange={(value) => handleInputChange("serviceType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom-software">Custom Software Development</SelectItem>
                <SelectItem value="it-consultancy">IT Consultancy & Systems Integration</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity & IT Infrastructure</SelectItem>
                <SelectItem value="cloud-solutions">Cloud Solutions & Digital Transformation</SelectItem>
                <SelectItem value="training-support">Training & Technical Support</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectScope">Project Scope *</Label>
              <Select required onValueChange={(value) => handleInputChange("projectScope", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project scope" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (1-2 features)</SelectItem>
                  <SelectItem value="medium">Medium (3-5 features)</SelectItem>
                  <SelectItem value="large">Large (6-10 features)</SelectItem>
                  <SelectItem value="enterprise">Enterprise (10+ features)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">Preferred Timeline *</Label>
              <Select required onValueChange={(value) => handleInputChange("timeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-month">1 Month (Rush)</SelectItem>
                  <SelectItem value="2-3-months">2-3 Months</SelectItem>
                  <SelectItem value="3-6-months">3-6 Months</SelectItem>
                  <SelectItem value="6-12-months">6-12 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budget Range (USD)</Label>
            <Select onValueChange={(value) => handleInputChange("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-10k">Under $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="over-100k">Over $100,000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Project Requirements *</Label>
            <Textarea
              id="requirements"
              required
              rows={4}
              value={formData.requirements}
              onChange={(e) => handleInputChange("requirements", e.target.value)}
              placeholder="Describe your project requirements, goals and any specific technical needs..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing Request...
              </>
            ) : (
              <>
                <Calculator className="h-5 w-5 mr-2" />
                Get My Quote
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Free consultation included • No obligation • Response within 48 hours
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
