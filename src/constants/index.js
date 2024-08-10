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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  techbumbles,
  shakthi,
  halcyon,
  brandmonk,
  brandmonkcon,
  brandbiz,
  course,
  postgresql,
  wordpress,
  krita,
  gacha,
  pmf,
  comic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Content Writer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "2D Illustrator",
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Python",
    icon: python,
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
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "Krita",
    icon: krita,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "ShakthiSoftSolutions, Palladam, Tamil Nadu",
    icon: shakthi,
    iconBg: "#383E56",
    date: "June 2021 - July 2021",
    points: [
      "Designed a web-based Catalogue Management Software.",
      "Analyzed data management requirements and designed a SQL database for efficient data storage and retrieval.",
      "Implemented efficient data access and modification functionalities.",
      "Technologies: PHP, HTML, CSS, SQL",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Halcyon Ventures, Coimbatore, Tamil Nadu",
    icon: halcyon,
    iconBg: "#E6DEDD",
    date: "Dec 2021- Jan 2022",
    points: [
    " Designed an Online Job Portal Software",
    " Developed individual access levels for the Content Writer and Job Provider",
    " Managed the server-side database to enable clients to perform update, edit, and delete operations.",
    "Technologies used: JavaScript, HTML, CSS, MySQL"    
],
  },
  {
    title: "Full Stack Developer",
    company_name: "Brand Monk Consulting, Coimbatore, Tamil Nadu",
    icon: brandmonk,
    iconBg: "#383E56",
    date: "June 2023- Aug 2023",
    points: [
      "Developed and maintained websites for the company.",
      "Designed an Admin panel to enable efficient access and modification of data for each site.",
      "Successfully implemented SEO optimization techniques to improve the ranking of the websites in Google search results.",
      "Technologies used: React, JavaScript, Nodejs, HTML, CSS, SQL, PHP, Git"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "TechBumbles Software Solutions l Erode, TamilNadu",
    icon: techbumbles,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Collaborated within a web development team, contributing to both front-end and back-end tasks to deliver client-ready websites",      
      "Implemented technologies such as React, TypeScript, Tailwind CSS, and Redux Toolkit for front-end development.",
      "Utilized Node.js and SQL databases for efficient back-end development.",
      "Technologies used: React, Redux Toolkit, TypeScript, Nodejs, JavaScript, Git, SQL"    
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

const projects = [
  {
    name: "BrandMonk.biz",
    description:
"Recreated the brandmonk.biz website to enhance its design and functionality. Implemented improvements in layout, user experience, and performance. Resulted in a more engaging and professional online presence for the brand.",    
tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: brandbiz,
    source_code_link: "https://brandbiz-master.vercel.app",
  },
  {
    name: "Brand Monk Consulting",
    description:
    "Recreated BrandMonk Consulting website with enhanced features. Implemented responsive layout for optimal viewing on various devices. Incorporated client's branding elements for a cohesive online presence.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: brandmonkcon,
    source_code_link: "https://brandconsultant-site.vercel.app",
  },
  // {
  //   name: "Course Archive App",
  //   description:
  //   "Developed an intuitive online course app enabling teachers to upload and edit videos effortlessly. Students can securely log in to access a curated library of educational content. Seamlessly bridging teacher-student interactions.",
  //   tags: [
  //     {
  //       name: "JavaScript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "PHP",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: course,
  //   source_code_link: "https://coursearchive.000webhostapp.com/home.php",
  // },
  {
    name: "Gacha Match",
    description:
      "Created a captivating image matching game featuring a single but challenging level. Players must locate matching sets of images, fostering focus and memory skills. Enjoy endless fun with this streamlined and addictive gaming experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gacha,
    source_code_link: "https://gachamatch-io.vercel.app/",
  },
  {
    name: "Pick My Franchise",
    description:
    "Revamped the Pick My Franchise website with a sleek and modern design. Enhanced user experience through intuitive navigation and visually appealing elements. Elevate your franchise-picking journey with our redesigned platform.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: pmf,
    source_code_link: "https://pmf-site-n5ly.vercel.app/",
  },
  {
    name: "Comics Maker AI",
    description:
      "Crafted a dynamic landing page for Comics Maker AI, showcasing its innovative features and user-friendly interface. Seamlessly blending creativity with technology, our platform empowers users to bring their comic ideas to life effortlessly.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: comic,
    source_code_link: "https://www.comicsmaker.ai/",
  },
];

export { services, technologies, experiences, testimonials, projects };
