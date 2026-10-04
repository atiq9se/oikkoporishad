"use client";

import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import GallerySection from "@/components/GallerySection";
import { news } from "@/data/news";
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

const stories = [
  {
    id: "story-1",
    title: "Oikko Parishad Story (January-March 2026)",
    period: "January-March 2026",
    cover: "/story.png",
    description: "Quarterly highlights of our community impact initiatives across education, healthcare, and sustainable development programs.",
  },
  {
    id: "story-2",
    title: "Oikko Parishad Story (April-June 2026)",
    period: "April-June 2026",
    cover: "/story.png",
    description: "Empowering women through vocational training, supporting clean water access, and expanding medical camp outreach in rural areas.",
  },
  {
    id: "story-3",
    title: "Oikko Parishad Story (July-September 2026)",
    period: "July-September 2026",
    cover: "/story.png",
    description: "Annual sports tournament success, scholarship program expansion, and new partnerships for community development.",
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
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
                href="/glas"
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
                <p className="text-2xl font-bold text-secondary">2024</p>
                <p className="text-xs font-medium text-white">{t("home.established")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                {t("home.news")}
              </h2>
              <div className="h-1 w-20 rounded bg-secondary" />
            </div>
            <Link
              href="/news"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light sm:self-auto"
            >
              {t("home.viewAllNews")}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in-up opacity-0 group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-dark">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-light">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 012-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-dark group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                    >
                      {t("home.readMoreNews")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oikko Parishad Story Section */}
      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
                {t("home.storyTitle")}
              </h2>
              <div className="h-1 w-20 rounded bg-secondary" />
              <p className="mt-2 text-lg text-text-light">
                {t("home.storySubtitle")}
              </p>
            </div>
            <Link
              href="/stories"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light sm:self-auto"
            >
              {t("home.viewAllStories")}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {stories.map((story, index) => (
              <Link
                key={story.id}
                href={`/stories/${story.id}`}
                className="animate-fade-in-up opacity-0 group relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                {/* Book Cover Style */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={story.cover}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Book spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/80" />
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-secondary/60" />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-light">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {story.period}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-dark group-hover:text-primary transition-colors duration-300 leading-tight">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-light leading-relaxed line-clamp-3">
                    {story.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:gap-2">
                      Read Story
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

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
