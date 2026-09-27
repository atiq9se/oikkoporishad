"use client";

import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import MemberSearch from "@/components/MemberSearch";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import { useLanguage } from "@/context/LanguageContext";

const programs = [
  {
    title: "Education for All",
    desc: "Providing quality education and scholarships to underprivileged children across rural communities.",
    icon: "📚",
  },
  {
    title: "Healthcare Access",
    desc: "Free medical camps, health awareness programs, and support for communities in need.",
    icon: "🏥",
  },
  {
    title: "Women Empowerment",
    desc: "Skill development, vocational training, and entrepreneurship programs for women.",
    icon: "👩‍🎓",
  },
  {
    title: "Clean Water Initiative",
    desc: "Building safe water sources and promoting hygiene in remote areas.",
    icon: "💧",
  },
];

const executiveCommittee = [
  { id: "EC-2026-01", name: "Dr. Ahmed Rahman", role: "President", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
  { id: "EC-2026-02", name: "Ms. Fatima Begum", role: "Vice President", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80" },
  { id: "EC-2026-03", name: "Mr. Kamal Hossain", role: "Vice President", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { id: "EC-2026-04", name: "Ms. Shahana Begum", role: "General Secretary", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" },
  { id: "EC-2026-06", name: "Mr. Rahim Uddin", role: "Treasurer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
  { id: "EC-2026-07", name: "Ms. Ayesha Khan", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&q=80" },
  { id: "EC-2026-08", name: "Mr. Jamal Ahmed", role: "Executive Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { id: "EC-2026-09", name: "Ms. Nazma Begum", role: "Executive Member", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" },
  { id: "EC-2026-10", name: "Mr. Hasan Ali", role: "Executive Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { id: "EC-2026-11", name: "Ms. Farida Parveen", role: "Executive Member", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
];
const notices = [
  {
    id: "001",
    title: "Winter Relief Distribution 2026",
    desc: "Blankets and warm clothes distribution for 500+ families in remote villages starting December 1st.",
    date: "Nov 25, 2026",
    category: "Relief",
  },
  {
    id: "002",
    title: "Scholarship Program Applications Open",
    desc: "Merit-based scholarships for 100 underprivileged students. Apply by December 15th, 2026.",
    date: "Nov 20, 2026",
    category: "Education",
  },
  {
    id: "003",
    title: "Free Medical Camp at Sylhet",
    desc: "Week-long free medical camp starting 10th January 2027. Volunteer doctors needed.",
    date: "Nov 15, 2026",
    category: "Health",
  },
  {
    id: "004",
    title: "Annual Report 2026 Published",
    desc: "The comprehensive annual report highlighting achievements and financial statements is now available.",
    date: "Nov 10, 2026",
    category: "Report",
  },
  {
    id: "005",
    title: "Vocational Training Center Opening",
    desc: "New computer and tailoring training center inaugurated at Jalalabad Main Branch.",
    date: "Nov 05, 2026",
    category: "Education",
  },
  {
    id: "006",
    title: "Clean Water Project Phase 2 Complete",
    desc: "10 new tube wells installed in Chhatak and Derai upazilas providing safe water to 2000+ people.",
    date: "Oct 28, 2026",
    category: "Water",
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <Marquee />
      <HeroSlider />

      {/* About Summary */}
      <section className="animate-fade-in-up opacity-0 bg-accent py-20">
        <div className="container-custom">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                {t("home.aboutTitle")}
              </h2>
              <div className="mb-6 h-1 w-20 rounded bg-secondary" />
              <p className="mb-5 text-lg leading-relaxed text-text">
                {t("home.aboutDesc1")}
              </p>
              <p className="mb-8 text-lg leading-relaxed text-text">
                {t("home.aboutDesc2")}
              </p>
              <Link
                href="/about"
                className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                {t("home.learnMoreAbout")}
              </Link>
            </div>
            <div className="relative flex items-center justify-center">
              <svg viewBox="0 0 400 350" className="w-full max-w-md h-auto" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="160" r="120" fill="#e8f5e9" />
                <circle cx="200" cy="160" r="90" fill="#1a5632" opacity="0.1" />
                <g transform="translate(200,130)">
                  <circle cx="-35" cy="0" r="22" fill="#1a5632" opacity="0.85" />
                  <circle cx="35" cy="0" r="22" fill="#1a5632" opacity="0.65" />
                  <circle cx="0" cy="-30" r="22" fill="#1a5632" opacity="0.75" />
                  <path d="M-35,22 Q-35,55 0,60 Q35,55 35,22" fill="#1a5632" opacity="0.55" />
                  <path d="M0,-52 Q0,-75 0,-85" stroke="#f5a623" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="0" cy="-90" r="6" fill="#f5a623" />
                  <path d="M-50,25 Q-70,40 -85,35" stroke="#1a5632" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
                  <path d="M50,25 Q70,40 85,35" stroke="#1a5632" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
                  <path d="M-30,-55 Q-55,-70 -65,-80" stroke="#1a5632" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
                  <path d="M30,-55 Q55,-70 65,-80" stroke="#1a5632" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3" />
                </g>
                <g transform="translate(200,220)" fill="#1a5632" opacity="0.7">
                  <circle cx="-60" cy="0" r="5" />
                  <circle cx="-40" cy="0" r="5" />
                  <circle cx="-20" cy="0" r="5" />
                  <circle cx="0" cy="0" r="5" />
                  <circle cx="20" cy="0" r="5" />
                  <circle cx="40" cy="0" r="5" />
                  <circle cx="60" cy="0" r="5" />
                </g>
                <text x="200" y="300" textAnchor="middle" fill="#1a5632" fontSize="14" fontWeight="bold" fontFamily="sans-serif">UNITY ● SERVICE ● PROGRESS</text>
              </svg>
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-primary px-6 py-4 shadow-xl md:block hidden">
                <p className="text-2xl font-bold text-secondary">1948</p>
                <p className="text-xs font-medium text-white">{t("home.established")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MemberSearch />

      {/* Counter Section */}
      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <Counter count={2500} label={t("home.totalMember")} />
            <Counter count={1450} label={t("home.maleMember")} />
            <Counter count={1050} label={t("home.femaleMember")} />
            <Counter count={21} label="EC-2026-27" />
          </div>
        </div>
      </section>

      {/* Years of Service - President & Secretary */}
      <section className="animate-fade-in-up opacity-0 bg-accent py-20">
        <div className="container-custom relative">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
              {t("home.presidentSpeech")}
            </h2>
            <div className="mx-auto h-1 w-20 rounded bg-secondary" />
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {/* President */}
            <div className="animate-fade-in-up opacity-0 relative" style={{ animationDelay: "100ms" }}>
              <div className="relative rounded-2xl bg-white p-8 shadow-xl border border-primary/20 -translate-y-1 transition-all duration-500">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white text-base font-bold shadow-md">
                  ❝
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <div className="flex h-2 w-2 rounded-full bg-primary-light" />
                    <div className="flex h-2 w-2 rounded-full bg-secondary" />
                    <span className="text-xs font-medium text-primary-light uppercase tracking-wider">{t("home.presidentMessage")}</span>
                  </div>
                  <p className="text-lg leading-relaxed text-text mb-8">
                    {t("home.presidentQuote")}
                  </p>
                  <div className="flex items-center justify-center pt-6 border-t border-gray-100">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500" />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-5">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=180&q=80"
                    alt="President Dr. Ahmed Rahman"
                    className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div>
                  <p className="font-bold text-dark text-lg">Dr. Ahmed Rahman</p>
                  <p className="text-sm text-primary font-medium">{t("home.president")}</p>
                  <p className="text-xs text-text-light mt-0.5">{t("home.servingSince")}</p>
                </div>
              </div>
            </div>

            {/* Secretary */}
            <div className="animate-fade-in-up opacity-0 relative" style={{ animationDelay: "300ms" }}>
              <div className="relative rounded-2xl bg-white p-8 shadow-xl border border-primary/20 -translate-y-1 transition-all duration-500">
                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white text-base font-bold shadow-md">
                  ❝
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex h-2 w-2 rounded-full bg-primary" />
                    <div className="flex h-2 w-2 rounded-full bg-primary-light" />
                    <div className="flex h-2 w-2 rounded-full bg-secondary" />
                    <span className="text-xs font-medium text-primary-light uppercase tracking-wider">{t("home.secretaryMessage")}</span>
                  </div>
                  <p className="text-lg leading-relaxed text-text mb-8">
                    {t("home.secretaryQuote")}
                  </p>
                  <div className="flex items-center justify-center pt-6 border-t border-gray-100">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500" />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-5">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=180&q=80"
                    alt="Secretary Ms. Fatima Begum"
                    className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div>
                  <p className="font-bold text-dark text-lg">Ms. Fatima Begum</p>
                  <p className="text-sm text-primary font-medium">{t("home.generalSecretary")}</p>
                  <p className="text-xs text-text-light mt-0.5">{t("home.servingSinceSecretary")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Executive Committee 2026-27 */}
      <section className="animate-fade-in-up opacity-0 relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%231a5632%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M0 38.59L38.59 0%22 stroke=%22%231a5632%22 stroke-width=%220.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="container-custom relative">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              {t("home.ecTitle")} <span className="text-secondary">2026-27</span>
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">
              {t("home.ecDesc")}
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 mx-auto max-w-xs">
              {executiveCommittee.filter(m => m.role === "President").map((member) => (
                <HomeMemberCard key={member.id} member={member} />
              ))}
            </div>

            <div className="mb-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              {executiveCommittee.filter(m => m.role === "Vice President").map((member) => (
                <HomeMemberCard key={member.id} member={member} />
              ))}
            </div>

            <div className="mb-12 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              {executiveCommittee.filter(m => m.role === "General Secretary" || m.role === "Treasurer" || m.role === "Joint Secretary").map((member) => (
                <HomeMemberCard key={member.id} member={member} />
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {executiveCommittee.filter(m => m.role === "Executive Member").map((member) => (
                <HomeMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/community/ec-2026-27"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              {t("home.viewFullCommittee")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              {t("home.upcomingEvents")}
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">
              {t("home.upcomingEventsDesc")}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { date: "Dec 15", title: "Annual Sports Tournament 2026", desc: "Inter-club cricket, football, and badminton tournament open to all members.", color: "from-emerald-500 to-teal-600" },
              { date: "Dec 28", title: "Monthly Cultural Evening", desc: "An evening of poetry, music, and traditional performances by club members.", color: "from-violet-500 to-purple-600" },
              { date: "Jan 10", title: "Blood Donation Camp", desc: "Annual blood donation drive in collaboration with Sylhet Medical College.", color: "from-red-500 to-rose-600" },
            ].map((event, index) => (
              <div
                key={event.title}
                className="animate-fade-in-up opacity-0 group rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${event.color} p-5 text-white`}>
                  <p className="text-sm font-medium opacity-90">{event.date}</p>
                  <h3 className="mt-2 text-xl font-bold">{event.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-text-light leading-relaxed">{event.desc}</p>
                  <Link
                    href="/programs"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    {t("home.learnMore")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t("home.viewAllEvents")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="animate-fade-in-up opacity-0 bg-accent py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              {t("home.notices")}
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">
              {t("home.noticesDesc")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice, index) => (
              <Link
                key={notice.id}
                href={`/notice/${notice.id}`}
                className="animate-fade-in-up opacity-0 group relative rounded-2xl bg-white p-6 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-dark group-hover:text-primary transition-colors duration-300">
                      {notice.title}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-light">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {notice.date}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        {notice.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/notices"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              {t("home.viewAllNotices")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              {t("home.news")}
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">
              {t("home.newsDesc")}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
                title: "Annual General Meeting 2026",
                date: "July 15, 2026",
                subtitle: "The Annual General Meeting was held successfully with record attendance from members across all districts."
              },
              {
                img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
                title: "New Scholarship Program Launched",
                date: "June 28, 2026",
                subtitle: "Oikkoparishad launches a new scholarship program for 200 underprivileged students in rural areas."
              },
              {
                img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
                title: "Free Medical Camp a Success",
                date: "June 10, 2026",
                subtitle: "Over 1,500 patients received free medical checkups and medicines at the week-long health camp."
              }
            ].map((news, index) => (
              <div
                key={news.title}
                className="animate-fade-in-up opacity-0 group rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-light">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {news.date}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-dark group-hover:text-primary transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">
                    {news.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              {t("home.readMoreNews")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function HomeMemberCard({ member }: { member: typeof executiveCommittee[number] }) {
  const isPresident = member.role === "President";
  return (
    <Link
      href={`/members/${member.id}`}
      className={`animate-fade-in-up opacity-0 relative rounded-2xl bg-white p-5 shadow-2xl border -translate-y-2 transition-all duration-300 block ${isPresident ? "border-yellow-400 shadow-yellow-200/50" : "border-primary/40"}`}
    >
      <div className="relative">
        <div className={`absolute inset-0 rounded-full opacity-100 transition-opacity duration-500 ${isPresident ? "bg-gradient-to-br from-yellow-200/30 to-amber-200/30" : "bg-gradient-to-br from-primary/15 to-secondary/15"}`} />
        <img
          src={member.image}
          alt={member.name}
          className={`relative mx-auto rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 scale-105 ${isPresident ? "h-36 w-36 ring-2 ring-yellow-400" : "h-28 w-28"}`}
        />
      </div>
      <div className="mt-5 text-center">
        <p className="font-semibold text-black text-sm transition-colors duration-300">
          {member.name}
        </p>
        <p className={`mt-1.5 text-lg font-bold ${isPresident ? "text-amber-600" : "text-primary"}`}>{member.role}</p>
      </div>
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl scale-x-100 transition-transform duration-300 origin-left ${isPresident ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" : "bg-gradient-to-r from-primary to-secondary"}`} />
    </Link>
  );
}
