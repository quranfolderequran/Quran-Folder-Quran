export interface CourseModule {
  moduleNumber: number;
  title: string;
  topics: string[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  arabicTitle: string;
  subtitle: string;
  category: "youth" | "tajweed" | "hifz" | "arabic";
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  level: string;
  targetAudience: string;
  prerequisites: string;
  features: string[];
  modules: CourseModule[];
  learningOutcomes: string[];
  faqs: CourseFaq[];
  recommendedFor: string;
  pricingNotice?: string;
}

export const coursesData: Course[] = [
  {
    id: "basics",
    slug: "learn-quran-reading-basics",
    title: "Learn Quran Reading Basics",
    arabicTitle: "تَعَلُّمُ قِرَاءَةِ الْقُرْآنِ لِلْمُبْتَدِئِينَ",
    subtitle: "Master Noorani Qaida & Sacred Phonetics from the Ground Up",
    category: "youth",
    categoryLabel: "Foundation & Beginners",
    description: "Master Noorani Qaida, Arabic letter recognition, vowel symbols, and accurate pronunciation from the ground up with patient one-on-one guidance.",
    longDescription: "Our Quran Reading Basics course is specifically engineered for complete beginners, children, and adult revert Muslims who are taking their first steps in reading the Holy Quran. Built around the world-renowned Noorani Qaida curriculum, this foundational track teaches letter recognition, connecting forms, vowels (Harakat), Tanween, Sukoon, and basic Tajweed rules. In live 1-on-1 sessions, your certified Hafiz tutor corrects your mouth positioning, tongue placement, and pronunciation patiently until you can fluently read verses from the Mushaf.",
    image: "/images/course-reading-basics.webp",
    duration: "Flexible / 30 mins",
    level: "Complete Beginner",
    targetAudience: "Children (ages 4+), teens, and adults with zero prior Arabic background.",
    prerequisites: "None. No previous knowledge of Arabic is required.",
    features: [
      "28 Arabic Alphabets with accurate anatomical Makharij",
      "Full Noorani Qaida progressive curriculum",
      "Letter joining & word synthesis exercises",
      "Vowel markers: Fatha, Kasra, Damma, and Tanween",
      "Sukoon, Jazm, Shaddah, and silent letters",
      "Gentle one-on-one pace adapted to student speed"
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Arabic Alphabets & Articulation Points",
        topics: [
          "Single letters (Mufradat) recognition and pure sounds",
          "Distinguishing similar sounding letters (ح vs ه, ع vs ء, ق vs ك)",
          "Anatomical mouth and throat positioning basics"
        ]
      },
      {
        moduleNumber: 2,
        title: "Compound Letters & Joint Forms",
        topics: [
          "Recognizing letters in initial, medial, and terminal positions",
          "Connecting rules and cursive letter recognition",
          "Reading two and three-letter composite words"
        ]
      },
      {
        moduleNumber: 3,
        title: "Vowel Movements (Harakat & Tanween)",
        topics: [
          "Short vowels: Zabar (Fatha), Zair (Kasra), Pesh (Damma)",
          "Double vowels (Tanween): Two fathas, two kasras, two dammas",
          "Eliminating vowel dragging mistakes"
        ]
      },
      {
        moduleNumber: 4,
        title: "Sukoon, Shaddah, and Word Fluency",
        topics: [
          "Understanding Sukoon (Jazm) and stopping on letters",
          "Tashdeed (Shaddah) doubled letter pronunciation",
          "Letters of Madd (stretching) and basic pause rules (Waqf)",
          "Reading full Ayat directly from Surah Al-Fatiha and Juz Amma"
        ]
      }
    ],
    learningOutcomes: [
      "Accurately pronounce all 28 Arabic letters from their authentic Makharij.",
      "Read any Arabic word fluently with full Harakat without hesitations.",
      "Understand the mechanics of joining letters and vowel combinations.",
      "Transition smoothly from Noorani Qaida to reciting the Holy Quran directly."
    ],
    faqs: [
      {
        question: "How long does it take for a child to complete Noorani Qaida?",
        answer: "On average, with 3 to 4 lessons per week, a student completes the Qaida within 3 to 5 months depending on individual pace and practice."
      },
      {
        question: "Can an adult beginner join this course without feeling embarrassed?",
        answer: "Absolutely. All lessons are strictly private 1-on-1 with mature, respectful instructors who teach with utmost patience and dignity."
      },
      {
        question: "Are female teachers available for young children?",
        answer: "Yes, we have certified female Huffaz and scholars specifically available for young children and female students."
      }
    ],
    recommendedFor: "Beginners of all ages starting their Quran reading journey."
  },
  {
    id: "kids",
    slug: "online-quran-classes-for-kids",
    title: "Online Quran Classes for Kids",
    arabicTitle: "دَوْرَةُ تَعْلِيمِ الْقُرْآنِ لِلْأَطْفَالِ",
    subtitle: "Interactive, Joyful, and Engaging Islamic Quran Education",
    category: "youth",
    categoryLabel: "Children & Youth",
    description: "Interactive, engaging lessons nurturing a lifetime love of the Holy Quran with Islamic manners, basic Duas, and interactive motivation.",
    longDescription: "Children learn best when lessons are joyful, encouraging, and free of pressure. Our Online Quran Classes for Kids program combines pedagogical warmth with proven Quranic teaching methods. Instructors are specially trained in child psychology and interactive engagement, incorporating visual aids, digital whiteboards, reward stars, and short Surah breakdowns. Beyond recitation, children absorb Islamic etiquettes (Akhlaq), prophetic manners, daily Sunnah Duas, and stories of the Prophets.",
    image: "/images/course-kids-quran.webp",
    duration: "30 mins / session",
    level: "Kids (Ages 4-15)",
    targetAudience: "Children aged 4 to 15, from beginners to intermediate learners.",
    prerequisites: "None. Suitable for children starting from zero or revising.",
    features: [
      "Patient, child-certified tutors fluent in English, Urdu, Pashto, & Arabic",
      "Interactive digital whiteboards and illustrated Quran exercises",
      "Daily Islamic manners, basic Kalimas, and essential Duas",
      "Monthly parent evaluation report & video review checkpoints",
      "Warm encouragement with positive reinforcement and badges",
      "Safe, secure, supervised virtual classroom environment"
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Playful Phonics & Letter Familiarity",
        topics: [
          "Visual letter stories and memory associations",
          "Pronunciation games and sound differentiation",
          "Tracing and identifying letters on digital screen"
        ]
      },
      {
        moduleNumber: 2,
        title: "Short Surah Memorization (Juz Amma)",
        topics: [
          "Surah Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas, and Al-Kawthar",
          "Word-by-word listen and repeat methodology",
          "Simple child-friendly meaning and background stories"
        ]
      },
      {
        moduleNumber: 3,
        title: "Essential Duas, Kalimas & Practical Salah",
        topics: [
          "Six Kalimas with English translation",
          "Duas before sleeping, waking up, eating, and entering the home",
          "Step-by-step Wudu and Salah demonstration"
        ]
      },
      {
        moduleNumber: 4,
        title: "Islamic Character & Prophetic Stories",
        topics: [
          "Truthfulness, kindness to parents, and honesty",
          "Stories of Prophet Adam, Nuh, Ibrahim, and Muhammad ﷺ",
          "Loving Allah SWT and showing mercy to creation"
        ]
      }
    ],
    learningOutcomes: [
      "Develop a deep, heartfelt love for reciting and holding the Holy Quran.",
      "Recite and memorize the last 10-20 Surahs of Juz Amma with correct pronunciation.",
      "Perform Wudu and pray Salah correctly according to the Sunnah.",
      "Implement daily prophetic etiquettes and manners in family life."
    ],
    faqs: [
      {
        question: "Can parents observe the live classes?",
        answer: "Yes, parents are encouraged to sit nearby, especially during initial sessions, to observe the tutor's methodology and track progress."
      },
      {
        question: "What if my child has a short attention span?",
        answer: "Our 30-minute sessions are specifically optimized for kids' attention spans, blending recitation, stories, and interactive checks."
      },
      {
        question: "Can sisters request female teachers for their children?",
        answer: "Yes, we have many experienced female Quran tutors available across all timezones."
      }
    ],
    recommendedFor: "Parents looking for an inspiring, gentle Quran tutor for their children."
  },
  {
    id: "tajweed",
    slug: "recitation-with-tajweed",
    title: "Recitation with Tajweed Mastery",
    arabicTitle: "إِتْقَانُ التِّلَاوَةِ وَأَحْكَامِ التَّجْوِيدِ",
    subtitle: "Sacred Articulation, Deep Makharij, and Melodic Tarteel",
    category: "tajweed",
    categoryLabel: "Tajweed & Qirat",
    description: "Master anatomical articulation points (Makharij), Sifaat, Noon Saakin, Meem Saakin, Madd, and the rhythmic beauty of Prophetic Tarteel.",
    longDescription: "The Holy Quran was revealed with Tajweed, and reciting it accurately is a sacred duty. This course transitions students from mechanical reading to beautiful, precise, and melodious recitation according to the classical rules documented by Imam Ibn al-Jazari. Under the direct guidance of certified Qaris, you will master the 17 articulation points, letter characteristics (Sifaat with and without opposites), rules of Idgham, Ikhfa, Iqlab, Izhar, types of Madd, and rules of stopping (Waqf wal-Ibtida).",
    image: "/images/course-tajweed-mastery.webp",
    duration: "30 mins / session",
    level: "Intermediate to Advanced",
    targetAudience: "Youth and adults who can read Arabic letters but want correct Tajweed.",
    prerequisites: "Basic ability to read Arabic letters or completion of Noorani Qaida.",
    features: [
      "In-depth anatomical training on the 17 Makharij al-Huroof",
      "Sifaat al-Huroof (whisper, strength, elevation, softness, echo)",
      "Ahkam Noon Saakin & Tanween (Izhar, Idgham, Iqlab, Ikhfa)",
      "Ahkam Meem Saakin & Ghunnah rules",
      "Rules of heavy & light letters (Tafkheem & Tarqeeq)",
      "Types of elongation (Madd Asli and Madd Far'i)",
      "Systematic elimination of subtle recitation mistakes (Lahn Khafi)"
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Anatomical Makharij & Sifaat Foundation",
        topics: [
          "The 5 main areas: Throat, Tongue, Lips, Nasal cavity, and Oral cavity",
          "Heavy letters (Khuso Daghtin Qiz) and lip-rounding corrections",
          "Qalqalah mechanisms and echo degrees (Sughra, Kubra, Akbar)"
        ]
      },
      {
        moduleNumber: 2,
        title: "Rules of Noon Saakin, Meem Saakin & Tanween",
        topics: [
          "Izhar Halqi (Clear pronunciation with throat letters)",
          "Idgham with Ghunnah (Ya, Noon, Meem, Waw) and without Ghunnah (Lam, Ra)",
          "Iqlab (Transforming Noon into Meem)",
          "Ikhfa Haqiqi (Hiding with nasalization across 15 letters)",
          "Meem Saakin rules: Ikhfa Shafawi, Idgham Shafawi, Izhar Shafawi"
        ]
      },
      {
        moduleNumber: 3,
        title: "Rules of Madd (Elongation) & Stopping",
        topics: [
          "Madd Tabee'i (2 counts) and its derivatives",
          "Madd Wajib Muttasil and Ja'iz Munfasil (4-5 counts)",
          "Madd Lazim (6 counts) in words and opening Surah letters",
          "Waqf (stopping symbols): Meem, Jim, Qaf-Lam, Sad-Lam"
        ]
      },
      {
        moduleNumber: 4,
        title: "Practical Tarteel & Continuous Recitation",
        topics: [
          "Reciting complete Juz with real-time audio corrections",
          "Developing breath control, vocal melody, and reverent pacing",
          "Preparation for classical Ijazah evaluation"
        ]
      }
    ],
    learningOutcomes: [
      "Recite the Holy Quran fluently in strict compliance with classical Tajweed.",
      "Identify and execute all rules of Noon Saakin, Meem Saakin, and Madd effortlessly.",
      "Eliminate both major grammatical mistakes (Lahn Jali) and hidden phonetic flaws (Lahn Khafi).",
      "Recite with melodious Tarteel that moves the heart and honors the Divine words."
    ],
    faqs: [
      {
        question: "Can I take this course if my recitation is full of mistakes?",
        answer: "Yes, identifying and eliminating mistakes is precisely what this course is designed for. Our tutors correct you gently and systematically."
      },
      {
        question: "Is theoretical Tajweed taught alongside practical reading?",
        answer: "Yes, we teach both the practical application in recitation and the theoretical rule names so you understand the science."
      },
      {
        question: "Do students receive a Tajweed completion certificate?",
        answer: "Yes, students who pass the final Juz recitation evaluation receive an official Islamic Session certificate."
      }
    ],
    recommendedFor: "Anyone seeking to recite the Holy Quran with phonetic perfection."
  },
  {
    id: "memorization",
    slug: "quran-memorization-hifz",
    title: "Quran Memorization (Hifz)",
    arabicTitle: "بَرْنَامَجُ حِفْظِ الْقُرْآنِ الْكَرِيمِ",
    subtitle: "Structured Sabaq, Sabqi & Manzil Memorization with Certified Huffaz",
    category: "hifz",
    categoryLabel: "Hifz & Tafsir",
    description: "Daily listening and structured revision strategy (Sabaq, Sabqi, Manzil) with certified Huffaz tutors for permanent Quranic retention.",
    longDescription: "Memorizing the Holy Quran is one of the highest honors in Islam. However, memorization without systematic daily revision leads to rapid forgetting. Our Hifz Program employs the classical centuries-old 3-tier methodology: Sabaq (new daily memorization), Sabqi (recent 5-10 pages revision), and Manzil (continuous rolling revision of previously memorized Juz). With 1-on-1 private attention every day, your certified Hafiz instructor listens meticulously to your recitation, fixes memory lapses, and ensures rock-solid retention.",
    image: "/images/course-hifz-memorization.webp",
    duration: "Daily / 30 mins",
    level: "All Levels (Partial or Full Hifz)",
    targetAudience: "Committed students, children, youth, and adults dedicated to memorizing the Quran.",
    prerequisites: "Fluent Quran reading with correct Tajweed rules.",
    features: [
      "Personalized daily Hifz pace (from 1/2 page to 2 pages daily)",
      "Strict enforcement of the classical Sabaq, Sabqi, and Manzil cycle",
      "Daily 1-on-1 listening with authorized Hafiz-e-Quran mentors",
      "Techniques for photographic visual memory and verse connections (Mutashabihat)",
      "Regular milestone evaluations after every completed Juz",
      "Ijazah certification track with authentic Sanad (recitation chains)"
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Foundation & Juz Amma Mastery",
        topics: [
          "Diagnostic assessment of recitation and memory retention speed",
          "Memorizing Juz 30 (Surah An-Naba to An-Nas) with Tajweed precision",
          "Establishing daily revision discipline and memory techniques"
        ]
      },
      {
        moduleNumber: 2,
        title: "Selected Surahs & Juz Tabarak",
        topics: [
          "Memorizing Juz 29 (Surah Al-Mulk to Al-Mursalat)",
          "Memorizing virtuous Surahs: Al-Baqarah, Yasin, Al-Kahf, Ar-Rahman, Al-Waqi'ah",
          "Navigating Mutashabihat (similar verses) without confusion"
        ]
      },
      {
        moduleNumber: 3,
        title: "Progressive Full Quran Hifz Track",
        topics: [
          "Systematic progression through the 30 Juz",
          "Daily 3-part routine: New Sabaq, recent Sabqi, and rolling Manzil",
          "Quarterly mock examinations and parent progress updates"
        ]
      },
      {
        moduleNumber: 4,
        title: "Dhor (Final Consolidation) & Sanad Preparation",
        topics: [
          "Reciting complete Juz in one sitting to tutor without looking",
          "Full Quran review cycle (5 Juz weekly retention)",
          "Graduation examination and Sanad / Ijazah granting"
        ]
      }
    ],
    learningOutcomes: [
      "Memorize desired Surahs, specific Juz, or the entire 30 Juz permanently.",
      "Retain memorized portions securely using the automated Manzil routine.",
      "Recite memorized verses fluently in Taraweeh and daily prayers without hesitation.",
      "Earn the honor of being a Hafiz-e-Quran carrying the Divine Book in one's heart."
    ],
    faqs: [
      {
        question: "Can an adult with a busy job memorize the Quran online?",
        answer: "Yes, many adults memorize 1/4 or 1/2 page daily on flexible morning or evening schedules. Consistency matters far more than speed."
      },
      {
        question: "How do you ensure the student doesn't forget past Juz?",
        answer: "Through our compulsory Manzil routine. A student cannot give new Sabaq unless they first recite their past revision to the tutor."
      },
      {
        question: "Are female Huffaz tutors available for girls and adult sisters?",
        answer: "Yes, we have certified female Hafizat tutors who teach female students privately."
      }
    ],
    recommendedFor: "Dedicated students seeking full or partial Quran memorization."
  },
  {
    id: "tafseer",
    slug: "learn-tafsir-al-quran",
    title: "Learn Tafsir Al Quran",
    arabicTitle: "تَفْسِيرُ وَفَهْمُ آيَاتِ الْقُرْآنِ الْكَرِيمِ",
    subtitle: "Divine Meanings, Historical Contexts & Practical Life Wisdom",
    category: "hifz",
    categoryLabel: "Hifz & Tafsir",
    description: "Understand divine verse meanings, contexts of revelation (Asbab al-Nuzul), theological wisdom, and real-life contemporary lessons.",
    longDescription: "Reciting the Quran brings immense reward, but understanding its profound message transforms the heart and soul. The Learn Tafsir Al Quran course takes students on an intellectual and spiritual journey through the verses of Allah SWT. Guided by certified Islamic scholars, you will explore verse-by-verse meanings, Arabic linguistic nuances, reasons for revelation (Asbab al-Nuzul), and classical commentaries from Ibn Kathir, Al-Tabari, Al-Qurtubi, and As-Sa'di, translating timeless divine guidance into your modern daily life.",
    image: "/images/course-tafsir-quran.webp",
    duration: "30 mins / session",
    level: "Intermediate & Above",
    targetAudience: "Youth, adults, and families wishing to understand the message of the Quran.",
    prerequisites: "Basic Quran reading fluency is helpful but not mandatory.",
    features: [
      "Word-by-word literal translation & semantic commentary",
      "Historical contexts and causes of revelation (Asbab al-Nuzul)",
      "Linguistic and theological gems revealed in the Arabic text",
      "Classical insights from Tafsir Ibn Kathir, Jalalayn, and As-Sa'di",
      "Practical contemporary reflections for modern family life",
      "Interactive Q&A discussion with knowledgeable scholar mentors"
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Tafsir Principles & Surah Al-Fatiha",
        topics: [
          "Introduction to Ilm al-Tafsir and classical commentary traditions",
          "Deep dive into the mother of the Quran (Surah Al-Fatiha)",
          "Names and Attributes of Allah SWT manifested in the opening verses"
        ]
      },
      {
        moduleNumber: 2,
        title: "Tafsir of Juz Amma (Short Surahs)",
        topics: [
          "Cosmic imagery and reflections on the Day of Judgment (Surah An-Naba to Al-Infitar)",
          "Moral accountability and social justice in the Meccan Surahs",
          "Spiritual shield Surahs: Al-Ikhlas, Al-Falaq, An-Nas contextual analysis"
        ]
      },
      {
        moduleNumber: 3,
        title: "Profound Quranic Narratives (Stories of Prophets)",
        topics: [
          "Prophet Yusuf (Surah Yusuf) — Lessons on patience, betrayal, and honor",
          "Prophet Musa and Al-Khidr (Surah Al-Kahf) — Wisdom beyond appearances",
          "Prophet Ibrahim and Maryam (pbuh) — Devotion and trust in Allah"
        ]
      },
      {
        moduleNumber: 4,
        title: "Social Laws, Ethics & Prophetic Guidance",
        topics: [
          "Family ethics and mutual respect in Surah An-Nur and Al-Hujurat",
          "Financial ethics, charity, and avoidance of Riba",
          "Living with purposeful faith in a modern secular society"
        ]
      }
    ],
    learningOutcomes: [
      "Recite and listen to the Holy Quran with direct emotional and intellectual comprehension.",
      "Understand why specific verses were revealed and how they applied to the Prophet's ﷺ life.",
      "Extract timeless Islamic solutions for contemporary social, emotional, and ethical challenges.",
      "Cultivate deep Khushoo' (reverence) and presence in daily prayers."
    ],
    faqs: [
      {
        question: "Is this course taught in English or Urdu?",
        answer: "The course can be taught in English, Urdu, Pashto, or Arabic depending entirely on the student's preference."
      },
      {
        question: "Do I need to understand Arabic grammar first?",
        answer: "No, the scholar explains the Arabic terms simply in your spoken language with word-by-word breakdowns."
      },
      {
        question: "Are lessons interactive or just lectures?",
        answer: "Every 1-on-1 session is an active discussion where you can ask questions, discuss reflections, and clarify doubts."
      }
    ],
    recommendedFor: "Seekers wanting to understand the deep spiritual wisdom of the Quran."
  },
  {
    id: "islam",
    slug: "learn-islam-online",
    title: "Learn Islam Online",
    arabicTitle: "دِرَاسَاتٌ إِسْلَامِيَّةٌ شَامِلَةٌ",
    subtitle: "Five Pillars, Prophetic Seerah, Essential Fiqh & Daily Islamic Adab",
    category: "arabic",
    categoryLabel: "Arabic & Islamic Adab",
    description: "Study the Five Pillars of Islam, essential Duas, Hadith, prophetic Seerah, practical Fiqh, and daily Sunnah manners.",
    longDescription: "Islam is a complete way of life combining sound creed (Aqeedah), sincere worship (Ibadah), noble character (Akhlaq), and social manners (Mu'amalat). Our Learn Islam Online course provides an accessible, balanced, and authentic foundation for children growing up in the diaspora, teenagers, and adult reverts. Students learn how to pray Salah properly, understand the Sunnah of Prophet Muhammad ﷺ, master essential daily supplications, and develop an unshakeable Islamic identity rooted in love for Allah and His Messenger ﷺ.",
    image: "/images/course-islamic-studies.webp",
    duration: "Flexible / 30 mins",
    level: "All Ages & Backgrounds",
    targetAudience: "Children, teenagers, new Muslims, and anyone seeking solid Islamic knowledge.",
    prerequisites: "None. Open to everyone with sincere interest.",
    features: [
      "In-depth study of the Five Pillars of Islam & Six Articles of Faith",
      "Step-by-step practical Fiqh of Taharah, Wudu, Ghusl, and Salah",
      "Prophetic Seerah & heroic biographies of the noble Companions",
      "Study of 40 essential Hadith on character and honesty",
      "Memorization and practical use of 30+ daily Sunnah Duas",
      "Addressing modern doubts and youth questions with clarity"
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Pillars of Faith & Sound Aqeedah",
        topics: [
          "Tawheed: Oneness of Allah SWT and His beautiful Names",
          "Belief in Angels, Divine Books, Messengers, the Last Day, and Qadr",
          "Cultivating sincere love and reverence for Allah SWT"
        ]
      },
      {
        moduleNumber: 2,
        title: "Practical Fiqh of Daily Worship",
        topics: [
          "Purification: Wudu, Tayammum, Ghusl conditions and invalidators",
          "Salah: Detailed step-by-step recitation, postures, and Khushoo'",
          "Fasting in Ramadan, Zakat calculation basics, and Hajj overview"
        ]
      },
      {
        moduleNumber: 3,
        title: "Seerah of Prophet Muhammad ﷺ",
        topics: [
          "Life in Mecca: Youth, revelation in Cave Hira, and early persecution",
          "The Hijrah to Medina, building the first Muslim community",
          "The Conquest of Mecca: Mercy, forgiveness, and the Farewell Pilgrimage"
        ]
      },
      {
        moduleNumber: 4,
        title: "Islamic Manners, Akhlaq & Family Life",
        topics: [
          "Kindness to parents and family ties (Silat ar-Rahim)",
          "Islamic dietary laws (Halal vs Haram food and drink)",
          "Honesty in speech, avoiding backbiting, and digital manners"
        ]
      }
    ],
    learningOutcomes: [
      "Perform daily Wudu and 5 daily prayers with complete confidence and understanding.",
      "Articulate Islamic beliefs clearly and defend them with wisdom.",
      "Emulate the compassionate character of the Prophet Muhammad ﷺ.",
      "Apply Islamic ethics in everyday school, work, and family interactions."
    ],
    faqs: [
      {
        question: "Is this course appropriate for teenagers facing doubts in Western schools?",
        answer: "Yes, our instructors are experienced in youth counseling and answer modern questions patiently without judgment."
      },
      {
        question: "Can families enroll multiple children in this course together?",
        answer: "Yes, family group sessions can be arranged or each child can have individual 1-on-1 tutoring."
      },
      {
        question: "Is this suitable for someone who just converted to Islam?",
        answer: "It is ideal for new Muslims. We start from the very basics with utmost warmth, patience, and support."
      }
    ],
    recommendedFor: "New Muslims and families wishing to cultivate strong Islamic foundations."
  },
  {
    id: "arabic",
    slug: "learn-arabic-language",
    title: "Learn Arabic Language",
    arabicTitle: "تَعَلُّمُ اللُّغَةِ الْعَرَبِيَّةِ وَقَوَاعِدِهَا",
    subtitle: "Quranic Syntax, Simplified Grammar (Nahw & Sarf) & Conversational Fluency",
    category: "arabic",
    categoryLabel: "Arabic & Islamic Adab",
    description: "Simplified Arabic Grammar (Nahw & Sarf), daily conversational vocabulary, and direct comprehension of Quranic syntax without translation.",
    longDescription: "Arabic is the chosen language of Divine Revelation. Understanding Arabic unlocks a direct, unfiltered connection to the Holy Quran and prophetic traditions. This comprehensive program simplifies the perceived complexity of Arabic grammar. Through a structured blend of Nahw (syntax), Sarf (word morphology), high-frequency Quranic vocabulary lists, and interactive speaking exercises, students rapidly progress from basic sentences to understanding Quranic verses and classic Islamic texts directly in Arabic.",
    image: "/images/course-arabic-language.webp",
    duration: "Flexible / 30 mins",
    level: "Beginner to Advanced",
    targetAudience: "Students wishing to understand the Quran in its original tongue.",
    prerequisites: "Basic ability to read Arabic letters is recommended.",
    features: [
      "Simplified Arabic syntax (Nahw) with practical Quranic examples",
      "Morphology (Sarf) and root-word derivations",
      "Top 500 Quranic words that cover 70% of the entire Quranic text",
      "Conversational Arabic for everyday greetings and dialogue",
      "Sentence diagramming (I'rab) made intuitive and practical",
      "Taught by native or bilingual scholars fluent in English, Urdu, Pashto, & Arabic"
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Arabic Word Types & Sentence Basics",
        topics: [
          "The three words of Arabic: Ism (noun), Fi'l (verb), and Harf (particle)",
          "Definite (Ma'rifah) vs Indefinite (Nakirah) words",
          "Building simple nominal sentences (Jumlah Ismiyyah)"
        ]
      },
      {
        moduleNumber: 2,
        title: "Noun Cases & Relationships (Nahw Foundations)",
        topics: [
          "The three grammatical states: Marfoo', Mansoob, and Majroor",
          "Adjective-Noun agreement (Mawsoof and Sifah)",
          "Possessive constructions (Mudhaf and Mudhaf Ilayh) in the Quran"
        ]
      },
      {
        moduleNumber: 3,
        title: "Verbal System & Conjugation (Sarf)",
        topics: [
          "Past tense (Madi) conjugation across pronouns",
          "Present/Future tense (Mudari') and command verbs (Amr)",
          "3-letter root word patterns (Awzan) and vocabulary expansion"
        ]
      },
      {
        moduleNumber: 4,
        title: "Direct Quranic Translation & Analysis",
        topics: [
          "Analyzing short Surahs grammatically without English translations",
          "Recognizing rhetorical beauty and emphasis markers (Inna, Qad, La)",
          "Constructing original Arabic paragraphs and dialogue"
        ]
      }
    ],
    learningOutcomes: [
      "Understand up to 70% of the Quranic text directly while listening in Salah.",
      "Analyze Arabic sentences using foundational Nahw and Sarf principles.",
      "Formulate basic written and spoken Arabic sentences with correct syntax.",
      "Read classical Arabic texts without feeling overwhelmed by grammatical rules."
    ],
    faqs: [
      {
        question: "Is Arabic difficult to learn for non-Arabs?",
        answer: "With our root-word methodology, non-Arabs quickly realize that Arabic is remarkably mathematical, logical, and patterned."
      },
      {
        question: "Does this course focus on Quranic Arabic or street dialects?",
        answer: "The primary focus is Classical / Quranic Arabic (Fusha), which also serves as the formal language of the Arab world."
      },
      {
        question: "What languages can the teacher use to explain rules?",
        answer: "Our teachers explain concepts fluently in English, Urdu, Pashto, or Arabic as you prefer."
      }
    ],
    recommendedFor: "Anyone wanting to understand the Quran without relying on translation."
  },
  {
    id: "qirat",
    slug: "qirat-mastery",
    title: "Learn Qirat Mastery",
    arabicTitle: "إِتْقَانُ الْقِرَاءَاتِ الْقُرْآنِيَّةِ الْمُتَوَاتِرَةِ",
    subtitle: "Authentic Classical Recitation Transmission & Ijazah Preparation",
    category: "tajweed",
    categoryLabel: "Tajweed & Qirat",
    description: "Study authentic classical Qira'at transmission styles (Hafs, Warsh, Qalun) with authorized teachers possessing authentic chains of narration.",
    longDescription: "The Holy Quran was revealed in seven Ahruf (dialectical modes) and transmitted down through authentic, mutawatir Qira'at chains. The Qirat Mastery course is our elite, advanced recitation program designed for Huffaz and experienced reciters seeking to study the classical Riwayat, vocal modulation, and respiratory discipline. Under the tutelage of senior Qaris who hold authentic Sanad reaching back to the Messenger of Allah ﷺ, you will study the principles of Hafs 'an Asim, Warsh 'an Nafi', Qalun, and other classical styles.",
    image: "/images/course-qirat-mastery.webp",
    duration: "30 mins / session",
    level: "Advanced Reciters",
    targetAudience: "Huffaz, advanced Tajweed graduates, and aspiring Imams and teachers.",
    prerequisites: "Fluency in Tajweed and solid Quran memorization/reading background.",
    features: [
      "Comparative analysis of the 10 Mutawatir Qira'at",
      "Specialized training in Riwayah Hafs 'an Asim (Shatibiyyah & Tayyibah routes)",
      "Study of Riwayah Warsh 'an Nafi' and Qalun",
      "Advanced vocal maqamat, breath control, and diaphragm stamina",
      "Detailed study of classical texts (Matn Al-Jazariyyah, Al-Shatibiyyah)",
      "Direct pathway to formal Ijazah with linked Sanad chain"
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "History & Principles of the Qira'at",
        topics: [
          "Understanding the 7 Ahruf and 10 Mutawatir Qira'at",
          "Biographies of the famous Imams of recitation and their rawis",
          "Conditions for authentic recitation: Sanad, Arabic grammar, Uthmani script"
        ]
      },
      {
        moduleNumber: 2,
        title: "Riwayah Hafs 'an Asim Advanced Nuances",
        topics: [
          "Differences between Shatibiyyah and Tayyibah routes (Tawassut vs Qasr)",
          "Special words in Hafs: Tashil in A'ajamiyyu, Imalah in Majraha, Israr/Ishmam",
          "Rules of Sakt (subtle pause without breath) across specific verses"
        ]
      },
      {
        moduleNumber: 3,
        title: "Introduction to Riwayah Warsh 'an Nafi'",
        topics: [
          "Principles of Naql (transferring vowel of hamzah)",
          "Taghleez of Lam and Tarqeeq of Ra rules specific to Warsh",
          "Rules of Tashil and Ibdal for consecutive hamzahs"
        ]
      },
      {
        moduleNumber: 4,
        title: "Ijazah Recitation Examination (Khatm al-Quran)",
        topics: [
          "Full recitation of the Mushaf from Surah Al-Fatiha to An-Nas before the master Qari",
          "Oral examination in theoretical Tajweed treatises",
          "Official granting of Ijazah and Sanad chain to the Prophet ﷺ"
        ]
      }
    ],
    learningOutcomes: [
      "Understand the linguistic and historical foundations of the classical Qira'at.",
      "Recite with advanced stylistic authenticity according to authorized Riwayat.",
      "Master vocal pacing, breath economy, and beautiful melodic delivery.",
      "Qualify for authentic Ijazah and teach subsequent generations with classical authority."
    ],
    faqs: [
      {
        question: "What is an Ijazah in Quran recitation?",
        answer: "An Ijazah is an official license granted by a master Qari certifying that the student recites the Quran exactly as transmitted, connected by an unbroken chain to Prophet Muhammad ﷺ."
      },
      {
        question: "Can I take this course if I haven't memorized the entire Quran?",
        answer: "Yes, you can study specific Surahs or styles of Qirat, though full Ijazah requires complete Quran recitation."
      },
      {
        question: "Does the teacher have an unbroken chain of transmission?",
        answer: "Yes, our senior Qaris hold certified Sanad chains authenticated by renowned Quranic institutions."
      },
      {
        question: "Why does this course have extra charges compared to other courses?",
        answer: "Learn Qirat Mastery is an advanced, high-level specialization taught exclusively by certified professional Qaris who hold authentic Sanad (unbroken chain of transmission). Due to the advanced nature of the curriculum and specialized 1-on-1 mentorship required, this course carries custom tuition rates."
      }
    ],
    recommendedFor: "Advanced reciters, Imams, and Huffaz seeking classical Ijazah authorization.",
    pricingNotice: "Please note: This course requires additional charges beyond our standard tuition plans. As an advanced and hard curriculum, sessions are personally taught by certified professional Qaris holding authentic Sanad."
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((course) => course.slug === slug);
}
