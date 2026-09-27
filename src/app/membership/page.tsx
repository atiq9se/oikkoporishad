import Link from "next/link";

export default function MembershipPage() {
  return (
    <>
      <section className="animate-fade-in-up opacity-0 relative bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')"
      }}>
        <div className="container-custom py-20 text-center text-white">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-yellow-300 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Membership</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">Join Oikkoparishad and be part of our community</p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 sm:grid-cols-3">
              <Link href="/membership/details" className="animate-fade-in-up opacity-0 group rounded-2xl bg-white p-8 shadow-xl border border-primary/10 text-center transition-all hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: "100ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">Membership Details</h3>
                <p className="mt-2 text-sm text-text-light">Learn about membership categories and eligibility</p>
              </Link>
              <Link href="/membership/become-a-member" className="animate-fade-in-up opacity-0 group rounded-2xl bg-white p-8 shadow-xl border border-primary/10 text-center transition-all hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: "200ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">Become a Member</h3>
                <p className="mt-2 text-sm text-text-light">Fill out the membership application form</p>
              </Link>
              <Link href="/membership/benefits" className="animate-fade-in-up opacity-0 group rounded-2xl bg-white p-8 shadow-xl border border-primary/10 text-center transition-all hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: "300ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">Membership Benefits</h3>
                <p className="mt-2 text-sm text-text-light">Discover the benefits of being a member</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
