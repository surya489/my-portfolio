export const FEATURED_PROJECTS_LIMIT = 3;
export const PROJECTS_PER_LOAD = 6;

export type Project = {
  slug: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  content: string;
  highlights: string[];
  caseStudy: {
    problem: string;
    approach: string[];
    challenges: string[];
    results: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    image: "/projects/taskflow.svg",
    description:
      "A task management platform that allows teams to create, manage, and track tasks efficiently.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    github: "https://github.com/yourusername/taskflow",
    demo: "https://taskflow-demo.vercel.app",
    content: `
      TaskFlow is a full-stack task management application designed to help teams
      organize work efficiently. The platform supports authentication, task
      creation, and project management features.
    `,
    highlights: [
      "Reduced task update friction by introducing reusable workflow components across the dashboard.",
      "Improved first-load speed by approximately 30% with route-level rendering optimizations.",
      "Increased team task visibility through role-based views and real-time status indicators.",
    ],
    caseStudy: {
      problem:
        "Teams were losing track of ownership and progress because task workflows were spread across multiple disconnected screens.",
      approach: [
        "Designed a single task lifecycle model and mapped it to reusable UI components.",
        "Implemented SSR for key listing pages and CSR for high-interaction task editing flows.",
        "Integrated API-driven filtering, assignment, and due-date workflows for faster updates.",
      ],
      challenges: [
        "Maintaining UI consistency across dashboard modules while adding new workflow states.",
        "Balancing SEO and performance requirements for public and authenticated routes.",
      ],
      results: [
        "Achieved smoother task updates with fewer clicks in core task flows.",
        "Improved page responsiveness and perceived speed in high-traffic task boards.",
        "Created a reusable component architecture for faster feature delivery.",
      ],
    },
  },
  {
    slug: "auth-system",
    title: "Authentication System",
    image: "/projects/auth-system.svg",
    description:
      "Secure authentication system with login, registration, and protected routes.",
    tech: ["Next.js", "JWT", "Prisma", "PostgreSQL"],
    github: "https://github.com/yourusername/auth-system",
    demo: "https://auth-demo.vercel.app",
    content: `
      This project demonstrates a secure authentication workflow with login,
      registration, protected routes, and session management.
    `,
    highlights: [
      "Implemented OAuth + credential flows with consistent UX and robust session handling.",
      "Reduced authentication-related support issues by improving validation and error states.",
      "Hardened protected route access with token lifecycle and route-level guards.",
    ],
    caseStudy: {
      problem:
        "The product needed secure authentication with multiple sign-in options and predictable authorization behavior across pages.",
      approach: [
        "Built a modular auth layer supporting email/password and provider logins.",
        "Introduced protected route middleware and role-aware page access control.",
        "Added clear validation, form feedback, and fallback states for failed sign-in attempts.",
      ],
      challenges: [
        "Ensuring session consistency across server and client rendering boundaries.",
        "Handling provider-specific OAuth edge cases while keeping one unified user flow.",
      ],
      results: [
        "Delivered a stable authentication baseline for future product modules.",
        "Improved login completion reliability with better feedback and guardrails.",
        "Enabled scalable user access control for protected features.",
      ],
    },
  },
];
