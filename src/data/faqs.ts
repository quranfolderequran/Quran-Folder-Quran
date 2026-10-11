export interface FaqItem {
  id: string;
  category: "trial" | "schedule" | "tutors" | "tuition" | "tech";
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  // Trial & Enrollment
  {
    id: "trial-1",
    category: "trial",
    question: "How does the 3-Day Free Trial work?",
    answer: "Our 3-Day Free Trial allows you or your child to experience 3 live 1-on-1 private lessons with a certified Hafiz tutor completely free of charge. There is zero financial commitment, and no credit card is required. You can test our interactive classroom, evaluate the tutor's teaching style, and discuss a personalized learning schedule before deciding to enroll."
  },
  {
    id: "trial-2",
    category: "trial",
    question: "Do I need to submit credit card details for the free trial?",
    answer: "No. We never ask for credit card or payment information to start your free trial. You simply choose your preferred timing, provide your contact details, and begin."
  },
  {
    id: "trial-3",
    category: "trial",
    question: "How quickly can we begin our first free trial session?",
    answer: "In most cases, we can match you with an instructor and begin within 24 to 48 hours of booking. If you message our 24/7 WhatsApp concierge directly, we can frequently arrange your first evaluation session on the very same day."
  },

  // Schedules & Timezones
  {
    id: "sched-1",
    category: "schedule",
    question: "How do class timings work for USA, UK, Canada, and European timezones?",
    answer: "Our academy operates 24 hours a day, 7 days a week with international instructors distributed globally. Whether you need morning sessions before school in the UK, afternoon sessions after work in the USA/Canada, or weekend mornings in Australia, we customize class times to match your exact family routine."
  },
  {
    id: "sched-2",
    category: "schedule",
    question: "Can we reschedule or make up a missed class?",
    answer: "Yes! We understand that family emergencies, exams, and illnesses occur. If you notify your tutor or student coordinator at least 2 to 4 hours prior to class, your lesson will be rescheduled at a mutually convenient time at no extra charge."
  },
  {
    id: "sched-3",
    category: "schedule",
    question: "Can I adjust class frequency (e.g. from 3 days to 4 days per week)?",
    answer: "Yes, you can easily upgrade or adjust your schedule at the start of any new monthly billing cycle, or coordinate directly with our team on WhatsApp."
  },

  // Tutors & Languages
  {
    id: "tutor-1",
    category: "tutors",
    question: "What languages do your instructors speak?",
    answer: "Our instructors are multilingual scholars fluent in English, Urdu, Pashto (پښتو), and Arabic (العربية). This is especially valuable for diaspora families living in Western countries (UK, USA, Canada, Europe) where children prefer learning in English, parents communicate in Urdu or Pashto, and correct Arabic pronunciation is required."
  },
  {
    id: "tutor-2",
    category: "tutors",
    question: "Do you have certified female Quran tutors for sisters and young girls?",
    answer: "Yes, absolutely. We have dedicated, certified female Huffaz and Islamic scholars who teach adult sisters, teenage girls, and young children in a comfortable, private, and respectful online setting."
  },
  {
    id: "tutor-3",
    category: "tutors",
    question: "Are your instructors verified with authentic certifications (Ijazah / Sanad)?",
    answer: "Yes. All our instructors undergo rigorous background checks and Quranic recitation auditions. Founder Hafiz M. Ali possesses over 12 years of verified teaching legacy, and our tutors hold formal Ijazah chains in Hafs 'an Asim and other classical Qira'at."
  },

  // Tuition & Payments
  {
    id: "fee-1",
    category: "tuition",
    question: "How does the 30% Sibling Discount work?",
    answer: "When 3 or more siblings from the same household enroll, our academy automatically grants a 30% monthly tuition discount across the family enrollment. You can calculate your exact family savings live on our Fee page calculator."
  },
  {
    id: "fee-2",
    category: "tuition",
    question: "What payment methods are supported?",
    answer: "We support secure international payments through Payoneer, Western Union, Direct Bank Transfers (wire and local IBAN accounts), and Remitly."
  },
  {
    id: "fee-3",
    category: "tuition",
    question: "Is there a long-term contract or cancellation fee?",
    answer: "No contracts whatsoever. Tuition is paid on a month-to-month basis. You can pause or cancel your subscription at any time without any hidden fees or cancellation penalties."
  },
  {
    id: "fee-4",
    category: "tuition",
    question: "What is your satisfaction guarantee policy?",
    answer: "Your satisfaction and spiritual growth are our primary focus. If at any time you feel your assigned instructor is not the right fit for your child's personality or learning pace, we will immediately reassign you to a different tutor for free, or refund your unused lessons."
  },

  // Technical Setup
  {
    id: "tech-1",
    category: "tech",
    question: "What teaching platforms and devices are supported?",
    answer: "Classes are conducted live 1-on-1 through Zoom, Microsoft Teams, or WhatsApp (Video/Audio). We accommodate whichever platform is most convenient for you and your family. All you need is a computer, laptop, tablet, or smartphone with a reliable internet connection."
  },
  {
    id: "tech-2",
    category: "tech",
    question: "Do I need to purchase physical Quran or Noorani Qaida books?",
    answer: "No! We provide high-resolution digital copies of Noorani Qaida, Tajweed rule guides, and Quranic texts that your teacher shares directly onto your screen during the session. You can also download them for offline practice."
  }
];
