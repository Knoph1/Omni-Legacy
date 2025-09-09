import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Settings, Shield, Cloud, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Enterprise software tailored to specific business needs with scalable, integrated solutions using modern technologies.",
    features: [
      "Web applications, mobile apps, and desktop solutions",
      "Database-driven solutions (MySQL, PostgreSQL, MongoDB)",
      "Fully scalable and adaptable systems",
      "Integration with existing business systems",
    ],
    cta: "Get a Custom Solution",
    ctaLink: "/quote?service=custom-software",
  },
  {
    icon: Settings,
    title: "IT Consultancy & Systems Integration",
    description: "Strategic IT planning and seamless system integration to optimize operations and reduce costs.",
    features: [
      "IT infrastructure assessment and planning",
      "Strategic digital transformation guidance",
      "Integration of disparate systems",
      "Expert technology adoption recommendations",
    ],
    cta: "Schedule a Consultancy Session",
    ctaLink: "/consultation?type=strategy",
  },
  {
    icon: Shield,
    title: "Cybersecurity & IT Infrastructure",
    description:
      "Comprehensive security solutions and infrastructure management to protect your business and ensure compliance.",
    features: [
      "Network security audits and assessments",
      "Firewall, antivirus, and security protocol installation",
      "Cloud security and disaster recovery planning",
      "Compliance with Kenyan Data Protection Act 2019",
    ],
    cta: "Secure Your Business Today",
    ctaLink: "/consultation?type=security",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Digital Transformation",
    description: "Scalable cloud infrastructure and business process automation for future-proof technology adoption.",
    features: [
      "Cloud migration and infrastructure setup",
      "Enterprise SaaS and PaaS solutions",
      "Business process automation",
      "Enhanced collaboration and scalability",
    ],
    cta: "Transform Your Business Digitally",
    ctaLink: "/quote?service=cloud-solutions",
  },
  {
    icon: GraduationCap,
    title: "Training & Technical Support",
    description:
      "Comprehensive staff training and ongoing IT support to ensure long-term system sustainability and efficiency.",
    features: [
      "Staff training on software and IT systems",
      "Cybersecurity awareness training",
      "Ongoing IT support and system maintenance",
      "Helpdesk solutions and remote troubleshooting",
    ],
    cta: "Request Training & Support",
    ctaLink: "/quote?service=training-support",
  },
]

export function ServicesList() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            At O.L Ltd., we combine technical expertise, strategic insights, and practical solutions to deliver
            measurable results for businesses, government agencies, NGOs, and SMEs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full group bg-transparent hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link href={service.ctaLink}>
                    {service.cta}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-balance">
              Why Choose Our <span className="text-primary">Services?</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">Tailored Solutions</h4>
              <p className="text-sm text-muted-foreground">Every client receives customized technology solutions</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">Expert Team</h4>
              <p className="text-sm text-muted-foreground">
                Skilled CTO-led technical team with real project experience
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">Tender & Compliance Ready</h4>
              <p className="text-sm text-muted-foreground">
                Fully compliant for government, NGO, and corporate contracts
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">End-to-End Service</h4>
              <p className="text-sm text-muted-foreground">From consulting to deployment, training, and support</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold">Proven Results</h4>
              <p className="text-sm text-muted-foreground">Successfully implemented IT solutions for diverse clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
