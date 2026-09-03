import Link from "next/link";

// Brand colours: aubergine ground, white copy, cyan call to action —
// same treatment as the article hero blocks.
export default function NotFound() {
	return (
		<div
			className="grid min-h-[60vh] place-items-center p-6"
			style={{ backgroundColor: "var(--purple)", color: "var(--white)" }}
		>
			<div className="max-w-2xl">
				<h1 className="text-3xl" style={{ color: "var(--white)" }}>
					Pagina niet gevonden
				</h1>
				<p className="mt-3 text-lg" style={{ color: "var(--white)" }}>
					De opgevraagde pagina bestaat niet. Controleer het adres of ga terug
					naar de startpagina.
				</p>
				<div className="mt-6">
					<Link href="/" className="pdf-button">
						Naar startpagina
					</Link>
				</div>
			</div>
		</div>
	);
}
