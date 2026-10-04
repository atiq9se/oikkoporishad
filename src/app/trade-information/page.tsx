export default function TradeInformationPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Trade Information</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Market insights, trade data, and business opportunities
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">Trade Information Hub</h2>
              <p className="mb-8 text-lg text-text-light">
                Access comprehensive trade data, market analysis, and business intelligence for 
                Bangladesh's key export sectors. Stay informed with the latest trade policies, 
                market trends, and investment opportunities.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">Export Statistics</h3>
                  <p className="text-text-light">Monthly and annual export data by sector, destination, and product category</p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">Market Access</h3>
                  <p className="text-text-light">Information on tariff rates, trade agreements, and market entry requirements</p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">Business Directory</h3>
                  <p className="text-text-light">Verified database of exporters, importers, and trade service providers</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <h3 className="text-lg font-bold text-primary mb-4">Key Trade Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2 text-text-light">
                      <li>Bangladesh Bank Export Data</li>
                      <li>EPB Export Statistics</li>
                      <li>Customs Tariff Schedule</li>
                      <li>Trade Policy Documents</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2 text-text-light">
                      <li>SPS/TBT Notifications</li>
                      <li>Rules of Origin Guidelines</li>
                      <li>Preferential Trade Agreements</li>
                      <li>Investment Incentives</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-bold text-primary mb-3">Need Specific Trade Data?</h3>
                  <p className="text-text-light mb-4">
                    Contact our trade information desk for customized market research, 
                    buyer-seller matchmaking, and trade facilitation services.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                    Contact Trade Desk
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}