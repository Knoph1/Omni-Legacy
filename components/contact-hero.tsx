import { MessageCircle, Calendar, Phone } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
            Let's Build the Future of <span className="text-primary">Technology Together</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Get in touch with Omni-Legacy Ltd. for software development, IT consultancy, digital transformation, and
            technical support across Kenya and East Africa.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Quick Response</h3>
              <p className="text-sm text-muted-foreground text-center">We respond to all inquiries within 24 hours</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Free Consultation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Complimentary project assessment and strategy session
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Expert Team</h3>
              <p className="text-sm text-muted-foreground text-center">
                Direct access to our CTO and technical specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
