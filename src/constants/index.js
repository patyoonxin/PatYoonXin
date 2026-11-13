import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  mtc,
  tadika,
  ecocool,
  insightguard,
  defaultImage,
  utm,
  yuhua,
  robocar
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About & Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
 
  {
    id: "projects",
    title: "Projects",
  },
   {
    id: "education",
    title: "Education",
  },
    {
    id: "certs",
    title: "Certs",
  },
  {
    id: "leadership",
    title: "Leaderships",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Science Intern",
    company_name: "Malaysian Timber Council",
    icon: mtc,
    iconBg: "#383E56",
    date: "Dec 2023 - April 2024",
    points: [
      "Developed a customer meeting scheduling system using PHP, MySQL, and JavaScript to match companies with relevant clients based on the products they wanted to discuss.",
      "Implemented functionality to organize product interests and facilitate the scheduling of company-client meetings, streamlining the meeting coordination process.",
      "Provided technical and IT support to staff, assisting with day-to-day technical operations.",
      "Supported the planning and coordination of IT-related events.",
    ],
  },
   {
    title: "Academic Peer Tutor",
    company_name: "Universiti Teknologi Malaysia (UTM)",
    icon: utm,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Assisted lecturers in providing academic support to students through tutoring sessions, helping them understand course materials and improve their learning.",
    ],
  },
  {
    title: "Pre-School Teacher",
    company_name: "Tadika Minda Fajar",
    icon: tadika,
    iconBg: "#E6DEDD",
    date: "April 2021 - May 2021",
    points: [
      "Assisted with administrative and day-to-day classroom operations.",
      "Supported teachers in preparing learning activities and maintaining an organized learning environment.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// react - blue-text-gradient
// laravel & php - green-text-gradient
// mysql - pink-text-gradient
// fastapi - orange-text-gradient
// springboot - yellow-text-gradient
// other - white

const projects = [
  {
    name: "FlemingAR",
    type: "FYP",
    description:
      "An interactive Augmented Reality (AR) learning system designed to help secondary school students master Physics Electromagnetism through hand-pose recognition and an RAG-powered AI tutor. The system utilizes Mediapipe for hand-pose recognition, XAI and RAG for curriculum-grounded AI tutoring",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "rag",
        color: "pink-text-gradient",
      },
    ],
    image: defaultImage,
    website_link: "https://github.com/",
    source_code_link: "https://github.com/",
  },
  {
    name: "EcoCool Node",
    type: "Hackathon",
    description:
      "Integrating with ESP32 and other IoT sensors, EcoCool Node is a solar-powered environmental monitoring and adaptive ventilation system designed for small growing enclosures. It monitors temperature and battery condition to determine when ventilation is needed and how to manage limited energy resources.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "orange-text-gradient",
      },
      {
        name: "esp32",
        color: "green-text-gradient",
      },
    ],
    image: ecocool,
    website_link: "https://ecocool-node.vercel.app/",
    source_code_link: "https://github.com/patyoonxin/EcoCool.git",
  },
  {
    name: "Official Portal of the Kulai District Office",
    type: "Academic",
    description:
      "A full-stack web application designed to streamline customer support and complaint management by integrating a Gemini AI chatbot, human-agent handoff, automated issue tracking, self-service FAQs, and sentiment analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "geminiAPI",
        color: "green-text-gradient",
      },
    ],
    image: defaultImage,
    website_link: "https://github.com/",
    source_code_link: "https://github.com/patyoonxin/AD1_Sec2_BeyondLevel.git",
  },
  {
    name: "EventOra",
    type: "Academic",
    description:
      "A full-stack cross-platform event management platform for student societies featuring dynamic QR ticketing, mobile check-ins, Stripe payments, and Gemini AI-powered feedback analysis.",
    tags: [
      {
        name: "vue3",
        color: "blue-text-gradient",
      },
      {
        name: "phpslim4",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "geminiAPI",
        color: "green-text-gradient",
      },
    ],
    image: defaultImage,
    website_link: "https://eventora-teal.vercel.app/",
    source_code_link: "https://github.com/patyoonxin/eventora.git",
  },
  {
    name: "InsightGuard AI",
    type: "Hackathon",
    description:
      "An executive early-warning dashboard that monitors KPIs, detects anomalies, identifies sustained trends and cross-domain business incidents, forecasts near-term risks, and generates AI-powered briefings.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "orange-text-gradient",
      }
    ],
    image: insightguard,
    website_link: "https://insightguardai-yoonxin.streamlit.app/",
    source_code_link: "https://github.com/patyoonxin/InsightGuardAI.git",
  },
  {
    name: "Etiqa Payout System",
    type: "Academic",
    description:
      "A full-stack web application designed to streamline the payout process for insurance claims, featuring automated validation, real-time status updates, and comprehensive reporting.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
    ],
    image: defaultImage,
    website_link: "https://github.com/",
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "SmartWealth-GX",
  //   type: "Hackathon",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "ShadowSeek AI",
  //   type: "Hackathon",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "AllWays",
  //   type: "Hackathon",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

