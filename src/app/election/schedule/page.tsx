export default function ElectionSchedulePage() {
  return (
    <section
      className="animate-fade-in-up opacity-0 bg-accent py-20"
      aria-label="Election Schedule"
    >
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
            Election Schedule
          </h2>
          <p className="text-text-light">
            Upcoming election events and important dates for Oikkoparishad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Election Day</h3>
                <p className="text-sm text-text-light">December 7, 2026</p>
              </div>
            </div>
            <p className="text-sm text-text-light">
              The much-anticipated day when members exercise their democratic right to choose leadership.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Candidate Registration</h3>
                <p className="text-sm text-text-light">January 15 - February 15, 2026</p>
              </div>
            </div>
            <p className="text-sm text-text-light">
              Period for eligible members to register as candidates for various positions.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Valid Candidate List</h3>
                <p className="text-sm text-text-light">March 15, 2026</p>
              </div>
            </div>
            <p className="text-sm text-text-light">
              Final list of approved candidates who meet all eligibility requirements.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Election Day</h3>
                <p className="text-sm text-text-light">December 7, 2026</p>
              </div>
            </div>
            <p className="text-sm text-text-light">
              The much-anticipated day when members exercise their democratic right to choose leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}