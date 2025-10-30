"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"



export function TrabajaConNosotros() {
	const phoneNumber = "573225881546";
	const message = encodeURIComponent("Hola, me gustaría obtener más información sobre cómo puedo trabajar con FUNMECO");

	const handleClick = () => {
		window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
	};

	return (
		<section id="contacto" className="relative pb-24 bg-muted/30 overflow-hidden">
			<div className="max-w-6xl mx-auto px-4">
        <Card className="p-8 bg-card border-border">
					<h3 className="text-2xl font-bold mb-4">
						¿Quieres trabajar con nosotros?
					</h3>
					<p className="mb-4 leading-relaxed">
						En <strong>FUNMECO</strong> creemos que el cambio comienza con personas comprometidas.
						Si compartes nuestra pasión por ayudar y transformar vidas, queremos conocerte.
					</p>
					<p className="mb-6 leading-relaxed">
						Únete a nuestro equipo y contribuye a construir un futuro mejor.
						Contáctanos para descubrir cómo puedes aportar tu talento y ser parte de esta misión.
					</p>
					<Button
						onClick={handleClick}
						variant="secondary"
						className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
						Quiero Saber Más
					</Button>
				</Card>
			</div>
		</section>
	);
}

