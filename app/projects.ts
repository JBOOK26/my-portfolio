import { Boxes, Dumbbell, Wallet, type LucideIcon } from "lucide-react";

export type ProjectStatus = "Course project" | "Prototype" | "In progress";

export type Project = {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  liveDemoUrl: string | null;
  screenshotPath: string | null;
  status: ProjectStatus;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "inventory-management-app",
    title: "Inventory Management App",
    category: "Team project · Inventory management",
    icon: Boxes,
    description:
      "A team-built inventory application with product and sales pages, API routes, MySQL, and authentication support.",
    technologies: ["Next.js", "React", "MySQL", "JWT"],
    repositoryUrl: "https://github.com/JBOOK26/Bucod-Dagoy-ADV101-final-project",
    liveDemoUrl: null,
    screenshotPath: null,
    status: "Course project",
    featured: true,
  },
  {
    id: "budgetbuddy",
    title: "BudgetBuddy",
    category: "Mobile app · Budget tracking",
    icon: Wallet,
    description:
      "A mobile budgeting app with account, transaction-entry, and transaction-history screens, built with Expo and React Native.",
    technologies: ["Expo", "React Native", "TypeScript", "Firebase"],
    repositoryUrl: "https://github.com/JBOOK26/BudgetBuddy",
    liveDemoUrl: null,
    screenshotPath: null,
    status: "Course project",
    featured: true,
  },
  {
    id: "gymsphere",
    title: "GymSphere",
    category: "Front-end prototype · Fitness",
    icon: Dumbbell,
    description:
      "A multi-section gym website prototype with membership and class-booking flows, built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repositoryUrl: "https://github.com/JBOOK26/HCI",
    liveDemoUrl: null,
    screenshotPath: null,
    status: "Prototype",
    featured: false,
  },
];
