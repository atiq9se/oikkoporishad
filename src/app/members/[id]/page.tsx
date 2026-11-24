import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Director = {
  position: string;
  name: string;
  mobile: string;
  email: string;
};

type CompanyInfo = {
  bgmeaRegNo: string;
  epbRegNo: string;
  directors: Director[];
  contact: { name: string; designation: string; phone: string; email: string };
  mailing: { address: string; phone: string; fax: string; email: string };
  factory: { address: string; phone: string; fax: string; email: string };
  website?: string;
  established: string;
  factoryType: string;
  employees: { management: number; male: number; female: number };
  machines: number;
  productionCapacity: string;
  certifications: string;
  products: string;
  turnover: string;
};

const allMembers: Record<string, {
  id: string;
  name: string;
  role: string;
  image: string;
  category: string;
  status: "active" | "defaulter" | "dead" | "suspended" | "inactive";
  contactPerson?: string;
  phone?: string;
  email?: string;
  address?: string;
  joiningDate?: string;
  company?: CompanyInfo;
}> = {
  "JAL-2024-001": {
    id: "JAL-2024-001",
    name: "Rahman Garments Ltd.",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4521",
      epbRegNo: "1101",
      directors: [
        { position: "Managing Director", name: "Dr. Ahmed Rahman", mobile: "01712345678", email: "ahmed@rahmangarments.com" },
      ],
      contact: { name: "Dr. Ahmed Rahman", designation: "Managing Director", phone: "01712345678", email: "info@rahmangarments.com" },
      mailing: { address: "House 12, Road 5, BSCIC Industrial Area, Sylhet", phone: "0821-712345", fax: "0821-712346", email: "info@rahmangarments.com" },
      factory: { address: "Plot 24, BSCIC Industrial Estate, Sylhet", phone: "0821-712347", fax: "0821-712348", email: "factory@rahmangarments.com" },
      website: "https://www.rahmangarments.com",
      established: "2020-01-15",
      factoryType: "Woven 1, Knit 1",
      employees: { management: 90, male: 620, female: 1240 },
      machines: 640,
      productionCapacity: "9,600,000",
      certifications: "ISO 9001, SEDEX, BSCI, OEKO-TEX",
      products: "T-Shirt, Polo Shirt, Shirt, Pant",
      turnover: "US $ 18 Million",
    },
  },
  "JAL-2024-002": {
    id: "JAL-2024-002",
    name: "Fatima Knitwear Ltd.",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4522",
      epbRegNo: "1102",
      directors: [
        { position: "Managing Director", name: "Ms. Fatima Begum", mobile: "01712345679", email: "fatima@fatimaknitwear.com" },
      ],
      contact: { name: "Ms. Fatima Begum", designation: "Managing Director", phone: "01712345679", email: "info@fatimaknitwear.com" },
      mailing: { address: "Flat 3B, Road 12, Tilagor, Sylhet", phone: "0821-713345", fax: "0821-713346", email: "info@fatimaknitwear.com" },
      factory: { address: "Plot 41, BSCIC Industrial Estate, Sylhet", phone: "0821-713347", fax: "0821-713348", email: "factory@fatimaknitwear.com" },
      website: "https://www.fatimaknitwear.com",
      established: "2019-03-10",
      factoryType: "Knit 1",
      employees: { management: 65, male: 410, female: 980 },
      machines: 420,
      productionCapacity: "7,200,000",
      certifications: "ISO 9001, SEDEX, WRAP, OEKO-TEX",
      products: "T-Shirt, Sweater, Hoodie",
      turnover: "US $ 14 Million",
    },
  },
  "JAL-2024-003": {
    id: "JAL-2024-003",
    name: "Kamal Apparels Ltd.",
    role: "Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4523",
      epbRegNo: "1103",
      directors: [
        { position: "Chairman", name: "Mr. Kamal Hossain", mobile: "01712345680", email: "kamal@kamalapparels.com" },
        { position: "Director", name: "Mrs. Shirin Hossain", mobile: "01712345980", email: "shirin@kamalapparels.com" },
      ],
      contact: { name: "Mr. Kamal Hossain", designation: "Chairman", phone: "01712345680", email: "info@kamalapparels.com" },
      mailing: { address: "Village Road, Jalalabad, Sylhet", phone: "0821-714345", fax: "0821-714346", email: "info@kamalapparels.com" },
      factory: { address: "Plot 8, Jalalabad Industrial Zone, Sylhet", phone: "0821-714347", fax: "0821-714348", email: "factory@kamalapparels.com" },
      website: "https://www.kamalapparels.com",
      established: "2018-06-20",
      factoryType: "Woven 1, Knit 1",
      employees: { management: 110, male: 780, female: 1560 },
      machines: 820,
      productionCapacity: "12,000,000",
      certifications: "ISO 9001, ISO 14001, BSCI, SEDEX, GOTS",
      products: "Shirt, Pant, Jacket, Denim",
      turnover: "US $ 26 Million",
    },
  },
  "JAL-2024-004": {
    id: "JAL-2024-004",
    name: "Rahim Textiles Ltd.",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4524",
      epbRegNo: "1104",
      directors: [
        { position: "Managing Director", name: "Mr. Rahim Uddin", mobile: "01712345681", email: "rahim@rahimtextiles.com" },
      ],
      contact: { name: "Mr. Rahim Uddin", designation: "Managing Director", phone: "01712345681", email: "info@rahimtextiles.com" },
      mailing: { address: "23 Lake Road, Sylhet Sadar, Sylhet", phone: "0821-715345", fax: "0821-715346", email: "info@rahimtextiles.com" },
      factory: { address: "Plot 15, BSCIC Industrial Estate, Sylhet", phone: "0821-715347", fax: "0821-715348", email: "factory@rahimtextiles.com" },
      website: "https://www.rahimtextiles.com",
      established: "2021-02-05",
      factoryType: "Woven 1",
      employees: { management: 70, male: 520, female: 890 },
      machines: 510,
      productionCapacity: "6,800,000",
      certifications: "ISO 9001, SEDEX, BSCI",
      products: "Shirt, Pant, Blazer",
      turnover: "US $ 11 Million",
    },
  },
  "JAL-2024-005": {
    id: "JAL-2024-005",
    name: "Ayesha Fashion Ltd.",
    role: "Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4525",
      epbRegNo: "1105",
      directors: [
        { position: "Director", name: "Ms. Ayesha Khan", mobile: "01712345682", email: "ayesha@ayeshafashion.com" },
      ],
      contact: { name: "Ms. Ayesha Khan", designation: "Director", phone: "01712345682", email: "info@ayeshafashion.com" },
      mailing: { address: "15 Green Road, Kumarpara, Sylhet", phone: "0821-716345", fax: "0821-716346", email: "info@ayeshafashion.com" },
      factory: { address: "Plot 60, Kumarpara Industrial Area, Sylhet", phone: "0821-716347", fax: "0821-716348", email: "factory@ayeshafashion.com" },
      website: "https://www.ayeshafashion.com",
      established: "2020-08-12",
      factoryType: "Knit 1",
      employees: { management: 55, male: 380, female: 910 },
      machines: 390,
      productionCapacity: "5,400,000",
      certifications: "SEDEX, WRAP, OEKO-TEX",
      products: "T-Shirt, Polo Shirt, Leggings",
      turnover: "US $ 9 Million",
    },
  },
  "JAL-2024-006": {
    id: "JAL-2024-006",
    name: "Jamal Sweaters Ltd.",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4526",
      epbRegNo: "1106",
      directors: [
        { position: "Managing Director", name: "Mr. Jamal Ahmed", mobile: "01712345683", email: "jamal@jamalsweaters.com" },
      ],
      contact: { name: "Mr. Jamal Ahmed", designation: "Managing Director", phone: "01712345683", email: "info@jamalsweaters.com" },
      mailing: { address: "7 College Road, Sylhet Sadar, Sylhet", phone: "0821-717345", fax: "0821-717346", email: "info@jamalsweaters.com" },
      factory: { address: "Plot 33, BSCIC Industrial Estate, Sylhet", phone: "0821-717347", fax: "0821-717348", email: "factory@jamalsweaters.com" },
      website: "https://www.jamalsweaters.com",
      established: "2017-11-01",
      factoryType: "Knit 1",
      employees: { management: 95, male: 640, female: 1380 },
      machines: 700,
      productionCapacity: "10,800,000",
      certifications: "ISO 9001, BSCI, SEDEX, GOTS",
      products: "Sweater, Cardigan, Pullover",
      turnover: "US $ 22 Million",
    },
  },
  "JAL-2024-007": {
    id: "JAL-2024-007",
    name: "Nazma Dresses Ltd.",
    role: "Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4527",
      epbRegNo: "1107",
      directors: [
        { position: "Director", name: "Ms. Nazma Begum", mobile: "01712345684", email: "nazma@nazmadresses.com" },
      ],
      contact: { name: "Ms. Nazma Begum", designation: "Director", phone: "01712345684", email: "info@nazmadresses.com" },
      mailing: { address: "42 New Town, Tilagor, Sylhet", phone: "0821-718345", fax: "0821-718346", email: "info@nazmadresses.com" },
      factory: { address: "Plot 12, Tilagor Industrial Area, Sylhet", phone: "0821-718347", fax: "0821-718348", email: "factory@nazmadresses.com" },
      website: "https://www.nazmadresses.com",
      established: "2022-04-18",
      factoryType: "Woven 1, Knit 1",
      employees: { management: 60, male: 430, female: 1020 },
      machines: 470,
      productionCapacity: "6,000,000",
      certifications: "SEDEX, BSCI, OEKO-TEX",
      products: "Dress, Top, Skirt",
      turnover: "US $ 10 Million",
    },
  },
  "JAL-2024-008": {
    id: "JAL-2024-008",
    name: "Hasan Composite Ltd.",
    role: "Chairman",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4528",
      epbRegNo: "1108",
      directors: [
        { position: "Chairman", name: "Mr. Hasan Ali", mobile: "01712345685", email: "hasan@hasancomposite.com" },
        { position: "Managing Director", name: "Mr. Tanvir Hasan", mobile: "01712345985", email: "tanvir@hasancomposite.com" },
      ],
      contact: { name: "Mr. Hasan Ali", designation: "Chairman", phone: "01712345685", email: "info@hasancomposite.com" },
      mailing: { address: "8 Market Road, Jalalabad, Sylhet", phone: "0821-719345", fax: "0821-719346", email: "info@hasancomposite.com" },
      factory: { address: "Plot 5, Jalalabad Industrial Zone, Sylhet", phone: "0821-719347", fax: "0821-719348", email: "factory@hasancomposite.com" },
      website: "https://www.hasancomposite.com",
      established: "2019-09-25",
      factoryType: "Woven 1, Knit 1",
      employees: { management: 130, male: 860, female: 1720 },
      machines: 950,
      productionCapacity: "14,400,000",
      certifications: "ISO 9001, ISO 14001, BSCI, SEDEX, WRAP",
      products: "Shirt, Pant, Jacket, T-Shirt",
      turnover: "US $ 30 Million",
    },
  },
  "JAL-2024-009": {
    id: "JAL-2024-009",
    name: "Karim Denim Ltd.",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4529",
      epbRegNo: "1109",
      directors: [
        { position: "Managing Director", name: "Mr. Karimullah", mobile: "01712345686", email: "karim@karimdenim.com" },
      ],
      contact: { name: "Mr. Karimullah", designation: "Managing Director", phone: "01712345686", email: "info@karimdenim.com" },
      mailing: { address: "5 Village Lane, Jalalabad, Sylhet", phone: "0821-720345", fax: "0821-720346", email: "info@karimdenim.com" },
      factory: { address: "Plot 28, BSCIC Industrial Estate, Sylhet", phone: "0821-720347", fax: "0821-720348", email: "factory@karimdenim.com" },
      website: "https://www.karimdenim.com",
      established: "2020-12-02",
      factoryType: "Woven 1",
      employees: { management: 85, male: 590, female: 1120 },
      machines: 610,
      productionCapacity: "8,400,000",
      certifications: "ISO 9001, BSCI, SEDEX",
      products: "Denim Pant, Denim Jacket, Shirt",
      turnover: "US $ 16 Million",
    },
  },
  "JAL-2024-010": {
    id: "JAL-2024-010",
    name: "Rehana Knit Fashions",
    role: "Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4530",
      epbRegNo: "1110",
      directors: [
        { position: "Director", name: "Ms. Rehana Akter", mobile: "01712345687", email: "rehana@rehanaknit.com" },
      ],
      contact: { name: "Ms. Rehana Akter", designation: "Director", phone: "01712345687", email: "info@rehanaknit.com" },
      mailing: { address: "19 Garden Road, Zindabazar, Sylhet", phone: "0821-721345", fax: "0821-721346", email: "info@rehanaknit.com" },
      factory: { address: "Plot 50, Zindabazar Industrial Area, Sylhet", phone: "0821-721347", fax: "0821-721348", email: "factory@rehanaknit.com" },
      established: "2021-07-08",
      factoryType: "Knit 1",
      employees: { management: 48, male: 320, female: 840 },
      machines: 350,
      productionCapacity: "4,800,000",
      certifications: "SEDEX, OEKO-TEX",
      products: "T-Shirt, Tank Top, Hoodie",
      turnover: "US $ 8 Million",
    },
  },
  "JAL-2024-011": {
    id: "JAL-2024-011",
    name: "Salam Washing Ltd.",
    role: "Chairman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4531",
      epbRegNo: "1111",
      directors: [
        { position: "Chairman", name: "Mr. Salam Mia", mobile: "01712345688", email: "salam@salamwashing.com" },
      ],
      contact: { name: "Mr. Salam Mia", designation: "Chairman", phone: "01712345688", email: "info@salamwashing.com" },
      mailing: { address: "3 Station Road, Sylhet Sadar, Sylhet", phone: "0821-722345", fax: "0821-722346", email: "info@salamwashing.com" },
      factory: { address: "Plot 19, BSCIC Industrial Estate, Sylhet", phone: "0821-722347", fax: "0821-722348", email: "factory@salamwashing.com" },
      website: "https://www.salamwashing.com",
      established: "2018-10-30",
      factoryType: "Washing 1",
      employees: { management: 40, male: 360, female: 180 },
      machines: 120,
      productionCapacity: "3,600,000",
      certifications: "ISO 14001, SEDEX, ZDHC",
      products: "Denim Washing, Garment Dyeing",
      turnover: "US $ 7 Million",
    },
  },
  "JAL-2024-012": {
    id: "JAL-2024-012",
    name: "Shahana Apparels Ltd.",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    category: "General Member List",
    status: "active",
    company: {
      bgmeaRegNo: "4532",
      epbRegNo: "1112",
      directors: [
        { position: "Managing Director", name: "Ms. Shahana Begum", mobile: "01712345689", email: "shahana@shahanaapparels.com" },
      ],
      contact: { name: "Ms. Shahana Begum", designation: "Managing Director", phone: "01712345689", email: "info@shahanaapparels.com" },
      mailing: { address: "11 Lake View, Jalalabad, Sylhet", phone: "0821-723345", fax: "0821-723346", email: "info@shahanaapparels.com" },
      factory: { address: "Plot 72, Jalalabad Industrial Zone, Sylhet", phone: "0821-723347", fax: "0821-723348", email: "factory@shahanaapparels.com" },
      website: "https://www.shahanaapparels.com",
      established: "2022-05-16",
      factoryType: "Woven 1, Knit 1",
      employees: { management: 75, male: 480, female: 1180 },
      machines: 560,
      productionCapacity: "7,800,000",
      certifications: "ISO 9001, BSCI, SEDEX, OEKO-TEX",
      products: "Shirt, Pant, Polo Shirt, Jacket",
      turnover: "US $ 13 Million",
    },
  },
  "JAL-2024-013": { id: "JAL-2024-013", name: "Mr. Abdul Karim", role: "Member", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", category: "Associate Member List", status: "defaulter", joiningDate: "January 2019" },
  "JAL-2024-014": { id: "JAL-2024-014", name: "Ms. Rina Begum", role: "Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", category: "Associate Member List", status: "defaulter", joiningDate: "March 2020" },
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

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-xl">
      <div className="bg-primary px-6 py-4">
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <tbody className="divide-y divide-gray-100">{children}</tbody>
        </table>
      </div>
    </div>
  );
}

