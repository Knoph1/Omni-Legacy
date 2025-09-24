import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"

const offices = [
  {
    name: "Nairobi Headquarters",
    address: "Nairobi, Kenya",
    description: "Main office and technical operations center",
    isHQ: true,
  },
  {
    name: "Mombasa Office",
    address: "Mombasa, Kenya",
    description: "Coastal region operations and client services",
  },
  {
    name: "Eldoret Office",
    address: "Eldoret, Kenya",
    description: "Rift Region & Western Kenya operations and support",
  },
]

export function OfficeLocations() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Visit Our <span className="text-primary">Offices</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Our offices are strategically located to serve clients across Kenya. Visit us or schedule a consultation at
            a branch nearest you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <Card key={index} className={`border-border ${office.isHQ ? "ring-2 ring-primary/20" : ""}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  {office.name}
                  {office.isHQ && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">HQ</span>}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-sm">{office.address}</p>
                  <p className="text-muted-foreground text-sm mt-1">{office.description}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+254 790 558 956</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Mon-Fri: 8:00 AM - 5:00 PM EAT</span>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
