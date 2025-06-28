// src/app/page.tsx
export default function Home() {
  return (
    <main className="bg-white text-neutral-900 min-h-screen font-sans">
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Servicios Premium para Propiedades de Airbnb en Gold Coast
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Limpieza profesional, atención integral y gestión concierge para
              anfitriones exigentes que buscan destacarse.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="#planes"
                className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Ver Planes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-black">¿Quiénes somos?</h2>
        <p className="mt-6 text-neutral-700 leading-relaxed">
          En <strong>Haven Concierge</strong>, combinamos elegancia, detalle y
          eficiencia para ofrecer una experiencia sin preocupaciones a los
          anfitriones y huéspedes de propiedades vacacionales. Nos especializamos
          en <strong>limpieza de alto nivel</strong>, abastecimiento de
          amenities, preparación antes del check-in, y coordinación de todo lo
          necesario para lograr reseñas de 5 estrellas.
        </p>
      </section>
    </main>
  );
}
