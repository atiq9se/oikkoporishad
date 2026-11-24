"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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
  const [query, setQuery] = useState("");

  const filteredMembers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return activeMembers;

    return activeMembers.filter((member) =>
      [member.name, member.role, member.id].some((field) =>
        field.toLowerCase().includes(q)
      )
    );
  }, [query]);

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
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            <Link href="/" className="text-yellow-300 transition-colors hover:text-white">
              Home
            </Link>
            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/members" className="text-yellow-300 transition-colors hover:text-white">
              Members
            </Link>
            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-300">General Member List</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            General Member List
          </h1>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-accent py-16">
        <div className="container-custom">
          <div className="mx-auto mb-8 max-w-xl">
            <div className="relative">
              <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, member ID, or role..."
                aria-label="Search members"
                className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-10 text-sm text-dark outline-none transition-colors placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-text-light transition-colors hover:bg-gray-100 hover:text-primary"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <p className="mt-3 text-center text-sm text-text-light">
              Showing {filteredMembers.length} of {activeMembers.length} members
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member, index) => (
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
            {filteredMembers.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
                <p className="text-lg font-semibold text-dark">No members found</p>
                <p className="mt-1 text-sm text-text-light">
                  Try a different name, member ID, or role.
                </p>
              </div>
            )}
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