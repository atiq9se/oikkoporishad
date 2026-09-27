import Link from "next/link";

const news = [
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
  },
  {
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
    title: "Winter Relief Distribution 2026",
    date: "May 25, 2026",
    subtitle: "Warm clothes and blankets distributed to 800+ families in remote villages across Sylhet region."
  },
  {
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
    title: "Women Vocational Training Graduation",
    date: "May 5, 2026",
    subtitle: "120 women completed vocational training in tailoring, computing, and small business management."
  },
  {
    img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
    title: "Clean Water Project Phase 3 Begins",
    date: "April 18, 2026",
    subtitle: "15 new tube wells to be installed in water-scarce areas, benefiting over 3,000 residents."
  },
];

export default function NewsPage() {
  return (
    <>
      <section
        className="animate-fade-in-up opacity-0 flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')",
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">News</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Latest news and updates from Oikkoparishad
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <div
                key={item.title}
                className="animate-fade-in-up opacity-0 group rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-light">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-dark group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
