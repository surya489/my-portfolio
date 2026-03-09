export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  content: string[];
};

export const BLOG_POSTS_PER_LOAD = 6;

export const blogs: BlogPost[] = [
  {
    slug: "vue-nuxt-vs-react-next-practical-2026-guide",
    title: "Vue.js + Nuxt.js vs React.js + Next.js: A Practical 2026 Guide",
    excerpt:
      "A practical, project-focused comparison of DX, rendering, scaling, and team fit so you can choose the right stack.",
    date: "March 9, 2026",
    publishedAt: "2026-03-09",
    readTime: "9 min read",
    tags: ["Vue.js", "Nuxt.js", "React.js", "Next.js", "Architecture"],
    content: [
      "This is not a \"which is best\" debate. In production work, both stacks are excellent. The better question is: which stack helps your team ship faster with fewer mistakes for your product type?",
      "React.js + Next.js gives maximum ecosystem breadth and flexibility. React's model is highly composable, and Next.js App Router adds strong server rendering patterns, streaming, and route-level data architecture for complex products.",
      "Vue.js + Nuxt.js often feels faster to onboard for teams that prefer clearer defaults. Vue's reactivity model and single-file component ergonomics reduce boilerplate, while Nuxt adds batteries-included conventions for routing, data fetching, and SSR.",
      "From a rendering standpoint, both can do SSR, SSG, and hybrid strategies. Next.js emphasizes React Server Components and streaming patterns; Nuxt emphasizes route rules and Nitro-powered hybrid rendering with strong control per route.",
      "For performance work, both need the same discipline: avoid oversized bundles, optimize data boundaries, and measure real user metrics. React's latest compiler direction reduces manual memoization pressure, while Vue's compilation and reactivity model keeps many interactions straightforward.",
      "For large teams, React + Next can be a strong fit when you need deep hiring availability and broad third-party integrations. Vue + Nuxt can be a better fit when you want opinionated structure and consistent developer experience across teams.",
      "My practical rule: choose React + Next for ecosystem-heavy, integration-dense platforms; choose Vue + Nuxt for fast product delivery with strong conventions and lower cognitive overhead. If your team already has proven experience in one stack, execution quality usually matters more than framework switching.",
    ],
  },
  {
    slug: "fireblocks-web3-frontend-integration-notes",
    title: "Fireblocks Web3 Integration: Frontend Notes from Real Projects",
    excerpt:
      "Practical lessons from integrating Fireblocks workflows into frontend product experiences.",
    date: "October 2025",
    publishedAt: "2025-10-15",
    readTime: "6 min read",
    tags: ["Web3", "Fireblocks", "Frontend"],
    content: [
      "Web3 integrations on the frontend require clarity in both UX and transaction state handling. Users need confidence at every step, especially during wallet and approval actions.",
      "While working with Fireblocks, one key learning was to keep transaction states explicit in the UI: initiated, pending, confirmed, and failed. This reduced confusion and support requests.",
      "I also focused on building reusable transaction status components so similar workflows could be implemented consistently across features.",
      "From a product perspective, successful Web3 integration is not just about connecting APIs. It is about trust, transparency, and predictable behavior for end users.",
    ],
  },
  {
    slug: "primer-payment-sdk-integration-lessons",
    title: "Primer.io SDK Integration: Payment UX Lessons",
    excerpt:
      "How I approached payment SDK integration with focus on reliability, fallback states, and user confidence.",
    date: "November 2025",
    publishedAt: "2025-11-10",
    readTime: "5 min read",
    tags: ["Payments", "Primer.io", "Product Engineering"],
    content: [
      "Payment flows are sensitive user journeys, so every UI decision matters. While integrating Primer.io SDK, I prioritized clear loading states, errors, and post-payment confirmations.",
      "A major improvement came from handling edge cases early: network failures, payment retries, and inconsistent callback timing.",
      "I also aligned payment status feedback with analytics events so product teams could monitor completion rates and drop-offs.",
      "When payment integrations are done well, users feel confident and the business sees better conversion outcomes.",
    ],
  },
  {
    slug: "mixpanel-event-tracking-strategy",
    title: "Mixpanel Event Tracking Strategy for Product Teams",
    excerpt:
      "A practical event-planning approach to make analytics useful for product decisions.",
    date: "December 2025",
    publishedAt: "2025-12-04",
    readTime: "6 min read",
    tags: ["Mixpanel", "Analytics", "Product"],
    content: [
      "Tracking everything creates noise; tracking the right events creates value. My approach is to start with product goals, then map only meaningful events to each user journey.",
      "I use structured event naming, stable property definitions, and clear documentation so engineering and product teams interpret data the same way.",
      "In implementation, I keep event dispatch centralized to avoid inconsistencies across screens and feature modules.",
      "With this strategy, Mixpanel becomes a decision tool, not just a dashboard. Teams can quickly identify friction, measure changes, and plan better iterations.",
    ],
  },
  {
    slug: "google-analytics-analytics-engineering-journey",
    title: "My Google Analytics and Analytics Engineering Journey",
    excerpt:
      "How I started applying analytics engineering concepts in real frontend projects using Google Analytics and product tracking.",
    date: "September 2025",
    publishedAt: "2025-09-03",
    readTime: "5 min read",
    tags: ["Google Analytics", "Analytics Engineering", "Web Development"],
    content: [
      "In modern web development, building features is only one part of the job. Understanding how users behave inside the product is equally important.",
      "As I worked on production applications, I started using Google Analytics to track meaningful events, monitor user flows, and identify friction points in the user journey.",
      "This gradually introduced me to analytics engineering thinking: define clean tracking plans, maintain consistent event naming, and ensure data quality before using the numbers for decisions.",
      "From feature launches to conversion improvements, analytics helped me move from assumptions to evidence-driven frontend decisions.",
      "My goal is to keep improving this area by combining product intuition, clean implementation, and measurable outcomes.",
    ],
  },
  {
    slug: "frontend-career-journey",
    title: "How I Built My Frontend Career: From Operations to Development",
    excerpt:
      "My transition from non-voice operations into frontend engineering and what helped me grow fast.",
    date: "March 2026",
    publishedAt: "2026-03-01",
    readTime: "6 min read",
    tags: ["Career", "Frontend", "React"],
    content: [
      "I started my professional journey in process operations, where I learned discipline, quality checks, and delivery timelines. Those fundamentals still help me every day as a developer.",
      "When I moved into frontend work, I focused first on HTML, CSS, and JavaScript fundamentals. From there I adopted React and component-based architecture, which changed how I approached building products.",
      "Over time I shifted toward Next.js, TypeScript, and scalable UI patterns. The biggest difference in my growth came from consistently building real projects and learning from production problems.",
      "My advice for anyone switching domains is simple: build regularly, understand fundamentals deeply, and stay close to real user problems.",
    ],
  },
  {
    slug: "ssr-vs-csr-nextjs-practical-guide",
    title: "SSR vs CSR in Next.js: A Practical Decision Guide",
    excerpt:
      "When to choose Server-Side Rendering vs Client-Side Rendering based on product goals and performance.",
    date: "March 2026",
    publishedAt: "2026-03-04",
    readTime: "7 min read",
    tags: ["Next.js", "Performance", "SEO"],
    content: [
      "SSR is a strong fit when you need faster first content paint and better SEO for public pages. CSR works well for highly interactive dashboards where content is user-specific after login.",
      "In production projects, I often combine both. Marketing and listing pages use SSR/SSG for discoverability, while authenticated flows use CSR for responsiveness.",
      "The right decision should be driven by user experience, indexing needs, and infrastructure cost. There is no single rendering strategy that fits every page.",
      "Next.js gives flexibility to mix rendering methods per route, which is the best approach for real products.",
    ],
  },
  {
    slug: "oauth-google-microsoft-nextjs",
    title: "Implementing Google and Microsoft OAuth in Next.js Apps",
    excerpt:
      "Key implementation notes, edge cases, and security basics from integrating third-party login providers.",
    date: "February 2026",
    publishedAt: "2026-02-17",
    readTime: "5 min read",
    tags: ["OAuth", "Authentication", "Next.js"],
    content: [
      "OAuth integration is more than adding a login button. You need clear redirect URI handling, token validation, and robust session state management.",
      "In my projects, Google and Microsoft login were integrated with a unified authentication flow so users get a consistent experience regardless of provider.",
      "Important details include handling provider-specific profile payloads, dealing with denied permissions, and showing actionable error states to users.",
      "A clean auth abstraction keeps provider logic isolated and makes future login options easier to add.",
    ],
  },
];
