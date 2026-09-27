"use client";

import { useState } from "react";

export default function MemberSearch() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to search results or filter members
      console.log("Searching for:", query);
      // Could redirect to /members?search=${query}
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary sm:text-4xl">
            Member Search
          </h2>
          <p className="text-text-light">
            Find a member by name or membership number.
          </p>
        </div>
        <div className="mt-8 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or member ID..."
              className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}