function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <tr className="align-top">
      <th
        scope="row"
        className="w-52 min-w-[160px] bg-accent/50 px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-text-light"
      >
        {label}
      </th>
      <td className="px-5 py-3.5 text-sm font-medium text-dark">{children}</td>
    </tr>
  );
}

function Value({ value }: { value?: string | number }) {
  if (value === undefined || value === null || value === "") return <span className="text-text-light">—</span>;
  return <>{value}</>;
}

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
  const company = member.company;

  return (
    <>
      <section className="animate-fade-in-up opacity-0 bg-accent py-16">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/members/general"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-light transition-colors hover:text-primary"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to General Member List
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-mono font-semibold text-primary shadow-sm">
              {member.id}
            </span>
          </div>

          <div className="mx-auto max-w-5xl space-y-8">
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-2xl">
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
                    {company && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        BGMEA Reg. No: {company.bgmeaRegNo}
                      </span>
                    )}
                    <span className={`inline-flex items-center gap-1.5 rounded-full ${status.bg} px-3 py-1 text-xs font-semibold ${status.color}`}>
                      {status.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                      {member.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {company ? (
              <>
                <SectionCard title="Company Information">
                  <InfoRow label="BGMEA Reg. No.">
                    <Value value={company.bgmeaRegNo} />
                  </InfoRow>
                  <InfoRow label="EPB Reg No.">
                    <Value value={company.epbRegNo} />
                  </InfoRow>
                  <InfoRow label="Director Information">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="bg-gray-50 text-xs uppercase tracking-wide text-text-light">
                            <th scope="col" className="px-4 py-2 font-semibold">Position</th>
                            <th scope="col" className="px-4 py-2 font-semibold">Name</th>
                            <th scope="col" className="px-4 py-2 font-semibold">Mobile No.</th>
                            <th scope="col" className="px-4 py-2 font-semibold">Email</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {company.directors.map((director) => (
                            <tr key={`${director.position}-${director.name}`}>
                              <td className="px-4 py-2.5 font-semibold text-dark">{director.position}</td>
                              <td className="px-4 py-2.5 text-text">{director.name}</td>
                              <td className="whitespace-nowrap px-4 py-2.5 text-text">{director.mobile}</td>
                              <td className="px-4 py-2.5">
                                <a href={`mailto:${director.email}`} className="text-primary hover:underline">
                                  {director.email}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </InfoRow>
                  <InfoRow label="Contact Person">
                    <div className="space-y-1">
                      <p>
                        <span className="font-normal text-text-light">Name: </span>
                        {company.contact.name}
                      </p>
                      <p>
                        <span className="font-normal text-text-light">Designation: </span>
                        {company.contact.designation}
                      </p>
                      <p>
                        <span className="font-normal text-text-light">Phone: </span>
                        {company.contact.phone}
                      </p>
                      <p>
                        <span className="font-normal text-text-light">Email: </span>
                        <a href={`mailto:${company.contact.email}`} className="text-primary hover:underline">
                          {company.contact.email}
                        </a>
                      </p>
                    </div>
                  </InfoRow>
                  <InfoRow label="Mailing Address">
                    <div className="space-y-1">
                      <p className="font-normal">{company.mailing.address}</p>
                      <p>
                        <span className="font-normal text-text-light">Phone: </span>
                        <Value value={company.mailing.phone} />
                      </p>
                      <p>
                        <span className="font-normal text-text-light">Fax: </span>
                        <Value value={company.mailing.fax} />
                      </p>
                      <p>
                        <span className="font-normal text-text-light">Email: </span>
                        <a href={`mailto:${company.mailing.email}`} className="text-primary hover:underline">
                          {company.mailing.email}
                        </a>
                      </p>
                    </div>
                  </InfoRow>
                  <InfoRow label="Factory Address">
                    <div className="space-y-1">
                      <p className="font-normal">{company.factory.address}</p>
                      <p>
                        <span className="font-normal text-text-light">Phone: </span>
                        <Value value={company.factory.phone} />
                      </p>
                      <p>
                        <span className="font-normal text-text-light">Fax: </span>
                        <Value value={company.factory.fax} />
                      </p>
                      <p>
                        <span className="font-normal text-text-light">Email: </span>
                        <a href={`mailto:${company.factory.email}`} className="text-primary hover:underline">
                          {company.factory.email}
                        </a>
                      </p>
                    </div>
                  </InfoRow>
                </SectionCard>

                <SectionCard title="Final Information">
                  <InfoRow label="Website">
                    {company.website ? (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {company.website.replace(/^https?:\/\//, "")}
                      </a>
                    ) : (
                      <Value />
                    )}
                  </InfoRow>
                  <InfoRow label="Date of Establishment">
                    <Value value={company.established} />
                  </InfoRow>
                  <InfoRow label="Factory Type">
                    <Value value={company.factoryType} />
                  </InfoRow>
                  <InfoRow label="No. of Employees">
                    <div className="grid max-w-md grid-cols-3 gap-3">
                      <div className="rounded-lg bg-accent/70 px-4 py-2 text-center">
                        <p className="text-xs font-normal text-text-light">Management</p>
                        <p className="mt-0.5 font-bold text-primary">{company.employees.management}</p>
                      </div>
                      <div className="rounded-lg bg-accent/70 px-4 py-2 text-center">
                        <p className="text-xs font-normal text-text-light">Male</p>
                        <p className="mt-0.5 font-bold text-primary">{company.employees.male}</p>
                      </div>
                      <div className="rounded-lg bg-accent/70 px-4 py-2 text-center">
                        <p className="text-xs font-normal text-text-light">Female</p>
                        <p className="mt-0.5 font-bold text-primary">{company.employees.female}</p>
                      </div>
                    </div>
                  </InfoRow>
                  <InfoRow label="No. of Machines">
                    <Value value={company.machines.toLocaleString("en-US")} />
                  </InfoRow>
                  <InfoRow label="Production Capacity (Yearly in dozen)">
                    <Value value={company.productionCapacity} />
                  </InfoRow>
                  <InfoRow label="Certifications">
                    <div className="flex flex-wrap gap-2">
                      {company.certifications.split(",").map((certification) => (
                        <span
                          key={certification.trim()}
                          className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary"
                        >
                          {certification.trim()}
                        </span>
                      ))}
                    </div>
                  </InfoRow>
                  <InfoRow label="Principal Exportable Product">
                    <Value value={company.products} />
                  </InfoRow>
                  <InfoRow label="Annual Turnover">
                    <Value value={company.turnover} />
                  </InfoRow>
                </SectionCard>
              </>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-2xl">
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
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(allMembers).map((id) => ({ id }));
}
