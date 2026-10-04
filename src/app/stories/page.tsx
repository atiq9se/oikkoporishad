import Link from "next/link";
import { stories } from "@/data/stories";

export default function StoriesPage() {
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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Oikko Parishad Story</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Our quarterly journey of impact and progress
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl space-y-8">
            {stories.map((story, index) => (
              <Link
                key={story.id}
                href={`/stories/${story.id}`}
                className="animate-fade-in-up opacity-0 group relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl block"
                style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
              >
                {/* Book Cover Style */}
                <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
                  <img
                    src={story.cover}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Book spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/80" />
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-secondary/60" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {story.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-text-light mb-4">
                    <span className="inline-flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {story.author}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="inline-flex items-center gap-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {story.date}
                    </span>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-dark group-hover:text-primary transition-colors duration-300 leading-tight">
                    {story.title}
                  </h2>
                  <p className="text-base text-text-light leading-relaxed line-clamp-3">
                    {story.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:gap-2">
                      Read Story
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