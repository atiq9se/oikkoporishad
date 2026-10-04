export default function ExportPerformancePage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Export Performance</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Bangladesh export statistics and performance analysis
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">Export Performance Overview</h2>
              <p className="mb-8 text-lg text-text-light">
                Comprehensive analysis of Bangladesh's export performance across key sectors, 
                destinations, and time periods. Track growth trends, market share, and competitiveness.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$47.4B</div>
                  <div className="text-text-light">Total Exports (FY2023-24)</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+6.2%</div>
                  <div className="text-text-light">YoY Growth Rate</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">84%</div>
                  <div className="text-text-light">RMG Share</div>
                </div>
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-text-light">Export Destinations</div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Sector-wise Export Performance</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="pb-3 font-semibold text-text">Sector</th>
                          <th className="pb-3 font-semibold text-text text-right">Export Value (USD)</th>
                          <th className="pb-3 font-semibold text-text text-right">Share %</th>
                          <th className="pb-3 font-semibold text-text text-right">Growth %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 font-medium">Ready-Made Garments</td>
                          <td className="py-3 text-right">$39.8B</td>
                          <td className="py-3 text-right">84%</td>
                          <td className="py-3 text-right text-green-600">+8.1%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 font-medium">Home Textiles</td>
                          <td className="py-3 text-right">$1.2B</td>
                          <td className="py-3 text-right">2.5%</td>
                          <td className="py-3 text-right text-green-600">+4.3%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 font-medium">Leather & Leather Goods</td>
                          <td className="py-3 text-right">$1.1B</td>
                          <td className="py-3 text-right">2.3%</td>
                          <td className="py-3 text-right text-green-600">+12.5%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 font-medium">Jute & Jute Goods</td>
                          <td className="py-3 text-right">$0.9B</td>
                          <td className="py-3 text-right">1.9%</td>
                          <td className="py-3 text-right text-red-600">-3.2%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 font-medium">Frozen Food</td>
                          <td className="py-3 text-right">$0.6B</td>
                          <td className="py-3 text-right">1.3%</td>
                          <td className="py-3 text-right text-green-600">+15.7%</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Others</td>
                          <td className="py-3 text-right">$3.8B</td>
                          <td className="py-3 text-right">8%</td>
                          <td className="py-3 text-right text-green-600">+5.4%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-dark mb-4">Top Export Destinations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Traditional Markets</h4>
                      <ul className="space-y-2 text-text-light">
                        <li className="flex justify-between"><span>USA</span><span className="font-medium">$8.2B</span></li>
                        <li className="flex justify-between"><span>Germany</span><span className="font-medium">$6.1B</span></li>
                        <li className="flex justify-between"><span>UK</span><span className="font-medium">$4.3B</span></li>
                        <li className="flex justify-between"><span>Spain</span><span className="font-medium">$2.8B</span></li>
                        <li className="flex justify-between"><span>France</span><span className="font-medium">$2.1B</span></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Emerging Markets</h4>
                      <ul className="space-y-2 text-text-light">
                        <li className="flex justify-between"><span>Japan</span><span className="font-medium">$1.5B</span></li>
                        <li className="flex justify-between"><span>Canada</span><span className="font-medium">$1.3B</span></li>
                        <li className="flex justify-between"><span>Australia</span><span className="font-medium">$0.9B</span></li>
                        <li className="flex justify-between"><span>China</span><span className="font-medium">$0.8B</span></li>
                        <li className="flex justify-between"><span>India</span><span className="font-medium">$0.7B</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-bold text-primary mb-3">Download Full Report</h3>
                  <p className="text-text-light mb-4">
                    Access detailed monthly export data, HS-code level analysis, and comparative reports.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Monthly Report</a>
                    <a href="#" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">Annual Review</a>
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