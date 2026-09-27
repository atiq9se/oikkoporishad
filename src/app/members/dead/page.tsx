import Link from "next/link";

const deadMembers = [
  { id: "JAL-2024-015", name: "Late Mr. Rafiq Ahmed", role: "Former President", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { id: "JAL-2024-016", name: "Late Ms. Halima Begum", role: "Former Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { id: "JAL-2024-031", name: "Late Mr. Abdul Mannan", role: "Former Vice President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { id: "JAL-2024-032", name: "Late Ms. Sufia Khatun", role: "Former Member", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" },
  { id: "JAL-2024-033", name: "Late Mr. Abdul Jalil", role: "Former General Secretary", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { id: "JAL-2024-034", name: "Late Ms. Asia Begum", role: "Former Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { id: "JAL-2024-035", name: "Late Mr. Mofiz Uddin", role: "Former Treasurer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80" },
  { id: "JAL-2024-036", name: "Late Ms. Rabeya Begum", role: "Former Member", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
  { id: "JAL-2024-037", name: "Late Mr. Abul Hashem", role: "Former Joint Secretary", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
  { id: "JAL-2024-038", name: "Late Ms. Amena Begum", role: "Former Member", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&q=80" },
  { id: "JAL-2024-039", name: "Late Mr. Siddiqur Rahman", role: "Former Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { id: "JAL-2024-040", name: "Late Ms. Roushan Ara", role: "Former Member", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" },
];

export default function DeadMembersPage() {
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
              Deceased Members
            </h1>
            <p className="text-lg text-text-light">
              {deadMembers.length} members in eternal rest
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {deadMembers.map((member, index) => (
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