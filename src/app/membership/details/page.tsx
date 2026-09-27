import Link from "next/link";

export default function MembershipDetailsPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Membership Details</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">Complete information about Oikkoparishad membership</p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 space-y-6">
              <div className="rounded-2xl bg-white p-8 shadow-xl border border-primary/10">
                <h2 className="mb-6 text-2xl font-bold text-primary">Membership Categories</h2>
                <div className="space-y-6">
                  <div className="rounded-xl border border-gray-100 bg-accent p-6">
                    <h3 className="text-lg font-bold text-dark">General Member</h3>
                    <p className="mt-2 text-text-light">Any individual aged 18 or above who agrees with the organization's objectives may become a General Member by paying the annual membership fee.</p>
                    <p className="mt-2 text-sm font-semibold text-primary">Annual Fee: BDT 500</p>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-accent p-6">
                    <h3 className="text-lg font-bold text-dark">Life Member</h3>
                    <p className="mt-2 text-text-light">Individuals who make a one-time lump sum payment as determined by the Executive Committee become Life Members with lifetime validity.</p>
                    <p className="mt-2 text-sm font-semibold text-primary">One-time Fee: BDT 10,000</p>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-accent p-6">
                    <h3 className="text-lg font-bold text-dark">Patron Member</h3>
                    <p className="mt-2 text-text-light">Individuals or organizations that provide significant financial or other support to the organization may be granted Patron Membership by the Executive Committee.</p>
                    <p className="mt-2 text-sm font-semibold text-primary">Minimum Contribution: BDT 50,000</p>
                  </div>
                  <div className="rounded-xl border border-gray-100 bg-accent p-6">
                    <h3 className="text-lg font-bold text-dark">Honorary Member</h3>
                    <p className="mt-2 text-text-light">Individuals who have rendered outstanding service to the organization or society may be nominated as Honorary Members by the Executive Committee.</p>
                    <p className="mt-2 text-sm font-semibold text-primary">No fee required</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-xl border border-primary/10">
                <h2 className="mb-6 text-2xl font-bold text-primary">Eligibility Criteria</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Must be at least 18 years of age
                  </li>
                  <li className="flex items-start gap-3 text-text">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Must agree with the organization's objectives and constitution
                  </li>
                  <li className="flex items-start gap-3 text-text">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Must have a valid national ID or passport
                  </li>
                  <li className="flex items-start gap-3 text-text">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Must provide two passport-sized photographs
                  </li>
                  <li className="flex items-start gap-3 text-text">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Must submit a completed membership application form
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
