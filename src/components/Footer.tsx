"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-accent border-t border-gray-200 text-text">
      <div className="container-custom py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Oikkoparishad"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-text-light">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              {t("footer.quickLinks")}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-text-light">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  {t("nav.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/programs" className="transition-colors hover:text-primary">
                  {t("nav.events")}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition-colors hover:text-primary">
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              {t("nav.member")}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-text-light">
              <li>
                <Link href="/members/active" className="transition-colors hover:text-primary">
                  {t("nav.activeMember")}
                </Link>
              </li>
              <li>
                <Link href="/members/defaulter" className="transition-colors hover:text-primary">
                  {t("nav.defaulter")}
                </Link>
              </li>
              <li>
                <Link href="/members/dead" className="transition-colors hover:text-primary">
                  {t("nav.dead")}
                </Link>
              </li>
              <li>
                <Link href="/members/suspended" className="transition-colors hover:text-primary">
                  {t("nav.suspended")}
                </Link>
              </li>
              <li>
                <Link href="/members/inactive" className="transition-colors hover:text-primary">
                  {t("nav.inactive")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              {t("footer.contactInfo")}
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-text-light">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>123 Main Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@oikkoparishad.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 text-sm text-text-light sm:flex-row">
          <p>{t("footer.copyright").replace("2026", `${new Date().getFullYear()}`)}</p>
          <p>Developed by <a href="https://www.artsoftech.com/" target="_blank" rel="noopener noreferrer" className="inline-block"><img src="/artsoftech.png" alt="Arts of Tech" className="h-6 w-auto inline-block" /></a></p>
        </div>
      </div>
    </footer>
  );
}
