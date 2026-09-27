import Link from "next/link";
import { notFound } from "next/navigation";

const allMembers: Record<string, {
  id: string;
  name: string;
  role: string;
  image: string;
  category: string;
  status: "active" | "defaulter" | "dead" | "suspended" | "inactive";
  phone?: string;
  email?: string;
  address?: string;
  joiningDate?: string;
}> = {
  "JAL-2024-001": { id: "JAL-2024-001", name: "Dr. Ahmed Rahman", role: "President", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345678", email: "ahmed.rahman@example.com", address: "House 12, Road 5, Sylhet", joiningDate: "January 2020" },
  "JAL-2024-002": { id: "JAL-2024-002", name: "Ms. Fatima Begum", role: "General Secretary", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345679", email: "fatima.begum@example.com", address: "Flat 3B, Road 12, Sylhet", joiningDate: "March 2019" },
  "JAL-2024-003": { id: "JAL-2024-003", name: "Mr. Kamal Hossain", role: "Vice President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345680", email: "kamal.hossain@example.com", address: "Village Road, Jalalabad", joiningDate: "June 2018" },
  "JAL-2024-004": { id: "JAL-2024-004", name: "Mr. Rahim Uddin", role: "Treasurer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345681", email: "rahim.uddin@example.com", address: "23 Lake Road, Sylhet", joiningDate: "February 2021" },
  "JAL-2024-005": { id: "JAL-2024-005", name: "Ms. Ayesha Khan", role: "Joint Secretary", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345682", email: "ayesha.khan@example.com", address: "15 Green Road, Sylhet", joiningDate: "August 2020" },
  "JAL-2024-006": { id: "JAL-2024-006", name: "Mr. Jamal Ahmed", role: "Executive Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345683", email: "jamal.ahmed@example.com", address: "7 College Road, Sylhet", joiningDate: "November 2017" },
  "JAL-2024-007": { id: "JAL-2024-007", name: "Ms. Nazma Begum", role: "Executive Member", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345684", email: "nazma.begum@example.com", address: "42 New Town, Sylhet", joiningDate: "April 2022" },
  "JAL-2024-008": { id: "JAL-2024-008", name: "Mr. Hasan Ali", role: "Executive Member", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345685", email: "hasan.ali@example.com", address: "8 Market Road, Sylhet", joiningDate: "September 2019" },
  "JAL-2024-009": { id: "JAL-2024-009", name: "Mr. Karimullah", role: "Member", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345686", address: "5 Village Lane, Jalalabad", joiningDate: "December 2020" },
  "JAL-2024-010": { id: "JAL-2024-010", name: "Ms. Rehana Akter", role: "Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345687", email: "rehana.akter@example.com", address: "19 Garden Road, Sylhet", joiningDate: "July 2021" },
  "JAL-2024-011": { id: "JAL-2024-011", name: "Mr. Salam Mia", role: "Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345688", address: "3 Station Road, Sylhet", joiningDate: "October 2018" },
  "JAL-2024-012": { id: "JAL-2024-012", name: "Ms. Shahana Begum", role: "Member", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", category: "Active Members", status: "active", phone: "+8801712345689", address: "11 Lake View, Sylhet", joiningDate: "May 2022" },
  "JAL-2024-013": { id: "JAL-2024-013", name: "Mr. Abdul Karim", role: "Member", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", category: "Defaulter", status: "defaulter", joiningDate: "January 2019" },
  "JAL-2024-014": { id: "JAL-2024-014", name: "Ms. Rina Begum", role: "Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", category: "Defaulter", status: "defaulter", joiningDate: "March 2020" },
  "JAL-2024-015": { id: "JAL-2024-015", name: "Late Mr. Rafiq Ahmed", role: "Former President", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", category: "Deceased", status: "dead", joiningDate: "Founding Member" },
  "JAL-2024-016": { id: "JAL-2024-016", name: "Late Ms. Halima Begum", role: "Former Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", category: "Deceased", status: "dead", joiningDate: "2015" },
  "JAL-2024-017": { id: "JAL-2024-017", name: "Mr. Hasan Ali", role: "Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", category: "Suspended", status: "suspended", joiningDate: "June 2018" },
  "JAL-2024-018": { id: "JAL-2024-018", name: "Mr. Monir Hossain", role: "Member", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", category: "Inactive", status: "inactive", joiningDate: "February 2017" },
  "JAL-2024-019": { id: "JAL-2024-019", name: "Ms. Farida Begum", role: "Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", category: "Inactive", status: "inactive", joiningDate: "September 2019" },
  "JAL-2024-020": { id: "JAL-2024-020", name: "Mr. Jamal Uddin", role: "Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", category: "Inactive", status: "inactive", joiningDate: "November 2016" },
};

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  active: { label: "Active", color: "text-green-700", bg: "bg-green-100" },
  defaulter: { label: "Defaulter", color: "text-orange-700", bg: "bg-orange-100" },
  dead: { label: "Deceased", color: "text-gray-700", bg: "bg-gray-100" },
  suspended: { label: "Suspended", color: "text-red-700", bg: "bg-red-100" },
  inactive: { label: "Inactive", color: "text-gray-600", bg: "bg-gray-100" },
};

export default async function MemberDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = allMembers[id];

  if (!member) {
    notFound();
  }

  const status = statusConfig[member.status];
  const isDead = member.status === "dead";

  return (
    <>
      <section className="animate-fade-in-up opacity-0 bg-accent py-16">
        <div className="container-custom">
          <Link
            href="/members"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-light transition-colors hover:text-primary"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Members
          </Link>

          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl border border-primary/20">
              <div className="flex flex-col items-center px-8 pb-8 pt-8 sm:flex-row sm:items-start sm:gap-8">
                <div className="relative flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`h-36 w-36 rounded-full border-4 border-white object-cover shadow-xl ${isDead ? "grayscale" : ""}`}
                  />
                  <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-xs font-bold border-2 border-white shadow-lg">
                    {member.id.slice(-2)}
                  </div>
                </div>

                <div className="mt-6 flex-1 text-center sm:mt-0 sm:text-left">
                  <h1 className={`text-2xl font-bold text-dark sm:text-3xl ${isDead ? "italic" : ""}`}>
                    {member.name}
                  </h1>
                  <p className="mt-1 text-lg font-semibold text-primary">{member.role}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-mono font-semibold text-primary">
                      {member.id}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 rounded-full ${status.bg} px-3 py-1 text-xs font-semibold ${status.color}`}>
                      {status.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                      {member.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 px-8 py-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-5">
                    <h2 className="text-lg font-bold text-dark">Personal Information</h2>
                    <div className="space-y-4">
                      {member.phone && (
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-text-light">Phone</p>
                            <p className="text-sm font-semibold text-dark">{member.phone}</p>
                          </div>
                        </div>
                      )}
                      {member.email && (
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-text-light">Email</p>
                            <p className="text-sm font-semibold text-dark">{member.email}</p>
                          </div>
                        </div>
                      )}
                      {member.address && (
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-text-light">Address</p>
                            <p className="text-sm font-semibold text-dark">{member.address}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h2 className="text-lg font-bold text-dark">Membership Details</h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-text-light">Member ID</p>
                          <p className="text-sm font-semibold text-dark font-mono">{member.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-text-light">Category</p>
                          <p className="text-sm font-semibold text-dark">{member.category}</p>
                        </div>
                      </div>
                      {member.joiningDate && (
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-text-light">Joining Date</p>
                            <p className="text-sm font-semibold text-dark">{member.joiningDate}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                          <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-text-light">Status</p>
                          <span className={`inline-flex items-center gap-1.5 rounded-full ${status.bg} px-2.5 py-0.5 text-xs font-semibold ${status.color}`}>
                            {status.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(allMembers).map((id) => ({ id }));
}
