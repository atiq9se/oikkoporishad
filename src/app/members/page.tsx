import Link from "next/link";

const memberCategories = [
  {
    title: "Active Members",
    count: 12,
    desc: "Currently active members participating in association activities",
    icon: "✓",
    href: "/members/active",
    color: "bg-green-500",
    badge: "12",
  },
  {
    title: "Defaulter",
    count: 2,
    desc: "Members with pending dues or obligations",
    icon: "⚠",
    href: "/members/defaulter",
    color: "bg-orange-500",
    badge: "2",
  },
  {
    title: "Deceased",
    count: 2,
    desc: "Members who have passed away - honored in memoriam",
    icon: "†",
    href: "/members/dead",
    color: "bg-gray-600",
    badge: "2",
  },
  {
    title: "Suspended",
    count: 2,
    desc: "Members temporarily suspended from activities",
    icon: "✕",
    href: "/members/suspended",
    color: "bg-red-500",
    badge: "2",
  },
  {
    title: "Inactive",
    count: 3,
    desc: "Members currently not participating in activities",
    icon: "○",
    href: "/members/inactive",
    color: "bg-gray-400",
    badge: "3",
  },
];

export default function MembersPage() {
  return (
    <>
      <section className="relative bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')"
      }}>
        <div className="container-custom py-20 text-center text-white">
          <Link href="/members" className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-yellow-300 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Members Directory
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Browse members by category. Total registered members: <span className="font-bold text-yellow-300">21</span>
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              Member Categories
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">
              Select a category to view the member list
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {memberCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group relative rounded-2xl bg-white p-6 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.color}/10 text-2xl`}>
                    {category.icon}
                  </div>
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full ${category.color} text-white text-xs font-bold`}>
                    {category.badge}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-text-light mb-4">{category.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-primary">View Members</span>
                  <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
            Quick Search
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
          <form className="mx-auto max-w-md flex gap-3">
            <input
              type="text"
              placeholder="Search by name, ID, or category..."
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </>
  );
}