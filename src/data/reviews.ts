export interface Review {
  id: string;
  name: string;
  location: string;
  role: string;
  course: string;
  category: "all" | "kids" | "tajweed" | "hifz" | "adults";
  rating: number;
  date: string;
  highlight: string;
  quote: string;
  avatarInitials: string;
  verified: boolean;
}

export const reviewsData: Review[] = [
  {
    id: "review-1",
    name: "Brother Farhan & Sister Amina",
    location: "London, United Kingdom",
    role: "Parents of 7yo & 9yo",
    course: "Online Quran Classes for Kids",
    category: "kids",
    rating: 5,
    date: "3 days ago",
    highlight: "Flawless English & Motivating Atmosphere",
    quote:
      "Finding an academy where the teacher speaks native, flawless English to our 7-year-old son while reciting with authentic Tajweed was an immense blessing. Our son used to struggle with online classes, but here he actually waits by the laptop 10 minutes early every evening!",
    avatarInitials: "FA",
    verified: true,
  },
  {
    id: "review-2",
    name: "Dr. Tariq Mahmood",
    location: "Dallas, Texas, USA",
    role: "Adult Learner & Father",
    course: "Recitation with Tajweed",
    category: "tajweed",
    rating: 5,
    date: "1 week ago",
    highlight: "Unmatched Patience & Polyglot Ease",
    quote:
      "The fact that Hafiz M. Ali communicates effortlessly in Pashto and Urdu with my elderly parents and in clear English with me made Islamic Session feel like family. His precision in correcting Makharij without ever making you feel embarrassed is unmatched.",
    avatarInitials: "TM",
    verified: true,
  },
  {
    id: "review-3",
    name: "Sister Maryam K.",
    location: "Toronto, Canada",
    role: "Mother of Hifz Student",
    course: "Quran Memorization (Hifz)",
    category: "hifz",
    rating: 5,
    date: "2 weeks ago",
    highlight: "Sanad-Certified Female Scholar",
    quote:
      "I requested a dedicated female tutor for my 11-year-old daughter and myself. The female scholar assigned to us is an authorized Hafizah with gentle manners, profound patience, and structured weekly revision targets. Alhamdulillah, my daughter just completed Juz 30!",
    avatarInitials: "MK",
    verified: true,
  },
  {
    id: "review-4",
    name: "Brother Bilal & Sarah Ahmed",
    location: "Birmingham, United Kingdom",
    role: "Parents of 3 Enrolled Children",
    course: "Learn Quran Reading Basics",
    category: "kids",
    rating: 5,
    date: "3 weeks ago",
    highlight: "Transparent Pricing & Sibling Savings",
    quote:
      "Enrolling all three of our children was surprisingly stress-free. The 30% sibling discount automatically applied, and our 5-year-old transitioned from Arabic letters to full words in just 8 weeks. The interactive screen whiteboard keeps them completely engaged.",
    avatarInitials: "BA",
    verified: true,
  },
  {
    id: "review-5",
    name: "Sister Aisha Al-Mansoor",
    location: "Dubai, United Arab Emirates",
    role: "Working Professional",
    course: "Quranic Arabic & Grammar",
    category: "adults",
    rating: 5,
    date: "1 month ago",
    highlight: "Profound Quranic Comprehension",
    quote:
      "As a working professional, I needed flexible weekend timings. My instructor's breakdown of Quranic Arabic root words transformed my Salah. I now understand the Ayaat being recited during Taraweeh rather than merely listening passively. An intellectual and spiritual upgrade.",
    avatarInitials: "AM",
    verified: true,
  },
  {
    id: "review-6",
    name: "Ustadh Omar Farooq",
    location: "Manchester, United Kingdom",
    role: "Adult Qirat Student",
    course: "Ten Qira'at Mastery",
    category: "tajweed",
    rating: 5,
    date: "1 month ago",
    highlight: "Scholarly Rigor & Classical Sanad",
    quote:
      "Finding an instructor in the West capable of teaching the differences between Hafs 'an Asim and Warsh 'an Nafi' with verified Isnad is extremely rare. Islamic Session provides genuine classical pedagogy that honors traditional Andalusian scholarship.",
    avatarInitials: "OF",
    verified: true,
  },
  {
    id: "review-7",
    name: "Sister Zainab & Faisal Rehman",
    location: "Chicago, Illinois, USA",
    role: "Parents of 8yo & 12yo",
    course: "Islamic Studies & Character",
    category: "kids",
    rating: 5,
    date: "1 month ago",
    highlight: "Real Prophetic Character & Values",
    quote:
      "Living in the US, instilling Islamic values alongside Quran recitation was our top priority. The Islamic Studies syllabus covers daily Adhkar, stories of the Sahaba, and prophetic etiquette in a way that our children eagerly apply at school and at home.",
    avatarInitials: "ZR",
    verified: true,
  },
  {
    id: "review-8",
    name: "Brother Haroon Rasheed",
    location: "Melbourne, Australia",
    role: "Adult Re-learner",
    course: "Recitation with Tajweed",
    category: "tajweed",
    rating: 5,
    date: "2 months ago",
    highlight: "Accommodating Australian Timezone",
    quote:
      "Living in Australia, finding reliable live tutors who match AEST evening hours was always a struggle. Islamic Session provided a dedicated tutor who is punctual to the second every Monday and Wednesday. My pronunciation of heavy and light letters improved dramatically.",
    avatarInitials: "HR",
    verified: true,
  },
  {
    id: "review-9",
    name: "Dr. Zeeshan & Dr. Nida Malik",
    location: "Calgary, Canada",
    role: "Parents of 10yo Son",
    course: "Quran Memorization (Hifz)",
    category: "hifz",
    rating: 5,
    date: "2 months ago",
    highlight: "Retention-First Memorization Method",
    quote:
      "Unlike other academies that rush children through memorization, Islamic Session emphasizes Sabaq, Sabqi, and Manzil retention. Our son remembers every Surah he memorized 6 months ago with effortless fluency. The weekly audio feedback on WhatsApp is invaluable.",
    avatarInitials: "ZM",
    verified: true,
  },
  {
    id: "review-10",
    name: "Sister Khadija Begum",
    location: "Leeds, United Kingdom",
    role: "Adult Student (Age 54)",
    course: "Tafsir Al-Quran",
    category: "adults",
    rating: 5,
    date: "2 months ago",
    highlight: "Never Too Late to Connect with Quran",
    quote:
      "I started learning in my fifties with hesitation, fearing I might be too slow. My female teacher was the embodiment of grace and encouragement. She explained the Asbab al-Nuzul (reasons of revelation) with such depth that tears filled my eyes. May Allah bless this academy.",
    avatarInitials: "KB",
    verified: true,
  },
];
