import { Briefcase, GraduationCap, BrainCircuit, Code, GanttChartSquare, Database, PenTool, Lightbulb, Users } from "lucide-react";

export const projectsData = [
  {
    title: "ChatAI: Conversational AI Application",
    description: "A full-stack, real-time conversational AI application with a dynamic, animated UI and secure multi-provider user authentication using Google Gemini.",
    techStack: ["React.js", "Node.js", "Firebase", "Google Gemini API", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://chatai-frontend-neon.vercel.app/",
    githubLink: "https://github.com/Athrvvv",
    image: "https://picsum.photos/600/400",
    imageHint: "AI chatbot"
  },
  {
    title: "Gesture-Controlled Car Racing Game",
    description: "An immersive car racing game controlled entirely by real-time hand gestures, using OpenCV and MediaPipe for accurate gesture recognition.",
    techStack: ["Python", "OpenCV", "MediaPipe", "Flask", "JavaScript"],
    liveLink: "http://landingpageforgccrg.vercel.app",
    githubLink: "https://github.com/Athrvvv/Gestured-Controlled-Car-Racing-Game",
    image: "https://picsum.photos/600/400",
    imageHint: "racing game"
  },
  {
    title: "Diabetes Prediction System",
    description: "A predictive machine learning model and interactive web app to assess diabetes risk based on key patient health metrics.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib"],
    liveLink: "https://diabetespredictionsystem-x2sefw8mxybx2xbskpr9fu.streamlit.app/",
    githubLink: "https://github.com/Athrvvv",
    image: "https://picsum.photos/600/400",
    imageHint: "medical dashboard"
  },
];

export const experienceData = [
  {
    company: "Mernix Consulting, Thane",
    role: "Intern",
    period: "July 2024 — August 2024",
    description: "Developed and deployed full-stack web applications using the MERN stack. Focused on building responsive UI, API integration, and real-time data management. Gained hands-on experience in Firebase for authentication and deployment.",
    icon: Briefcase
  },
];

export const educationData = [
  {
    institution: "Datta Meghe College of Engineering",
    degree: "Bachelor of Engineering (BE), Computer Science",
    period: "Nov 2022 — May 2026",
    details: "SGPA: 8.4/10.00",
    icon: GraduationCap,
  },
  {
    institution: "Champions College",
    degree: "Senior Secondary Education, Science Stream (HSC)",
    period: "June 2020 — May 2022",
    details: "GPA: 7.4/10.00",
    icon: GraduationCap,
  },
  {
    institution: "New Horizon Public School, Airoli",
    degree: "Secondary Education, CBSE",
    period: "June 2010 — May 2020",
    details: "GPA: 9.38/10.00",
    icon: GraduationCap,
  },
];

export const coCurricularData = [
  {
    role: "Co-General Secretary | CSI-CATT DMCE",
    period: "July 2025 - Present",
    description: "Contributed to CSI-DMCE organized Technitude, Logithon, and currently leading Codeathon with ideas on theme, workflow, and execution.",
    icon: Users,
  },
  {
    role: "Event Head | DMCE Milestone 2025",
    period: "July 2024 - Present",
    description: "Event Head of the College Sports Committee for Milestone 2025, managing sports events and ensuring smooth execution.",
    icon: Lightbulb,
  }
];

export const skillsData = [
  {
    category: "AI/ML",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Model Training & Deployment"]
  },
  {
    category: "Web Development",
    icon: Code,
    skills: ["MERN Stack", "Google AI Studio", "RESTful APIs", "Django", "Flask", "Streamlit", "AWS", "Firebase"]
  },
  {
    category: "Data Science",
    icon: GanttChartSquare,
    skills: ["Data Engineering", "Data Visualization", "Pandas", "NumPy", "Sci-kit Learn"]
  },
  {
    category: "Computer Vision",
    icon: PenTool,
    skills: ["OpenCV", "MediaPipe", "YOLO", "TensorFlow"]
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["RDBMS", "NoSQL", "Cloud Storage"]
  },
  {
    category: "Management",
    icon: Users,
    skills: ["Event Planning", "Team Leadership", "Workflow Execution"]
  }
];

export const contactDetails = {
  email: "atharvapkhond@gmail.com",
  phone: "+91-9594797470",
  linkedin: "https://linkedin.com/in/atharvakhond",
  github: "https://github.com/Athrvvv",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume Tailor", href: "#resume-tailor" },
  { name: "Contact", href: "#contact" },
];
