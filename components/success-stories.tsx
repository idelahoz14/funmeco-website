"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function SuccessStories() {
  const stories = [
    {
      name: "Carlos",
      title: "Siempre hay una oportunidad para empezar de nuevo",
      story:
        "Carlos Adrián llegó al centro en un momento difícil, pero con esfuerzo y acompañamiento dejó las drogas, se reconectó con su familia y se capacitó en nuevos oficios. Hoy inicia una nueva vida con esperanza.",
      image: "/carlos.jpeg",
    },
    {
      name: "Luis",
      title: "La fuerza de voluntad y el apoyo adecuado pueden transformar vidas",
      story:
        "Luis llegó al centro enfrentando una dura batalla contra las drogas y una relación fracturada con su familia. Con dedicación y el respaldo de nuestro equipo, logró superar su adicción, reconectar con sus seres queridos y adquirir nuevas habilidades a través de nuestros cursos. Hoy, Luis es un ejemplo de resiliencia y esperanza.",
      image: "/hombre-trabajando-taller.jpg",
    },
    {
      name: "Ángel",
      title: "Cuando la fuerza de voluntad se encuentra con el apoyo adecuado",
      story:
        "Después de 8 años en la calle y varios intentos fallidos en centros de rehabilitación, Ángel encontró en el Centro Integral la oportunidad de renacer. En solo 6 meses recuperó hábitos, volvió a abrazar a su familia y reencontró su fe en Dios. Hoy es testimonio de que con voluntad y el apoyo adecuado, las segundas oportunidades se convierten en nuevas vidas.",
      image: "/angel.jpeg",
    },
    {
      name: "Darwin",
      title: "Las segundas oportunidades florecen en nuevos comienzos",
      story:
        "Darwin llegó a nuestro centro de atención desorientado, sin esperanzas y consumiendo drogas, pero hubo algo que le dijo quédate ahí. Aquí no solo ganó una familia, sino que también recuperó su familia que tenía perdida por el consumo. Darwin es una muestra de que las segundas oportunidades sí son exitosas, que también la fuerza de voluntad en los procesos juega un papel importante. Darwin, te queremos y esta será siempre tu familia.",
      image: "/darwin.jpeg",
    },
    {
      name: "José",
      title: "Cuando la voluntad se entrega a Dios y se recibe el apoyo necesario",
      story:
        "Hace 4 meses José llegó al centro buscando una nueva oportunidad para su vida. Con constancia, fe y el acompañamiento recibido, ha logrado avanzar en un proceso de recuperación que refleja su valentía y su deseo profundo de renacer. Hoy, su historia nos recuerda que siempre es posible levantarse y volver a empezar con esperanza.",
      image: "/hombre-orando-esperanza.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const currentStory = stories[currentIndex]

  return (
    <section id="casos-exito" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">¡Casos de Éxito!</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Historias reales de transformación, esperanza y nuevos comienzos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-card border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-130">
                <img
                  src={currentStory.image || "/placeholder.svg"}
                  alt={currentStory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                  {currentStory.name}
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center h-130">
                <Quote className="w-12 h-12 text-primary/20 mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-balance leading-tight">{currentStory.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{currentStory.story}</p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex ? "bg-primary w-8" : "bg-border"
                        }`}
                        aria-label={`Ver historia ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={prevStory} className="border-border bg-transparent">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextStory} className="border-border bg-transparent">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
