"use client"

import { useEffect } from "react"

export function ScrollToTopLogo() {
  useEffect(() => {
    const handleLogoClick = (e: Event) => {
      const target = e.target as HTMLElement
      const logoLink = target.closest('a[href="/"]')

      if (logoLink && window.location.pathname === "/") {
        e.preventDefault()

        // Add highlight animation
        logoLink.classList.add("animate-pulse-glow")

        // Smooth scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })

        // Remove animation after completion
        setTimeout(() => {
          logoLink.classList.remove("animate-pulse-glow")
        }, 1000)
      }
    }

    // Add event listener to logo links
    const logoLinks = document.querySelectorAll('a[href="/"]')
    logoLinks.forEach((link) => {
      link.addEventListener("click", handleLogoClick)
    })

    return () => {
      logoLinks.forEach((link) => {
        link.removeEventListener("click", handleLogoClick)
      })
    }
  }, [])

  return null
}
