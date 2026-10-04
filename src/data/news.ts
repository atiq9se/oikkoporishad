export interface News {
  id: string;
  date: string;
  title: string;
  desc: string;
  category: string;
  author: string;
  readTime: string;
  img: string;
  images?: string[];
  content: string;
}

export const news: News[] = [
  {
    id: "news-001",
    date: "July 15, 2026",
    title: "Annual General Meeting 2026",
    desc: "The Annual General Meeting was held successfully with record attendance from members across all districts.",
    category: "Governance",
    author: "Media Committee",
    readTime: "3 min read",
    img: "https://images.pexels.com/photos/32048352/pexels-photo-32048352.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/32048352/pexels-photo-32048352.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/31321032/pexels-photo-31321032.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    content: "The Annual General Meeting (AGM) of Oikkoparishad for the year 2026 was held at the association conference hall with record attendance, bringing together members from every district of the region.\n\nHighlights:\n- Presentation of the annual activity report by the President\n- Audited financial statements reviewed and approved by members\n- Update on ongoing education, healthcare, and water programmes\n- Election of two vacant Executive Committee seats\n- Open discussion on the 2027 development plan\n\nThe meeting was attended by members representing all twelve branches, alongside invited guests, local officials, and partner organisations. Members expressed appreciation for the association's continued work in education, healthcare, and community development.\n\nKey Takeaways:\n- The scholarship programme for 2027 will be expanded to cover 250 students\n- A new vocational training centre will be inaugurated in the Jalalabad main branch area\n- The clean water initiative will enter its third phase during the coming year\n- Membership growth of over 18 percent was reported compared to the previous year\n\nA detailed minutes of the meeting is available at the association office, and members may request a printed copy during office hours.",
  },
  {
    id: "news-002",
    date: "June 28, 2026",
    title: "New Scholarship Program Launched",
    desc: "Oikkoparishad launches a new scholarship program for 200 underprivileged students in rural areas.",
    category: "Education",
    author: "Education Committee",
    readTime: "4 min read",
    img: "https://images.pexels.com/photos/31047138/pexels-photo-31047138.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/31047138/pexels-photo-31047138.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/31030909/pexels-photo-31030909.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    content: "Oikkoparishad has formally launched its annual merit-based scholarship programme, which will support 200 students from underprivileged families across the rural communities of the Sylhet division.\n\nAbout the Programme:\n- 200 scholarships awarded for the academic year 2026-2027\n- Open to students from primary through higher secondary level\n- Covers tuition fees, books, uniforms, and a monthly maintenance allowance\n- Priority given to girls, orphans, and children of families affected by flooding\n- Selection carried out through school recommendations and a verification committee\n\nApplication Process:\n- Applications submitted through the school head teacher or institution principal\n- Supporting documents include proof of family income and previous academic records\n- Final verification carried out by the association's education committee\n- Selected students are announced at a public ceremony in December 2026\n\nThe scholarship programme has been a cornerstone of the association's work since its founding, providing students with the support needed to continue their education rather than enter the workforce early. Last year, 120 students benefited from the scheme.\n\nDonations toward the scholarship fund can be made at the association office or through the published bank details. The association publishes a full list of beneficiaries after each cycle to maintain transparency.",
  },
  {
    id: "news-003",
    date: "June 10, 2026",
    title: "Free Medical Camp a Success",
    desc: "Over 1,500 patients received free medical checkups and medicines at the week-long health camp.",
    category: "Healthcare",
    author: "Health Committee",
    readTime: "3 min read",
    img: "https://images.pexels.com/photos/31019572/pexels-photo-31019572.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/31019572/pexels-photo-31019572.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/31047162/pexels-photo-31047162.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    content: "The week-long free medical camp organised by Oikkoparishad, in collaboration with Sylhet Medical College, concluded with more than 1,500 patients receiving free treatment and medicines.\n\nCamp Highlights:\n- Over 1,500 patients examined across seven days\n- 38 volunteer doctors, 22 medical students, and 45 support staff took part\n- Free medicines distributed to every patient who required them\n- 210 cases referred to specialised hospital treatment\n- Free eye screening and reading glasses provided to 180 patients\n\nServices Offered:\n- General physician consultations and health checkups\n- Blood pressure, blood sugar, and haemoglobin screening\n- Basic dental care and hygiene awareness sessions\n- Nutrition counselling for women and children\n- Free medicine distribution for seven days after consultation\n\nThe camp was held at the association's Jalalabad main branch premises and served residents from six nearby upazilas, many of whom travelled significant distances to attend. The organisation plans to repeat the camp during the first quarter of the next year.\n\nVolunteer doctors and medical students interested in joining future camps may register their interest at the association office.",
  },
  {
    id: "news-004",
    date: "May 25, 2026",
    title: "Winter Relief Distribution 2026",
    desc: "Warm clothes and blankets distributed to 800+ families in remote villages across Sylhet region.",
    category: "Relief",
    author: "Relief Committee",
    readTime: "3 min read",
    img: "https://images.pexels.com/photos/31090812/pexels-photo-31090812.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/31090812/pexels-photo-31090812.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/31047167/pexels-photo-31047167.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    content: "Oikkoparishad has completed its annual winter relief distribution, providing blankets and warm clothing to more than 800 families across remote villages in the Sylhet region.\n\nDistribution Details:\n- 2,150 blankets distributed across 12 villages\n- 1,800 sets of warm clothing for adults and children\n- 900 winter caps and scarves for elderly residents\n- Priority given to families headed by women, the elderly, and persons with disabilities\n\nRelief Packages Include:\n- Two blankets per family\n- Winter clothing sized for each family member\n- Dry food supplies for one month\n- Hygiene kits and essential medicines\n- Childrens' school bags and winter uniforms\n\nDistribution was carried out with the assistance of local branch volunteers and community leaders, ensuring that materials reached the most remote settlements. Volunteers travelled on foot and by local transport to reach villages without road access.\n\nThe association thanks its members, donors, and volunteers who contributed funds, materials, and time. A published list of contributing members and villages is available at the association office for transparency.",
  },
  {
    id: "news-005",
    date: "May 5, 2026",
    title: "Women Vocational Training Graduation",
    desc: "120 women completed vocational training in tailoring, computing, and small business management.",
    category: "Women Empowerment",
    author: "Skills Committee",
    readTime: "4 min read",
    img: "https://images.pexels.com/photos/31112215/pexels-photo-31112215.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/31112215/pexels-photo-31112215.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/32048352/pexels-photo-32048352.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    content: "A total of 120 women graduated from Oikkoparishad's six-month vocational training programme, completing courses in tailoring, basic computer literacy, and small business management.\n\nProgramme Details:\n- 120 women graduated from three parallel training tracks\n- 52 participants completed the tailoring and garment repair course\n- 40 participants completed basic computing and office applications\n- 28 participants completed small business management and bookkeeping\n- All graduates received a completion certificate and starter toolkit\n\nEach graduate received a starter kit tailored to her chosen field. Tailoring graduates received sewing machines and a supply of fabric and thread, computing graduates received laptops for continued practice, and business management graduates received working capital grants and accounting materials.\n\nBeyond Training:\n- A follow-up alumni group has been formed to continue peer support\n- Monthly follow-up sessions track business progress for twelve months\n- Graduates are connected with the association's microfinance programme\n- Priority for the next intake goes to widows, single mothers, and women with disabilities\n\nThe association's women empowerment committee will continue to mentor graduates through the coming year and publish a progress report at the end of the period.",
  },
  {
    id: "news-006",
    date: "April 18, 2026",
    title: "Clean Water Project Phase 3 Begins",
    desc: "15 new tube wells to be installed in water-scarce areas, benefiting over 3,000 residents.",
    category: "Water",
    author: "Infrastructure Committee",
    readTime: "3 min read",
    img: "https://images.pexels.com/photos/31321032/pexels-photo-31321032.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/31321032/pexels-photo-31321032.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/31047138/pexels-photo-31047138.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    content: "The third phase of the association's clean water initiative has begun, targeting fifteen water-scarce villages across the Chhatak and Derai areas.\n\nProject Scope:\n- 15 new deep tube wells to be installed across 9 villages\n- Over 3,000 residents expected to benefit directly\n- Water points to include hand pumps at community centres and dedicated women's facilities\n- Each site to include a raised platform, drainage, and a water availability signboard\n- Estimated completion of the first six sites by July 2026\n\nWhy This Phase Matters:\n- Average distance to nearest safe water source currently exceeds two kilometres\n- Women and girls account for the majority of time spent collecting water\n- Several target villages depend on contaminated shallow wells during the dry season\n- Two sites from the previous phase required unplanned repairs, prompting a design review\n\nThe association is coordinating with local authorities on land access and installation permissions. Water point management committees will be trained in each village, including basic maintenance, water quality testing, and fee collection for long-term sustainability.\n\nFunding for this phase is being supported by member contributions and external donors. A detailed project report with site locations and costs is available at the association office.",
  },
];

export function getNewsById(id: string) {
  return news.find((item) => item.id === id);
}
