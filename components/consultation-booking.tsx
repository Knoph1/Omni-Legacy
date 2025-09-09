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
import { Calendar, Clock, DollarSign, CheckCircle, Video, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const consultationTypes = [
  {
    id: "strategy",
    name: "IT Strategy Consultation",
    duration: "60 minutes",
    price: 150,
    description: "Strategic IT planning and digital transformation roadmap",
  },
  {
    id: "technical",
    name: "Technical Architecture Review",
    duration: "90 minutes",
    price: 200,
    description: "System architecture analysis and recommendations",
  },
  {
    id: "security",
    name: "Cybersecurity Assessment",
    duration: "120 minutes",
    price: 250,
    description: "Security audit and compliance review",
  },
  {
    id: "project",
    name: "Project Scoping Session",
    duration: "45 minutes",
    price: 100,
    description: "Detailed project requirements and feasibility analysis",
  },
]

export function ConsultationBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedConsultation, setSelectedConsultation] = useState<string>("")
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    meetingType: "",
    objectives: "",
    currentChallenges: "",
  })

  const selectedType = consultationTypes.find((type) => type.id === formData.consultationType)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitted(true)

      toast({
        title: "Consultation booked successfully!",
        description: "We'll send you a calendar invite and payment details shortly.",
      })
    } catch (error) {
      toast({
        title: "Booking failed",
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
            <h3 className="text-2xl font-bold">Consultation Booked!</h3>
            <p className="text-muted-foreground">
              Your consultation has been scheduled. We'll send you a calendar invite and payment instructions within the
              next hour.
            </p>
          </div>

          {selectedType && (
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h4 className="font-semibold">Booking Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="font-medium">{selectedType.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{selectedType.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fee:</span>
                  <Badge variant="secondary">${selectedType.price} USD</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Date & Time:</span>
                  <span>
                    {formData.preferredDate} at {formData.preferredTime}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Payment is due before the consultation. We accept M-Pesa, bank transfer, or card payments.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Book Another Consultation
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          Book a Consultation
        </CardTitle>
        <p className="text-muted-foreground">
          Schedule a paid consultation with our experts to discuss your IT needs and get professional recommendations.
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
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+254 7XX XXX XXX"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="consultationType">Consultation Type *</Label>
            <Select required onValueChange={(value) => handleInputChange("consultationType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select consultation type" />
              </SelectTrigger>
              <SelectContent>
                {consultationTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="font-medium">{type.name}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-medium">${type.price}</div>
                        <div className="text-sm text-muted-foreground">{type.duration}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <Select required onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="09:00">9:00 AM EAT</SelectItem>
                  <SelectItem value="10:00">10:00 AM EAT</SelectItem>
                  <SelectItem value="11:00">11:00 AM EAT</SelectItem>
                  <SelectItem value="14:00">2:00 PM EAT</SelectItem>
                  <SelectItem value="15:00">3:00 PM EAT</SelectItem>
                  <SelectItem value="16:00">4:00 PM EAT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="meetingType">Meeting Type *</Label>
            <Select required onValueChange={(value) => handleInputChange("meetingType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select meeting type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video">
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Video Call (Zoom/Teams)
                  </div>
                </SelectItem>
                <SelectItem value="phone">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Call
                  </div>
                </SelectItem>
                <SelectItem value="in-person">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    In-Person (Nairobi Office)
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="objectives">Consultation Objectives *</Label>
            <Textarea
              id="objectives"
              required
              rows={3}
              value={formData.objectives}
              onChange={(e) => handleInputChange("objectives", e.target.value)}
              placeholder="What do you hope to achieve from this consultation?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentChallenges">Current Challenges</Label>
            <Textarea
              id="currentChallenges"
              rows={3}
              value={formData.currentChallenges}
              onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
              placeholder="Describe any current IT challenges or pain points..."
            />
          </div>

          {selectedType && (
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{selectedType.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedType.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-lg font-bold">
                    <DollarSign className="h-4 w-4" />
                    {selectedType.price}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {selectedType.duration}
                  </div>
                </div>
              </div>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Booking Consultation...
              </>
            ) : (
              <>
                <Calendar className="h-5 w-5 mr-2" />
                Book Consultation
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Payment required before consultation • Calendar invite will be sent • Rescheduling available up to 24 hours
            before
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
