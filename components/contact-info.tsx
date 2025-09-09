import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Calendar, Building2 } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Reach Us Directly</h2>
            <p className="text-muted-foreground leading-relaxed">
              Connect with Omni-Legacy Ltd. through multiple channels. We're here to discuss your technology needs and
              provide expert guidance for your projects.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">General Inquiries:</span>
                    <a href="mailto:info@omni-legacy.tech" className="text-primary hover:underline">
                      info@omni-legacy.tech
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Website:</span>
                    <a href="https://www.omni-legacy.tech" className="text-primary hover:underline">
                      www.omni-legacy.tech
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Speak directly with our team during business hours.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Main Line:</span>
                    <a href="tel:+254790558956" className="text-primary hover:underline">
                      +254 790 558 956
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  Schedule a Meeting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Book a consultation to discuss your IT project requirements and get expert recommendations.
                </p>
                <Button className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Visit Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Headquarters - Nairobi
                    </p>
                    <p className="text-muted-foreground text-sm ml-6">Nairobi, Kenya</p>
                  </div>
                  <div>
                    <p className="font-medium">Branch Offices:</p>
                    <p className="text-muted-foreground text-sm">
                      • Mombasa Branch
                      <br />• Eldoret Branch
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM EAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM EAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-2 text-muted-foreground">
                    <span>Emergency IT support available on request</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-primary" />
                  Business Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Banking:</span>
                    <span>Equity Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Authorized Signatories:</span>
                    <span>CEO & CTO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Compliance:</span>
                    <span>AGPO Ready</span>
                  </div>
                  <div className="pt-2 text-muted-foreground">
                    <span>Fully compliant for government and NGO tenders</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
