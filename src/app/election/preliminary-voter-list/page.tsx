import Link from "next/link";

const voters = [
  { name: "Mr. Abdul Karim", status: "Verified", constituency: "Sylhet-1", registrationDate: "January 15, 2026", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Ms. Shahana Begum", status: "Verified", constituency: "Sylhet-2", registrationDate: "February 20, 2026", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
  { name: "Mr. Rahim Uddin", status: "Pending Review", constituency: "Sylhet-3", registrationDate: "March 10, 2026", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  { name: "Ms. Ayesha Khan", status: "Verified", constituency: "Sylhet-4", registrationDate: "April 5, 2026", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
  { name: "Mr. Karimullah", status: "Verified", constituency: "Sylhet-5", registrationDate: "April 20, 2026", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
  { name: "Ms. Rehana Akter", status: "Pending Review", constituency: "Sylhet-6", registrationDate: "May 10, 2026", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
];

export default function ElectionPreliminaryVoterListPage() {
  const verified = voters.filter(v => v.status === "Verified");
  const pending = voters.filter(v => v.status === "Pending Review");

  return (
    <section
      className="animate-fade-in-up opacity-0 relative bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')"
      }}
      aria-label="Preliminary Voter List"
    >
      <div className="container-custom py-20 text-center text-white">
        <Link href="/" className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-yellow-300 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Preliminary Voter List</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-200">Draft list of eligible voters for the upcoming election, subject to revision</p>
      </div>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Verified Voters</h2>
            <p className="text-lg text-text-light">Out of total registered voters, currently verified</p>
            <div className="mt-6 text-2xl font-bold text-primary">{verified.length}</div>
            <p className="text-sm text-text-light">of {voters.length} total registrations</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verified.map((voter, i) => (
              <div key={voter.name} className="animate-fade-in-up opacity-0 rounded-2xl bg-white p-6 shadow-xl border border-primary/20 text-center" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                <div className="relative mx-auto h-36 w-36">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15" />
                  <img src={voter.image} alt={voter.name} className="relative h-36 w-36 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-primary-400" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-dark">{voter.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{voter.constituency}</p>
                <p className="mt-1 text-xs text-text-light">Registered: {voter.registrationDate}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-text-light">Out of {voters.length} total registrations, {verified.length} are currently verified</p>
            <p className="mt-4 text-sm text-text-light">Pending review: {pending.length}</p>
          </div>
        </div>
      </section>
    </section>
  );
}