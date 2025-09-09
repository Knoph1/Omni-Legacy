import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, CheckCircle, Mail } from "lucide-react"
import Link from "next/link"

const processSteps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Send your CV and cover letter to our HR team",
  },
  {
    icon: Users,
    title: "Initial Interview",
    description: "Phone or video call with our hiring team",
  },
  {
    icon: CheckCircle,
    title: "Technical Assessment",
    description: "Skills evaluation relevant to the position",
  },
  {
    icon: Mail,
    title: "Final Decision",
    description: "We'll get back to you within one week",
  },
]

export function ApplicationProcess() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Application <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Our straightforward hiring process is designed to help us get to know you and for you to learn about us.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <Card key={index} className="border-border text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-primary font-medium">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ready to Join Our Team?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Don't see a position that matches your skills? We're always looking for talented individuals. Send us your
              CV and let us know how you can contribute to our mission.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:info@omni-legacy.tech?subject=Career Opportunity">Send Your CV</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact HR Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
