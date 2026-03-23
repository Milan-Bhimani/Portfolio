import { 
  Briefcase, 
  Code, 
  Database, 
  Server, 
  Layout, 
  Terminal, 
  Cpu, 
  Globe,
  Shield
} from 'lucide-react';

export const resumeData = {
  personal: {
    name: "Milan Bhimani",
    title: "Software Development Engineer Intern",
    email: "milanhbhimani@gmail.com",
    phone: "+91 79844 54901",
    location: "Ahmedabad, Gujarat, India",
    tagline: "Building secure, scalable digital ecosystems.",
    social: {
      github: "https://github.com/Milan-Bhimani",
      linkedin: "https://linkedin.com/in/bhimani-milan-h",
      twitter: "#",
      website: "https://milanhbhimani.me"
    }
  },
  summary: "Final-year Computer Science undergraduate and Software Development Engineer Intern with demonstrated experience designing and shipping production-grade RESTful APIs using Python (FastAPI, Flask, Django) and JavaScript (Node.js, Express.js). Adept at building secure, maintainable backend systems with JWT authentication, RBAC, and OWASP-aligned security practices. Proven ability to contribute effectively in collaborative, mentor-reviewed engineering environments — from database schema design and API architecture to full-stack feature delivery on live platforms. Seeking a backend or full-stack software engineering role where technical depth and clean code matter.",
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Parul University",
      year: "2022 - 2026",
      grade: "CGPA: 8.43/10.0",
      desc: ""
    }
  ],
  experience: [
    {
      role: "Software Development Engineer-1 Intern",
      company: "Accrete Infosolutions",
      location: "Vadodara, Gujarat, India",
      period: "Jan. 2026 – Apr. 2026",
      description: "Built RESTful APIs for a live e-commerce platform (Shop Sphere) using Node.js and Express.js, implementing MVC architecture with JWT-based authentication and Express-Validator for request validation. Designed MySQL database schema from scratch including seed data; built a unified API response utility standardizing success and error formats adopted across all backend endpoints project-wide. Contributed to shared production codebase via Git with multiple pull requests under senior mentor review, gaining hands-on experience in collaborative version control and professional code review workflows. Delivered React.js frontend features using Tailwind CSS and PrimeReact including Admin Dashboard, payment page, and profile page; performed manual integration testing across all interconnected modules."
    }
  ],
  projects: [
    {
      title: "ShopEase",
      role: "Backend Architect",
      desc: "Architected a production-grade REST API using FastAPI with clean architecture and dependency injection covering complete e-commerce flows: product management, cart, orders, and user lifecycle. Implemented JWT-based authentication with RBAC and Pydantic schema validation enforcing strict input sanitization across all endpoints; integrated Firebase for auth and file storage with secure access rules. Designed API security following OWASP fundamentals — preventing injection attacks, enforcing route-level authorization, and returning generic error messages to avoid sensitive data exposure.",
      tech: ["FastAPI", "Firebase", "Python"],
      link: "https://github.com/Milan-Bhimani/ShopEase",
      github: "https://github.com/Milan-Bhimani/ShopEase",
      featured: true,
      category: "Backend",
      image: "/images/projects/shopease.png"
    },
    {
      title: "Univents",
      role: "Full Stack Developer",
      desc: "Built a scalable REST API supporting geospatial location queries, advanced multi-field filtering, pagination, and full-text search using MongoDB aggregation pipelines with compound and geospatial indexing. Secured all endpoints with helmet.js security headers, express-rate-limit middleware, and NoSQL injection prevention following OWASP compliance practices.",
      tech: ["Node.js", "Express.js", "MongoDB", "GeoJSON"],
      link: "https://github.com/Milan-Bhimani/Univents",
      github: "https://github.com/Milan-Bhimani/Univents",
      featured: true,
      category: "API",
      image: "/images/projects/univents.png"
    },
    {
      title: "DSA Visualizer",
      role: "Frontend Engineer",
      desc: "Built an interactive web application visualizing 10+ sorting and searching algorithms with real-time step-by-step animations using custom JavaScript and HTML5 Canvas API. Implemented Flask REST endpoints with CORS configuration and async AJAX calls for smooth non-blocking algorithm execution; designed responsive UI with speed control and algorithm selection.",
      tech: ["Python", "Flask", "JavaScript", "HTML5 Canvas"],
      link: "https://github.com/Milan-Bhimani/DSA-Visualizer",
      github: "https://github.com/Milan-Bhimani/DSA-Visualizer",
      featured: false,
      category: "EdTech",
      image: "/images/projects/dsa.png"
    }
  ],
  skills: [
    { 
      category: "Languages", 
      icon: <Code />, 
      items: ["Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"] 
    },
    { 
      category: "Backend", 
      icon: <Server />, 
      items: ["FastAPI", "Flask", "Django", "Node.js", "Express.js", "RESTful API Design"] 
    },
    { 
      category: "Database", 
      icon: <Database />, 
      items: ["MySQL", "MongoDB", "Firebase"] 
    },
    { 
      category: "Frontend", 
      icon: <Layout />, 
      items: ["React.js", "Tailwind CSS", "PrimeReact"] 
    },
    { 
      category: "Security", 
      icon: <Shield />, 
      items: ["JWT", "RBAC", "Input Validation", "Rate Limiting", "OWASP Top 10 Fundamentals"] 
    },
    { 
      category: "Tools & Platforms", 
      icon: <Terminal />, 
      items: ["Git", "GitHub", "Postman", "VS Code", "Linux (Basics)"] 
    }
  ]
};