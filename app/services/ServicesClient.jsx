"use client";

export default function ServicesClient() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Nos Services</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="service-item p-4">
          <h3 className="text-xl font-bold">Web Design</h3>
          <p>Des conceptions web personnalisées pour répondre à vos besoins.</p>
          <a href="#" className="text-blue-500">
            En savoir plus
          </a>
        </div>
        <div className="service-item p-4">
          <h3 className="text-xl font-bold">Support Personnalisé</h3>
          <p>Un support dédié pour votre entreprise.</p>
          <a href="#" className="text-blue-500">
            En savoir plus
          </a>
        </div>
        <div className="service-item p-4">
          <h3 className="text-xl font-bold">Subventions Gouvernementales</h3>
          <p>Des opportunités pour votre entreprise.</p>
          <a href="#" className="text-blue-500">
            En savoir plus
          </a>
        </div>
      </div>
    </main>
  );
}
