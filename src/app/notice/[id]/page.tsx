import Link from "next/link";
import { notFound } from "next/navigation";
import { notices } from "@/data/notices";

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = notices.find(n => n.id === id);

  if (!notice) {
    notFound();
  }

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
          <Link
            href="/notice"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Notices
          </Link>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {notice.title}
          </h1>
          <span className="inline-flex items-center gap-2 text-sm text-gray-300">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {notice.date}
          </span>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-8 shadow-xl border border-primary/10 sm:p-12">
              <div className="mb-8 flex items-center gap-3">
                <div className="inline-flex flex-col items-center rounded-lg bg-accent px-5 py-3">
                  <span className="text-xs font-semibold uppercase text-text-light">
                    {notice.date.split(" ")[1]}
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    {notice.date.split(" ")[0]}
                  </span>
                  <span className="text-xs text-text-light">
                    {notice.date.split(" ")[2]}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-dark">{notice.title}</h2>
                  <span className="mt-1 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {notice.type}
                  </span>
                </div>
              </div>

              {notice.images && notice.images.length > 0 && (
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {notice.images.map((img, i) => (
                    <a key={i} href={img} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-xl">
                      <img src={img} alt={`${notice.title} - Image ${i + 1}`} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                        <svg className="h-10 w-10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              <div className="prose prose-gray max-w-none">
                {notice.content.split("\n").map((line, i) => {
                  if (line.startsWith("- ")) {
                    return (
                      <li key={i} className="ml-4 text-text leading-relaxed">
                        {line.slice(2)}
                      </li>
                    );
                  }
                  if (line.startsWith("Agenda:") || line.startsWith("Key Dates:") ||
                      line.startsWith("Eligibility Criteria:") || line.startsWith("Donation Methods:") ||
                      line.startsWith("Relief Packages Include:") || line.startsWith("Program Details:") ||
                      line.startsWith("Subjects Offered:") || line.startsWith("Renewal Fee Structure:") ||
                      line.startsWith("Late Fee") || line.startsWith("Renewal Methods:") ||
                      line.startsWith("Services Available:") || line.startsWith("Specialists:") ||
                      line.startsWith("Time:")) {
                    const isTimeOrSpecialist = line.startsWith("Time:") || line.startsWith("Specialists:");
                    return (
                      <h3 key={i} className={`mt-6 mb-2 text-base font-bold text-dark ${isTimeOrSpecialist ? "text-primary" : ""}`}>
                        {line}
                      </h3>
                    );
                  }
                  if (line.trim() === "") {
                    return <div key={i} className="h-3" />;
                  }
                  return (
                    <p key={i} className="text-text leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>

              {notice.pdf && (
                <div className="mt-8 border-t border-gray-100 pt-8">
                  <div className="flex items-center justify-between rounded-xl bg-accent p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-dark">Attached Document</p>
                        <p className="text-xs text-text-light">PDF file - {notice.pdf.split("/").pop()}</p>
                      </div>
                    </div>
                    <a
                      href={notice.pdf}
                      download
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/notice"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Notices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return notices.map((notice) => ({ id: notice.id }));
}
