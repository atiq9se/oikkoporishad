import Link from "next/link";

const voters = [
  { serial: "001", name: "Dr. Ahmed Rahman", id: "JAL-2024-001" },
  { serial: "002", name: "Ms. Fatima Begum", id: "JAL-2024-002" },
  { serial: "003", name: "Mr. Kamal Hossain", id: "JAL-2024-003" },
  { serial: "004", name: "Ms. Shahana Begum", id: "JAL-2024-004" },
  { serial: "005", name: "Mr. Rahim Uddin", id: "JAL-2024-005" },
  { serial: "006", name: "Ms. Ayesha Khan", id: "JAL-2024-006" },
  { serial: "007", name: "Mr. Jamal Ahmed", id: "JAL-2024-007" },
  { serial: "008", name: "Ms. Nazma Begum", id: "JAL-2024-008" },
  { serial: "009", name: "Mr. Hasan Ali", id: "JAL-2024-009" },
  { serial: "010", name: "Mr. Karimullah", id: "JAL-2024-010" },
  { serial: "011", name: "Ms. Rehana Akter", id: "JAL-2024-011" },
  { serial: "012", name: "Mr. Salam Mia", id: "JAL-2024-012" },
  { serial: "013", name: "Mr. Abdul Karim", id: "JAL-2024-013" },
  { serial: "014", name: "Ms. Rina Begum", id: "JAL-2024-014" },
  { serial: "015", name: "Mr. Monir Hossain", id: "JAL-2024-015" },
  { serial: "016", name: "Ms. Farida Begum", id: "JAL-2024-016" },
  { serial: "017", name: "Mr. Jamal Uddin", id: "JAL-2024-017" },
  { serial: "018", name: "Ms. Jahanara Begum", id: "JAL-2024-018" },
  { serial: "019", name: "Mr. Shahidul Islam", id: "JAL-2024-019" },
  { serial: "020", name: "Ms. Parveen Akter", id: "JAL-2024-020" },
];

export default function VoterListPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Voter List</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">Registered voters for the upcoming election</p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">Registered Voters</h2>
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">Total: {voters.length}</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-accent">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase text-text-light tracking-wider">Serial</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase text-text-light tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase text-text-light tracking-wider">Member ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {voters.map((voter, i) => (
                    <tr key={voter.serial} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-text-light">{voter.serial}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-dark">{voter.name}</td>
                      <td className="px-6 py-4 text-sm font-mono text-primary">{voter.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
