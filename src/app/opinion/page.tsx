import Link from "next/link";
import { opinions } from "@/data/opinions";

export default function OpinionPage() {
  return (
    <>
      <section className="animate-fade-in-up opacity-0 relative bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')"
      }}>
        <div className="container-custom py-20 text-center text-white">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-yellow-300 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Opinion</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">Thoughts and perspectives from our leadership team</p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl space-y-8">
            {opinions.map((opinion, i) => (
              <Link key={opinion.id} href={`/opinion/${opinion.id}`} className="animate-fade-in-up opacity-0 block rounded-2xl bg-white p-8 shadow-xl border border-primary/10 transition-all hover:shadow-2xl" style={{ animationDelay: `${(i % 4 + 1) * 100}ms` }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{opinion.date}</span>
                  <span className="text-sm text-text-light">By {opinion.author}</span>
                </div>
                <h2 className="mb-3 text-xl font-bold text-dark group-hover:text-primary transition-colors">{opinion.title}</h2>
                <p className="text-text-light leading-relaxed">{opinion.excerpt}</p>
                <div className="mt-5 flex items-center gap-4">
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-green-600">Yes</span>
                      <span className="font-semibold text-green-600">{Math.round((opinion.votes.yes / (opinion.votes.yes + opinion.votes.no)) * 100)}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-green-500" style={{ width: `${Math.round((opinion.votes.yes / (opinion.votes.yes + opinion.votes.no)) * 100)}%` }} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-red-600">No</span>
                      <span className="font-semibold text-red-600">{Math.round((opinion.votes.no / (opinion.votes.yes + opinion.votes.no)) * 100)}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-red-500" style={{ width: `${Math.round((opinion.votes.no / (opinion.votes.yes + opinion.votes.no)) * 100)}%` }} />
                    </div>
                  </div>
                  <span className="text-xs text-text-light whitespace-nowrap">{opinion.votes.yes + opinion.votes.no} votes</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
