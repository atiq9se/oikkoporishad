import Link from "next/link";
import { notices } from "@/data/notices";

export default function NoticePage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Notices</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Stay updated with the latest announcements from Oikkoparishad
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl space-y-6">
            {notices.filter(n => n.type !== "Meeting").map((notice, index) => (
              <Link
                key={notice.id}
                href={`/notice/${notice.id}`}
                className="animate-fade-in-up opacity-0 group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg block"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex-shrink-0 text-center">
                    <div className="inline-flex flex-col items-center rounded-lg bg-accent px-4 py-3">
                      <span className="text-xs font-semibold uppercase text-text-light">
                        {notice.date.split(" ")[1]}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {notice.date.split(" ")[0]}
                      </span>
                      <span className="text-xs text-text-light">
                        {notice.date.split(" ")[2]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-dark group-hover:text-primary transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-light">
                      {notice.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
