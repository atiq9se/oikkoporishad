"use client";

import Link from "next/link";

const executiveCommittee = [
  { id: "EC-2026-01", name: "Dr. Ahmed Rahman", role: "President", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
  { id: "EC-2026-02", name: "Ms. Fatima Begum", role: "Vice President", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80" },
  { id: "EC-2026-03", name: "Mr. Kamal Hossain", role: "Vice President", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { id: "EC-2026-04", name: "Ms. Shahana Begum", role: "General Secretary", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" },
  { id: "EC-2026-06", name: "Mr. Rahim Uddin", role: "Treasurer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
  { id: "EC-2026-07", name: "Ms. Ayesha Khan", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&q=80" },
  { id: "EC-2026-08", name: "Mr. Jamal Ahmed", role: "Executive Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { id: "EC-2026-09", name: "Ms. Nazma Begum", role: "Executive Member", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" },
  { id: "EC-2026-10", name: "Mr. Hasan Ali", role: "Executive Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { id: "EC-2026-11", name: "Ms. Farida Parveen", role: "Executive Member", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
];

export default function OfficeBearersPage() {
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
          <Link
            href="/glas"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to About
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Office Bearers</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Current Executive Committee 2026-27
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%231a5632%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M0 38.59L38.59 0%22 stroke=%22%231a5632%22 stroke-width=%220.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="container-custom relative">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              Office Bearers
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded bg-secondary" />
            <p className="text-lg text-text">
              Current Executive Committee 2026-27
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 mx-auto max-w-xs">
              {executiveCommittee.filter(m => m.role === "President").map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>

            <div className="mb-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              {executiveCommittee.filter(m => m.role === "Vice President").map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>

            <div className="mb-12 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              {executiveCommittee.filter(m => m.role === "General Secretary" || m.role === "Treasurer" || m.role === "Joint Secretary").map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {executiveCommittee.filter(m => m.role === "Executive Member").map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MemberCard({ member }: { member: typeof executiveCommittee[number] }) {
  const isPresident = member.role === "President";
  return (
    <Link
      href={`/members/${member.id}`}
      className={`animate-fade-in-up opacity-0 relative rounded-2xl bg-white p-5 shadow-2xl border -translate-y-2 transition-all duration-300 block ${isPresident ? "border-yellow-400 shadow-yellow-200/50" : "border-primary/40"}`}
    >
      <div className="relative">
        <div className={`absolute inset-0 rounded-full opacity-100 transition-opacity duration-500 ${isPresident ? "bg-gradient-to-br from-yellow-200/30 to-amber-200/30" : "bg-gradient-to-br from-primary/15 to-secondary/15"}`} />
        <img
          src={member.image}
          alt={member.name}
          className={`relative mx-auto rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 scale-105 ${isPresident ? "h-36 w-36 ring-2 ring-yellow-400" : "h-28 w-28"}`}
        />
      </div>
      <div className="mt-5 text-center">
        <p className="font-semibold text-black text-sm transition-colors duration-300">
          {member.name}
        </p>
        <p className={`mt-1.5 text-lg font-bold ${isPresident ? "text-amber-600" : "text-primary"}`}>{member.role}</p>
      </div>
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl scale-x-100 transition-transform duration-300 origin-left ${isPresident ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" : "bg-gradient-to-r from-primary to-secondary"}`} />
    </Link>
  );
}