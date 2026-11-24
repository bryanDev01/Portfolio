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
    src: "/Inventario.jpg",
    name: "Inventario",
    stars: 4,
    description:
      "Full-stack inventory and point-of-sale system: multi-warehouse stock with atomic PostgreSQL transactions (no negative stock under concurrency), role-based auth, sales vouchers in CUP with custom exchange rate, thermal printing, and PDF/Word report exports.",
    stack: [
      { id: 1, tec: "Next JS" },
      { id: 2, tec: "TypeScript" },
      { id: 3, tec: "Tailwind CSS" },
      { id: 4, tec: "Supabase" },
      { id: 5, tec: "PostgreSQL" },
    ],
    gitHref: "https://github.com/bryanDev01/InventarioDemo",
    pageHref: "https://inventario-demo-two.vercel.app/",
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
  project3: {
    src: "/CostaVerde.png",
    name: "Costa Verde Social Club",
    stars: 5,
    description:
      "Full-stack reservation & membership platform for a social club (fictitious brand demo of a private client project): HR bulk-employee preloading with CI-validated registration, manual Transfermóvil payment reconciliation, real-time capacity control with pessimistic locking (SELECT ... FOR UPDATE) and weekly reservation limits, signed QR digital membership cards with receptionist check-in, subscription lifecycle with grace-period auto-suspension via cron, admin/HR/reception dashboards, occupancy & revenue report exports, and a white-label branding layer driven entirely by environment variables. Multi-tenant PostgreSQL on Aiven, JWT role-based access.",
    stack: [
      { id: 1, tec: "Next JS" },
      { id: 2, tec: "TypeScript" },
      { id: 3, tec: "Tailwind CSS" },
      { id: 4, tec: "Express JS" },
      { id: 5, tec: "Node JS" },
      { id: 6, tec: "PostgreSQL" },
    ],
    gitHref: "https://github.com/bryanDev01/CostaVerde-SocialClub-demo",
    pageHref: "https://am-social-club-frontend.vercel.app/",
  },
};

export const skills = {
  frontend: {
    icon: Icons[0],
    title: "Frontend Development",
    description:
      "Building beautiful, responsive user interfaces with modern web technologies",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  frameworks: {
    icon: Icons[1],
    title: "Frameworks & Libraries",
    description: "Leveraging powerful tools to create scalable applications",
    skills: [
      { name: "Tailwind CSS" },
      { name: "Zustand" },
      { name: "Next.js" },
      { name: "Astro.js" },
      { name: "Shad Cn UI" },
    ],
  },
  backend: {
    icon: Icons[2], // Asume que tienes un ícono "Server"
    title: "Backend & Databases",
    description: "Server-side solutions and data management",
    skills: [
      {name:"Node js"},
      {name: "Express js"},
      { name: "Supabase" },
      { name: "Strapi" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
    ],
  },
  tools: {
    icon: Icons[3],
    title: "Tools & Others",
    description: "Mastering development tools and workflows",
    skills: [
      { name: "Git/GitHub" },
      { name: "Docker" },
    ],
  },
};
