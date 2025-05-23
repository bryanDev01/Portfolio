import {
  Contact,
  FileQuestion,
  HandHelping,
  Home,
  WorkflowIcon,
} from "lucide-react";

import { Icons } from "@/components/icons/icons";

export const navLinks = [
  { id: "Home", link: "Home", icon: Home },
  { id: "About", link: "About", icon: FileQuestion },
  { id: "Skills", link: "Skills", icon: HandHelping },
  { id: "Projects", link: "Projects", icon: WorkflowIcon },
  { id: "Contact", link: "Contact", icon: Contact },
];

export const projects = {
  project1: {
    src: "/VL.jpg",
    name: "Virtual Library",
    stars: 3,
    description:
      "A React-based book organizer with a list of available books and a customizable reading list. Users can filter by genre, see real-time counters, and move books between lists. Data persists in local storage, and changes sync across browser tabs without a backend.",
    stack: [
      { id: 1, tec: "Next JS" },
      { id: 2, tec: "TypeScript" },
      { id: 3, tec: "Tailwind CSS" },
    ],
    gitHref: "https://github.com/bryanDev01/Virtual-Library",
    pageHref: "https://atom-lib.netlify.app/",
  },
  project2: {
    src: "/ToDo.jpg",
    name: "Todo App",
    stars: 2,
    description:
      "A To-Do App designed to enhance time organization, helping users streamline their tasks and boost overall productivity. By providing an intuitive interface for task management, it enables better prioritization, reduces procrastination, and promotes efficient daily planning.",
    stack: [
      { id: 1, tec: "Next JS" },
      { id: 2, tec: "TypeScript" },
      { id: 3, tec: "Tailwind CSS" },
      { id: 4, tec: "Prisma ORM" },
      { id: 5, tec: "Postgre SQL" },
    ],
    gitHref: "https://github.com/bryanDev01/Virtual-Library",
    pageHref: "https://to-do-app-seven-dun.vercel.app/",
  },
};

export const skills = {
  frontend: {
    icon: Icons[0],
    title: "Frontend Development",
    description:
      "Building beautiful, responsive user interfaces with modern web technologies",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 65 },
      { name: "HTML5", level: 90 },
      { name: "CSS3/SCSS", level: 85 },
    ],
  },
  frameworks: {
    icon: Icons[1],
    title: "Frameworks & Libraries",
    description: "Leveraging powerful tools to create scalable applications",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Zustand", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "Angular.js", level: 45 },
      { name: "Astro", level: 35 },
      { name: "Django", level: 60 },
      { name: "Shad Cn UI", level: 80 },
    ],
  },
  backend: {
    icon: Icons[2], // Asume que tienes un ícono "Server"
    title: "Backend & Databases",
    description: "Server-side solutions and data management",
    skills: [
      { name: "Supabase", level: 75 },
      { name: "Strapi", level: 75 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 65 },
      { name: "Prisma", level: 70 },
    ],
  },
  tools: {
    icon: Icons[3],
    title: "Tools & Others",
    description: "Mastering development tools and workflows",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Figma", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Jest", level: 50 },
    ],
  },
};
