export interface Notice {
  id: string;
  date: string;
  title: string;
  desc: string;
  type: string;
  content: string;
  images?: string[];
  pdf?: string;
}

export const notices: Notice[] = [
  {
    id: "notice-001",
    date: "15 Jul 2026",
    title: "Annual General Meeting 2026",
    desc: "The Annual General Meeting of Oikkoparishad will be held on August 20, 2026 at 10:00 AM at the association conference hall. All members are requested to attend.",
    type: "Meeting",
    images: ["https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"],
    pdf: "/documents/agm-2026-notice.pdf",
    content: "The Annual General Meeting (AGM) of Oikkoparishad is scheduled for August 20, 2026 at 10:00 AM. The meeting will take place at the association conference hall located at the main office premises.\n\nAgenda:\n- Review of annual activities and achievements\n- Financial report presentation\n- Election of new executive committee members\n- Discussion on upcoming projects and initiatives\n- Open floor for member suggestions\n\nAll registered members are cordially invited to attend. Please bring your membership card for verification. Light refreshments will be served after the meeting.\n\nFor any queries, please contact the association office during business hours.",
  },
  {
    id: "notice-002",
    date: "10 Jul 2026",
    title: "Executive Committee Election Schedule",
    desc: "The election for the Executive Committee for the term 2026-2028 will be held on September 5, 2026. Nomination forms are available at the association office.",
    type: "Election",
    pdf: "/documents/election-schedule-2026.pdf",
    content: "The election for the Executive Committee for the term 2026-2028 will be held on September 5, 2026. Nomination forms are available at the association office.\n\nKey Dates:\n- Nomination Form Collection: July 10 - August 10, 2026\n- Last Date for Submission: August 15, 2026\n- Scrutiny of Nominations: August 18, 2026\n- Final List of Candidates: August 20, 2026\n- Election Day: September 5, 2026\n\nEligibility Criteria:\n- Must be a registered member for at least 2 years\n- Must have clear financial dues\n- Must meet the criteria set in the association constitution\n\nInterested members are encouraged to collect and submit nomination forms within the specified timeframe.",
  },
  {
    id: "notice-003",
    date: "28 Jun 2026",
    title: "Flood Relief Fund Collection",
    desc: "Oikkoparishad has launched a flood relief fund to support affected families in the Sylhet region. Donations can be made at the association office or via bank transfer.",
    type: "Notice",
    content: "Oikkoparishad has launched a flood relief fund to support affected families in the Sylhet region. Due to recent heavy rainfall and flooding, thousands of families have been displaced and are in urgent need of assistance.\n\nDonation Methods:\n- In-person: Visit the association office during business hours\n- Bank Transfer: Account details available at the office\n- Mobile Banking: bKash, Nagad, and Rocket accepted\n\nRelief Packages Include:\n- Dry food supplies (rice, dal, oil, salt, biscuits)\n- Clean drinking water\n- Blankets and warm clothing\n- First aid kits and essential medicines\n- Hygiene products\n\nYour generous contributions will make a significant difference in the lives of those affected by this natural disaster.",
  },
  {
    id: "notice-004",
    date: "15 Jun 2026",
    title: "Summer Education Program Registration",
    desc: "Registration for the Summer Education Program 2026 is now open. Children aged 6-14 can enroll for free tutoring classes starting July 1.",
    type: "Program",
    content: "Registration for the Summer Education Program 2026 is now open. This initiative aims to provide free educational support to children from underprivileged backgrounds.\n\nProgram Details:\n- Duration: July 1 - August 31, 2026\n- Age Group: 6-14 years\n- Class Timings: 9:00 AM - 12:00 PM (Sunday-Thursday)\n- Location: Oikkoparishad Community Center\n- Cost: Completely Free\n\nSubjects Offered:\n- Bangla Language & Literature\n- English Language\n- Mathematics\n- General Science\n- Arts & Crafts\n- Computer Basics\n\nLimited seats available. Early registration is recommended. Parents/guardians must provide a copy of the child's birth certificate and a recent passport-size photograph.",
  },
  {
    id: "notice-005",
    date: "01 Jun 2026",
    title: "Membership Renewal Drive",
    desc: "All members are requested to renew their membership for the year 2026-2027. The last date for renewal with regular fee is July 31, 2026.",
    type: "Notice",
    content: "All members are requested to renew their membership for the year 2026-2027. The last date for renewal with regular fee is July 31, 2026.\n\nRenewal Fee Structure:\n- Regular Members: BDT 500\n- Life Members: BDT 0 (Lifetime validity)\n- Patron Members: BDT 0 (Lifetime validity)\n\nLate Fee (after July 31):\n- August 1 - September 30: Additional BDT 100\n- After September 30: Membership will be suspended\n\nRenewal Methods:\n- Visit the association office in person\n- Bank deposit and email the receipt\n- Mobile banking transfer\n\nPlease ensure your contact information is up to date. Members who fail to renew by the deadline will have their membership temporarily suspended.",
  },
  {
    id: "notice-006",
    date: "20 May 2026",
    title: "Health Camp Announcement",
    desc: "A free medical camp will be organized on June 15, 2026 at the Jalalabad Community Center. Services include general checkup, eye care, and dental checkup.",
    type: "Event",
    content: "A free medical camp will be organized on June 15, 2026 at the Jalalabad Community Center. This initiative is part of Oikkoparishad's ongoing commitment to community health and well-being.\n\nServices Available:\n- General Health Checkup\n- Eye Examination & Glasses Prescription\n- Dental Checkup & Basic Treatment\n- Blood Pressure & Diabetes Screening\n- Free Medicine Distribution\n- Health Awareness Counseling\n\nTime: 9:00 AM - 4:00 PM\n\nSpecialists:\n- Dr. Abdul Karim (General Medicine)\n- Dr. Shahana Parveen (Ophthalmology)\n- Dr. Rahim Uddin (Dentistry)\n\nNo registration required. Walk-in patients are welcome. Please bring any previous medical reports if available.",
  },
];
