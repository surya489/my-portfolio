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
    slug: "surya-js-learning",
    title: "JS Concepts",
    image: "/projects/bright-croissant.svg",
    description:
      "Learn JavaScript with clear concepts, runnable examples, and focused practice.",
    tech: ["React", "Next", "TypeScript", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/surya489/surya-js-journey",
    demo: "https://surya-js-journey-rcut.vercel.app",
    content: `
      Surya JS Journey is an interactive learning platform I built while preparing for frontend interviews. 
      Instead of simply taking notes, I wanted to learn JavaScript by implementing concepts and experimenting with real code.

      The platform organizes JavaScript fundamentals into structured sections where users can explore concepts, 
      run code examples, solve challenges, and visualize how JavaScript works internally.

      It focuses on making learning practical and interactive, helping developers strengthen their understanding 
      of JavaScript fundamentals through hands-on experimentation.
    `,
    highlights: [
      "Interactive JavaScript concepts with runnable examples",
      "Built-in playground using Monaco Editor for real-time experimentation",
      "Event loop visualizer demonstrating call stack, microtask queue, and macrotask queue",
    ],
    caseStudy: {
      problem:
        "While preparing for frontend interviews, I noticed that traditional note-taking was not helping me deeply understand JavaScript concepts. I wanted a more interactive way to study where I could implement ideas, experiment with code, and visualize how JavaScript actually executes.",

      approach: [
        "Designed a learning workflow where users first study a concept, then experiment with code in a playground, and finally reinforce understanding through challenges.",
        "Built the platform using Next.js App Router with React components and Tailwind CSS for a clean, developer-focused UI.",
        "Integrated Monaco Editor to provide a code editor experience similar to VS Code for running and experimenting with JavaScript snippets.",
      ],
      challenges: [
        "Designing a simple but effective UI that keeps learners focused on concepts without overwhelming them.",
        "Structuring the content so concepts, examples, and interactive tools work together smoothly.",
      ],
      results: [
        "Created a developer-focused learning platform that combines theory with hands-on experimentation.",
        "Improved my own understanding of JavaScript internals while building the platform.",
        "Developed stronger frontend architecture, UI/UX design thinking, and problem-solving skills.",
      ],
    },
  },
  {
    slug: "bright-croissant",
    title: "Bright Croissant",
    image: "/projects/bright-croissant.svg",
    description:
      "A fitness guide landing website focused on workout programs, memberships, and motivational CTA flows.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/surya489",
    demo: "https://bright-croissant-8a96cd.netlify.app/",
    content: `
      Bright Croissant is a fitness-focused landing experience built to promote
      body transformation programs. The site includes a hero section with key
      fitness stats, program categories (Strength, Cardio, Fat Burning, Health
      Fitness), membership plans, testimonials, and an email conversion CTA.
    `,
    highlights: [
      "Structured the landing page around high-conversion fitness sections from hero to pricing plans.",
      "Showcased trust indicators like coach counts, member numbers, and program totals.",
      "Designed reusable cards for programs and plan tiers to keep the content easy to scan.",
    ],
    caseStudy: {
      problem:
        "The product needed a clear fitness-brand landing page that could communicate programs, value, and conversion actions in one continuous flow.",
      approach: [
        "Designed a fitness-first narrative from headline and progress stats to plans and testimonials.",
        "Built modular sections for Programs, Why Choose Us, Pricing, and final email CTA.",
        "Used consistent visual hierarchy and bold accent colors to guide user attention.",
      ],
      challenges: [
        "Balancing dense landing-page content while keeping it readable and engaging.",
        "Maintaining responsive layout quality across cards, stats, and pricing blocks.",
      ],
      results: [
        "Delivered a focused fitness guide experience with strong section-by-section clarity.",
        "Improved discoverability of programs and plan options through structured cards.",
        "Created a reusable landing template pattern for future wellness and coaching pages.",
      ],
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
      This project helps users add date-based reminders quickly with a simple,
      productivity-focused workflow and clear UI feedback.
    `,
    highlights: [
      "Created a straightforward reminder flow with minimal user friction.",
      "Focused on form usability and clear state updates during interactions.",
      "Designed lightweight components to keep performance smooth.",
    ],
    caseStudy: {
      problem:
        "Users needed a simple way to create and track reminders without complex setup.",
      approach: [
        "Built compact form controls with clear input and confirmation flow.",
        "Added date-based input handling and reminder-oriented UI states.",
        "Prioritized readability and quick task entry over heavy features.",
      ],
      challenges: [
        "Handling date-related input behavior across browsers.",
        "Keeping interaction flow simple while still being informative.",
      ],
      results: [
        "Delivered a practical reminder experience with clear user steps.",
        "Reduced input confusion with better field guidance.",
        "Built a reusable base for future scheduling features.",
      ],
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
      Tooltip Landing Page highlights contextual interactions and lightweight
      guidance patterns that improve discoverability for users.
    `,
    highlights: [
      "Implemented tooltip interactions to support contextual information display.",
      "Built responsive sections with balanced typography and spacing.",
      "Maintained visual consistency through reusable style decisions.",
    ],
    caseStudy: {
      problem:
        "The page needed to communicate feature context clearly without cluttering the interface.",
      approach: [
        "Introduced tooltip triggers with concise supporting content.",
        "Used clear sectioning and spacing for a guided content flow.",
        "Balanced interaction visibility with clean page aesthetics.",
      ],
      challenges: [
        "Avoiding tooltip overuse that can distract from primary content.",
        "Ensuring hover/focus patterns remain usable across devices.",
      ],
      results: [
        "Improved contextual clarity for feature descriptions.",
        "Delivered a cleaner and more informative landing page experience.",
        "Established reusable tooltip patterns for future UI work.",
      ],
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
      E-commerce Carousel demonstrates product browsing patterns, interactive
      transitions, and layout choices that support quick product discovery.
    `,
    highlights: [
      "Built product slider interactions with focus on smooth navigation.",
      "Structured product cards for quick scanning and readability.",
      "Maintained responsive behavior for mobile and desktop browsing.",
    ],
    caseStudy: {
      problem:
        "Product-heavy layouts can feel crowded without a clear browsing mechanism.",
      approach: [
        "Implemented carousel-driven navigation to reduce visual overload.",
        "Designed product cards with concise content hierarchy.",
        "Optimized spacing and transitions for better user flow.",
      ],
      challenges: [
        "Balancing animation smoothness with performance on lower-end devices.",
        "Maintaining usability for touch and non-touch interactions.",
      ],
      results: [
        "Improved product discoverability through guided browsing.",
        "Delivered a cleaner shopping-style UI experience.",
        "Created reusable carousel/card patterns for catalog interfaces.",
      ],
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
      This clone project recreates key video browsing experiences like content
      feeds, layout composition, and category-focused discovery.
    `,
    highlights: [
      "Recreated familiar video-platform UI structure and navigation patterns.",
      "Built content-card grid and list experiences for fast browsing.",
      "Focused on responsiveness and layout stability during content rendering.",
    ],
    caseStudy: {
      problem:
        "Video content interfaces require strong layout consistency for quick content discovery.",
      approach: [
        "Modeled page structure around feed, cards, and navigation blocks.",
        "Implemented reusable card components for scalable content display.",
        "Applied responsive breakpoints to preserve browsing comfort on mobile.",
      ],
      challenges: [
        "Maintaining a clean hierarchy with dense content cards.",
        "Ensuring consistent visual rhythm across variable content lengths.",
      ],
      results: [
        "Delivered a familiar browsing experience for end users.",
        "Improved UI consistency with reusable content components.",
        "Built a strong reference project for component-driven architecture.",
      ],
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
      Solar Planet Form focuses on data collection UX with clear form sections,
      validation, and user guidance for reliable submissions.
    `,
    highlights: [
      "Implemented clear validation behavior with focused error messaging.",
      "Improved completion flow with structured fields and visual grouping.",
      "Designed for usability with clean labels and consistent control styles.",
    ],
    caseStudy: {
      problem:
        "Complex forms often create drop-offs when instructions and feedback are unclear.",
      approach: [
        "Separated form fields into logical groups for easier completion.",
        "Added validation cues to guide users toward correct input.",
        "Kept the interface visually calm to reduce cognitive load.",
      ],
      challenges: [
        "Balancing validation strictness with user-friendly messaging.",
        "Maintaining consistent behavior across field types and states.",
      ],
      results: [
        "Improved form usability and data quality.",
        "Reduced user confusion with clearer feedback patterns.",
        "Established reusable form patterns for future workflows.",
      ],
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
      Comfort Learning is an education-oriented frontend project with emphasis
      on content readability, section flow, and responsive design.
    `,
    highlights: [
      "Built a learner-friendly content layout with clear section sequencing.",
      "Improved readability through spacing and typography choices.",
      "Maintained responsiveness for comfortable viewing on smaller screens.",
    ],
    caseStudy: {
      problem:
        "Educational content can feel overwhelming without clear presentation structure.",
      approach: [
        "Designed sections around progressive information flow.",
        "Applied consistent visual rhythm to reduce reading fatigue.",
        "Used responsive patterns to keep lesson content accessible on mobile.",
      ],
      challenges: [
        "Keeping long-form content engaging and easy to scan.",
        "Balancing information density with simplicity in layout.",
      ],
      results: [
        "Delivered a smoother reading and learning experience.",
        "Improved content discoverability across key sections.",
        "Created a scalable layout model for future learning pages.",
      ],
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
      Attendance Tracker supports day-to-day attendance updates with an
      interface designed for quick actions and easy status tracking.
    `,
    highlights: [
      "Designed quick attendance entry flow for everyday usage.",
      "Focused on clear status visibility to reduce record confusion.",
      "Built with a responsive structure for regular mobile access.",
    ],
    caseStudy: {
      problem:
        "Manual attendance handling can be error-prone and inefficient without a clear tracking system.",
      approach: [
        "Built a streamlined UI for marking and reviewing attendance.",
        "Applied concise status representation for faster understanding.",
        "Structured screens to prioritize frequent user actions.",
      ],
      challenges: [
        "Keeping the workflow fast while preserving data clarity.",
        "Maintaining simple UX for recurring daily operations.",
      ],
      results: [
        "Improved attendance tracking speed for routine updates.",
        "Reduced record ambiguity through clearer status presentation.",
        "Delivered a practical productivity tool for recurring use.",
      ],
    },
  },
];
