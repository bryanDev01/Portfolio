import {
  Contact,
  FileQuestion,
  HandHelping,
  Home,
  WorkflowIcon,
} from "lucide-react";

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
    gitHref: "https://github.com/komikoh01/Virtual-Library",
    pageHref: "empty",
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
    gitHref: "https://github.com/komikoh01/Virtual-Library",
    pageHref: "empty",
  },
};
