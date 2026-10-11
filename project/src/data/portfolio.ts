import {
  Cloud,
  Code2,
  Database,
  Github,
  Globe,
  Layout,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Brain,
  Terminal,
  Zap,
  Trophy,
  Award,
  Briefcase,
  Rocket,
  BookOpen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface PersonalInfo {
  name: string;
  roleBadge: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  /** Optional headshot image URL — swap in a real photo without changing layout. */
  profileImage?: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Ayush Kumar Srivastava',
  roleBadge: 'Full-Stack Developer | Azure Certified | GenAI Enthusiast',
  tagline:
    'Architecting cloud-native backends, reactive web interfaces, and intelligent AI solutions.',
  email: 'sayushkumar33@gmail.com',
  phone: '+91-6389687747',
  location: 'Prayagraj, UP, India',
  linkedin: 'https://www.linkedin.com/in/ayush-srivastava-0086ba37b',
  github: 'https://github.com/ayushks97',
  profileImage: undefined,
};

export const aboutBio = `3rd-year B.Tech Computer Science student at United College of Engineering and Research (AKTU), focused on full-stack web architecture, clean modular code, Data Structures & Algorithms, and cloud infrastructure.`;

export interface Stat {
  id: string;
  value: string;
  label: string;
  sub: string;
  icon: LucideIcon;
  accent: 'indigo' | 'cyan';
}

export const stats: Stat[] = [
  {
    id: 'rank',
    value: '58K+',
    label: 'National Rank',
    sub: 'Top percentile in National Aptitude Test out of 5.1L+ candidates',
    icon: Trophy,
    accent: 'indigo',
  },
  {
    id: 'certs',
    value: '4+',
    label: 'Industry Certifications',
    sub: 'Microsoft & Oracle certified (Azure, Fabric Data Engineer, Agentic AI)',
    icon: Award,
    accent: 'cyan',
  },
  {
    id: 'exp',
    value: '2+',
    label: 'Professional Experiences',
    sub: 'Ex-IBM Trainee & Campus Ambassador at E-Cell, IIT Bombay',
    icon: Briefcase,
    accent: 'indigo',
  },
];

export interface Certification {
  id: string;
  title: string;
  code: string;
  issuer: string;
  score: string;
  color: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  {
    id: 'az900',
    title: 'Microsoft Certified: Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    score: 'Passed',
    color: 'from-blue-500 to-indigo-600',
    icon: Cloud,
  },
  {
    id: 'dp700',
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    code: 'DP-700',
    issuer: 'Microsoft',
    score: 'Passed',
    color: 'from-cyan-500 to-blue-600',
    icon: Database,
  },
  {
    id: 'oracle-ai',
    title: 'Oracle Certified Foundations Associate: Agentic AI',
    code: 'Agentic AI',
    issuer: 'Oracle',
    score: '90%',
    color: 'from-red-500 to-orange-600',
    icon: Brain,
  },
  {
    id: 'ibm-intern',
    title: 'IBM Virtual Internship — Web & Mobile Development',
    code: 'PBEL',
    issuer: 'IBM',
    score: 'Completed',
    color: 'from-indigo-500 to-purple-600',
    icon: Code2,
  },
];

export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  current: boolean;
  description: string;
  icon: LucideIcon;
}

export const experiences: Experience[] = [
  {
    id: 'ecell',
    role: 'Campus Ambassador',
    org: 'E-Cell, IIT Bombay',
    period: 'Jul 2026 — Present',
    current: true,
    description:
      'Digital activation drives, entrepreneurship outreach, and student engagement initiatives bridging the campus community with the IIT Bombay startup ecosystem.',
    icon: Zap,
  },
  {
    id: 'ibm',
    role: 'Web & Mobile Development Intern (PBEL)',
    org: 'IBM',
    period: 'Jun 2025 — Aug 2025',
    current: false,
    description:
      'Developed responsive web interfaces, integrated REST APIs, and built cloud-aligned full-stack architecture modules during an intensive virtual internship program.',
    icon: Code2,
  },
  {
    id: 'self-driven',
    role: 'Full-Stack & Open Source Developer',
    org: 'Self-Driven',
    period: '2025 — Present',
    current: true,
    description:
      'Architecting React applications, custom UI component libraries, and cloud deployments across Netlify and Azure with a focus on clean, scalable code.',
    icon: Rocket,
  },
  {
    id: 'academic',
    role: 'Academic Project Lead & DSA Practitioner',
    org: 'UCER, Prayagraj',
    period: '2024 — Present',
    current: true,
    description:
      'Solved 100+ algorithmic problems on LeetCode & GFG in C++ & Java. Implemented relational schemas, normalization pipelines, and hardware 3D decoder models.',
    icon: BookOpen,
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  /** Optional URL for an embedded iframe preview modal. */
  previewUrl?: string;
  icon: LucideIcon;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'climato',
    title: 'Climato',
    subtitle: 'Real-Time Weather Analytics Dashboard',
    description:
      'Asynchronous weather tracking application featuring reactive state management, custom error handling, and a glassmorphic meteorological interface.',
    techStack: ['React.js', 'OpenWeather API', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://climato-weather-app.netlify.app/',
    githubUrl: 'https://github.com/ayushks97/climato-weather-app',
    previewUrl: 'https://climato-weather-app.netlify.app/',
    icon: Cloud,
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    id: 'login-page',
    title: 'Responsive Login Page',
    subtitle: 'UI/UX Design',
    description:
      'High-conversion, cross-device responsive user authentication layout emphasizing modern design tokens and accessibility standards.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design Tokens'],
    liveUrl: 'https://ayushks97.github.io/Login-page/',
    githubUrl: 'https://github.com/ayushks97/Login-page',
    icon: Layout,
    gradient: 'from-indigo-500/20 to-purple-600/20',
  },
];

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: 'indigo' | 'cyan';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Code2,
    accent: 'indigo',
    skills: ['Java', 'C++', 'C', 'Python', 'SQL', 'JavaScript (ES6+)'],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: Globe,
    accent: 'cyan',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'REST APIs',
      'Vite',
    ],
  },
  {
    id: 'cloud-ai',
    title: 'Cloud & AI',
    icon: Cloud,
    accent: 'indigo',
    skills: [
      'Microsoft Azure',
      'Cloud Infrastructure',
      'Generative AI',
      'LangChain',
      'MCP Architecture',
    ],
  },
  {
    id: 'core-tools',
    title: 'Core CS & Tools',
    icon: Terminal,
    accent: 'cyan',
    skills: [
      'Data Structures & Algorithms (DSA)',
      'DBMS',
      'Operating Systems',
      'TAFL',
      'OOP',
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Linux',
    ],
  },
];

export interface Social {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayush-srivastava-0086ba37b',
    icon: Linkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/ayushks97',
    icon: Github,
  },
];

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
}

export const contactInfo: ContactItem[] = [
  { id: 'email', label: 'Email', value: 'sayushkumar33@gmail.com', icon: Mail },
  { id: 'phone', label: 'Phone', value: '+91-6389687747', icon: Phone },
  { id: 'location', label: 'Location', value: 'Prayagraj, UP, India', icon: MapPin },
];

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
