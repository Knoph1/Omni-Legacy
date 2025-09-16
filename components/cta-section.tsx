"use client"

import { Button } from "@/components/ui/button"
import { IntersectionObserver } from "@/components/intersection-observer"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-primary-foreground rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-foreground rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-primary-foreground rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <IntersectionObserver>
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Let's Build the Future Together</h2>
            <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Join organizations across Kenya and East Africa that trust Omni-Legacy Co. Ltd. to deliver innovative,
              reliable and sustainable IT solutions. Let's discuss how we can transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Request a Proposal Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/80">
                Free consultation • Tender-ready solutions • Response within 48 hours
              </p>
            </div>
          </div>
        </IntersectionObserver>
      </div>
    </section>
  )
}
