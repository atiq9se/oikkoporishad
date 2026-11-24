const exportRows = [
  { year: "2019-20", rmg: "27.9", total: "33.7", share: "82.8%" },
  { year: "2020-21", rmg: "31.5", total: "38.8", share: "81.2%" },
  { year: "2021-22", rmg: "42.6", total: "52.1", share: "81.8%" },
  { year: "2022-23", rmg: "47.0", total: "55.6", share: "84.5%" },
  { year: "2023-24", rmg: "39.8", total: "47.4", share: "84.0%" },
];

const columns = [
  { label: "Year", align: "left" },
  { label: "Export of RMG", align: "right", note: "(USD Billion)" },
  { label: "Total Export of Bangladesh", align: "right", note: "(USD Billion)" },
  { label: "% of RMG’s to Total Export", align: "right" },
] as const;

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
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-primary/15 bg-primary/5">
                      {columns.map((column) => (
                        <th
                          key={column.label}
                          scope="col"
                          className={`px-5 py-4 align-bottom text-xs font-bold uppercase tracking-wide text-primary sm:px-6 ${
                            column.align === "right" ? "text-right" : "text-left"
                          }`}
                        >
                          <span className="block leading-snug normal-case">{column.label}</span>
                          {"note" in column && column.note && (
                            <span className="mt-0.5 block text-[11px] font-medium normal-case tracking-normal text-text-light">
                              {column.note}
                            </span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {exportRows.map((row, index) => (
                      <tr
                        key={row.year}
                        className={`transition-colors hover:bg-primary/5 ${
                          index !== exportRows.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                      >
                        <td className="px-5 py-4 text-sm font-semibold text-dark sm:px-6">
                          {row.year}
                        </td>
                        <td className="px-5 py-4 text-right text-sm tabular-nums text-text sm:px-6">
                          {row.rmg}
                        </td>
                        <td className="px-5 py-4 text-right text-sm tabular-nums text-text sm:px-6">
                          {row.total}
                        </td>
                        <td className="px-5 py-4 text-right sm:px-6">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold tabular-nums text-primary">
                            {row.share}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-xs text-text-light">
              Source: Export Promotion Bureau (EPB) &amp; BGMEA. Figures are in USD billion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
