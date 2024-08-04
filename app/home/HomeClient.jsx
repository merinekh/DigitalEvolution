"use client";

export default function HomeClient() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section
        className="hero bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">
            Transformez votre présence en ligne
          </h1>
          <p className="mt-4">avec votre accompagnement sur mesure</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded">
            Demander une consultation
          </button>
        </div>
      </section>
      <section className="services py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center">Nos Services</h2>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="service-item p-4">
              <h3 className="text-xl font-bold">Web Design</h3>
              <p>Custom web designs to suit your needs.</p>
              <a href="#" className="text-blue-500">
                Read More
              </a>
            </div>
            <div className="service-item p-4">
              <h3 className="text-xl font-bold">Personalized Support</h3>
              <p>Dedicated support for your business.</p>
              <a href="#" className="text-blue-500">
                Read More
              </a>
            </div>
            <div className="service-item p-4">
              <h3 className="text-xl font-bold">Government Subsidies</h3>
              <p>Opportunities for your business.</p>
              <a href="#" className="text-blue-500">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center">Témoignages</h2>
          <div className="testimonials-slider mt-8">
            {/* Slider Component */}
          </div>
        </div>
      </section>
      <section className="blog py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center">Blogs</h2>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="blog-post p-4">
              <h3 className="text-xl font-bold">
                Maximiser le Programme Canadien d'Adoption du Numérique (CDAP)
                pour Votre Entreprise
              </h3>
              <p>29 April, 2024</p>
              <a href="#" className="text-blue-500">
                Read More
              </a>
            </div>
            <div className="blog-post p-4">
              <h3 className="text-xl font-bold">
                Les Avantages de la Subvention Gouvernementale pour les Sites
                Web
              </h3>
              <p>29 April, 2024</p>
              <a href="#" className="text-blue-500">
                Read More
              </a>
            </div>
            <div className="blog-post p-4">
              <h3 className="text-xl font-bold">
                Comment un Bon Design UX/UI Peut Accroître les Conversions
              </h3>
              <p>29 April, 2024</p>
              <a href="#" className="text-blue-500">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center">Contactez-Nous</h2>
          <form className="mt-8 max-w-xl mx-auto">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Nom
              </label>
              <input
                className="w-full px-3 py-2 border rounded"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="subject">
                Sujet
              </label>
              <input
                className="w-full px-3 py-2 border rounded"
                type="text"
                id="subject"
                name="subject"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div className="mb-4">
              <input className="mr-2" type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">J'accepte les termes et conditions</label>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
