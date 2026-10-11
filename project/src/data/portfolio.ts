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
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const personalInfo = {
  name: 'Ayush Kumar Srivastava',
  roleBadge: 'Full-Stack Developer | Azure Certified | GenAI Enthusiast',
  tagline:
    'Architecting cloud-native backends, reactive web interfaces, and intelligent AI solutions.',
  email: 'sayushkumar33@gmail.com',
  phone: '+91-6389687747',
  location: 'Prayagraj, UP, India',
  linkedin: 'https://www.linkedin.com/in/ayush-srivastava-0086ba37b',
  github: 'https://github.com/ayushks97',
};

export const aboutBio = `Third-year B.Tech Computer Science student at United College of Engineering and Research (AKTU), driven by high-performance engineering, clean code, and cloud infrastructure.`;

export const stats = [
  {
    id: 'rank',
    value: '58K+',
    label: 'National Rank',
    sub: 'Top percentile in National Aptitude Test',
    icon: Trophy,
    accent: 'indigo',
  },
  {
    id: 'certs',
    value: '4+',
    label: 'Industry Certifications',
    sub: 'Microsoft & Oracle certified',
    icon: Award,
    accent: 'cyan',
  },
  {
    id: 'exp',
    value: '2',
    label: 'Professional Experiences',
    sub: 'Ex-IBM Trainee & IIT Bombay Ambassador',
    icon: Briefcase,
    accent: 'indigo',
  },
] as const;

export const certifications = [
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
    title: 'IBM PBEL Virtual Internship',
    code: 'Web & Mobile',
    issuer: 'IBM',
    score: 'Completed',
    color: 'from-indigo-500 to-purple-600',
    icon: Code2,
  },
];

export const experiences = [
  {
    id: 'ecell',
    role: 'Campus Ambassador',
    org: 'E-Cell, IIT Bombay',
    period: 'Jul 2026 — Present',
    current: true,
    description:
      'Representing the entrepreneurial cell on campus, driving awareness of innovation initiatives, and bridging the gap between students and the IIT Bombay startup ecosystem.',
    icon: Zap,
  },
  {
    id: 'ibm',
    role: 'Web & Mobile Development Intern (PBEL)',
    org: 'IBM',
    period: 'Jun 2025 — Aug 2025',
    current: false,
    description:
      'Completed an intensive virtual internship focused on building responsive web and mobile applications, mastering modern development workflows, and delivering production-ready UI components.',
    icon: Code2,
  },
];

export const projects = [
  {
    id: 'climato',
    title: 'Climato',
    subtitle: 'Real-Time Weather Analytics Dashboard',
    description:
      'Asynchronous weather tracking application featuring reactive state management, custom error handling, and a sleek glassmorphic meteorological interface.',
    techStack: ['React.js', 'OpenWeather API', 'Tailwind CSS'],
    liveUrl: 'https://climato-weather-app.netlify.app/',
    githubUrl: 'https://github.com/ayushks97/climato-weather-app',
    icon: Cloud,
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    id: 'login-page',
    title: 'Responsive Login Page',
    subtitle: 'UI/UX Design',
    description:
      'High-conversion, cross-device responsive user authentication layout emphasizing modern design tokens and accessibility standards.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
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
  accent: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    accent: 'indigo',
    skills: ['Java', 'C++', 'C', 'Python', 'SQL'],
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
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'REST APIs',
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
    skills: ['DSA', 'DBMS', 'OS', 'TAFL', 'OOP', 'Git', 'GitHub', 'VS Code', 'Postman', 'Linux'],
  },
];

export const socials = [
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

export const contactInfo = [
  { id: 'email', label: 'Email', value: 'sayushkumar33@gmail.com', icon: Mail },
  { id: 'phone', label: 'Phone', value: '+91-6389687747', icon: Phone },
  { id: 'location', label: 'Location', value: 'Prayagraj, UP, India', icon: MapPin },
];
