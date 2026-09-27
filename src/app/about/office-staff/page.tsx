import Link from "next/link";

const staffMembers = [
  {
    name: "Dr. Sarah Rahman",
    role: "Founder & Chairperson",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    phone: "+8801712345601",
  },
  {
    name: "Mr. Kamal Hossain",
    role: "Executive Director",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    phone: "+8801712345602",
  },
  {
    name: "Ms. Fatima Begum",
    role: "Programs Director",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    phone: "+8801712345603",
  },
  {
    name: "Mr. Rahim Uddin",
    role: "Finance Officer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    phone: "+8801712345604",
  },
  {
    name: "Ms. Ayesha Khatun",
    role: "Administrative Officer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    phone: "+8801712345605",
  },
  {
    name: "Mr. Jamal Ahmed",
    role: "Field Coordinator",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    phone: "+8801712345606",
  },
  {
    name: "Ms. Nazma Begum",
    role: "Accountant",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    phone: "+8801712345607",
  },
  {
    name: "Mr. Hasan Ali",
    role: "Program Assistant",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    phone: "+8801712345608",
  },
];

export default function OfficeStaffPage() {
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
            href="/about"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to About
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Office Staff</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Meet the dedicated team behind Oikkoparishad
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-gray-300 px-6 py-4 font-semibold">#</th>
                  <th className="border border-gray-300 px-6 py-4 font-semibold">Photo</th>
                  <th className="border border-gray-300 px-6 py-4 font-semibold">Name</th>
                  <th className="border border-gray-300 px-6 py-4 font-semibold">Designation</th>
                  <th className="border border-gray-300 px-6 py-4 font-semibold">Phone</th>
                </tr>
              </thead>
              <tbody>
                {staffMembers.map((member, index) => (
                  <tr
                    key={member.name}
                    className="animate-fade-in-up opacity-0 transition-colors hover:bg-gray-50 even:bg-gray-50/50"
                    style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
                  >
                    <td className="border border-gray-200 px-6 py-4 text-text-light font-medium">{index + 1}</td>
                    <td className="border border-gray-200 px-6 py-4">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="border border-gray-200 px-6 py-4 font-semibold text-dark">{member.name}</td>
                    <td className="border border-gray-200 px-6 py-4 text-text-light">{member.role}</td>
                    <td className="border border-gray-200 px-6 py-4 text-text-light">{member.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
