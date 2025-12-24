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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
    profilePic,
  reactDev,
  Networking,
  backendDev,
  storeapi,
  parking,
  photogallery,
  vaccine,
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
    image: reactDev,
    description: "Building modern, responsive web applications using React, Next.js, and Tailwind CSS with focus on user experience and performance."
  },
  {
    title: "Backend Developer",
    icon: backend,
    image: backendDev,
    description: "Creating robust APIs and microservices with Spring Boot, Node.js, Docker, and PostgreSQL for scalable applications."
  },
    {
    title: "DevOps Enthusiast",
    icon: docker,
    image: profilePic,
    description: "Setting up CI/CD pipelines, containerization with Docker, Kubernetes, and cloud deployments for efficient workflows."
  },
  {
    title: "Networking",
    icon: mobile,
    image: Networking,
    description: "Configuring networks, firewalls, DNS, and understanding network security protocols and infrastructure."
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Store API",
    description:
      "RESTful API built with Flask, SQLAlchemy, and JWT Authentication. Features database migrations, Docker containerization, Swagger documentation, and Postman testing. Deployed on Render.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "orange-text-gradient",
      },
    ],
    image: storeapi,
    source_code_link: "https://github.com/yasser-ms/Store_API",
    live_demo_link: "https://store-api-ju13.onrender.com",
  },
  {
    name: "Smart Parking System",
    description:
      "Client-server architecture using Java/Python sockets for network communication and database management. Web interface built with HTML, CSS, JavaScript, PHP and PostgreSQL database.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "orange-text-gradient",
      },
    ],
    image: parking,
    source_code_link: "https://github.com/yasser-ms/Projet_SAE/tree/yasser",
    live_demo_link: "https://groupea5.alwaysdata.net",
  },
  {
    name: "React Photo Gallery",
    description:
      "React/Vite application featuring dark mode, image search via Unsplash API, React Query for data fetching, reusable components, and global state management. Deployed on Netlify.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "orange-text-gradient",
      },
    ],
    image: photogallery,
    source_code_link: "https://github.com/yasser-ms/Unsplash-API",
    live_demo_link: "https://unsplashapiyasser.netlify.app",
  },
  {
    name: "Vaccine Management App",
    description:
      "Intelligent child vaccine management application. Mobile and web app built with Flutter/Dart, Firebase for backend services, and Node.js for server logic. Final year project.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "dart",
        color: "orange-text-gradient",
      },
    ],
    image: vaccine,
    source_code_link: "https://github.com/yasser-ms",
    live_demo_link: null,
  },
  {
    name: "Enterprise Network",
    description:
      "Design and deployment of a secure enterprise network infrastructure: IPv4, routing, switching, DNS, HTTP/Proxy, NAT, DHCP, SMTP/POP3, and ACL configuration.",
    tags: [
      {
        name: "networking",
        color: "blue-text-gradient",
      },
      {
        name: "cisco",
        color: "green-text-gradient",
      },
      {
        name: "security",
        color: "pink-text-gradient",
      },
      {
        name: "infrastructure",
        color: "orange-text-gradient",
      },
    ],
    image: Networking,
    source_code_link: "https://github.com/yasser-ms",
    live_demo_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects };