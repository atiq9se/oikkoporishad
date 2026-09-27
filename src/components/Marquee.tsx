"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const marqueeItems = [
  { id: 1, text: "Do you support the new education scholarship program for underprivileged students?" },
  { id: 2, text: "Should Oikkoparishad open a new healthcare center in Sylhet?" },
  { id: 3, text: "Do you agree with the proposed community development plan for 2027?" },
];

const getVotes = () => {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem("marqueeVotes");
  return stored ? JSON.parse(stored) : {};
};

const setVotes = (votes: Record<string, "yes" | "no">) => {
  localStorage.setItem("marqueeVotes", JSON.stringify(votes));
};

export default function Marquee() {
  const [votes, setVotesState] = useState<Record<string, "yes" | "no">>({});
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setVotesState(getVotes());
  }, []);

  const handleVote = (itemId: number, vote: "yes" | "no", e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = { ...votes, [itemId]: vote };
    setVotesState(updated);
    setVotes(updated);
  };

  return (
    <div
      className="bg-gradient-to-r from-primary via-primary-light to-primary py-2.5 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center gap-4 max-w-full px-4">
        <span className="hidden md:inline-flex items-center gap-1.5 shrink-0 bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full z-10">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          POLL
        </span>

        <div className="flex-1 overflow-hidden">
          <div
            className="inline-flex animate-marquee"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href={`/opinion/opinion-00${item.id}`}
                prefetch={true}
                className="inline-flex items-center gap-3 mx-8 hover:bg-white/10 px-2 py-1 rounded transition-colors no-underline"
              >
                <span className="text-white text-sm font-medium whitespace-nowrap">{item.text}</span>
                <button
                  onClick={(e) => handleVote(item.id, "yes", e)}
                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    votes[item.id] === "yes"
                      ? "bg-green-500 text-white shadow-md"
                      : "bg-white/20 text-white hover:bg-green-500"
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Yes
                </button>
                <button
                  onClick={(e) => handleVote(item.id, "no", e)}
                  className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    votes[item.id] === "no"
                      ? "bg-red-500 text-white shadow-md"
                      : "bg-white/20 text-white hover:bg-red-500"
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
