import Link from "next/link";

export default function CommunityPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Community</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">Our executive committees across the years</p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 sm:grid-cols-3">
              <Link href="/community/ec-2026-27" className="animate-fade-in-up opacity-0 group rounded-2xl bg-white p-8 shadow-xl border border-primary/10 text-center transition-all hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: "100ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">EC 2026-27</h3>
                <p className="mt-2 text-sm text-text-light">Current executive committee</p>
              </Link>
              <Link href="/community/ec-2025-26" className="animate-fade-in-up opacity-0 group rounded-2xl bg-white p-8 shadow-xl border border-primary/10 text-center transition-all hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: "200ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">EC 2025-26</h3>
                <p className="mt-2 text-sm text-text-light">Previous executive committee</p>
              </Link>
              <Link href="/community/ec-2024-25" className="animate-fade-in-up opacity-0 group rounded-2xl bg-white p-8 shadow-xl border border-primary/10 text-center transition-all hover:shadow-2xl hover:-translate-y-1" style={{ animationDelay: "300ms" }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">EC 2024-25</h3>
                <p className="mt-2 text-sm text-text-light">Previous executive committee</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
