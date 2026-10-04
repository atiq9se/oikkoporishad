import Link from "next/link";
import { news } from "@/data/news";

const categoryColors: Record<string, { badge: string; accent: string; gradient: string }> = {
  Governance: { badge: "bg-primary/10 text-primary", accent: "text-primary", gradient: "from-primary/20 to-primary/5" },
  Education: { badge: "bg-blue-100 text-blue-700", accent: "text-blue-700", gradient: "from-blue-100 to-blue-50" },
  Healthcare: { badge: "bg-red-100 text-red-700", accent: "text-red-700", gradient: "from-red-100 to-red-50" },
  Relief: { badge: "bg-orange-100 text-orange-700", accent: "text-orange-700", gradient: "from-orange-100 to-orange-50" },
  "Women Empowerment": { badge: "bg-pink-100 text-pink-700", accent: "text-pink-700", gradient: "from-pink-100 to-pink-50" },
  Water: { badge: "bg-cyan-100 text-cyan-700", accent: "text-cyan-700", gradient: "from-cyan-100 to-cyan-50" },
  Garments: { badge: "bg-emerald-100 text-emerald-700", accent: "text-emerald-700", gradient: "from-emerald-100 to-emerald-50" },
  default: { badge: "bg-gray-100 text-gray-700", accent: "text-gray-700", gradient: "from-gray-100 to-gray-50" },
};

function CategoryBadge({ category }: { category: string }) {
  const colors = categoryColors[category] || categoryColors.default;
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${colors.badge} border border-current/20`}>
      {category}
    </span>
  );
}

function MetaItem({ icon, children, className = "" }: { icon: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-xs text-text-light ${className}`}>
      <span className="inline-flex h-3.5 w-3.5 items-center justify-center text-text-light/70">{icon}</span>
      {children}
    </span>
  );
}

const CalendarIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);
const UserIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const ClockIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const ArrowIcon = () => (
  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);

function NewsCard({ item, index, variant = "default" }: { item: typeof news[0]; index: number; variant?: "default" | "featured" | "tall" | "wide" }) {
  const colors = categoryColors[item.category] || categoryColors.default;
  const isFeatured = variant === "featured";
  const isTall = variant === "tall";
  const isWide = variant === "wide";

  const cardBase = "group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-gray-100";
  const layoutClasses = isFeatured ? "lg:col-span-2 lg:row-span-2 xl:col-span-2" : isTall ? "row-span-2 lg:col-span-1" : isWide ? "lg:col-span-2" : "";

  return (
    <article
      key={item.id}
      className={`${cardBase} ${layoutClasses}`}
      style={{ animationDelay: `${(index % 10 + 1) * 70}ms` }}
    >
      <Link href={`/news/${item.id}`} className="block relative h-full" aria-label={`Read ${item.title}`}>
        <div className={`relative overflow-hidden ${isFeatured ? "h-80 sm:h-96 lg:h-[420px]" : isTall ? "h-72 lg:h-80" : isWide ? "h-56" : "h-48"}`}>
          <img
            src={item.img}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            loading={index < 4 ? "eager" : "lazy"}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent ${isFeatured ? "from-black/60 via-black/10" : ""}`} />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(135deg, ${colors.gradient.split(" ")[1]} 0%, transparent 50%)` }} />

          <div className="absolute top-3 left-3 z-10">
            <CategoryBadge category={item.category} />
          </div>

          {!isFeatured && (
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight line-clamp-2 drop-shadow-md">
                {item.title}
              </h3>
            </div>
          )}

          {isFeatured && (
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <CategoryBadge category={item.category} />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                {item.title}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/90">
                <MetaItem icon={<CalendarIcon />} children={item.date} />
                <span className="hidden w-1 h-1 rounded-full bg-white/30 sm:block" />
                <MetaItem icon={<UserIcon />} children={item.author} />
                <span className="hidden w-1 h-1 rounded-full bg-white/30 sm:block" />
                <MetaItem icon={<ClockIcon />} children={item.readTime} />
              </div>
            </div>
          )}
        </div>

        {!isFeatured && (
          <div className="flex flex-1 flex-col p-5 sm:p-6 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r" style={{ backgroundImage: colors.gradient }} />
            <div className="flex flex-1 flex-col">
              <Link href={`/news/${item.id}`} className="group">
                <h3 className="text-lg sm:text-xl font-bold text-dark leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </Link>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-light line-clamp-3">{item.desc}</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-light">
              <MetaItem icon={<CalendarIcon />} children={item.date} />
              <span className="hidden w-1 h-1 rounded-full bg-gray-300 sm:block" />
              <MetaItem icon={<UserIcon />} children={item.author} />
              <span className="hidden w-1 h-1 rounded-full bg-gray-300 sm:block" />
              <MetaItem icon={<ClockIcon />} children={item.readTime} />
            </div>
            <Link
              href={`/news/${item.id}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary group"
            >
              Read More
              <ArrowIcon />
            </Link>
          </div>
        )}
      </Link>
    </article>
  );
}

function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mx-auto max-w-lg text-lg text-text-light">{subtitle}</p>}
      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        <div className="h-px w-20 bg-gradient-to-r from-primary via-primary to-transparent" />
      </div>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export default function NewsPage() {
  const [first, second, third, fourth, fifth, sixth] = news;

  return (
    <>
      <section
        className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65) 100%), url('/breadcrumb_bg.png')",
        }}
      >
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(ellipse at center, #000000 0%, transparent 70%)" }} />
        <div className="relative container-custom text-center text-white z-10 px-4">
          <nav className="mb-8 inline-flex items-center gap-2 text-sm font-medium animate-fade-in-up">
            <Link href="/" className="text-yellow-300 hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-300">News & Updates</span>
          </nav>
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Latest <span className="relative">News</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-200/90 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Discover our latest initiatives, community impact stories, and organizational milestones.
          </p>
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <div className="inline-flex items-center gap-4 text-sm font-medium text-gray-200/80">
              <div className="flex items-center gap-1.5">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>Live Updates</span>
              </div>
              <span className="h-5 w-px bg-white/20" />
              <span>{news.length} Articles This Year</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="relative py-20 sm:py-28 -mt-16 z-10">
        <div className="container-custom">
          <SectionHeader
            title="Featured Stories"
            subtitle="Our most impactful recent updates and community highlights"
          />

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <NewsCard item={first} index={0} variant="featured" />
            <NewsCard item={second} index={1} variant="tall" />
            <NewsCard item={third} index={2} variant="tall" />
            <NewsCard item={fourth} index={3} variant="default" />
            <NewsCard item={fifth} index={4} variant="default" />
            <NewsCard item={sixth} index={5} variant="default" />
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/archive"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 bg-white px-10 py-4 text-base font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg"
            >
              View All Articles
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}