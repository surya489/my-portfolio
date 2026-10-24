export const FEATURED_PROJECTS_LIMIT = 4;
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
    slug: "blume-health",
    title: "Blume Health",
    image: "/projects/blume-health.svg",
    description:
      "A production digital weight loss and healthcare platform connecting users with licensed medical professionals, prescription treatments, and dynamic coaching.",
    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Primer.io",
      "Meta CAPI",
      "React Context API",
      "Node.js",
      "Mixpanel",
    ],
    github: "https://github.com/surya489",
    demo: "https://app.blumehealth.com",
    content: `
      Blume Health (app.blumehealth.com) is a modern healthcare web application designed to streamline patient intake, clinical screening, doctor consultations, and continuous prescription fulfillment.

      As the developer responsible for the frontend and server-side integration layer, I built the platform from scratch using the Next.js App Router, TypeScript, and Tailwind CSS. The core of the experience is an intuitive multi-step medical intake and screening questionnaire that adapts dynamically based on user health responses.

      The platform integrates Primer.io's payment infrastructure for subscription treatment plans, along with server-side event tracking via Meta Conversions API (CAPI) and client-side analytics via Google Analytics and Mixpanel to ensure high-fidelity funnel attribution.
    `,
    highlights: [
      "Built dynamic multi-step medical screening and onboarding workflow using React Context API",
      "Engineered server-side Next.js API routes for Meta CAPI event and conversion tracking",
      "Integrated Primer.io payment gateway for secure treatment plan subscriptions and checkout",
      "Implemented comprehensive user analytics with Google Analytics and Mixpanel",
      "Optimized rendering performance and API payloads for fast mobile and desktop loading",
    ],
    caseStudy: {
      problem:
        "Digital health intake processes often suffer from high drop-off rates due to complicated, multi-screen medical questionnaires and disjointed payment flows. The platform needed an engaging, trustworthy, HIPAA-conscious onboarding flow with seamless subscription payment and reliable event attribution.",
      approach: [
        "Architected a robust multi-step questionnaire flow using Next.js App Router and React Context API to manage complex branching state smoothly.",
        "Created custom Next.js API route handlers to securely dispatch server-side Meta Conversions API (CAPI) events, bypassing client-side ad blockers.",
        "Integrated the Primer.io Universal Checkout SDK to enable flexible, secure subscription payment methods.",
        "Developed modular, reusable UI components with Tailwind CSS for consistent brand feel and responsive performance.",
      ],
      challenges: [
        "Managing multi-step health questionnaire state without unnecessary re-renders or losing progress on browser refresh.",
        "Synchronizing client-side analytics with server-side CAPI event deduplication.",
        "Ensuring rapid page load speeds across diverse mobile devices and network speeds.",
      ],
      results: [
        "Delivered a seamless, production-grade healthcare onboarding and treatment platform.",
        "Achieved reliable server-side conversion tracking with near-zero attribution loss.",
        "Increased questionnaire completion and checkout conversion through intuitive UX.",
      ],
    },
  },
  {
    slug: "dofe-award",
    title: "The Duke of Edinburgh's Award",
    image: "/projects/dofe-award.svg",
    description:
      "Production web components and responsive pages for the Duke of Edinburgh's Award website, serving millions of young participants internationally.",
    tech: ["React.js", "Next.js", "WordPress", "JavaScript (ES6+)", "UI Performance", "CSS3"],
    github: "https://github.com/surya489",
    demo: "https://www.dofe.org",
    content: `
      The Duke of Edinburgh's Award (dofe.org) is the UK's leading youth achievement award, supporting young people in building skills, resilience, and community contribution.

      During my tenure at Handbuiltapps, I developed responsive pages and custom WordPress components for the platform. The project demanded high cross-browser compatibility, accessible navigation, and strict performance optimizations to handle high visitor traffic.
    `,
    highlights: [
      "Built responsive pages and reusable custom WordPress components for dofe.org",
      "Audited and enhanced UI performance, reducing bounce rates and page load times",
      "Ensured strict cross-browser compatibility across legacy and modern mobile devices",
      "Collaborated closely with remote international teams to maintain brand consistency",
    ],
    caseStudy: {
      problem:
        "A platform of international scale required fast-loading, highly accessible components that would look and perform reliably across all browsers, screen sizes, and varying network conditions.",
      approach: [
        "Developed modular, lightweight UI components adhering to modern accessibility (WCAG) guidelines.",
        "Refactored heavy styling and asset loading sequences to improve Core Web Vitals.",
        "Implemented rigorous cross-browser testing for consistent typography and interactive states.",
      ],
      challenges: [
        "Balancing rich visual brand guidelines with lightweight frontend bundle sizes.",
        "Integrating custom dynamic components with existing WordPress backends cleanly.",
      ],
      results: [
        "Significantly improved page responsiveness and user interaction speeds.",
        "Ensured seamless viewing experience for millions of international students and organizers.",
      ],
    },
  },
  {
    slug: "turtl-co",
    title: "Turtl.co",
    image: "/projects/turtl-co.svg",
    description:
      "Dynamic digital content and psychology-backed document publishing platform, integrating third-party APIs and rich interactive components.",
    tech: ["React.js", "JavaScript (ES6+)", "REST APIs", "WordPress", "Tailwind CSS"],
    github: "https://github.com/surya489",
    demo: "https://turtl.co",
    content: `
      Turtl (turtl.co) is an innovative digital document and content platform scientifically proven to increase reader engagement through psychological design principles.

      I developed responsive UI components, integrated third-party REST APIs for dynamic content handling, and maintained custom WordPress-based features to power marketing and customer experiences.
    `,
    highlights: [
      "Engineered dynamic UI components backed by AJAX and third-party REST APIs",
      "Maintained and enhanced core WordPress theme templates and interactive modules",
      "Implemented responsive layouts tested across multiple resolutions and mobile devices",
    ],
    caseStudy: {
      problem:
        "The marketing and product interface needed fast-rendering dynamic modules to showcase interactive documents and integrate with external APIs without slowing down page load.",
      approach: [
        "Designed clean component-level state handling for API responses.",
        "Built modular layouts with CSS/Tailwind patterns that adapt fluidly to screen dimensions.",
        "Streamlined script dependencies to avoid layout shifts (CLS).",
      ],
      challenges: [
        "Handling asynchronous third-party API data while maintaining smooth UI feedback.",
        "Keeping custom component code maintainable alongside evolving brand assets.",
      ],
      results: [
        "Delivered fast, interactive interface elements that boosted user engagement.",
        "Improved content maintenance workflows for the marketing and product teams.",
      ],
    },
  },
  {
    slug: "ragigudda-temple",
    title: "Ragigudda Temple Portal",
    image: "/projects/ragigudda-temple.svg",
    description:
      "A fully responsive cultural and information portal detailing temple history, darshan timings, festive events, and visitor services.",
    tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design", "WordPress"],
    github: "https://github.com/surya489",
    demo: "https://ragigudda.org",
    content: `
      Ragigudda Anjaneya Temple is one of Bangalore's most visited spiritual landmarks. The temple administration needed a modern, accessible, fully responsive web portal to communicate daily darshan timings, special pooja bookings, festival schedules, and charitable activities.

      I built the responsive frontend interface, structured the content hierarchy, and ensured fast loading even on 2G/3G mobile connections for visitors.
    `,
    highlights: [
      "Created fully responsive informational layout covering events, darshan, and facilities",
      "Designed mobile-first navigation for devotees seeking quick schedule information",
      "Improved cross-browser compatibility and optimized image assets for instant loading",
    ],
    caseStudy: {
      problem:
        "Devotees and visitors struggled to find accurate daily timings and festival updates due to outdated web pages and lack of mobile responsiveness.",
      approach: [
        "Designed a clean, mobile-first information architecture with instant access to darshan hours.",
        "Built accessible and readable tables, cards, and calendar views for upcoming poojas.",
        "Optimized all media and assets to load smoothly under varying mobile networks.",
      ],
      challenges: [
        "Organizing complex multi-schedule religious events in an easy-to-read mobile format.",
        "Ensuring high readability for senior citizens and diverse visitor demographics.",
      ],
      results: [
        "Greatly simplified visitor schedule discovery on mobile devices.",
        "Provided the temple trust with an easy-to-maintain, modern web presence.",
      ],
    },
  },
  {
    slug: "surya-js-learning",
    title: "JS Concepts & Visualizer",
    image: "/projects/js-learning.svg",
    description:
      "Interactive JavaScript learning platform with runnable code examples, Monaco Editor playground, and event loop visualizer.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/surya489/surya-js-journey",
    demo: "https://surya-js-journey-rcut.vercel.app",
    content: `
      Surya JS Journey is an interactive learning platform I built while deepening my mastery of JavaScript internals. 
      The platform organizes fundamentals into structured sections where developers can experiment with live code, solve challenges, and visualize the call stack, microtask queue, and macrotask queue.
    `,
    highlights: [
      "Interactive JavaScript concepts with runnable live snippets",
      "Integrated Monaco Editor for a VS Code-like browser playground",
      "Event loop visualizer demonstrating asynchronous JavaScript execution",
    ],
    caseStudy: {
      problem:
        "Traditional documentation often fails to make execution context, closures, and the event loop intuitive.",
      approach: [
        "Built an interactive visualizer and code playground with Next.js App Router and Tailwind CSS.",
        "Provided live execution feedback to help developers test mental models of JS execution.",
      ],
      challenges: [
        "Creating a safe in-browser code execution sandbox with real-time state visualization.",
      ],
      results: [
        "Created an interactive reference tool used by peer developers preparing for technical interviews.",
      ],
    },
  },
  {
    slug: "bright-croissant",
    title: "Bright Croissant",
    image: "/projects/bright-croissant.svg",
    description:
      "A high-conversion fitness guide landing page focused on workout programs, memberships, and motivational CTA flows.",
    tech: ["React", "CSS3", "JavaScript"],
    github: "https://github.com/surya489",
    demo: "https://bright-croissant-8a96cd.netlify.app/",
    content: `
      Bright Croissant is a fitness-focused landing experience built to promote body transformation programs. The site includes a hero section with key fitness stats, program categories, membership plans, testimonials, and email conversion CTAs.
    `,
    highlights: [
      "Structured landing page around high-conversion fitness sections from hero to pricing plans",
      "Showcased trust indicators like coach counts, member numbers, and program totals",
      "Designed reusable cards for programs and plan tiers to keep content easy to scan",
    ],
    caseStudy: {
      problem:
        "The product needed a clear fitness-brand landing page that could communicate programs, value, and conversion actions in one continuous flow.",
      approach: [
        "Designed a fitness-first narrative from headline and progress stats to plans and testimonials.",
        "Built modular sections for Programs, Why Choose Us, Pricing, and final email CTA.",
      ],
      challenges: ["Balancing dense landing-page content while keeping it readable and engaging."],
      results: ["Delivered a focused fitness guide experience with strong section-by-section clarity."],
    },
  },
  {
    slug: "attendance-tracker",
    title: "Attendance Tracker",
    image: "/projects/attendance-tracker.svg",
    description:
      "An attendance management application to track participation records with simple, productivity-oriented workflows.",
    tech: ["Next.js", "React", "JavaScript", "Vercel"],
    github: "https://github.com/surya489/attendence-tracker",
    demo: "https://attendence-tracker-delta.vercel.app/",
    content: `
      Attendance Tracker supports day-to-day attendance updates with an interface designed for quick actions and easy status tracking.
    `,
    highlights: [
      "Designed quick attendance entry flow for everyday usage",
      "Focused on clear status visibility to reduce record confusion",
      "Built with a responsive structure for regular mobile access",
    ],
    caseStudy: {
      problem:
        "Manual attendance handling can be error-prone and inefficient without a clear tracking system.",
      approach: [
        "Built a streamlined UI for marking and reviewing attendance.",
        "Applied concise status representation for faster understanding.",
      ],
      challenges: ["Keeping the workflow fast while preserving data clarity."],
      results: ["Delivered a practical productivity tool for recurring use."],
    },
  },
  {
    slug: "ecommerce-carousel",
    title: "E-commerce Carousel",
    image: "/projects/ecommerce-carousel.svg",
    description:
      "A product-focused carousel interface for showcasing items with smooth transitions and clean card layouts.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/surya489/ecommerce_carousel",
    demo: "https://ecommerce-carousel.netlify.app/",
    content: `
      E-commerce Carousel demonstrates product browsing patterns, interactive transitions, and layout choices that support quick product discovery.
    `,
    highlights: [
      "Built product slider interactions with focus on smooth navigation",
      "Structured product cards for quick scanning and readability",
      "Maintained responsive behavior for mobile and desktop browsing",
    ],
    caseStudy: {
      problem: "Product-heavy layouts can feel crowded without a clear browsing mechanism.",
      approach: [
        "Implemented carousel-driven navigation to reduce visual overload.",
        "Designed product cards with concise content hierarchy.",
      ],
      challenges: ["Balancing animation smoothness with performance."],
      results: ["Delivered a cleaner shopping-style UI experience."],
    },
  },
  {
    slug: "date-picker-reminder",
    title: "Date Picker Add Reminder",
    image: "/projects/date-picker-reminder.svg",
    description:
      "A date and reminder utility app for scheduling and managing tasks with a clean interface.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/surya489",
    demo: "https://date-picker-add-reminder.netlify.app/",
    content: `
      This project helps users add date-based reminders quickly with a simple productivity-focused workflow and clear UI feedback.
    `,
    highlights: [
      "Created a straightforward reminder flow with minimal user friction",
      "Focused on form usability and clear state updates during interactions",
    ],
    caseStudy: {
      problem: "Users needed a simple way to create and track reminders without complex setup.",
      approach: ["Built compact form controls with clear input and confirmation flow."],
      challenges: ["Handling date-related input behavior across browsers."],
      results: ["Delivered a practical reminder experience with clear user steps."],
    },
  },
  {
    slug: "tooltip-landing-page",
    title: "Tooltip Landing Page",
    image: "/projects/tooltip-landing-page.svg",
    description:
      "A landing page project focused on contextual tooltip patterns and polished visual storytelling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/surya489/tooltip",
    demo: "https://tooltip-landing-page.netlify.app/",
    content: `
      Tooltip Landing Page highlights contextual interactions and lightweight guidance patterns that improve discoverability.
    `,
    highlights: [
      "Implemented tooltip interactions to support contextual information display",
      "Built responsive sections with balanced typography and spacing",
    ],
    caseStudy: {
      problem: "The page needed to communicate feature context clearly without cluttering the interface.",
      approach: ["Introduced tooltip triggers with concise supporting content."],
      challenges: ["Avoiding tooltip overuse that can distract from primary content."],
      results: ["Improved contextual clarity for feature descriptions."],
    },
  },
  {
    slug: "youtube-clone",
    title: "YouTube Clone",
    image: "/projects/youtube-clone.svg",
    description:
      "A video-platform style frontend clone featuring content cards, category browsing, and search-oriented layouts.",
    tech: ["React", "JavaScript", "API Integration"],
    github: "https://github.com/surya489",
    demo: "https://surya-youtube-clone.netlify.app/",
    content: `
      This clone project recreates key video browsing experiences like content feeds, layout composition, and category-focused discovery.
    `,
    highlights: [
      "Recreated familiar video-platform UI structure and navigation patterns",
      "Built content-card grid and list experiences for fast browsing",
    ],
    caseStudy: {
      problem: "Video content interfaces require strong layout consistency for quick content discovery.",
      approach: ["Modeled page structure around feed, cards, and navigation blocks."],
      challenges: ["Maintaining a clean hierarchy with dense content cards."],
      results: ["Delivered a familiar browsing experience for end users."],
    },
  },
  {
    slug: "solar-planet-form",
    title: "Solar Planet Form",
    image: "/projects/solar-planet-form.svg",
    description:
      "A form-driven web app centered on structured input capture, validation, and user-friendly completion flow.",
    tech: ["React", "JavaScript", "Form Validation"],
    github: "https://github.com/surya489/solar_form",
    demo: "https://solarplanetform.netlify.app/",
    content: `
      Solar Planet Form focuses on data collection UX with clear form sections, validation, and user guidance for reliable submissions.
    `,
    highlights: [
      "Implemented clear validation behavior with focused error messaging",
      "Improved completion flow with structured fields and visual grouping",
    ],
    caseStudy: {
      problem: "Complex forms often create drop-offs when instructions and feedback are unclear.",
      approach: ["Separated form fields into logical groups for easier completion."],
      challenges: ["Balancing validation strictness with user-friendly messaging."],
      results: ["Improved form usability and data quality."],
    },
  },
  {
    slug: "comfort-learning",
    title: "Comfort Learning",
    image: "/projects/comfort-learning.svg",
    description:
      "A learning-focused web experience for presenting course-style content with clarity and structure.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/surya489/comfort_learning",
    demo: "https://comfort-learning.netlify.app/",
    content: `
      Comfort Learning is an education-oriented frontend project with emphasis on content readability, section flow, and responsive design.
    `,
    highlights: [
      "Built a learner-friendly content layout with clear section sequencing",
      "Improved readability through spacing and typography choices",
    ],
    caseStudy: {
      problem: "Educational content can feel overwhelming without clear presentation structure.",
      approach: ["Designed sections around progressive information flow."],
      challenges: ["Keeping long-form content engaging and easy to scan."],
      results: ["Delivered a smoother reading and learning experience."],
    },
  },
];
