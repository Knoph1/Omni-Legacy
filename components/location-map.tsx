"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const offices = [
  {
    name: "Nairobi Headquarters",
    address: "Westlands, Nairobi, Kenya",
    phone: "+254 790 558 956",
    email: "nairobi@omni-legacy.tech",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM EAT",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OSczMS4wIkU!5e0!3m2!1sen!2ske!4v1234567890",
  },
  {
    name: "Mombasa Branch",
    address: "Nyali, Mombasa, Kenya",
    phone: "+254 790 558 957",
    email: "mombasa@omni-legacy.tech",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM EAT",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8199!2d39.7000!3d-4.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDInMzYuNiJTIDM5wrA0MicwMC4wIkU!5e0!3m2!1sen!2ske!4v1234567890",
  },
  {
    name: "Eldoret Office",
    address: "Eldoret Town, Uasin Gishu, Kenya",
    phone: "+254 790 558 958",
    email: "eldoret@omni-legacy.tech",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM EAT",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7599!2d35.2697!3d0.5143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnNTEuNSJOIDM1wrAxNicxMC45IkU!5e0!3m2!1sen!2ske!4v1234567890",
  },
]

export function LocationMap() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Our <span className="text-primary">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Visit us at any of our three offices across Kenya. We're here to serve you with local expertise and
            personalized support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {office.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${office.phone}`} className="text-sm hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${office.email}`} className="text-sm hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </div>

                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={office.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.name} location map`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
