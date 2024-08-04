"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    // i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed w-full bg-blue-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Digital Evolution</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">{t("Home")}</Link>
          </li>
          <li>
            <Link href="/about">{t("About Us")}</Link>
          </li>
          <li>
            <Link href="/services">{t("Services")}</Link>
          </li>
          <li>
            <Link href="/subvention">{t("Grants")}</Link>
          </li>
          <li>
            <Link href="/blog">{t("Blog")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("Contact")}</Link>
          </li>
          <li>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
