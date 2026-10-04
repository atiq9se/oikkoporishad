import Link from "next/link";

const presidents = [
  {
    name: "Late Abdul Jalil",
    duration: "1948 - 1955",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Late Mohammad Ali",
    duration: "1955 - 1962",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    name: "Late Abdul Karim",
    duration: "1962 - 1970",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Late Rafiq Ahmed",
    duration: "1970 - 1978",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Late Kamal Uddin",
    duration: "1978 - 1985",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
  },
  {
    name: "Late Nurul Islam",
    duration: "1985 - 1992",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
  {
    name: "Late Abdul Hannan",
    duration: "1992 - 1999",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
  },
  {
    name: "Late Shahidullah Khan",
    duration: "1999 - 2006",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    name: "Late Mohammad Hossain",
    duration: "2006 - 2013",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Dr. Abdul Majid",
    duration: "2013 - 2020",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Prof. Farid Ahmed",
    duration: "2020 - Present",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
];

export default function FormerPresidentsPage() {
  const reversedPresidents = presidents.slice().reverse();

  return (
    <>
      <section
        className="flex min-h-[40vh] items-center justify-center bg-cover bg-center"
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Former Presidents</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Former Presidents of Oikkoparishad
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2" />
            <div className="space-y-16">
              {reversedPresidents.map((president, index) => (
                <div
                  key={president.name}
                  className="relative flex items-start gap-8"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 max-w-[45%] pr-8 text-right">
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                          <div className="flex flex-col md:flex-row-reverse gap-6">
                            <div className="relative w-full md:w-32 flex-shrink-0">
                              <img
                                src={president.image}
                                alt={president.name}
                                className="w-full aspect-square object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex flex-col justify-center text-right">
                              <h3 className="mb-2 text-xl font-bold text-dark">{president.name}</h3>
                              <p className="text-primary font-medium">{president.duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg border-4 border-white">
                        {president.duration.split(" - ")[0]}
                      </div>

                      <div className="flex-1 max-w-[45%]" />
                    </>
                  ) : (
                    <>
                      <div className="flex-1 max-w-[45%]" />

                      <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg border-4 border-white">
                        {president.duration.split(" - ")[0]}
                      </div>

                      <div className="flex-1 max-w-[45%] pl-8">
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="relative w-full md:w-32 flex-shrink-0">
                              <img
                                src={president.image}
                                alt={president.name}
                                className="w-full aspect-square object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <h3 className="mb-2 text-xl font-bold text-dark">{president.name}</h3>
                              <p className="text-primary font-medium">{president.duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}