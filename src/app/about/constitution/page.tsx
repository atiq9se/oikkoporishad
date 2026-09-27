import Link from "next/link";

const articles = [
  {
    num: "Article 1",
    title: "Name and Status",
    desc: `1.1 The organization shall be known as "Oikkoparishad" (hereinafter referred to as "the Organization").
1.2 The Organization is a non-political, non-profit, and non-government voluntary social welfare organization.
1.3 The headquarters of the Organization shall be located in Jalalabad, Sylhet, Bangladesh.
1.4 The Organization may establish branch offices in other regions as deemed necessary by the Executive Committee.
1.5 The Organization shall have its own seal and emblem as adopted by the Executive Committee.`,
  },
  {
    num: "Article 2",
    title: "Aims and Objectives",
    desc: `2.1 The primary aim of the Organization is to promote education, healthcare, social welfare, and sustainable development for underprivileged communities in Bangladesh.
2.2 To provide educational scholarships and financial assistance to meritorious but underprivileged students.
2.3 To organize free medical camps and health awareness programs in rural and remote areas.
2.4 To work for women empowerment through skill development, vocational training, and entrepreneurship programs.
2.5 To undertake clean water initiatives and promote hygiene in communities lacking safe drinking water.
2.6 To provide emergency relief and rehabilitation support during natural disasters and humanitarian crises.
2.7 To collaborate with national and international organizations for the advancement of social welfare.`,
  },
  {
    num: "Article 3",
    title: "Membership",
    desc: `3.1 Any individual aged 18 years or above who agrees with the Organization's objectives and constitution may apply for membership.
3.2 Categories of Membership:
     (a) General Member: Any individual who pays the annual membership fee.
     (b) Life Member: Any individual who makes a one-time lump sum payment as determined by the Executive Committee.
     (c) Honorary Member: Any individual who has rendered outstanding service to the Organization or society, nominated by the Executive Committee.
3.3 All members shall have the right to vote in the Annual General Meeting.
3.4 Membership may be terminated for violation of the constitution, non-payment of dues, or conduct detrimental to the Organization.
3.5 A member may resign by submitting a written resignation to the General Secretary.`,
  },
  {
    num: "Article 4",
    title: "Executive Committee",
    desc: `4.1 The Executive Committee shall consist of 11 (eleven) members elected by the General Members for a two-year term.
4.2 Composition of the Executive Committee:
     (a) President - 1 (one)
     (b) Vice President - 2 (two)
     (c) General Secretary - 1 (one)
     (d) Joint Secretary - 1 (one)
     (e) Treasurer - 1 (one)
     (f) Executive Members - 5 (five)
4.3 The Executive Committee shall be responsible for the overall management and administration of the Organization.
4.4 The President shall preside over all meetings of the Executive Committee and the Annual General Meeting.
4.5 The General Secretary shall maintain all records, correspondences, and minutes of meetings.
4.6 The Treasurer shall be responsible for the financial management, accounting, and fund management of the Organization.
4.7 Any vacancy in the Executive Committee may be filled by the remaining members for the unexpired term.`,
  },
  {
    num: "Article 5",
    title: "Meetings",
    desc: `5.1 Annual General Meeting (AGM) shall be held once every calendar year within the first quarter of the year.
5.2 Executive Committee meetings shall be held at least once every three months.
5.3 Notice of all meetings shall be given in writing at least 14 (fourteen) days prior to the meeting date.
5.4 The quorum for the Annual General Meeting shall be one-third of the total General Members.
5.5 The quorum for Executive Committee meetings shall be half of the total committee members.
5.6 All decisions shall be made by a simple majority of votes. In case of a tie, the Presiding Officer shall have the casting vote.
5.7 Emergency meetings may be called by the President or by a written request of at least one-third of the committee members.`,
  },
  {
    num: "Article 6",
    title: "Funds and Accounts",
    desc: `6.1 All funds of the Organization shall be deposited in a bank account operated jointly by the President and Treasurer.
6.2 The financial year of the Organization shall be from July 1 to June 30.
6.3 Accounts shall be audited annually by an external auditor appointed by the Executive Committee.
6.4 The audited financial statements shall be presented at the Annual General Meeting for approval.
6.5 No expenditure shall be made without the approval of the Executive Committee.
6.6 The Treasurer shall maintain proper books of accounts and financial records.
6.7 All cheques and financial instruments shall require joint signatures of the President and Treasurer.`,
  },
  {
    num: "Article 7",
    title: "Dispute Resolution",
    desc: `7.1 Any dispute arising within the Organization shall first be attempted to be resolved through amicable discussion.
7.2 If not resolved amicably, the dispute shall be referred to a dispute resolution committee formed by the Executive Committee.
7.3 The dispute resolution committee shall consist of three members, none of whom shall be a party to the dispute.
7.4 The decision of the dispute resolution committee shall be final and binding on all parties.
7.5 If the dispute remains unresolved, the matter may be referred to arbitration in accordance with the laws of Bangladesh.
7.6 No legal action shall be initiated against the Organization without first exhausting the internal dispute resolution mechanisms.`,
  },
  {
    num: "Article 8",
    title: "Amendment",
    desc: `8.1 This constitution may be amended by a two-thirds majority vote of the General Members present and voting at the Annual General Meeting.
8.2 Any proposal for amendment shall be submitted in writing to the General Secretary at least 30 (thirty) days prior to the Annual General Meeting.
8.3 The proposed amendment shall be circulated to all members at least 21 (twenty-one) days before the meeting.
8.4 No amendment shall be made that conflicts with the laws of Bangladesh.
8.5 Amendments shall take effect immediately upon approval unless a different date is specified in the resolution.
8.6 The amended constitution shall be printed and distributed to all members within 30 days of the amendment.`,
  },
];

export default function ConstitutionPage() {
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
            href="/about"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-yellow-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to About
          </Link>
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Constitution</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            The guiding principles and bylaws of Oikkoparishad
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="mb-12 text-center text-lg leading-relaxed text-text-light">
              This constitution governs the operations, management, and activities of Oikkoparishad.
              It was adopted on the founding date and amended periodically to meet the evolving needs of the organization.
            </p>

            <div className="space-y-12">
              {articles.map((article, index) => (
                <div
                  key={article.num}
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}
                >
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="rounded-lg bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary tracking-wide">
                      {article.num}
                    </span>
                    <h3 className="text-2xl font-bold text-dark sm:text-3xl">{article.title}</h3>
                  </div>
                  <div className="ml-1 border-l-4 border-primary/20 pl-6">
                    {article.desc.split("\n").map((line, i) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <div key={i} className="h-2" />;
                      const isSub = trimmed.startsWith("(") || trimmed.startsWith("     ");
                      return (
                        <p key={i} className={`text-base sm:text-lg leading-relaxed ${isSub ? "text-text-light pl-4" : "text-text"} ${!isSub ? "mb-2" : ""}`}>
                          {trimmed.startsWith("     ") ? trimmed.trim() : trimmed}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Download Full Constitution</h2>
          <p className="mb-8 text-gray-200">Access the complete constitution document in PDF format.</p>
          <a
            href="/documents/constitution.pdf"
            download
            className="inline-flex items-center gap-3 rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-dark transition-colors hover:bg-yellow-400"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>
      </section>
    </>
  );
}
