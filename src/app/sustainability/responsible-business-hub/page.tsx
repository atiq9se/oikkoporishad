export default function ResponsibleBusinessHubPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Responsible Business Hub</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Promoting responsible business practices, due diligence, and ethical supply chains
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">Responsible Business Hub</h2>
              <p className="mb-8 text-lg text-text-light">
                A comprehensive platform supporting Bangladesh's RMG sector in implementing 
                human rights due diligence, responsible purchasing practices, and sustainable supply chain management.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-text-light">Member Companies</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-text-light">Due Diligence Tools</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-text-light">Training Sessions/Year</div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Core Pillars</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Human Rights Due Diligence (HRDD)</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Risk identification & assessment</li>
                        <li>Mitigation & remediation planning</li>
                        <li>Tracking & monitoring systems</li>
                        <li>Grievance mechanisms</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Responsible Purchasing Practices</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Fair pricing & payment terms</li>
                        <li>Lead time optimization</li>
                        <li>Order forecasting & stability</li>
                        <li>Supplier capacity building</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Supply Chain Transparency</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Tier 1-3 mapping</li>
                        <li>Public disclosure frameworks</li>
                        <li>Traceability systems</li>
                        <li>Audit harmonization</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Stakeholder Engagement</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Worker voice mechanisms</li>
                        <li>Multi-stakeholder dialogues</li>
                        <li>Community impact assessment</li>
                        <li>Remedy & access to justice</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Services & Support</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">HRDD Implementation Support</h4>
                      <p className="text-text-light mt-1">Step-by-step guidance, templates, and expert advisory for conducting human rights due diligence aligned with UNGPs and OECD guidelines.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">Supplier Capacity Building</h4>
                      <p className="text-text-light mt-1">Training programs on labor standards, environmental management, business ethics, and management systems for Tier 1-3 suppliers.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">Responsible Purchasing Assessment</h4>
                      <p className="text-text-light mt-1">Brand and retailer purchasing practice evaluations with benchmarking against industry standards and improvement roadmaps.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">Grievance Mechanism Design</h4>
                      <p className="text-text-light mt-1">Support for establishing effective, accessible, and trusted grievance mechanisms at factory and supply chain levels.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">Regulatory Compliance Guidance</h4>
                      <p className="text-text-light mt-1">Updates and implementation support for EU CSDDD, German Supply Chain Act, US Uyghur Act, and other emerging regulations.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-bold text-primary mb-3">Join the Hub</h3>
                  <p className="text-text-light mb-4">
                    Become a member to access tools, training, peer learning, and expert advisory services for responsible business transformation.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <a href="#" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Become a Member</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">Access Tools</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">View Events</a>
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