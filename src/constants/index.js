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
  yuhua
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
    id: "certificate",
    title: "Certs",
  },
  {
    id: "events",
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


export { services, technologies, experiences, testimonials, projects, education };