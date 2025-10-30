import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { SuccessStories } from "@/components/success-stories"
import { Contact } from "@/components/contact"
import { TrabajaConNosotros } from "@/components/trabaja-con-nosotros"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <SuccessStories />
      <Contact />
      <TrabajaConNosotros />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
