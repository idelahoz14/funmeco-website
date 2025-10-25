import { Card } from "@/components/ui/card"
import { Users, Briefcase, Home } from "lucide-react"

export function Programs() {
  const programs = [
    {
      title: "Reunificación Familiar",
      stats: "500+ personas atendidas | 387 reunificadas",
      description:
        "Hasta la fecha, el programa de centro de atención para habitante de calle ha logrado resultados significativos: más de 500 personas atendidas, 387 reunificadas con sus familias en distintas ciudades como Bogotá, Bucaramanga, Medellín, Barranquilla, Montería, Manizales, Cali, Riohacha e incluso en el vecino país de Venezuela.",
      image: "/reunificacion-familiar.jpeg",
      icon: Users,
      color: "tertiary",
    },
    {
      title: "Reinserción a la Sociedad",
      stats: "27 personas resocializadas con éxito",
      description:
        "Uno de los ejes más importantes de nuestro programa en el Centro de Atención a Personas en Situación de Calle es la reinserción social, entendida como el proceso de acompañar a los beneficiarios en la construcción de un proyecto de vida digno y sostenible. Gracias a este trabajo, hemos logrado que más de 27 habitantes de calle se resocialicen con éxito, vinculándose a actividades laborales, educativas y familiares que fortalecen su autonomía y sentido de pertenencia en la comunidad.",
      image: "/reinsercion-sociedad.jpeg",
      icon: Briefcase,
      color: "secondary",
    },
    {
      title: "Vivienda Digna",
      stats: "75 personas albergadas actualmente",
      description:
        "En materia de vivienda y protección, el Centro de Atención brinda actualmente albergue digno a 75 personas en situación de calle, garantizando un espacio seguro, alimentación, atención en salud y acompañamiento psicosocial. Este servicio no solo responde a una necesidad inmediata de techo y bienestar, sino que también se convierte en la base para iniciar procesos de resocialización, rehabilitación y reintegración social, orientados a que cada beneficiario pueda proyectar una vida autónoma y estable.",
      image: "/vivienda-digna.jpeg",
      icon: Home,
      color: "accent",
    },
  ]

  return (
    <section id="programas" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-primary">
            ¡Conoce lo que estamos haciendo!
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Nuestros programas están diseñados para brindar apoyo integral y transformar vidas
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow bg-card border-border">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 ${
                        program.color === "tertiary"
                          ? "bg-[#4a90e2]/10"
                          : program.color === "secondary"
                            ? "bg-secondary/20"
                            : "bg-accent/10"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${
                          program.color === "tertiary"
                            ? "text-[#4a90e2]"
                            : program.color === "secondary"
                              ? "text-secondary-foreground"
                              : "text-accent"
                        }`}
                      />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{program.title}</h3>
                    <p className="text-accent font-semibold mb-4">{program.stats}</p>
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
