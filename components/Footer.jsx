"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-blue-900 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {year} Digital Evolution. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
