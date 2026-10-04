const candidates = [
  { name: "Mr. Hasan Ali", role: "Valid Candidate", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
  { name: "Ms. Rehana Akter", role: "Valid Candidate", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { name: "Mr. Karimullah", role: "Valid Candidate", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Ms. Ayesha Khan", role: "Valid Candidate", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
];

import Link from "next/link";

export default function ElectionValidCandidateListPage() {
  return (
    <section
      className="animate-fade-in-up opacity-0 relative bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')"
      }}
      aria-label="Valid Candidate List"
    >
      <div className="container-custom py-20 text-center text-white">
        <Link href="/" className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-yellow-300 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Valid Candidates</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-200">Certified candidates meeting all eligibility requirements for election</p>
      </div>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Certified Candidates</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">The following candidates have been verified and approved to run for office</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {candidates.map((candidate, i) => (
              <div key={candidate.name} className="animate-fade-in-up opacity-0 rounded-2xl bg-white p-6 shadow-xl border border-primary/20 text-center" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                <div className="relative mx-auto h-36 w-36">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15" />
                  <img src={candidate.image} alt={candidate.name} className="relative h-36 w-36 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-primary-400" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-dark">{candidate.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{candidate.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}