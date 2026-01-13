import { 
  Briefcase, 
  Code, 
  Database, 
  Server, 
  Layout, 
  Terminal, 
  Cpu, 
  Globe 
} from 'lucide-react';

export const resumeData = {
  personal: {
    name: "Milan Bhimani",
    title: "Full Stack Engineer",
    email: "milanhbhimani@gmail.com",
    location: "Ahmedabad, Gujarat, India",
    tagline: "Building scalable digital ecosystems.",
    social: {
      github: "https://github.com/Milan-Bhimani",
      linkedin: "https://linkedin.com/in/bhimani-milan-h",
      twitter: "#"
    }
  },
  summary: "Backend engineer specializing in scalable RESTful APIs with Python (FastAPI, Flask, Django) and JavaScript (Node.js, Express.js). Experienced in MongoDB, Firebase, MySQL, Docker, CI/CD, and Linux. Strong foundation in ML workflows and AI-driven applications with a focus on clean architecture and security-first development.",
  education: [
    {
      degree: "B.Tech in Computer Science",
      school: "Parul University",
      year: "2022 - 2026",
      grade: "CGPA: 8.38/10.0",
      desc: "Focus on Software Engineering and Data Science."
    },
    {
      degree: "Higher Secondary (Class XII)",
      school: "R.A.K.V.B School",
      year: "2022",
      grade: "75.84%",
      desc: "Science Stream"
    }
  ],
  experience: [], // Resume implies fresh grad/student, using projects as experience
  projects: [
    {
      title: "ShopEase",
      role: "Backend Architect",
      desc: "E-commerce backend platform with 99.9% uptime and sub-100ms response times.",
      tech: ["FastAPI", "Firebase", "Docker", "Python"],
      link: "https://ecommerce-app-ashy-five.vercel.app/",
      github: "https://github.com/Milan-Bhimani/ShopEase",
      featured: true,
      category: "Backend"
    },
    {
      title: "Univents",
      role: "Full Stack Developer",
      desc: "Hyperlocal event discovery API handling 1000+ concurrent requests.",
      tech: ["Node.js", "Express", "MongoDB", "GeoJSON"],
      link: "https://univents-dun.vercel.app/",
      github: "https://github.com/Milan-Bhimani/Univents",
      featured: true,
      category: "API"
    },
    {
      title: "DSA Visualizer",
      role: "Frontend Engineer",
      desc: "Interactive algorithm learning platform with real-time visualization.",
      tech: ["Flask", "JavaScript", "Canvas API", "Algorithms"],
      link: "https://dsa-visualizer-git-main-milans-projects-22ba0caf.vercel.app/",
      github: "https://github.com/Milan-Bhimani/DSA-Visualizer",
      featured: false,
      category: "EdTech"
    }
  ],
  skills: [
    { 
      category: "Backend", 
      icon: <Server />, 
      items: ["FastAPI", "Django", "Node.js", "Express", "REST APIs"] 
    },
    { 
      category: "Database", 
      icon: <Database />, 
      items: ["MongoDB", "Firebase", "MySQL"] 
    },
    { 
      category: "DevOps", 
      icon: <Terminal />, 
      items: ["Docker", "Git/GitHub", "CI/CD", "Linux"] 
    },
    { 
      category: "Frontend", 
      icon: <Layout />, 
      items: ["React", "JavaScript (ES6+)", "HTML5/CSS3"] 
    },
    { 
      category: "AI / ML", 
      icon: <Cpu />, 
      items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"] 
    }
  ]
};