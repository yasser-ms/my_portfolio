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
    description:
      "Building modern, responsive web applications using React, Next.js, and Tailwind CSS with focus on user experience and performance.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    image: backendDev,
    description:
      "Creating robust APIs and microservices with Spring Boot, Node.js, Docker, and PostgreSQL for scalable applications.",
  },
  {
    title: "DevOps Enthusiast",
    icon: docker,
    image: profilePic,
    description:
      "Setting up CI/CD pipelines, containerization with Docker, Kubernetes, and cloud deployments for efficient workflows.",
  },
  {
    title: "Networking",
    icon: mobile,
    image: Networking,
    description:
      "Configuring networks, firewalls, DNS, and understanding network security protocols and infrastructure.",
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

// Example structure for your projects in constants/index.js
// Add these fields to your existing projects array

const projects = [
  {
    name: "ParkFlow",
    description:
      "A production-ready microservices parking management system with CQRS pattern, JWT authentication, and full DevOps pipeline. Features 5 independent services with their own databases.",
    tags: [
      { name: "Python", color: "text-blue-400" },
      { name: "Flask", color: "text-gray-300" },
      { name: "React", color: "text-cyan-400" },
      { name: "Docker", color: "text-blue-500" },
      { name: "TailwindCSS", color: "text-indigo-600" },
      { name: "PostgreSQL", color: "text-indigo-400" },
    ],
    image: "src/assets/parkFlowLogo.png", // Your project image
    source_code_link: "https://github.com/yasser-ms/park_Flow_Web_App",
    live_demo_link: null, // Optional: link to live demo
    documentation_link: "/projects/parkflow", // Link to your project documentation page
    category: "Full Stack • Microservices",
  },
  {
    name: "Store API",
    description:
      "RESTful API for e-commerce platform with product management, user authentication, shopping cart, and order processing. Built with clean architecture principles.",
    tags: [
      { name: "Python", color: "text-green-400" },
      { name: "Flask", color: "text-gray-300" },
      { name: "PostgreSQL", color: "text-green-500" },
      { name: "JWT", color: "text-purple-400" },
    ],
    image: "src/assets/flaskPostman.webp",
    source_code_link: "https://github.com/yasser-ms/Store_API",
    live_demo_link: "https://store-api-demo.vercel.app",
    documentation_link: "/projects/store-api",
    category: "Backend • API",
  },
  /*  {
    name: "Enterprise Network",
    description:
      "Complete enterprise network infrastructure design with VLANs, routing protocols, firewall configuration, and security policies using Cisco Packet Tracer.",
    tags: [
      { name: "Cisco", color: "text-blue-400" },
      { name: "Networking", color: "text-cyan-400" },
      { name: "Security", color: "text-red-400" },
      { name: "VLAN", color: "text-yellow-400" },
    ],
    image: "/images/enterprise-network.png",
    source_code_link: "https://github.com/yourusername/enterprise-network",
    live_demo_link: null,
    documentation_link: "/projects/enterprise-network",
    category: "Networking • Infrastructure",
  }, */

];

export { services, technologies, testimonials, projects };
