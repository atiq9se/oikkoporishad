import Link from "next/link";

const quickLinks = [
  {
    title: "Office Bearers",
    href: "/glas/office-bearers",
    desc: "Our office bearers and leadership",
    icon: "👤",
  },
  {
    title: "Former Presidents",
    href: "/glas/former-presidents",
    desc: "Former Presidents of Oikkoparishad",
    icon: "👑",
  },
  {
    title: "Mission & Vision",
    href: "/glas/mission-vision",
    desc: "Our purpose and aspirations",
    icon: "🎯",
  },
  {
    title: "Office Staff",
    href: "/glas/office-staff",
    desc: "Meet our dedicated team",
    icon: "👥",
  },
];

const values = [
  { title: "Integrity", desc: "We uphold the highest ethical standards in all our actions." },
  { title: "Compassion", desc: "We serve with empathy and respect for every individual." },
  { title: "Sustainability", desc: "We create solutions that last for generations." },
  { title: "Transparency", desc: "We are accountable to our donors and communities." },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="animate-fade-in-up flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')",
        }}
      >
        <div className="container-custom text-center text-white">
          <nav className="mb-6 inline-flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-yellow-300 hover:text-white transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-gray-300">OIKKO PARISHAD at a glance</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">OIKKO PARISHAD at a glance</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Discover our mission, vision, and the people behind Oikkoparishad.
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up py-20">
        <div className="container-custom">
          <div className="mx-auto mb-16 w-full text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">OIKKO PARISHAD at a glance</h2>
            <div className="mx-auto mb-8 h-1 w-20 rounded bg-secondary" />
            <div className="text-left space-y-4 text-lg leading-relaxed text-text-light">
              <p>
                Oikkoparishad is a non-political, non-profit, and non-government voluntary
                social welfare organization dedicated to improving the lives of underserved
                communities in Bangladesh. Founded in 2026, we have been working tirelessly
                to create lasting change through education, healthcare, and sustainable
                development programs across the Sylhet division and beyond.
              </p>
              <p>
                Our journey began with a small group of visionary
                community leaders who recognized the urgent need for organized social welfare
                initiatives in the Jalalabad region. What started as a modest effort to
                provide basic education to underprivileged children has since grown into
                a comprehensive development organization touching the lives of thousands
                of families every year.
              </p>
              <p>
                Today, we operate a wide range of programs spanning formal and non-formal
                education, primary healthcare services, women empowerment and vocational
                training, clean water and sanitation projects, disaster relief, and
                community infrastructure development. Our dedicated team of staff,
                volunteers, and partners work together to identify the most pressing needs
                of the communities we serve and deliver targeted, impactful solutions.
              </p>
              <p>
                We believe that sustainable development begins with empowered individuals.
                By investing in education, we create opportunities for the next generation.
                By providing healthcare, we ensure that families can thrive. By supporting
                women with skills and resources, we build stronger, more resilient
                communities. Every program we undertake is designed with long-term impact
                in mind, ensuring that the benefits continue to grow for years to come.
              </p>
              <p>
                Accountability and transparency are at the heart of everything we do. We
                maintain the highest standards of financial stewardship and regularly
                share our progress with donors, members, and the communities we serve.
                Our governance structure ensures that decisions are made collectively
                and in the best interest of those who rely on us.
              </p>
              <p>
                As we look to the future, we remain committed to our founding mission while
                embracing new approaches and technologies to enhance our effectiveness.
                We invite you to explore our work, learn about our programs, and join us
                in building a brighter, more equitable future for the people of Jalalabad
                and Bangladesh.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 text-4xl">{link.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-dark group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-text-light">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl">
            Our Core Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
              >
                <h3 className="mb-3 text-xl font-bold text-primary">{value.title}</h3>
                <p className="text-sm leading-relaxed text-text-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
