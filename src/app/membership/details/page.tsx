import Link from "next/link";

export default function MembershipDetailsPage() {
  return (
    <>
      <section className="animate-fade-in-up opacity-0 relative bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')"
      }}>
        <div className="container-custom py-20 text-center text-white">
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            <Link href="/" className="text-yellow-300 transition-colors hover:text-white">
              Home
            </Link>
            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-300">Member Services</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Member Services</h1>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-primary">Services to Factory Members:</h2>

            <div className="mb-12 space-y-6">
              <div className="rounded-xl border border-gray-100 bg-accent p-6">
                <h3 className="text-lg font-bold text-dark">Legal Advice</h3>
                <p className="mt-2 text-text-light">
                  BGMEA Labour Cell provides legal advice to its member-units in various labour
                  and compliance related issues.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-accent p-6">
                <h3 className="text-lg font-bold text-dark">Bi-lateral Committee</h3>
                <p className="mt-2 text-text-light">
                  BGMEA has formed a Bi-lateral committee on 30th June 1997 with Registered Trade
                  Union Federation to solve labor issues such as maternity leave, overtime, payment
                  of wages, minimum wages.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-accent p-6">
                <h3 className="text-lg font-bold text-dark">
                  Conciliation-cum-Arbitration Committee (CAC)
                </h3>
                <p className="mt-2 text-text-light">
                  Since 26th April 1998, CAC in accordance to Bangladesh Labour Act, 2005 performs
                  the following activities:
                </p>
                <ul className="mt-3 list-disc list-inside space-y-2 text-text-light">
                  <li>
                    The committee solves the grievances of the owners and the workers rapidly to
                    keep production uninterrupted;
                  </li>
                  <li>
                    The committee tries to solve the disputes without any charge that arise between
                    the owner and the employees of the factory before referring the matter to court.
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-primary">BGMEA</h2>

            <div className="rounded-xl border border-gray-100 bg-accent p-6">
              <ul className="list-disc list-inside space-y-2 text-text-light">
                <li>Provides trade information to its members</li>
                <li>Keeps its members updated on contemporary global business trends</li>
                <li>Endorses ICT solutions for better management of RMG units</li>
                <li>Manages a B2B web portal directly linking RMG exporters and buyers</li>
                <li>
                  Organizes seminars and dialogues for recommending on key policies for trade and
                  industry
                </li>
                <li>
                  Provides advisory services to its member on how to improve environmental standards
                </li>
                <li>
                  Publishes a newsletter about RMG business news, events and activities in Bangladesh
                </li>
                <li>
                  Fosters relationships between the local exporters and international buyers by
                  arranging fairs in Bangladesh and participates with its members in international
                  fairs
                </li>
                <li>Helps members to honour national and international compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
