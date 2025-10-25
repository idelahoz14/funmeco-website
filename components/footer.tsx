import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/funmeco-logo.png"
                alt="FUNMECO"
                width={160}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Dignidad y futuro para quienes más lo necesitan. Transformando vidas a través del amor, el acompañamiento
              y las segundas oportunidades.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 fill-accent text-accent" />
              <span>para nuestra comunidad</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#home" className="hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#quienes-somos" className="hover:text-primary-foreground transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="#programas" className="hover:text-primary-foreground transition-colors">
                  Programas
                </Link>
              </li>
              <li>
                <Link href="#casos-exito" className="hover:text-primary-foreground transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-primary-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>fundacionporunamejorcolombia@gmail.com</li>
              <li>+57 322 588 1546</li>
              <li>+57  323 325 1916</li>
              <li>Colombia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} FUNMECO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
