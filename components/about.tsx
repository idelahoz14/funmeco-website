import { Card } from "@/components/ui/card"
import { Heart, Users, Home } from "lucide-react"

export function About() {
  return (
    <section id="quienes-somos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Quiénes Somos</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            FUNMECO es una fundación comprometida con la transformación de vidas. Trabajamos día a día para brindar
            dignidad, esperanza y un futuro mejor a las personas en situación de calle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 md:p-12 bg-card border-border">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Objetivo Principal</h3>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Nuestro objetivo es proporcionar atención integral a personas en situación de calle, facilitando su
              reunificación familiar, reinserción social y acceso a vivienda digna. Creemos en las segundas
              oportunidades y en el poder transformador del acompañamiento humano.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Reunificación Familiar</h3>
            <p className="text-muted-foreground leading-relaxed">
              Reconectamos a las personas con sus familias y seres queridos
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border-border">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Reinserción Social</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acompañamos en la construcción de proyectos de vida dignos y sostenibles
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-card border-border">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Home className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Vivienda Digna</h3>
            <p className="text-muted-foreground leading-relaxed">
              Brindamos albergue seguro y acompañamiento psicosocial integral
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
