import Link from "next/link";

const objectives = [
  {
    icon: "📚",
    title: "Quality Education",
    desc: "Provide accessible education opportunities through scholarships, school supplies, and after-school tutoring programs for underprivileged children.",
  },
  {
    icon: "🏥",
    title: "Healthcare Access",
    desc: "Ensure basic healthcare reaches remote communities through free medical camps, health awareness programs, and partnerships with medical professionals.",
  },
  {
    icon: "👩‍🌾",
    title: "Economic Empowerment",
    desc: "Create sustainable livelihood opportunities through vocational training, micro-enterprise support, and agricultural development programs.",
  },
  {
    icon: "💧",
    title: "Clean Water & Sanitation",
    desc: "Improve access to safe drinking water and proper sanitation facilities to reduce waterborne diseases and improve community health.",
  },
  {
    icon: "🌿",
    title: "Environmental Sustainability",
    desc: "Promote environmental awareness, tree plantation drives, and sustainable practices to protect natural resources for future generations.",
  },
  {
    icon: "🤝",
    title: "Community Building",
    desc: "Foster social cohesion, youth leadership, and community participation in development initiatives to build resilient communities.",
  },
];

export default function MissionVisionPage() {
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
            href="/glas"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to About
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Mission & Vision</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Our guiding principles and aspirations for a better tomorrow
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto mb-20 grid max-w-5xl gap-12 md:grid-cols-2">
            <div className="rounded-2xl bg-accent p-10">
              <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-primary">Our Mission</h2>
              <p className="leading-relaxed text-text">
                To empower underserved communities through sustainable education,
                accessible healthcare, and economic opportunities that enable
                individuals to break the cycle of poverty and build dignified
                lives.
              </p>
            </div>
            <div className="rounded-2xl bg-accent p-10">
              <div className="mb-4 inline-block rounded-full bg-primary/10 p-3">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-primary">Our Vision</h2>
              <p className="leading-relaxed text-text">
                A world where every individual has equal access to education,
                healthcare, and the opportunity to thrive — regardless of their
                socioeconomic background.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary sm:text-4xl">
              Our Objectives
            </h2>
            <div className="mx-auto mb-12 h-1 w-20 rounded bg-secondary" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {objectives.map((obj, index) => (
                <div
                  key={obj.title}
                  className="animate-fade-in-up opacity-0 group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                  style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
                >
                  <div className="mb-4 text-4xl">{obj.icon}</div>
                  <h3 className="mb-2 text-lg font-bold text-dark">{obj.title}</h3>
                  <p className="text-sm leading-relaxed text-text-light">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Help Us Achieve Our Vision</h2>
          <p className="mb-8 text-gray-200">Your support can make a real difference in someone's life.</p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-dark transition-colors hover:bg-yellow-400"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
