export default function EsgDataPlatformPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">ESG Data Platform</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Digital platform for ESG data collection, benchmarking, and transparent reporting
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">ESG Data Platform</h2>
              <p className="mb-8 text-lg text-text-light">
                A unified digital platform enabling Bangladesh's RMG sector to collect, manage, 
                benchmark, and report Environmental, Social, and Governance (ESG) data 
                in alignment with global frameworks and stakeholder expectations.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-text-light">Reporting Factories</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">80+</div>
                  <div className="text-text-light">ESG Indicators</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-text-light">Framework Alignments</div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Platform Capabilities</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Data Collection & Management</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Standardized ESG questionnaires</li>
                        <li>Automated data validation</li>
                        <li>Multi-site data aggregation</li>
                        <li>Historical trend tracking</li>
                        <li>Document repository</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Benchmarking & Analytics</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Peer group comparisons</li>
                        <li>Industry benchmarking</li>
                        <li>Performance dashboards</li>
                        <li>Gap analysis tools</li>
                        <li>Improvement roadmaps</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Reporting & Disclosure</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Auto-generated reports</li>
                        <li>GRI, SASB, TCFD alignment</li>
                        <li>Brand-specific templates</li>
                        <li>Public disclosure support</li>
                        <li>Audit-ready documentation</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Integration & API</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>ERP system connectivity</li>
                        <li>Higg FEM/FSLM sync</li>
                        <li>Brand portal integration</li>
                        <li>Third-party verification API</li>
                        <li>Custom data exports</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">ESG Indicator Framework</h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                        <h4 className="font-bold text-green-700 mb-2">Environmental (E)</h4>
                        <ul className="text-sm text-text-light space-y-1 list-disc list-inside">
                          <li>GHG Emissions (Scope 1,2,3)</li>
                          <li>Energy Consumption & Renewable %</li>
                          <li>Water Usage & Recycling Rate</li>
                          <li>Waste Generation & Diversion</li>
                          <li>Chemical Management (ZDHC)</li>
                          <li>Effluent Quality Parameters</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                        <h4 className="font-bold text-blue-700 mb-2">Social (S)</h4>
                        <ul className="text-sm text-text-light space-y-1 list-disc list-inside">
                          <li>Worker Demographics & Diversity</li>
                          <li>Wages & Benefits Compliance</li>
                          <li>Working Hours & Overtime</li>
                          <li>Health & Safety Metrics</li>
                          <li>Freedom of Association</li>
                          <li>Grievance Resolution Rate</li>
                          <li>Training Hours per Worker</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                        <h4 className="font-bold text-purple-700 mb-2">Governance (G)</h4>
                        <ul className="text-sm text-text-light space-y-1 list-disc list-inside">
                          <li>Board Composition & Independence</li>
                          <li>Anti-Corruption Policies</li>
                          <li>Supply Chain Due Diligence</li>
                          <li>Ethical Business Practices</li>
                          <li>Risk Management Systems</li>
                          <li>Stakeholder Engagement</li>
                          <li>Transparency & Disclosure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Framework Alignment</h3>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">GRI Standards</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">SASB</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">TCFD</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">UN SDGs</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">Higg Index</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">ZDHC</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">OECD Guidelines</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">UNGPs</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">EU CSRD</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">BRSR (India)</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">CDP</span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-text font-medium">SBTi</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-bold text-primary mb-3">Get Started with ESG Reporting</h3>
                  <p className="text-text-light mb-4">
                    Join 500+ factories using the platform. Free onboarding support for first-time reporters.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <a href="#" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Request Demo</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">Pricing Plans</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">API Documentation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}