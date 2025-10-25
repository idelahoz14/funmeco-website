"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const phoneNumber = "573225881546"
  const message = encodeURIComponent("Hola, me gustaría obtener más información sobre FUNMECO")

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      console.error("Error:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <section id="contacto" className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Overlay animado */}
      {status !== "idle" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fade-in">
          {status === "loading" && (
            <div className="flex flex-col items-center space-y-3 text-white">
              <Loader2 className="w-10 h-10 animate-spin" />
              <p className="text-lg font-medium">Enviando mensaje...</p>
            </div>
          )}

          {status === "success" && (
            <div className="flex flex-col items-center space-y-3 text-white animate-scale-up">
              <CheckCircle className="w-12 h-12 text-green-400" />
              <p className="text-lg font-semibold">¡Mensaje enviado con éxito!</p>
            </div>
          )}

          {status === "error" && (
            <div className="flex flex-col items-center space-y-3 text-white animate-scale-up">
              <XCircle className="w-12 h-12 text-red-400" />
              <p className="text-lg font-semibold">Hubo un error al enviar el mensaje.</p>
            </div>
          )}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">¡Contáctanos!</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Estamos aquí para responder tus preguntas y recibir tu apoyo
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vía Telefónica</h4>
                    <p className="text-muted-foreground">+57 322 588 1546</p>
                    <p className="text-muted-foreground">+57 323 325 1916</p>
                    <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">fundacionporunamejorcolombia@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Centro de Atención FUNMECO
                      <br />
                      Colombia
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground border-0">
              <h3 className="text-xl font-bold mb-4">¿Quieres ayudar?</h3>
              <p className="mb-6 leading-relaxed">
                Tu apoyo puede transformar vidas. Contáctanos para conocer cómo puedes colaborar con nuestra misión.
              </p>
              <Button
              onClick={handleClick} 
              variant="secondary"
              className="w-full">
                Más Información
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correo Electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+57 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
