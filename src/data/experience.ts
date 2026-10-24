export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlightProject?: {
    name: string;
    url?: string;
    description: string;
  };
  description: string[];
  technologies?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack / Frontend Developer",
    company: "Sparkout Tech Solutions, Coimbatore",
    period: "Feb 2025 – Mar 2026",
    location: "Coimbatore, Tamil Nadu",
    highlightProject: {
      name: "Blume Health",
      url: "https://app.blumehealth.com",
      description:
        "Digital weight loss and healthcare platform connecting users with licensed medical professionals, prescription treatments, and coaching.",
    },
    description: [
      "Built a production-grade healthcare web application from scratch using Next.js (App Router), TypeScript, and Tailwind CSS.",
      "Developed custom Next.js API routes for server-side event and conversion tracking (Meta CAPI).",
      "Integrated Primer.io payment gateway for secure subscription and treatment plan purchases.",
      "Integrated Google Analytics, Mixpanel, and Meta Ads for detailed user behavior and conversion tracking.",
      "Built reusable UI components with state managed through React Context API; improved performance via optimized rendering and efficient API handling.",
      "Collaborated with cross-functional teams to design, architect, and ship high-reliability scalable features.",
    ],
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Primer.io",
      "Meta CAPI",
      "React Context API",
      "Node.js",
      "Mixpanel",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Handbuiltapps, Trichy",
    period: "Apr 2023 – Jul 2024",
    location: "Trichy, Tamil Nadu",
    highlightProject: {
      name: "DofE & Turtl.co",
      url: "https://dofe.org",
      description:
        "High-impact web platforms including Duke of Edinburgh's Award website and dynamic content platform Turtl.co.",
    },
    description: [
      "Built responsive web applications with React.js and Next.js; developed custom WordPress themes and plugins.",
      "Integrated third-party APIs and implemented AJAX-based dynamic data handling for smooth client-side interactions.",
      "Developed eCommerce platforms with secure payment gateway integrations and streamlined checkout workflows.",
      "Delivered production-ready applications in an agile team environment with strict cross-browser compatibility and UI performance benchmarks.",
      "Built custom WordPress components for Duke of Edinburgh's Award website (dofe.org); improved UI performance and accessibility.",
      "Maintained WordPress-based features and integrated third-party APIs for dynamic content on Turtl.co.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "WordPress",
      "JavaScript (ES6+)",
      "REST APIs",
      "AJAX",
      "Payment Gateways",
      "SEO",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Zersys Technologies, Bangalore",
    period: "Aug 2022 – Mar 2023",
    location: "Bangalore, Karnataka",
    highlightProject: {
      name: "Ragigudda Temple Website",
      description:
        "Fully responsive cultural and visitor information site covering events, history, darshan timings, and details.",
    },
    description: [
      "Built responsive UI with HTML, CSS, JavaScript, and React.js; customized WordPress sites using page builders and custom code.",
      "Engineered reusable layout components and resolved cross-browser compatibility and UI performance bottlenecks.",
      "Delivered the Ragigudda Temple Website: a fully responsive information portal covering events, historical archives, darshan timings, and visitor schedules.",
      "Collaborated closely with senior engineers to follow component-driven design standards.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "WordPress",
      "Responsive Web Design",
    ],
  },
  {
    role: "Process Executive",
    company: "Cognizant Technology Solutions, Coimbatore",
    period: "Jan 2021 – May 2022",
    location: "Coimbatore, Tamil Nadu",
    description: [
      "Processed claims, invoices, and complex healthcare/insurance data entry with high accuracy and tight turnaround SLA.",
      "Analyzed provider/payer operational data using Microsoft Excel and SharePoint to identify and resolve workflow bottlenecks.",
      "Maintained zero-defect quality standards across daily operations and coordinated with cross-functional service teams.",
    ],
    technologies: ["Data Analysis", "MS Excel", "SharePoint", "Workflow Optimization"],
  },
];
