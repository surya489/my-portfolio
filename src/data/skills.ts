export type SkillCategory = {
  title: string;
  description: string;
  skills: { name: string; level?: string; featured?: boolean }[];
};

export const skillsData = {
  frontend: {
    title: "Frontend Architecture",
    description: "Building fast, accessible, responsive UIs with modern component-driven workflows.",
    skills: [
      { name: "React.js", featured: true },
      { name: "Next.js (App Router)", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript (ES6+)", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "React Context API", featured: true },
      { name: "HTML5 & CSS3" },
      { name: "SCSS & Bootstrap" },
      { name: "Framer Motion" },
    ],
  },
  backend: {
    title: "Backend & APIs",
    description: "Scalable server architectures, RESTful services, and real-time communication.",
    skills: [
      { name: "Node.js", featured: true },
      { name: "Express.js", featured: true },
      { name: "Next.js API Routes", featured: true },
      { name: "REST APIs", featured: true },
      { name: "Socket.io", featured: true },
      { name: "OAuth & Auth Flows" },
    ],
  },
  databaseAndPayments: {
    title: "Data & Payments",
    description: "Databases, transactional payment integrations, and secure financial workflows.",
    skills: [
      { name: "MongoDB", featured: true },
      { name: "Primer.io (Payment Gateway)", featured: true },
      { name: "Stripe Integration" },
      { name: "Mongoose" },
    ],
  },
  analyticsAndTracking: {
    title: "Analytics & Tracking",
    description: "Server-side event attribution, user behavior monitoring, and conversion tracking.",
    skills: [
      { name: "Meta CAPI (Conversion API)", featured: true },
      { name: "Google Analytics 4", featured: true },
      { name: "Mixpanel", featured: true },
      { name: "Meta Ads & Pixels" },
    ],
  },
  toolsAndWorkflow: {
    title: "Tools & Ecosystem",
    description: "Modern developer tooling, version control, automated mailers, and CMS platforms.",
    skills: [
      { name: "Git & GitHub", featured: true },
      { name: "Resend Email API", featured: true },
      { name: "WordPress (Custom Themes/Plugins)", featured: true },
      { name: "Vercel" },
      { name: "Postman" },
      { name: "SSR, CSR & SEO Tuning" },
    ],
  },
};

// Backward-compatibility export for any components referencing the old skills array structure
export const skills = {
  frontend: [
    "React.js",
    "Next.js (App Router)",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "React Context API",
    "HTML5 / CSS3",
    "SCSS / Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Next.js API Routes",
    "REST APIs",
    "Socket.io",
    "Authentication",
  ],
  tools: [
    "Git",
    "GitHub",
    "Resend",
    "WordPress",
    "Vercel",
    "Postman",
  ],
  analytics: [
    "Meta CAPI",
    "Google Analytics",
    "Mixpanel",
    "Primer.io",
    "MongoDB",
  ],
};
