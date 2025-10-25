"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/funmeco-logo.png"
              alt="FUNMECO - Fundación por una mejor Colombia"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`${
                isScrolled ? "text-foreground" : "text-white"
              } hover:text-accent transition-colors font-medium`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("quienes-somos")}
              className={`${
                isScrolled ? "text-foreground" : "text-white"
              } hover:text-accent transition-colors font-medium`}
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollToSection("programas")}
              className={`${
                isScrolled ? "text-foreground" : "text-white"
              } hover:text-accent transition-colors font-medium`}
            >
              Programas
            </button>
            <button
              onClick={() => scrollToSection("casos-exito")}
              className={`${
                isScrolled ? "text-foreground" : "text-white"
              } hover:text-accent transition-colors font-medium`}
            >
              Casos de Éxito
            </button>
            <Button onClick={() => scrollToSection("contacto")} className="bg-accent text-white hover:bg-accent/90">
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-background/95 backdrop-blur-sm rounded-lg p-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("quienes-somos")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollToSection("programas")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Programas
            </button>
            <button
              onClick={() => scrollToSection("casos-exito")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Casos de Éxito
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Contacto
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
