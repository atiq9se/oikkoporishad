export default function OurStrengthsPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Our Strengths</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Why partner with Oikkoparishad
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">Our Core Strengths</h2>
              <p className="mb-8 text-lg text-text-light">
                With a growing legacy of dedicated service, Oikkoparishad stands as a pillar of community 
                development in Bangladesh. Our strengths lie in our people, our reach, and our unwavering 
                commitment to social welfare.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Deep Community Roots</h3>
                    <p className="text-text-light">Established in 2026, we have built deep trust and strong relationships with local communities across Bangladesh.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Proven Track Record</h3>
                    <p className="text-text-light">Successfully delivered thousands of projects in education, healthcare, livelihood, and emergency relief across the country.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Transparent Governance</h3>
                    <p className="text-text-light">Strong institutional framework with elected leadership, regular audits, and full financial transparency.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Rapid Response Capability</h3>
                    <p className="text-text-light">Extensive volunteer network enables quick mobilization during disasters and emergencies nationwide.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Sustainable Impact Focus</h3>
                    <p className="text-text-light">Programs designed for long-term sustainability, empowering communities to become self-reliant.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">Strategic Partnerships</h3>
                    <p className="text-text-light">Collaborations with government agencies, NGOs, international donors, and private sector for maximum impact.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="text-xl font-bold text-primary mb-4">Partner With Us</h3>
                <p className="text-text-light mb-4">
                  Join hands with Oikkoparishad to create lasting change. Whether you're a corporate partner, 
                  donor, volunteer, or government agency, together we can achieve more.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}