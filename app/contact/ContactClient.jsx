"use client";

export default function ContactClient() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Contactez-Nous</h1>
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
    </main>
  );
}
