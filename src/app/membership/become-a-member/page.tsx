import Link from "next/link";

export default function BecomeAMemberPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Become a Member</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">Join Oikkoparishad and contribute to community development</p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-white p-8 shadow-xl border border-primary/10 sm:p-12">
              <h2 className="mb-8 text-2xl font-bold text-primary">Membership Application Form</h2>
              <p className="mb-8 text-text-light">Fill out the form below to apply for membership. Fields marked with * are required.</p>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-dark">Full Name *</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-dark">Father's Name</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter father's name" />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-dark">Date of Birth *</label>
                    <input type="date" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-dark">National ID / Passport *</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter NID or passport number" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-dark">Present Address *</label>
                  <textarea rows={3} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter your present address" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-dark">Mobile Number *</label>
                    <input type="tel" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter mobile number" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-dark">Email</label>
                    <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter email address" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-dark">Membership Type *</label>
                  <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary">
                    <option value="">Select membership type</option>
                    <option value="general">General Member (BDT 500/year)</option>
                    <option value="life">Life Member (BDT 10,000 - one time)</option>
                    <option value="patron">Patron Member (BDT 50,000+)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-dark">Why do you want to join? *</label>
                  <textarea rows={3} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Tell us why you want to become a member" />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <label className="text-sm text-text-light">I agree to the terms and conditions of Oikkoparishad membership</label>
                </div>
                <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark sm:w-auto">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
