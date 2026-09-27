export interface Opinion {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  votes: { yes: number; no: number };
}

export const opinions: Opinion[] = [
  {
    id: "opinion-001",
    title: "The Role of Community Organizations in Rural Development",
    author: "Dr. Ahmed Rahman",
    date: "15 Jul 2026",
    excerpt: "Community organizations play a vital role in bridging the gap between government services and rural communities.",
    content: "Community organizations play a vital role in bridging the gap between government services and rural communities. Oikkoparishad's initiatives in education, healthcare, and social welfare demonstrate the power of collective action.\n\nOver the past decade, we have witnessed how grassroots organizations can effectively address local challenges. Unlike government programs that often follow a one-size-fits-all approach, community organizations understand the unique needs of their localities.\n\nOur experience in Jalalabad and surrounding areas has shown that when communities come together, they can achieve remarkable results. From establishing small libraries to organizing health camps, every initiative strengthens the social fabric.\n\nEducation remains our top priority. We believe that providing quality education to underprivileged children is the single most effective investment for long-term development. Our scholarship program has enabled hundreds of students to complete their education.\n\nHealthcare access is another critical area where community organizations can make a significant difference. Through our regular medical camps, we have provided free checkups and medicines to thousands of people who would otherwise have no access to healthcare.\n\nLooking ahead, we plan to expand our programs and reach more communities. But we cannot do this alone. We need the continued support of our members, donors, and partners to sustain and grow our initiatives.",
    votes: { yes: 45, no: 12 },
  },
  {
    id: "opinion-002",
    title: "Education as a Tool for Social Change",
    author: "Ms. Fatima Begum",
    date: "10 Jul 2026",
    excerpt: "Investing in education is the most effective way to break the cycle of poverty.",
    content: "Investing in education is the most effective way to break the cycle of poverty. Our scholarship programs have helped hundreds of underprivileged students pursue their dreams and contribute to society.\n\nEducation is not just about acquiring knowledge; it is about empowering individuals to think critically, make informed decisions, and take control of their lives. When we educate a child, we transform a family. When we educate a girl, we transform a community.\n\nOikkoparishad's education programs focus on three key areas: access, quality, and retention. We work to ensure that every child has the opportunity to attend school, that the education they receive is of high quality, and that they complete their education.\n\nOur scholarship program provides financial support to meritorious students from poor families. We cover tuition fees, provide textbooks, and offer mentoring support. The results have been remarkable, with many of our scholars going on to pursue higher education and professional careers.\n\nWe also run supplementary tutoring programs for students who need extra help. These programs have significantly improved academic performance and reduced dropout rates.\n\nEducation is the most powerful weapon we can use to change the world. At Oikkoparishad, we are committed to ensuring that no child is left behind.",
    votes: { yes: 38, no: 5 },
  },
  {
    id: "opinion-003",
    title: "Healthcare Access in Remote Areas",
    author: "Mr. Kamal Hossain",
    date: "28 Jun 2026",
    excerpt: "Access to quality healthcare remains a challenge in remote areas of Bangladesh.",
    content: "Access to quality healthcare remains a challenge in remote areas of Bangladesh. Through our medical camps and health awareness programs, we are working to ensure no one is left behind.\n\nIn many rural areas of Bangladesh, healthcare facilities are scarce. People often have to travel long distances to see a doctor, and many cannot afford the cost of treatment. This is where community organizations can make a real difference.\n\nOikkoparishad organizes regular medical camps in remote villages, providing free checkups, medicines, and health education. Our camps cover general medicine, eye care, dental checkups, and basic diagnostic services.\n\nWe also run health awareness programs to educate communities about preventive healthcare, hygiene practices, and nutrition. These programs have helped reduce the incidence of preventable diseases in the areas we serve.\n\nOne of our most successful initiatives has been the distribution of hygiene kits and clean water solutions. Simple interventions like this can save lives and improve health outcomes significantly.\n\nMoving forward, we plan to establish permanent health centers in underserved areas and partner with hospitals to provide specialized care.",
    votes: { yes: 52, no: 8 },
  },
  {
    id: "opinion-004",
    title: "Women Empowerment and Economic Independence",
    author: "Ms. Shahana Begum",
    date: "15 Jun 2026",
    excerpt: "Empowering women through skill development creates a ripple effect that benefits entire communities.",
    content: "Empowering women through skill development and vocational training creates a ripple effect that benefits entire communities. Our programs have enabled many women to achieve economic independence.\n\nWhen women are empowered, entire communities thrive. Studies have shown that women reinvest up to 90% of their income back into their families, compared to 30-40% for men. This makes women's economic empowerment one of the most effective strategies for poverty reduction.\n\nOikkoparishad's women empowerment programs include vocational training in tailoring, handicrafts, computer skills, and small business management. We also provide microfinance support and market linkages to help women start their own enterprises.\n\nThe impact has been transformative. Women who were once dependent on others are now earning their own income, sending their children to school, and participating in community decision-making.\n\nWe also conduct awareness sessions on women's rights, health, and legal literacy. These sessions help women understand their rights and access the services they need.\n\nOur goal is to create an enabling environment where women can realize their full potential and contribute to the development of their communities.",
    votes: { yes: 67, no: 3 },
  },
  {
    id: "opinion-005",
    title: "Climate Change and Community Resilience",
    author: "Mr. Rahim Uddin",
    date: "01 Jun 2026",
    excerpt: "Building community resilience through sustainable practices is essential for protecting vulnerable populations.",
    content: "Bangladesh is on the frontlines of climate change. Building community resilience through sustainable practices and disaster preparedness is essential for protecting vulnerable populations.\n\nClimate change is not a distant threat for Bangladesh; it is a daily reality. Rising sea levels, increased flooding, and more frequent natural disasters are affecting millions of people, particularly in rural and coastal areas.\n\nAt Oikkoparishad, we have been working to help communities adapt to these challenges. Our climate resilience programs include tree plantation drives, promotion of sustainable agriculture practices, and disaster preparedness training.\n\nWe have planted thousands of trees across the region, which not only help mitigate climate change but also provide shade, fruit, and livelihood opportunities for local communities.\n\nOur disaster preparedness training has helped communities develop early warning systems, evacuation plans, and emergency response capabilities. When floods or cyclones strike, trained communities are better equipped to protect themselves and their assets.\n\nWe also promote climate-smart agriculture techniques that help farmers adapt to changing weather patterns. These include drought-resistant crops, improved water management, and organic farming practices.\n\nClimate change is a global challenge, but the solutions must be local. By building community resilience, we can help vulnerable populations withstand and recover from climate-related shocks.",
    votes: { yes: 33, no: 15 },
  },
];
