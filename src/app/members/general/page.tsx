"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const members = [
  { id: "JAL-2024-001", name: "Rahman Garments Ltd.", regNo: "BGMEA-4521", contactPerson: "Dr. Ahmed Rahman", email: "info@rahmangarments.com" },
  { id: "JAL-2024-002", name: "Fatima Knitwear Ltd.", regNo: "BGMEA-4522", contactPerson: "Ms. Fatima Begum", email: "info@fatimaknitwear.com" },
  { id: "JAL-2024-003", name: "Kamal Apparels Ltd.", regNo: "BGMEA-4523", contactPerson: "Mr. Kamal Hossain", email: "info@kamalapparels.com" },
  { id: "JAL-2024-004", name: "Rahim Textiles Ltd.", regNo: "BGMEA-4524", contactPerson: "Mr. Rahim Uddin", email: "info@rahimtextiles.com" },
  { id: "JAL-2024-005", name: "Ayesha Fashion Ltd.", regNo: "BGMEA-4525", contactPerson: "Ms. Ayesha Khan", email: "info@ayeshafashion.com" },
  { id: "JAL-2024-006", name: "Jamal Sweaters Ltd.", regNo: "BGMEA-4526", contactPerson: "Mr. Jamal Ahmed", email: "info@jamalsweaters.com" },
  { id: "JAL-2024-007", name: "Nazma Dresses Ltd.", regNo: "BGMEA-4527", contactPerson: "Ms. Nazma Begum", email: "info@nazmadresses.com" },
  { id: "JAL-2024-008", name: "Hasan Composite Ltd.", regNo: "BGMEA-4528", contactPerson: "Mr. Hasan Ali", email: "info@hasancomposite.com" },
  { id: "JAL-2024-009", name: "Karim Denim Ltd.", regNo: "BGMEA-4529", contactPerson: "Mr. Karimullah", email: "info@karimdenim.com" },
  { id: "JAL-2024-010", name: "Rehana Knit Fashions", regNo: "BGMEA-4530", contactPerson: "Ms. Rehana Akter", email: "info@rehanaknit.com" },
  { id: "JAL-2024-011", name: "Salam Washing Ltd.", regNo: "BGMEA-4531", contactPerson: "Mr. Salam Mia", email: "info@salamwashing.com" },
  { id: "JAL-2024-012", name: "Shahana Apparels Ltd.", regNo: "BGMEA-4532", contactPerson: "Ms. Shahana Begum", email: "info@shahanaapparels.com" },
];

export default function GeneralMembersPage() {
  const [query, setQuery] = useState("");

  const filteredMembers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return members;

    return members.filter((member) =>
      [member.name, member.regNo, member.contactPerson, member.email].some((field) =>
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
                placeholder="Search by company, BGMEA reg no, contact person or email..."
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
              Showing {filteredMembers.length} of {members.length} members
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th scope="col" className="px-5 py-4 font-semibold">Member/Company Name</th>
                    <th scope="col" className="px-5 py-4 font-semibold">BGMEA Reg No</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Contact Person</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Email Address</th>
                    <th scope="col" className="px-5 py-4 text-center font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className="transition-colors hover:bg-accent/60">
                      <td className="px-5 py-4 font-semibold text-dark">{member.name}</td>
                      <td className="whitespace-nowrap px-5 py-4 font-mono text-xs text-text-light">{member.regNo}</td>
                      <td className="px-5 py-4 text-text">{member.contactPerson}</td>
                      <td className="px-5 py-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-primary transition-colors hover:text-primary-light hover:underline"
                        >
                          {member.email}
                        </a>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <Link
                          href={`/members/${member.id}`}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-light"
                        >
                          Details
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {filteredMembers.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-5 py-12 text-center">
                        <p className="text-lg font-semibold text-dark">No members found</p>
                        <p className="mt-1 text-sm text-text-light">
                          Try a different company name, BGMEA reg no, contact person or email.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
