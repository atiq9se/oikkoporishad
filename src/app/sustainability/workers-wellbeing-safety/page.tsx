export default function WorkersWellbeingSafetyPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Worker's Wellbeing & Safety</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Ensuring safe working conditions and promoting worker wellbeing in the RMG sector
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">Worker Wellbeing & Safety Overview</h2>
              <p className="mb-8 text-lg text-text-light">
                Comprehensive initiatives to protect worker rights, ensure safe working environments, 
                and promote holistic wellbeing across Bangladesh's ready-made garment industry.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-text-light">Factories Covered</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4M+</div>
                  <div className="text-text-light">Workers Reached</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-text-light">Safety Compliance</div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Key Focus Areas</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Building & Fire Safety</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Structural integrity assessments</li>
                        <li>Fire prevention and evacuation systems</li>
                        <li>Electrical safety compliance</li>
                        <li>Regular safety audits and inspections</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Health & Wellbeing</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Occupational health services</li>
                        <li>Mental health support programs</li>
                        <li>Ergonomic workplace improvements</li>
                        <li>Maternal health protections</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Worker Rights & Voice</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Freedom of association</li>
                        <li>Grievance mechanisms</li>
                        <li>Worker representation committees</li>
                        <li>Anti-harassment policies</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Training & Capacity Building</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Safety awareness training</li>
                        <li>Skills development programs</li>
                        <li>Leadership training for worker reps</li>
                        <li>Digital literacy initiatives</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Major Initiatives & Programs</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">Accord on Fire and Building Safety</h4>
                      <p className="text-text-light mt-1">Legally binding agreement for factory inspections, remediation, and worker safety training.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">Alliance for Bangladesh Worker Safety</h4>
                      <p className="text-text-light mt-1">North American retailers' initiative for factory safety improvements and worker empowerment.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">National Tripartite Plan of Action</h4>
                      <p className="text-text-light mt-1">Government, employer, and worker collaboration for sustainable safety culture.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-bold text-dark">Worker Wellbeing Programs</h4>
                      <p className="text-text-light mt-1">Health clinics, childcare facilities, financial literacy, and nutrition programs in factories.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-bold text-primary mb-3">Resources & Guidelines</h3>
                  <p className="text-text-light mb-4">
                    Access safety manuals, training materials, compliance checklists, and best practice guides.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <a href="#" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Safety Guidelines</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">Training Modules</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">Compliance Tools</a>
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