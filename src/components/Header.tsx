"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileWhyBangladeshOpen, setMobileWhyBangladeshOpen] = useState(false);
  const [mobileTradeInfoOpen, setMobileTradeInfoOpen] = useState(false);
  const [mobileMemberOpen, setMobileMemberOpen] = useState(false);
  const [mobileElectionOpen, setMobileElectionOpen] = useState(false);
  const [mobileSustainabilityOpen, setMobileSustainabilityOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const aboutDropdownItems = useMemo(() => [
    { href: "/glas", label: t("nav.aboutUs") },
    { href: "/glas/office-bearers", label: t("nav.officeBearers") },
    { href: "/glas/former-presidents", label: t("nav.history") },
    { href: "/glas/mission-vision", label: t("nav.missionVision") },
    { href: "/contact", label: t("nav.contact") },
  ], [t]);

  const whyBangladeshDropdownItems = useMemo(() => [
    { href: "/glas/garment-industry", label: t("nav.garmentIndustry") },
    { href: "/glas/our-strengths", label: t("nav.ourStrengths") },
  ], [t]);

  const tradeInfoDropdownItems = useMemo(() => [
    { href: "/trade-information/export-performance", label: t("nav.exportPerformance") },
    { href: "/trade-information/monthly-trade-session", label: t("nav.monthlyTradeSession") },
    { href: "/trade-information/fair-calendar", label: t("nav.fairCalendar") },
    { href: "/trade-information/weekly-trade-digest", label: t("nav.weeklyTradeDigest") },
  ], [t]);

  const sustainabilityDropdownItems = useMemo(() => [
    { href: "/sustainability/workers-wellbeing-safety", label: t("nav.workersWellbeingSafety") },
    { href: "/sustainability/environment", label: t("nav.environment") },
    { href: "/sustainability/rmg-worker-health-toolkit", label: t("nav.rmgWorkerHealthToolkit") },
    { href: "/sustainability/responsible-business-hub", label: t("nav.responsibleBusinessHub") },
    { href: "/sustainability/esg-data-platform", label: t("nav.esgDataPlatform") },
  ], [t]);

  const memberDropdownItems = useMemo(() => [
    { href: "/members/active", label: t("nav.activeMember") },
    { href: "/members/defaulter", label: t("nav.defaulter") },
    { href: "/members/dead", label: t("nav.dead") },
    { href: "/members/suspended", label: t("nav.suspended") },
    { href: "/members/inactive", label: t("nav.inactive") },
    { href: "/glas/office-staff", label: t("nav.officeStaff") },
    { href: "/membership/details", label: t("nav.membershipDetails") },
    { href: "/membership/become-a-member", label: t("nav.becomeMember") },
    { href: "/membership/benefits", label: t("nav.membershipBenefits") },
  ], [t]);

  const electionDropdownItems = useMemo(() => [
    { href: "/election/commissioner", label: t("nav.electionCommissioner") },
    { href: "/election/voter-list", label: t("nav.voterList") },
    { href: "/election/schedule", label: t("nav.electionSchedule") },
    { href: "/election/valid-candidate-list", label: t("nav.validCandidateList") },
    { href: "/election/preliminary-voter-list", label: t("nav.preliminaryVoterList") },
    { href: "/election/preliminary-candidate-list", label: t("nav.preliminaryCandidateList") },
    { href: "/election/final-candidate-list", label: t("nav.finalCandidateList") },
  ], [t]);

  const navLinks = useMemo<{ href: string; label: string }[]>(() => [], [t]);

  const isAboutActive = pathname === "/glas" || pathname === "/contact" || aboutDropdownItems.some((item) => pathname === item.href);
  const isWhyBangladeshActive = whyBangladeshDropdownItems.some((item) => pathname === item.href);
  const isTradeInfoActive = tradeInfoDropdownItems.some((item) => pathname === item.href);
  const isMemberActive = memberDropdownItems.some((item) => pathname === item.href);
  const isElectionActive = electionDropdownItems.some((item) => pathname === item.href);
  const isSustainabilityActive = sustainabilityDropdownItems.some((item) => pathname === item.href);

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
              href="/glas"
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

          {/* Why Bangladesh Dropdown */}
          <div className="relative group">
            <Link
              href="/glas/garment-industry"
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary ${
                isWhyBangladeshActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.whyBangladesh")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 min-w-[220px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {whyBangladeshDropdownItems.map((item) => (
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

          {/* News Link */}
          <Link
            href="/news"
            className={`text-base font-semibold transition-colors hover:text-primary ${
              pathname === "/news"
                ? "text-primary border-b-2 border-primary"
                : "text-text-light"
            }`}
          >
            {t("nav.news")}
          </Link>

          {/* Trade Information Dropdown */}
          <div className="relative group">
            <Link
              href="/trade-information/export-performance"
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary ${
                isTradeInfoActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.tradeInformation")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 min-w-[240px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {tradeInfoDropdownItems.map((item) => (
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

          {/* Sustainability Dropdown */}
          <div className="relative group">
            <Link
              href="/sustainability/workers-wellbeing-safety"
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary ${
                isSustainabilityActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-light"
              }`}
            >
              {t("nav.sustainability")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute top-full left-0 min-w-[280px] rounded-lg bg-white shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 animate-slide-down">
              {sustainabilityDropdownItems.map((item) => (
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
                <Link href="/glas" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-light hover:text-primary">{t("nav.about")}</Link>
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

            {/* Mobile Why Bangladesh Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <Link href="/glas/garment-industry" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-light hover:text-primary">{t("nav.whyBangladesh")}</Link>
                <button onClick={() => setMobileWhyBangladeshOpen(!mobileWhyBangladeshOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileWhyBangladeshOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileWhyBangladeshOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {whyBangladeshDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-text-light hover:text-primary"}`}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile News Link */}
            <div className="pt-2 border-t border-gray-100">
              <Link href="/news" onClick={() => setMobileOpen(false)} className={`text-base font-semibold ${pathname === "/news" ? "text-primary" : "text-text-light hover:text-primary"}`}>{t("nav.news")}</Link>
            </div>

            {/* Mobile Trade Information Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <Link href="/trade-information/export-performance" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-light hover:text-primary">{t("nav.tradeInformation")}</Link>
                <button onClick={() => setMobileTradeInfoOpen(!mobileTradeInfoOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileTradeInfoOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileTradeInfoOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {tradeInfoDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={`text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-text-light hover:text-primary"}`}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Sustainability Dropdown */}
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <Link href="/sustainability/workers-wellbeing-safety" onClick={() => setMobileOpen(false)} className="text-base font-semibold text-text-light hover:text-primary">{t("nav.sustainability")}</Link>
                <button onClick={() => setMobileSustainabilityOpen(!mobileSustainabilityOpen)} className="p-1">
                  <svg className={`w-4 h-4 text-text-light transition-transform ${mobileSustainabilityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              {mobileSustainabilityOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1 animate-slide-down">
                  {sustainabilityDropdownItems.map((item) => (
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

            </nav>
        </div>
      )}
    </header>
  );
}