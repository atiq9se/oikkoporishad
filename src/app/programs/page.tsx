const clubEvents = [
  {
    title: "Annual Sports Tournament 2026",
    type: "Club Event",
    date: "December 15, 2026",
    location: "Oikkoparishad Club Ground, Jalalabad",
    desc: "Inter-club cricket, football, and badminton tournament open to all members. Prizes for winners and runners-up.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Monthly Cultural Evening",
    type: "Cultural Program",
    date: "December 28, 2026",
    location: "Oikkoparishad Community Hall",
    desc: "An evening of poetry, music, and traditional performances by club members and local artists. All are welcome.",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Blood Donation Camp",
    type: "Social Welfare",
    date: "January 10, 2027",
    location: "Oikkoparishad Main Branch",
    desc: "Annual blood donation drive organized in collaboration with Sylhet Medical College. Donors receive certificates.",
    color: "from-red-500 to-rose-600",
  },
  {
    title: "Tree Plantation Drive",
    type: "Environment",
    date: "January 20, 2027",
    location: "Jalalabad Municipal Area",
    desc: "Mass tree plantation along city roads and school premises. Saplings provided by the Forest Department.",
    color: "from-green-600 to-lime-600",
  },
  {
    title: "Annual Picnic & Family Day",
    type: "Club Event",
    date: "February 5, 2027",
    location: "Jaflong Tourist Spot, Sylhet",
    desc: "A day-long family picnic for members and their families. Food, games, and cultural activities arranged.",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Seminar on Community Development",
    type: "Workshop",
    date: "February 18, 2027",
    location: "Oikkoparishad Conference Room",
    desc: "Expert speakers discuss rural development, youth engagement, and sustainable community practices.",
    color: "from-blue-600 to-indigo-600",
  },
];

export default function EventsPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Our Events</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Explore our ongoing programs and upcoming club events and activities.
          </p>
        </div>
      </section>

      {/* Club Events & Activities */}
      <section className="animate-fade-in-up opacity-0 bg-gray-50 py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              Club Events & Activities
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">
              Upcoming events and activities organized by Oikkoparishad club and community
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clubEvents.map((event, index) => (
              <div
                key={event.title}
                className="animate-fade-in-up opacity-0 group rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${event.color} p-5 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {event.type}
                    </span>
                    <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-text-light">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-light">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-text-light pt-1 border-t border-gray-50">
                    {event.desc}
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
