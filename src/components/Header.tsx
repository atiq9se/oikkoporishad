"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, type Language } from "@/context/LanguageContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMemberOpen, setMobileMemberOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [mobileElectionOpen, setMobileElectionOpen] = useState(false);
  const [mobileMembershipOpen, setMobileMembershipOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const aboutDropdownItems = useMemo(() => [
    { href: "/about", label: t("nav.aboutUs") },
    { href: "/about/constitution", label: t("nav.constitution") },
    { href: "/about/history", label: t("nav.history") },
    { href: "/about/mission-vision", label: t("nav.missionVision") },
    { href: "/about/office-staff", label: t("nav.officeStaff") },
    { href: "/contact", label: t("nav.contact") },
  ], [t]);

  const membershipDropdownItems = useMemo(() => [
    { href: "/membership/details", label: t("nav.membershipDetails") },
    { href: "/membership/become-a-member", label: t("nav.becomeMember") },
    { href: "/membership/benefits", label: t("nav.membershipBenefits") },
  ], [t]);

  const communityDropdownItems = useMemo(() => [
    { href: "/community/ec-2026-27", label: "EC-2026-27" },
    { href: "/community/ec-2025-26", label: "EC-2025-26" },
    { href: "/community/ec-2024-25", label: "EC-2024-25" },
  ], []);

  const memberDropdownItems = useMemo(() => [
    { href: "/members/active", label: t("nav.activeMember") },
    { href: "/members/defaulter", label: t("nav.defaulter") },
    { href: "/members/dead", label: t("nav.dead") },
    { href: "/members/suspended", label: t("nav.suspended") },
    { href: "/members/inactive", label: t("nav.inactive") },
  ], [t]);

  const mediaDropdownItems = useMemo(() => [
    { href: "/notice", label: t("nav.notice") },
    { href: "/news", label: t("nav.news") },
    { href: "/programs", label: t("nav.events") },
    { href: "/opinion", label: t("nav.opinion") },
    { href: "/gallery", label: t("nav.gallery") },
  ], [t]);

  const electionDropdownItems = useMemo(() => [
    { href: "/election/commissioner", label: t("nav.electionCommissioner") },
    { href: "/election/voter-list", label: t("nav.voterList") },
  ], [t]);

  const navLinks = useMemo(() => [
    { href: "/", label: t("nav.home") },
  ], [t]);

  const langOptions: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "bn", label: "বাংলা", flag: "https://flagcdn.com/w40/bd.png" },
    { code: "zh", label: "中文", flag: "https://flagcdn.com/w40/cn.png" },
  ];

  const isAboutActive = pathname === "/about" || pathname === "/contact" || aboutDropdownItems.some((item) => pathname === item.href);
  const isMembershipActive = pathname === "/membership" || membershipDropdownItems.some((item) => pathname === item.href);
  const isMediaActive = mediaDropdownItems.some((item) => pathname === item.href);
  const isMemberActive = memberDropdownItems.some((item) => pathname === item.href);
  const isCommunityActive = pathname === "/community" || communityDropdownItems.some((item) => pathname === item.href);
  const isElectionActive = electionDropdownItems.some((item) => pathname === item.href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Oikkoparishad"
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-semibold transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* About Dropdown */}
          <div className="relative group">
            <Link
              href="/about"
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary ${
                isAboutActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.about")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 min-w-[200px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {aboutDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-1.5 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-text-light hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Membership Dropdown */}
          <div className="relative group">
            <Link
              href="/membership"
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary ${
                isMembershipActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.membership")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 min-w-[220px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {membershipDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-1.5 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-text-light hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Community Dropdown */}
          <div className="relative group">
            <Link
              href="/community"
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary ${
                isCommunityActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.community")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 min-w-[180px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {communityDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-1.5 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-text-light hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Member Dropdown */}
          <div className="relative group">
            <Link
              href="/members"
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary ${
                isMemberActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.member")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 min-w-[180px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {memberDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-1.5 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-text-light hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Election Dropdown */}
          <div className="relative group">
            <span
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary cursor-default ${
                isElectionActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.election")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div className="absolute top-full left-0 min-w-[200px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {electionDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-1.5 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-text-light hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Media & Event Dropdown */}
          <div className="relative group">
            <span
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary cursor-default ${
                isMediaActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.mediaEvent")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div className="absolute top-full left-0 min-w-[200px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {mediaDropdownItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-1.5 text-sm transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "text-text-light hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Dropdown */}
          <div className="relative group">
            <span className="flex items-center gap-1.5 text-base font-semibold text-text-light hover:text-primary cursor-default">
              <img
                src={langOptions.find((l) => l.code === language)?.flag}
                alt={language}
                className="w-5 h-auto"
              />
              <span>{langOptions.find((l) => l.code === language)?.label}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div className="absolute top-full right-0 min-w-[160px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {langOptions.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLanguage(item.code)}
                  className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm transition-colors ${
                    language === item.code
                      ? "bg-primary text-white"
                      : "text-text-light hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  <img src={item.flag} alt={item.code} className="w-5 h-auto" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-0.5 w-6 bg-text transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-3">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-semibold ${
                  pathname === link.href ? "text-primary" : "text-text-light"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile About Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <Link href="/about" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-light hover:text-primary">{t("nav.about")}</Link>
                <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileAboutOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {aboutDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-text-light hover:text-primary"}`}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Membership Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <Link href="/membership" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-light hover:text-primary">{t("nav.membership")}</Link>
                <button onClick={() => setMobileMembershipOpen(!mobileMembershipOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileMembershipOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileMembershipOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {membershipDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-text-light hover:text-primary"}`}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Community Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <Link href="/community" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-light hover:text-primary">{t("nav.community")}</Link>
                <button onClick={() => setMobileCommunityOpen(!mobileCommunityOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileCommunityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileCommunityOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {communityDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-text-light hover:text-primary"}`}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Member Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <Link href="/members" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-light hover:text-primary">{t("nav.member")}</Link>
                <button onClick={() => setMobileMemberOpen(!mobileMemberOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileMemberOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileMemberOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {memberDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-text-light hover:text-primary"}`}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Election Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-text-light">{t("nav.election")}</span>
                <button onClick={() => setMobileElectionOpen(!mobileElectionOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileElectionOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileElectionOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {electionDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-text-light hover:text-primary"}`}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Media & Event Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-text-light">{t("nav.mediaEvent")}</span>
                <button onClick={() => setMobileMediaOpen(!mobileMediaOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileMediaOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileMediaOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {mediaDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-text-light hover:text-primary"}`}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-base font-semibold text-text-light">
                  <img src={langOptions.find((l) => l.code === language)?.flag} alt={language} className="w-5 h-auto" />
                  {langOptions.find((l) => l.code === language)?.label}
                </span>
                <button onClick={() => setMobileLangOpen(!mobileLangOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileLangOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileLangOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {langOptions.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => { setLanguage(item.code); setMobileLangOpen(false); }}
                      className={`flex items-center gap-2 text-left text-sm transition-colors ${
                        language === item.code ? "text-primary font-medium" : "text-text-light hover:text-primary"
                      }`}
                    >
                      <img src={item.flag} alt={item.code} className="w-5 h-auto" />
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}