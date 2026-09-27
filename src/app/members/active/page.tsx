import Link from "next/link";

const activeMembers = [
  { id: "JAL-2024-001", name: "Dr. Ahmed Rahman", role: "President", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
  { id: "JAL-2024-002", name: "Ms. Fatima Begum", role: "General Secretary", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80" },
  { id: "JAL-2024-003", name: "Mr. Kamal Hossain", role: "Vice President", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { id: "JAL-2024-004", name: "Mr. Rahim Uddin", role: "Treasurer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { id: "JAL-2024-005", name: "Ms. Ayesha Khan", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&q=80" },
  { id: "JAL-2024-006", name: "Mr. Jamal Ahmed", role: "Executive Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { id: "JAL-2024-007", name: "Ms. Nazma Begum", role: "Executive Member", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" },
  { id: "JAL-2024-008", name: "Mr. Hasan Ali", role: "Executive Member", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
  { id: "JAL-2024-009", name: "Mr. Karimullah", role: "Member", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { id: "JAL-2024-010", name: "Ms. Rehana Akter", role: "Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { id: "JAL-2024-011", name: "Mr. Salam Mia", role: "Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { id: "JAL-2024-012", name: "Ms. Shahana Begum", role: "Member", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
];

export default function ActiveMembersPage() {
  return (
    <>
      <section className="animate-fade-in-up opacity-0 bg-accent py-16">
        <div className="container-custom">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Link href="/members" className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-primary-light hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Members
            </Link>
            <h1 className="mb-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
              Active Members
            </h1>
            <p className="text-lg text-text-light">
              Our {activeMembers.length} active members leading community initiatives
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {activeMembers.map((member, index) => (
              <div
                key={member.id}
                className="animate-fade-in-up opacity-0 relative rounded-2xl bg-white shadow-2xl border border-primary/40 -translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                <div className="p-5 pb-0">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 opacity-100 transition-opacity duration-500" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative mx-auto h-28 w-28 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 scale-105"
                    />

                  </div>
                  <div className="mt-5 text-center">
                    <p className="font-semibold text-black text-sm">
                      {member.name}
                    </p>
                    <p className="mt-1.5 text-xs font-mono text-text-light">
                      Member ID: {member.id.split("-").pop()}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3">
                  <Link
                    href={`/members/${member.id}`}
                    className="block w-full rounded-lg bg-accent py-2.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-text-light transition-colors hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">1</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-text-light transition-colors hover:bg-gray-50">2</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-text-light transition-colors hover:bg-gray-50">3</button>
            <span className="text-text-light">...</span>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-text-light transition-colors hover:bg-gray-50">5</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-text-light transition-colors hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}