export default function RmgWorkerHealthToolkitPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">RMG Worker Health Toolkit</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Comprehensive health resources, tools, and guidelines for RMG worker wellbeing
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">RMG Worker Health Toolkit</h2>
              <p className="mb-8 text-lg text-text-light">
                A centralized repository of evidence-based health tools, guidelines, and resources 
                designed to improve health outcomes for Bangladesh's 4+ million garment workers.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-text-light">Health Modules</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-text-light">Languages Available</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                  <div className="text-text-light">Downloads</div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Toolkit Components</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Clinical Guidelines</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Common illness protocols</li>
                        <li>Occupational disease management</li>
                        <li>Maternal & reproductive health</li>
                        <li>Mental health screening tools</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Training Materials</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Peer educator training kits</li>
                        <li>Health awareness videos</li>
                        <li>Posters & infographics</li>
                        <li>Mobile app for workers</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Assessment Tools</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Factory health scorecard</li>
                        <li>Worker health survey templates</li>
                        <li>Ergonomic risk assessment</li>
                        <li>Clinic quality checklist</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Policy Templates</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Workplace health policy</li>
                        <li>First aid procedures</li>
                        <li>Emergency response plans</li>
                        <li>Referral pathway guides</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Priority Health Areas</h3>
                  <div className="space-y-6">
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                      <h4 className="font-bold text-dark mb-2">Communicable Diseases</h4>
                      <p className="text-text-light">TB, Hepatitis B/C, HIV/AIDS prevention and management in workplace settings</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                      <h4 className="font-bold text-dark mb-2">Musculoskeletal Disorders</h4>
                      <p className="text-text-light">Ergonomic interventions for repetitive strain, back pain, and posture-related issues</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                      <h4 className="font-bold text-dark mb-2">Respiratory Health</h4>
                      <p className="text-text-light">Dust exposure control, ventilation standards, and PPE for airborne hazards</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                      <h4 className="font-bold text-dark mb-2">Mental Health & Wellbeing</h4>
                      <p className="text-text-light">Stress management, gender-based violence prevention, and psychosocial support</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                      <h4 className="font-bold text-dark mb-2">Nutrition & Food Safety</h4>
                      <p className="text-text-light">Canteen standards, anemia prevention, and safe drinking water access</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-bold text-primary mb-3">Access the Toolkit</h3>
                  <p className="text-text-light mb-4">
                    Free access for factories, brands, NGOs, and health professionals. Register to download all materials.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <a href="#" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Register & Download</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">View Modules</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">Training Calendar</a>
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