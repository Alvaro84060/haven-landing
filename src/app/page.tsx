export default function Home() {
  return (
    <main className="bg-white text-neutral-900 min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white to-neutral-100">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
          Haven Concierge
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-xl">
          Servicios de limpieza premium y atención integral para propiedades tipo Airbnb en Gold Coast.
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-block bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition"
        >
          Contactanos
        </a>
      </section>

      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-black">¿Quiénes somos?</h2>
        <p className="mt-6 text-neutral-700 leading-relaxed">
          En <strong>Haven Concierge</strong>, combinamos elegancia, detalle y eficiencia para ofrecer una experiencia sin preocupaciones a los anfitriones y huéspedes de propiedades vacacionales. Nos especializamos en <strong>limpieza de alto nivel</strong>, abastecimiento de amenities, preparación antes del check-in, y coordinación de todo lo necesario para lograr reseñas de 5 estrellas.
        </p>
      </section>
    </main>
  );
}