const education = [
  {
    title: "Universiti Teknologi Malaysia (UTM)",
    course: "Bachelor in Software Engineering w Honours",
    icon: utm,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    cgpa: "3.94/4.00",
    details: "Pursuing a degree in Software Engineering with a strong interest in Artificial Intelligence and intelligent systems. Developing practical skills in software development, system design, and AI integration through academic projects and technology competitions.",
    highlights: [
      "Dean's List Recipient",
      "JPA-PIDN Scholarship Recipient",
    ],
  },
  {
    title: "Universiti Teknologi Malaysia (UTM)",
    course: "Diploma in Computer Science",
    icon: utm,
    iconBg: "#383E56",
    date: "Aug 2021 - Aug 2024",
    cgpa: "3.99/4.00",
    details: "Completed a Diploma in Computer Science, building a strong foundation in programming, software development, database management, and computer science fundamentals.",
    highlights: [
      "Dean's List Recipient",
      "Best Graduate Award - 68th UTM Convocation"
    ],
  },
   {
    title: "SMJK Yu Hua",
    course: "Sijil Pelajaran Malaysia (SPM)",
    icon: yuhua,
    iconBg: "#383E56",
    date: "Jan 2016 - Aug 2020",
    details: "Achieved 10As, with active involvement in competitions and extracurricular activities, developing communication, teamwork, and problem-solving skills.",
  },
  
];

const certificates = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-901)",
    company: "Microsoft",
    credential_link: "https://learn.microsoft.com/en-us/users/yoonxinpat-3103/credentials/fe1280ce1a414554?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    tags: [
      "# Microsoft Azure",
      "# Microsoft Foundry",
      "# Artificial Intelligence",
    ],
  },
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    company: "Google",
    credential_link: "https://www.coursera.org/account/accomplishments/specialization/NXZOV50HT54U",
    tags: [
      "# Data Analytics",
      "# Python",
      "# Tableau",
      "# Machine Learning",
    ],
  },
  {
    title: "Google Project Management Professional Certificate",
    company: "Google",
    credential_link: "https://www.coursera.org/account/accomplishments/specialization/XD6MSTUND77M",
    tags: [
      "# Agile Project Management",
    ],
  },
  {
    title: "Google AI Professional Certificate",
    company: "Google",
    credential_link: "https://www.coursera.org/account/accomplishments/specialization/2FEIYRG6Q8UF",
    tags: [
      "# Artificial Intelligence",
    ],
  },
  
];

