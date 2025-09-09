"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
      onKeyDown={handleKeyDown}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Omni-Legacy Ltd. - Go to homepage"
            >
              <Image
                src="/logo.png"
                alt="Omni-Legacy Ltd. Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <span className="text-xl font-bold text-foreground">Omni-Legacy Ltd.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Projects
              </Link>
              <Link
                href="/careers"
                className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              asChild
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-background border-t border-border animate-fade-in-up"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Projects
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
