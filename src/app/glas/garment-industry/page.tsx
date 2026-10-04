export default function GarmentIndustryPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Garments Industry of Bangladesh</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Understanding Bangladesh's leading export sector
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">Overview</h2>
              <p className="mb-6 text-lg text-text-light">
                The Ready-Made Garments (RMG) sector is the backbone of Bangladesh's economy, 
                accounting for over 80% of the country's total exports and employing millions of workers.
              </p>
              
              <h3 className="text-xl font-bold text-dark mb-4 mt-8">Key Statistics</h3>
              <ul className="list-disc list-inside mb-6 text-text-light space-y-2">
                <li>Export earnings: $40+ billion annually</li>
                <li>Employment: 4+ million workers (majority women)</li>
                <li>Global ranking: 2nd largest apparel exporter</li>
                <li>Contribution to GDP: ~11%</li>
              </ul>

              <h3 className="text-xl font-bold text-dark mb-4 mt-8">Why Bangladesh?</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary mb-2">Competitive Labor Costs</h4>
                  <p className="text-text-light">One of the most cost-effective manufacturing bases globally</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary mb-2">Skilled Workforce</h4>
                  <p className="text-text-light">Decades of experience with a large, trainable labor pool</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary mb-2">Duty-Free Access</h4>
                  <p className="text-text-light">GSP benefits to EU, Canada, Australia, and other markets</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary mb-2">Vertical Integration</h4>
                  <p className="text-text-light">Complete supply chain from yarn to finished garments</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-dark mb-4 mt-8">Sustainability & Compliance</h3>
              <p className="mb-4 text-text-light">
                Bangladesh leads globally in green factory certifications (LEED), with the highest number 
                of USGBC LEED-certified green garment factories in the world.
              </p>
              <p className="text-text-light">
                Continuous improvements in workplace safety, worker welfare, and environmental compliance 
                through initiatives like the Accord and Alliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}