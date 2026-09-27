import Link from "next/link";

const commissioners = [
  { name: "Mr. Abdul Karim", role: "Chief Election Commissioner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Ms. Shahana Begum", role: "Election Commissioner", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { name: "Mr. Rahim Uddin", role: "Election Commissioner", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { name: "Ms. Ayesha Khan", role: "Election Commissioner", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
];

export default function ElectionCommissionerPage() {
  return (
    <>
      <section className="animate-fade-in-up opacity-0 relative bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')"
      }}>
        <div className="container-custom py-20 text-center text-white">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-yellow-300 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Election Commission</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">Overseeing fair and transparent elections for Oikkoparishad</p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Election Commissioners</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">The election commission responsible for conducting fair elections</p>
          </div>
          {(() => {
            const chief = commissioners.filter(c => c.role === "Chief Election Commissioner");
            const others = commissioners.filter(c => c.role !== "Chief Election Commissioner");
            return (
              <div className="mx-auto max-w-4xl">
                {chief.map((person, i) => (
                  <div key={person.name} className="animate-fade-in-up opacity-0 mx-auto mb-10 max-w-sm rounded-2xl bg-white p-6 shadow-xl border border-primary/20 text-center" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                    <div className="relative mx-auto h-36 w-36">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/30 to-amber-200/30" />
                      <img src={person.image} alt={person.name} className="relative h-36 w-36 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-yellow-400" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-dark">{person.name}</h3>
                    <p className="mt-1 text-base font-bold text-amber-600">{person.role}</p>
                  </div>
                ))}
                <div className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
                  {others.map((person, i) => (
                    <div key={person.name} className="animate-fade-in-up opacity-0 rounded-2xl bg-white p-6 shadow-xl border border-primary/20 text-center" style={{ animationDelay: `${(i + 2) * 100}ms` }}>
                      <div className="relative mx-auto h-32 w-32">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15" />
                        <img src={person.image} alt={person.name} className="relative h-32 w-32 rounded-full object-cover border-4 border-white shadow-xl" />
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-dark">{person.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-primary">{person.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>
    </>
  );
}