const leaderships = [
  {
    title: "Robocar Challenge - Real-Time Systems Engineering",
    description: "Developed and tested a real-time robotic car navigation system as part of the Real-Time Systems Engineering course.",
    key_contributions: [
      "Implemented finite state machine (FSM) navigation with checkpoint detection for track navigation.",
      "Developed RTOS-based multitasking for navigation, motor control, obstacle detection, and signaling.",
      "Integrated line, proximity, and light sensors for real-time steering and decision-making.",
      "Tuned motor responses to improve line tracking, obstacle handling, and navigation stability."
    ],
    key_skills: [
      "Embedded Systems",
      "RTOS",
      "Finite State Machine",
      "Sensor Integration",
      "Real-Time Programming",
    ],
    image: robocar,
  },
  {
    title: "Maxis Industry Visit & Winning in AI Pitching Competition",
    description: "Participated in an industry visit to Maxis, exploring its digital innovation initiatives, AI applications, and the Maxis Business Innovation Centre (MBIC).",
    key_contributions: [
      "Explored real-world applications of AI, smart city technologies, intelligent traffic systems, and industrial robotics.",
      "Learned how sensor-based defect detection and Overall Equipment Effectiveness (OEE) metrics support manufacturing efficiency.",
      "Collaborated with a team to develop and pitch an Automated Intern Matching System, an AI-driven solution to streamline internship recruitment.",
      "Champion - AI Solution Pitching Competition"
    ],
    key_skills: [
      "AI Innovation",
      "Solution Design",
      "Team Collaboration",
      "Technical Pitching",
    ],
    image: defaultImage,
  },
  {
    title: "Digital Nation Summit Kuala Lumpur (ASEAN Edition) 2025",
    description: "Served as a part-time crew member representing U Mobile at the Digital Nation Summit Kuala Lumpur (ASEAN Edition), held on 23-24 September 2025.",
    key_contributions: [
      "Assisted in introducing and explaining U Mobile's U Business services to event visitors.",
      "Communicated technology offerings to audiences from different backgrounds.",
      "Gained exposure to emerging technologies through Huawei's robotics showcase and industry engagement.",
    ],
    key_skills: [
      "Communication ",
      "Industry Engagement",
      "Public Interaction",
    ],
    image: defaultImage,
  },
  {
    title: "Stakeholder Meetings - Kulai District Official Portal Development",
    description: "Collaborated with a team to develop an official portal for the Kulai District Office, involving direct engagement with stakeholders throughout the development process.",
    key_contributions: [
      "Conducted stakeholder meetings to gather and clarify system requirements.",
      "Discussed portal functionalities, content requirements, and features to be included or excluded.",
      "Presented proposed solutions and development progress to stakeholders for feedback and validation.",
      "Incorporated stakeholder feedback to align the portal with organizational needs."
    ],
    key_skills: [
      "Stakeholder Engagement",
      "Requirements Analysis",
      "Client Communication",
    ],
    image: defaultImage,
  },
  {
    title: "Engineering & Science English Summer Exchange Programme with Japan",
    description: "Represented UTM in a two-week international exchange programme with Shibaura Institute of Technology, Japan.",
    key_contributions: [
      "Collaborated with Japanese student buddies through academic exchange activities.",
      "Participated in multicultural activities and educational visits to historical landmarks.",
      "Strengthened cross-cultural communication, teamwork, and international collaboration skills.",
    ],
    key_skills: [
      "Cross-Cultural Communication ",
      "International Collaboration",
      "Adaptability",
    ],
    image: defaultImage,
  },
   {
    title: "Vice Director in JARVIS'26 - Robotics Learning & Robocar Challenge",
    description: "Co-organized a robotics education programme for children from Rumah Perlindungan Kanak-Kanak TBQ Amal, introducing them to robotics, programming, and hands-on robotic car activities.",
    key_contributions: [
      "Coordinated with the children's home representative to arrange programme details and facilitate communication.",
      "Assisted in preparing and testing robotic cars, including code debugging and functionality checks.Participated in multicultural activities and educational visits to historical landmarks.",
      "Supported hands-on robotics and coding sessions, guiding participants in programming their cars.",
    ],
    key_skills: [
      "Stakeholder Coordination ",
      "Robotics and Programming",
      "Community Engagement",
    ],
    image: defaultImage,
  },
  {
    title: "Vice Secretary in Faculty Computing Sports Day - SUSKOM'25",
    key_contributions: [
      "Supported the planning, coordination, and documentation of a faculty sports event involving 300+ students.",
    ],
    key_skills: [
      "Event Coordination ",
      "Time Management",
      "Documentation",
    ],
    image: defaultImage,
  },
  {
    title: "Huawei Site Visit Programme - TechScope'25",
    key_contributions: [
      "Contributed to the organization and promotion of a Huawei industry visit for 40+ students through multimedia content creation and event publicity.",
    ],
    key_skills: [
      "Industry Engagement",
      "Event Coordination ",
    ],
    image: defaultImage,
  },
  
  
];


export { services, technologies, experiences, testimonials, projects, education, certificates, leaderships };