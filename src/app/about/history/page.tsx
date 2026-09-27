import Link from "next/link";

const timeline = [
  {
    year: "1948",
    title: "Foundation",
    desc: "Oikkoparishad was founded by a group of visionary community leaders committed to social welfare and community development in the Jalalabad region.",
  },
  {
    year: "1960",
    title: "First School Established",
    desc: "The association established its first formal educational institution, providing free primary education to underprivileged children in rural areas.",
  },
  {
    year: "1975",
    title: "Healthcare Initiative",
    desc: "Launched mobile health clinic services to bring basic medical care to remote villages that had no access to healthcare facilities.",
  },
  {
    year: "1990",
    title: "Women's Empowerment Program",
    desc: "Introduced vocational training programs for women, enabling them to develop skills in tailoring, handicrafts, and small business management.",
  },
  {
    year: "2000",
    title: "Clean Water Project",
    desc: "Initiated the Clean Water for All project, installing deep tube wells and rainwater harvesting systems in water-scarce communities.",
  },
  {
    year: "2010",
    title: "Registered as NGO",
    desc: "Officially registered as a non-governmental organization with the Government of Bangladesh, expanding our reach and impact.",
  },
  {
    year: "2015",
    title: "Disaster Relief Operations",
    desc: "Played a vital role in disaster relief and rehabilitation efforts, providing emergency food, shelter, and medical aid to affected families.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Embraced digital tools to enhance program delivery, including online education support and digital health awareness campaigns during the pandemic.",
  },
  {
    year: "2024",
    title: "Expanding Horizons",
    desc: "Reached over 50 villages with comprehensive development programs, impacting more than 10,000 lives across education, health, and livelihood sectors.",
  },
];

export default function HistoryPage() {
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
          <Link
            href="/about"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to About
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Our History</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Tracing the journey of Oikkoparishad from 1948 to present day
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-primary/20" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className="animate-fade-in-up opacity-0 relative flex gap-8" style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}>
                    <div className="flex-shrink-0">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                      <h3 className="mb-2 text-xl font-bold text-dark">{item.title}</h3>
                      <p className="leading-relaxed text-text-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-gray-50 py-20">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">Continuing Our Legacy</h2>
          <div className="mx-auto mb-8 h-1 w-20 rounded bg-secondary" />
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-light">
            As we look toward the future, we remain committed to our founding mission —
            empowering communities and transforming lives across Bangladesh.
          </p>
          <Link
            href="/about/mission-vision"
            className="inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-light"
          >
            View Mission & Vision
          </Link>
        </div>
      </section>
    </>
  );
}
