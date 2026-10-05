import Link from "next/link";

const candidates = [
  { name: "Mr. Hasan Ali", role: "Preliminary Candidate", constituency: "Sylhet-1", experience: "3 years governance experience", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80" },
  { name: "Ms. Rehana Akter", role: "Preliminary Candidate", constituency: "Sylhet-2", experience: "2 years grassroots organizing", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
  { name: "Mr. Karimullah", role: "Preliminary Candidate", constituency: "Sylhet-3", experience: "4 years policy analysis", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  { name: "Ms. Ayesha Khan", role: "Preliminary Candidate", constituency: "Sylhet-4", experience: "5 years community development", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
];

export default function ElectionPreliminaryCandidateListPage() {
  return (
    <section
      className="animate-fade-in-up opacity-0 relative bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')"
      }}
      aria-label="Preliminary Candidate List"
    >
      <div className="container-custom py-20 text-center text-white">
        <Link href="/" className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-yellow-300 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Preliminary Candidates</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-200">Certified candidates approved for the preliminary election ballot</p>
      </div>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Preliminary Candidates</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text-light">The following candidates have been approved for the preliminary election ballot</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {candidates.map((candidate, i) => (
              <div key={candidate.name} className="animate-fade-in-up opacity-0 rounded-2xl bg-white p-6 shadow-xl border border-primary/20 text-center" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                <div className="relative mx-auto h-36 w-36">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15" />
                  <img src={candidate.image} alt={candidate.name} className="relative h-36 w-36 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-primary-400" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-dark">{candidate.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{candidate.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}