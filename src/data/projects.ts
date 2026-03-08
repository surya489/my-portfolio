export const projects = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    image: "/public/taskflow",
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
  },
  {
    slug: "auth-system",
    title: "Authentication System",
    image: "/public/auth-system",
    description:
      "Secure authentication system with login, registration, and protected routes.",
    tech: ["Next.js", "JWT", "Prisma", "PostgreSQL"],
    github: "https://github.com/yourusername/auth-system",
    demo: "https://auth-demo.vercel.app",
    content: `
      This project demonstrates a secure authentication workflow with login,
      registration, protected routes, and session management.
    `,
  },
];