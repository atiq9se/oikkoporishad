export default function MonthlyTradeSessionPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Monthly Trade Session</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Regular trade briefings and market intelligence sessions
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">Monthly Trade Sessions</h2>
              <p className="mb-8 text-lg text-text-light">
                Join our expert-led monthly trade sessions covering market trends, policy updates, 
                buyer requirements, and sector-specific insights. Sessions feature industry leaders, 
                trade officials, and market analysts.
              </p>

              <div className="space-y-6 mb-12">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">01</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Upcoming</span>
                        <span className="text-sm text-text-light">December 15, 2024 • 10:00 AM</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">RMG Sector: Navigating New EU Regulations</h3>
                      <p className="text-text-light mb-3">Understanding CBAM, ESPR, and Digital Product Passport requirements for garment exporters</p>
                      <div className="flex gap-4 text-sm text-text-light">
                        <span>Speaker: Dr. Rahman, Trade Policy Expert</span>
                        <span>Duration: 90 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">02</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">Registration Open</span>
                        <span className="text-sm text-text-light">January 20, 2025 • 10:00 AM</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">Leather Sector: Market Access Strategies</h3>
                      <p className="text-text-light mb-3">Exploring new markets in Japan, Korea, and Middle East for leather and footwear exports</p>
                      <div className="flex gap-4 text-sm text-text-light">
                        <span>Speaker: Ms. Begum, Leather Sector Specialist</span>
                        <span>Duration: 75 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">03</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Planned</span>
                        <span className="text-sm text-text-light">February 12, 2025 • 10:00 AM</span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">Digital Trade: E-commerce Export Opportunities</h3>
                      <p className="text-text-light mb-3">Cross-border e-commerce platforms, digital payment solutions, and logistics for SMEs</p>
                      <div className="flex gap-4 text-sm text-text-light">
                        <span>Speaker: Mr. Ahmed, Digital Trade Consultant</span>
                        <span>Duration: 60 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 mb-8">
                <h3 className="text-lg font-bold text-primary mb-4">Past Sessions Archive</h3>
                <p className="text-text-light mb-4">Access recordings, presentations, and resources from previous sessions:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-text hover:bg-gray-50 transition-colors text-sm">Nov 2024: US Market Entry for Home Textiles</a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-text hover:bg-gray-50 transition-colors text-sm">Oct 2024: Green Financing for Export Industries</a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-text hover:bg-gray-50 transition-colors text-sm">Sep 2024: Compliance Update - Social & Environmental</a>
                  <a href="#" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-text hover:bg-gray-50 transition-colors text-sm">Aug 2024: Japan Market - Rules of Origin Guide</a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="text-lg font-bold text-primary mb-3">Register for Upcoming Sessions</h3>
                <p className="text-text-light mb-4">
                  Free registration for Oikkoparishad members. Limited seats available.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Register Now
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