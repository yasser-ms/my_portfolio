import {
  phpImage,
  highLevelArch,
  mcdDiagram,
  microServicesArch,
  jwtDecorator,
  blueprints,
  postman,
  cookies,
  pgAdmin,
  dashboard,
  responsive,
  login,
  parking,
  axios,
  docker1,
  docker2,
  dockerBuild,
} from "../assets";

export const projectData = {
  project: {
    name: "ParkFlow",
    badge: "University Project to Production Architecture",
    github: "https://github.com/yasser-ms/park_Flow_Web_App",
    githubV1: "https://github.com/yasser-ms/Projet_SAE/tree/Nadjib",
    liveV1: "https://groupea5.alwaysdata.net",
    liveDemo: "https://park-flow-web-app.onrender.com/",
  },

  hero: {
    hook: "What happens when you revisit your own code and realize it won't scale?",
    subtitle:
      "The journey of rebuilding a university parking system with microservices in mind.",
  },

  v1: {
    label: "Where It Started",
    title: "Version 1 — The University Project",
    story:
      "This started as a SAE project at CY Cergy Paris Université. Three students, one semester, and a goal: build a working parking management system.",
    reflection:
      "We did it. It worked. We got a good grade. I learned socket programming, PostgreSQL, and what it's like to debug at 2 AM with teammates. One of my best university experiences.",
    images: {
      ui: {
        src: phpImage,
        placeholder: "PHP/ vanillaJS based web interface screenshot",
      },
      arch: {
        src: highLevelArch,
        placeholder: "Screenshot of V1 Architecture",
      },
      mcd: {
        src: mcdDiagram,
        placeholder: "MCD/MLD diagram (the database schema we built)",
      },
    },
    techStack: ["PHP", "Java", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"],
    limitations: [
      {
        title: "Single Server",
        desc: "Everything runs on one machine. If it crashes, everything goes down.",
        icon: "FaServer",
      },
      {
        title: "One Database",
        desc: "All tables in one place. User data next to logs next to payments.",
        icon: "FaDatabase",
      },
      {
        title: "No Token Auth",
        desc: "PHP sessions only. No JWT, no stateless authentication.",
        icon: "FaLock",
      },
      {
        title: "Hard to Scale",
        desc: "Want more capacity? Buy a bigger server. That's it.",
        icon: "FaChartLine",
      },
    ],
    credits: {
      text: "Built with",
      members: ["@teammate1", "@teammate2"],
    },
  },

  pivot: {
    label: "The Turning Point",
    title: "Why Rebuild?",
    story: {
      discovery:
        "After the project ended, I fell into the DevOps rabbit hole. Docker, CI/CD, Kubernetes, microservices... The more I learned, the more I looked back at our parking system differently.",
      problem:
        "The architecture we built was fine for a university assignment. But it had a ceiling. One server. One database. No horizontal scaling. No service isolation. If this was a real system handling thousands of cars daily, it would break.",
      question: "How would I rebuild this if it needed to handle 50,000 client?",
      decision:
        "I decided to redesign the architecture from scratch. Not because V1 was bad it did its job. But because I wanted to learn what 'production-ready' actually means.",
    },
    kept: "I kept the TCP protocol layer, it worked well for simulating parking hardware. Everything else? Time to rethink.",
  },

  v2: {
    label: "The Vision",
    title: "Version 2 — Microservices Architecture",
    intro:
      "The goal: break the monolith into independent services, each with a clear responsibility.",
    images: {
      architecture: {
        src: microServicesArch,
        placeholder:
          "Microservices architecture diagram (API Gateway, services, databases)",
      },
    },
    services: [
      {
        name: "API Gateway",
        port: "8080",
        desc: "Single entry point. Routes requests, validates JWT.",
        icon: "BiNetworkChart",
        color: "#915eff",
      },
      {
        name: "Auth Service",
        port: "5001",
        desc: "Users, vehicles, authentication.",
        icon: "FaUserShield",
        color: "#10b981",
      },
      {
        name: "Parking Service",
        port: "5002",
        desc: "Parkings, spots, contracts, availability.",
        icon: "FaCar",
        color: "#06b6d4",
      },
      {
        name: "Payment Service",
        port: "5003",
        desc: "Transactions, invoices, billing.",
        icon: "FaCreditCard",
        color: "#8b5cf6",
      },
      {
        name: "History Service",
        port: "5004",
        desc: "Entry/exit logs, statistics.",
        icon: "FaHistory",
        color: "#f59e0b",
      },
      {
        name: "Network Server",
        port: "9000",
        desc: "TCP bridge for parking hardware.",
        icon: "FaNetworkWired",
        color: "#ef4444",
      },
    ],
    note: {
      title: "Current State",
      text: "The architecture is designed. The endpoints are built. Right now, everything still connects to the V1 database — migration to separate databases per service is the next step.",
    },
    principles: [
      "Each service owns its data",
      "Communication via REST APIs",
      "JWT for stateless auth",
      "Containerized with Docker",
    ],
  },

  built: {
    label: "What I've Built So Far",
    title: "Work In Progress",
    intro: "The foundation is in place. Here's what's working:",
    sections: [
      {
        id: "backend",
        title: "Backend — Flask APIs",
        desc: "RESTful endpoints with JWT authentication. Blueprints for clean code organization.",
        useCarousel: true,
        carouselImages: [
          {
            src: jwtDecorator,
            title: "JWT Protected Route",
            placeholder: "Flask route with @jwt_required decorator",
          },
          {
            src: blueprints,
            title: "Blueprints",
            placeholder: "Flask Blueprints",
          },
          {
            src: postman,
            title: "API Testing",
            placeholder: "Postman request/response",
          },
          {
            src: cookies,
            title: "Auth Cookies",
            placeholder: "📸 Browser cookies after login",
          },
          {
            src: pgAdmin,
            title: "Select * From client;",
            placeholder: "Base de donnée",
          },
        ],
        endpoints: [
          { method: "POST", path: "/auth/login", desc: "User authentication" },
          { method: "POST", path: "/auth/register", desc: "Create account" },
          { method: "POST", path: "/auth/logout", desc: "Logout & clear tokens" },
          { method: "GET", path: "/auth/me", desc: "Get current user" },
          {
            method: "DELETE",
            path: "/contrats/<string:id_contrat>",
            desc: "Delete contart",
          },
          {
            method: "POST",
            path: "/auth/refresh",
            desc: "Refresh JWT token",
          },
          {
            method: "DELETE",
            path: "/contrats/<string:id_contrat>",
            desc: "Delete contart",
          },
          {
            method: "GET",
            path: "/parking/spots",
            desc: "List available spots",
          },
          {
            method: "GET",
            path: "/parking/spots/:id",
            desc: "Spot details",
          },
          {
            method: "POST",
            path: "/parking/entry",
            desc: "Register car entry",
          },
          {
            method: "DELETE",
            path: "/vehicule/<string:id_vehicule>",
            desc: "Delete vehicule",
          },
          {
            method: "POST",
            path: "/parking/exit",
            desc: "Register car exit",
          },
          { method: "GET", path: "/contracts", desc: "List contracts" },
          { method: "POST", path: "/contracts", desc: "Create contract" },
        ],
        highlights: [
          "JWT + Refresh Tokens",
          "SQLAlchemy ORM",
          "Blueprint Structure",
          "Postman",
          "Error Handling",
        ],
      },
      {
        id: "frontend",
        title: "Frontend — React Dashboard",
        desc: "Modern UI replacing the old PHP templates. Responsive, clean, functional.",
        useCarousel: true,
        carouselImages: [
          {
            src: dashboard,
            title: "Main Dashboard",
            placeholder: "React dashboard main view",
          },
          {
            src: responsive,
            title: "Mobile View",
            placeholder: "Mobile responsive view",
          },
          {
            src: login,
            title: "Login Page",
            placeholder: "Login page",
          },
          {
            src: parking,
            title: "Parking List",
            placeholder: "Parking spots view",
          },
          {
            src: axios,
            title: "Axios API calls",
            placeholder: "api calls",
          },
        ],
        highlights: [
          "React + Tailwind CSS",
          "Responsive Design",
          "Component-Based",
          "Axios API Calls",
        ],
      },
      {
        id: "docker",
        title: "Docker Setup",
        desc: "All services containerized and orchestrated with Docker Compose.",
        useCarousel: false,
        images: {
          compose: {
            src: docker1,
            placeholder: "docker-compose.yml file",
          },
          compose2: {
            src: docker2,
            placeholder: "docker-compose.yml file",
          },
          running: {
            src: dockerBuild,
            placeholder: "Terminal: docker ps showing running containers",
          },
        },
        highlights: ["Docker Compose", "Service Isolation", "Easy Local Dev"],
      },
    ],
  },

  next: {
    label: "What's Next",
    title: "The Road Ahead",
    intro: "The architecture is designed, the core is built. Here's what's coming:",
    items: [
      {
        title: "Separate Databases",
        desc: "Migrate from single DB to one database per service. True data isolation.",
        status: "planned",
        icon: "FaDatabase",
      },
      {
        title: "API Gateway Implementation",
        desc: "Centralized routing, rate limiting, request validation.",
        status: "planned",
        icon: "BiNetworkChart",
      },
    ],
  },

  demo: {
    title: "See It In Action",
    liveUrl: "https://park-flow-web-app.onrender.com/",
    images: {
      gif: {
        src: "/images/parkflow/demo.webp",
        placeholder:
          "📸 GIF: Full parking flow — entry → validation → exit",
      },
      terminal: {
        src: "/images/parkflow/terminal.webp",
        placeholder: " TCP Terminal simulator in action",
      },
    },
  },

  comparison: [
    { aspect: "Architecture", v1: "Monolith", v2: "Microservices" },
    {
      aspect: "Database",
      v1: "Single PostgreSQL",
      v2: "1 DB per service (planned)",
    },
    { aspect: "Auth", v1: "PHP Sessions", v2: "JWT + Refresh Tokens" },
    { aspect: "Frontend", v1: "PHP + VanillaJS", v2: "React + Tailwind" },
    { aspect: "Backend", v1: "PHP", v2: "Python Flask" },
    {
      aspect: "Deployment",
      v1: "FTP to Alwaysdata",
      v2: "Docker Compose",
    },
  ],
};
