"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type EventItem = {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  organizer: string;
  contact: string;
  entry: string;
};

const events: EventItem[] = [
  {
    id: 1,
    name: "Oikko Parishad Annual General Meeting 2026",
    date: "15 February 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "Hotel Sylhet Grand, Sylhet",
    description:
      "Annual General Meeting of Oikko Parishad where the annual report, audited accounts and future action plan are presented to the general members. All general members are requested to attend on time.",
    organizer: "Oikko Parishad Secretariat",
    contact: "info@oikkoparishad.com",
    entry: "General Members Only",
  },
  {
    id: 2,
    name: "BGMEA – Oikko Parishad Member Networking Night",
    date: "28 February 2026",
    time: "7:00 PM – 10:00 PM",
    venue: "Rose View Hotel, Sylhet",
    description:
      "An evening networking programme for member factories, buyers' representatives and industry stakeholders to build business connections and discuss upcoming sourcing opportunities.",
    organizer: "Oikko Parishad & BGMEA",
    contact: "events@oikkoparishad.com",
    entry: "Invitation Only",
  },
  {
    id: 3,
    name: "RMG Sustainability & Compliance Workshop",
    date: "14 March 2026",
    time: "9:30 AM – 4:00 PM",
    venue: "BSCIC Auditorium, Sylhet",
    description:
      "A day-long workshop on the latest compliance requirements, factory safety standards, environmental sustainability and social audit preparation for RMG units.",
    organizer: "Oikko Parishad Training Cell",
    contact: "training@oikkoparishad.com",
    entry: "Registration Required",
  },
  {
    id: 4,
    name: "International Women's Day Celebration",
    date: "8 March 2026",
    time: "11:00 AM – 2:00 PM",
    venue: "Parishad Conference Hall, Sylhet",
    description:
      "A programme celebrating the contribution of women workers and women entrepreneurs in the garment industry, featuring discussion sessions and recognition of outstanding performers.",
    organizer: "Oikko Parishad Women's Wing",
    contact: "info@oikkoparishad.com",
    entry: "Open for All",
  },
  {
    id: 5,
    name: "Annual Iftar Mahfil 2026",
    date: "20 March 2026",
    time: "5:30 PM – 8:00 PM",
    venue: "Sylhet Club, Sylhet",
    description:
      "Annual Iftar Mahfil for members, their families and guests. Please confirm your seat with the secretariat at least three days before the programme.",
    organizer: "Oikko Parishad Secretariat",
    contact: "events@oikkoparishad.com",
    entry: "Members & Guests",
  },
  {
    id: 6,
    name: "Export Performance & Trade Data Briefing",
    date: "12 April 2026",
    time: "3:00 PM – 5:00 PM",
    venue: "Parishad Board Room, Sylhet",
    description:
      "A briefing session on the latest export performance data, monthly trade trends and international market updates relevant to member factories.",
    organizer: "Oikko Parishad Trade Information Cell",
    contact: "trade@oikkoparishad.com",
    entry: "Open for Members",
  },
  {
    id: 7,
    name: "Oikko Parishad Election 2026 – Candidate Introduction",
    date: "5 May 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "Sylhet International Conference Center, Sylhet",
    description:
      "Formal introduction of the valid candidates for the 2026 election. Candidates will present their election manifestos before the members and the election commission.",
    organizer: "Election Commission, Oikko Parishad",
    contact: "election@oikkoparishad.com",
    entry: "Members & Candidates",
  },
  {
    id: 8,
    name: "Workers' Health & Safety Awareness Program",
    date: "22 May 2026",
    time: "9:00 AM – 1:00 PM",
    venue: "BSCIC Training Center, Sylhet",
    description:
      "An awareness programme for factory workers and supervisors on occupational health, fire safety, first aid and workplace rights.",
    organizer: "Oikko Parishad Sustainability Cell",
    contact: "sustainability@oikkoparishad.com",
    entry: "Registration Required",
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    if (!selectedEvent) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedEvent(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

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
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            <Link href="/" className="text-yellow-300 transition-colors hover:text-white">
              Home
            </Link>
            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/members" className="text-yellow-300 transition-colors hover:text-white">
              Members
            </Link>
            <svg className="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-300">Events</span>
          </nav>
          <h1 className="text-4xl font-bold sm:text-5xl">Events</h1>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-accent py-16">
        <div className="container-custom">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th scope="col" className="px-5 py-4 font-semibold">Event Name</th>
                    <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">Date</th>
                    <th scope="col" className="whitespace-nowrap px-5 py-4 font-semibold">Time</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Venue</th>
                    <th scope="col" className="px-5 py-4 text-center font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {events.map((event) => (
                    <tr key={event.id} className="transition-colors hover:bg-accent/60">
                      <td className="px-5 py-4 font-semibold text-dark">{event.name}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-text">{event.date}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-text">{event.time}</td>
                      <td className="px-5 py-4 text-text">{event.venue}</td>
                      <td className="px-5 py-4 text-center">
                        <button
                          type="button"
                          onClick={() => setSelectedEvent(event)}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-light"
                        >
                          Details
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-text-light">
            Dates and venues may change. Please confirm with the Parishad secretariat before travelling.
          </p>
        </div>
      </section>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-dialog-title"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 bg-primary px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-yellow-300">Event Details</p>
                <h2 id="event-dialog-title" className="mt-1 text-xl font-bold text-white">
                  {selectedEvent.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close details"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 px-6 py-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-accent px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-light">Date</p>
                  <p className="mt-1 text-sm font-semibold text-dark">{selectedEvent.date}</p>
                </div>
                <div className="rounded-xl bg-accent px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-light">Time</p>
                  <p className="mt-1 text-sm font-semibold text-dark">{selectedEvent.time}</p>
                </div>
                <div className="rounded-xl bg-accent px-4 py-3 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-light">Venue</p>
                  <p className="mt-1 text-sm font-semibold text-dark">{selectedEvent.venue}</p>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-primary">About the Event</h3>
                <p className="text-sm leading-relaxed text-text">{selectedEvent.description}</p>
              </div>

              <div className="grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-light">Organizer</p>
                  <p className="mt-1 text-sm font-semibold text-dark">{selectedEvent.organizer}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-light">Entry</p>
                  <p className="mt-1 text-sm font-semibold text-dark">{selectedEvent.entry}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-light">Contact</p>
                  <a
                    href={`mailto:${selectedEvent.contact}`}
                    className="mt-1 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    {selectedEvent.contact}
                  </a>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
