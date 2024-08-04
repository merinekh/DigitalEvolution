"use client";

export default function BlogClient() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="blog-post p-4">
          <h3 className="text-xl font-bold">
            Maximiser le Programme Canadien d'Adoption du Numérique (CDAP) pour
            Votre Entreprise
          </h3>
          <p>29 April, 2024</p>
          <a href="#" className="text-blue-500">
            Read More
          </a>
        </div>
        <div className="blog-post p-4">
          <h3 className="text-xl font-bold">
            Les Avantages de la Subvention Gouvernementale pour les Sites Web
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
    </main>
  );
}
