export default function EnvironmentPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Environment</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Environmental sustainability initiatives and green practices in Bangladesh's RMG sector
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">Environmental Sustainability Overview</h2>
              <p className="mb-8 text-lg text-text-light">
                Driving sustainable environmental practices across Bangladesh's ready-made garment industry 
                through resource efficiency, pollution prevention, and circular economy initiatives.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-text-light">Green Factories</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-text-light">Water Reduction</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-text-light">Energy Savings</div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Key Environmental Focus Areas</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Water Management</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Effluent Treatment Plants (ETPs)</li>
                        <li>Zero Liquid Discharge (ZLD) systems</li>
                        <li>Water recycling and reuse</li>
                        <li>Rainwater harvesting</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Energy & Climate</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Renewable energy adoption (solar)</li>
                        <li>Energy efficiency upgrades</li>
                        <li>Carbon footprint reduction</li>
                        <li>GHG emissions tracking</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Chemical Management</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>ZDHC compliance</li>
                        <li>Safer chemical alternatives</li>
                        <li>Chemical inventory management</li>
                        <li>Worker chemical safety training</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">Waste & Circularity</h4>
                      <ul className="space-y-2 text-text-light list-disc list-inside">
                        <li>Textile waste recycling</li>
                        <li>Circular fashion initiatives</li>
                        <li>Solid waste management</li>
                        <li>Packaging reduction</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Certifications & Standards</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">LEED</div>
                      <div>
                        <h4 className="font-bold text-dark">LEED Certified Factories</h4>
                        <p className="text-text-light">Bangladesh has the highest number of LEED Platinum certified garment factories globally</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">ISO</div>
                      <div>
                        <h4 className="font-bold text-dark">ISO 14001 & 50001</h4>
                        <p className="text-text-light">Environmental and energy management systems certification</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">ZDHC</div>
                      <div>
                        <h4 className="font-bold text-dark">ZDHC Programme</h4>
                        <p className="text-text-light">Zero Discharge of Hazardous Chemicals compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">Higg</div>
                      <div>
                        <h4 className="font-bold text-dark">Higg Index (FEM)</h4>
                        <p className="text-text-light">Facility Environmental Module for sustainability assessment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-bold text-primary mb-3">Green Transformation Support</h3>
                  <p className="text-text-light mb-4">
                    Access funding programs, technical assistance, and certification support for green factory upgrades.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <a href="#" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Green Finance</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">Technical Guidelines</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">Case Studies</a>
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