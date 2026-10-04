import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { stories, getStoryById } from "@/data/stories";

export function generateStaticParams() {
  return stories.map((story) => ({ id: story.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = getStoryById(id);

  if (!item) {
    return { title: "Story Not Found" };
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [item.cover],
    },
  };
}

const isHeading = (line: string) => line.endsWith(":") && !line.startsWith("-");

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getStoryById(id);

  if (!item) {
    notFound();
  }

  const currentIndex = stories.findIndex((s) => s.id === item.id);
  const prevItem = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const nextItem =
    currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;
  const related = stories.filter((s) => s.id !== item.id).slice(0, 3);

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
            href="/stories"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Stories
          </Link>
          <span className="mb-4 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-dark">
            {item.category}
          </span>
          <h1 className="mb-5 text-3xl font-bold sm:text-4xl md:text-5xl">
            {item.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {item.date}
            </span>
            <span className="hidden w-1 h-1 rounded-full bg-gray-400 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {item.author}
            </span>
            <span className="hidden w-1 h-1 rounded-full bg-gray-400 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item.period}
            </span>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <article className="overflow-hidden rounded-2xl bg-white shadow-xl border border-primary/10">
              <div className="relative h-64 overflow-hidden sm:h-80">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-8 sm:p-12">
                <p className="mb-8 border-l-4 border-secondary bg-accent px-5 py-4 text-base text-text italic leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-4">
                  {item.content.split("\n").map((line, i) => {
                    if (line.trim() === "") {
                      return <div key={i} className="h-2" />;
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li
                          key={i}
                          className="ml-5 flex gap-2 text-text leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                          <span>{line.slice(2)}</span>
                        </li>
                      );
                    }
                    if (isHeading(line)) {
                      return (
                        <h2
                          key={i}
                          className="pt-2 text-xl font-bold text-dark"
                        >
                          {line}
                        </h2>
                      );
                    }
                    return (
                      <p key={i} className="text-base leading-relaxed text-text">
                        {line}
                      </p>
                    );
                  })}
                </div>

                {item.images && item.images.length > 0 && (
                  <div className="mt-10 grid gap-4 border-t border-gray-100 pt-10 sm:grid-cols-2">
                    {item.images.map((img, i) => (
                      <a
                        key={i}
                        href={img}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-xl"
                      >
                        <img
                          src={img}
                          alt={`${item.title} - Image ${i + 1}`}
                          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                          <svg
                            className="h-10 w-10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
              {prevItem ? (
                <Link
                  href={`/stories/${prevItem.id}`}
                  className="group flex-1 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-light">
                    Previous Story
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-primary">
                    {prevItem.title}
                  </span>
                </Link>
              ) : (
                <span className="flex-1" />
              )}

              {nextItem ? (
                <Link
                  href={`/stories/${nextItem.id}`}
                  className="group flex-1 rounded-xl border border-gray-200 bg-white p-4 text-right transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-light">
                    Next Story
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-primary">
                    {nextItem.title}
                  </span>
                </Link>
              ) : (
                <span className="flex-1" />
              )}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-accent py-20">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              More Stories
            </h2>
            <div className="mx-auto h-1 w-20 rounded bg-secondary" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/stories/${rel.id}`}
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={rel.cover}
                    alt={rel.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/80" />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-text-light mb-2">
                    <span>{rel.period}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{rel.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-dark transition-colors group-hover:text-primary leading-tight">
                    {rel.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}