"use client";

import { useState } from "react";
import { Opinion } from "@/data/opinions";

interface OpinionDetailClientProps {
  opinion: Opinion;
}

export default function OpinionDetailClient({ opinion }: OpinionDetailClientProps) {
  const [votes, setVotes] = useState(opinion.votes);
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);

  const total = votes.yes + votes.no;
  const yesPercent = total > 0 ? Math.round((votes.yes / total) * 100) : 0;
  const noPercent = total > 0 ? Math.round((votes.no / total) * 100) : 0;

  const handleVote = (type: "yes" | "no") => {
    if (voted) return;
    setVotes((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    setVoted(type);
  };

  return (
    <>
      <section
        className="animate-fade-in-up opacity-0 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')",
        }}
      >
        <div className="container-custom py-20 text-center text-white">
          <a
            href="/opinion"
            className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-yellow-300 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Opinion
          </a>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {opinion.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
            <span>By {opinion.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <span>{opinion.date}</span>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-white py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white p-8 shadow-xl border border-primary/10 sm:p-12">
              <article className="space-y-5 text-text leading-relaxed">
                {opinion.content.split("\n").map((line, i) => {
                  if (line.trim() === "") return <div key={i} className="h-2" />;
                  return <p key={i} className="text-base sm:text-lg">{line}</p>;
                })}
              </article>

              <div className="mt-12 rounded-2xl bg-white p-8 shadow-xl border border-primary/10 sm:p-12">
                <h2 className="mb-6 text-2xl font-bold text-primary">What do you think?</h2>

                {voted ? (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-semibold text-green-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                          Yes ({votes.yes})
                        </span>
                        <span className="font-semibold text-green-600">{yesPercent}%</span>
                      </div>
                      <div className="h-4 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-green-500 transition-all duration-1000"
                          style={{ width: `${yesPercent}%` }}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-semibold text-red-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                          </svg>
                          No ({votes.no})
                        </span>
                        <span className="font-semibold text-red-600">{noPercent}%</span>
                      </div>
                      <div className="h-4 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-red-500 transition-all duration-1000"
                          style={{ width: `${noPercent}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm text-text-light">
                      Total votes: {total} &middot; You voted{" "}
                      <span className="font-semibold text-primary">
                        {voted === "yes" ? "Yes" : "No"}
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-text-light">Do you agree with this opinion? Vote below.</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleVote("yes")}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-green-500 bg-green-50 px-6 py-4 text-lg font-bold text-green-600 transition-all hover:bg-green-500 hover:text-white hover:shadow-lg"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        Yes
                      </button>
                      <button
                        onClick={() => handleVote("no")}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-red-500 bg-red-50 px-6 py-4 text-lg font-bold text-red-600 transition-all hover:bg-red-500 hover:text-white hover:shadow-lg"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                          />
                        </svg>
                        No
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}