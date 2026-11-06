export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  sections: BlogSection[];
};

export const blogs: BlogPost[] = [
  {
    slug: "designing-digital-products-that-feel-effortless",

    title:
      "Designing Digital Products That Actually Feel Effortless",

    excerpt:
      "Why clarity, hierarchy and thoughtful interaction matter more than adding more features.",

    category: "Product Design",

    date: "Oct 5, 2026",

    readTime: "5 mins",

    image:
      "/images/blog/digital-products-effortless.webp",

    sections: [
      {
        id: "clarity-before-complexity",

        title: "Clarity Before Complexity",

        paragraphs: [
          "The best digital products rarely feel complicated, even when the technology behind them is sophisticated. Users should not need to understand the system in order to use it confidently.",

          "Good product design removes unnecessary decisions, reduces visual noise and creates a clear path from intention to action. Instead of asking how much functionality can be added, the better question is how much friction can be removed.",
        ],
      },

      {
        id: "hierarchy-guides-attention",

        title: "Hierarchy Guides Attention",

        paragraphs: [
          "Every interface is competing for attention. Typography, spacing, contrast and positioning determine what users notice first and what they understand next.",

          "A strong hierarchy makes the experience feel natural. Important actions become obvious, supporting information stays available without becoming distracting, and users spend less time figuring out what the interface expects from them.",
        ],
      },

      {
        id: "interactions-should-explain-themselves",

        title:
          "Interactions Should Explain Themselves",

        paragraphs: [
          "Animation and interaction should make the interface easier to understand, not simply make it move. A button response, transition or loading state can communicate what has happened and what the user should expect next.",

          "When motion supports meaning, the experience feels responsive and polished. When it exists only for decoration, it can quickly become another source of friction.",
        ],
      },

      {
        id: "consistency-builds-confidence",

        title: "Consistency Builds Confidence",

        paragraphs: [
          "People learn interfaces quickly when patterns repeat. Buttons behave the same way, spacing follows a system, navigation remains predictable and visual language stays consistent.",

          "Consistency reduces the mental work required to use a product. That makes the product feel more professional while helping users move through it with greater confidence.",
        ],
      },

      {
        id: "conclusion",

        title: "Design for Understanding",

        paragraphs: [
          "Effortless products are not created by removing sophistication. They are created by hiding unnecessary complexity behind thoughtful decisions.",

          "The strongest experiences combine strategy, interface design and engineering so the technology feels invisible and the user can focus entirely on what they came to accomplish.",
        ],
      },
    ],
  },

  {
    slug: "why-modern-businesses-need-more-than-a-website",

    title:
      "Why Modern Businesses Need More Than Just a Website",

    excerpt:
      "A modern website should connect customers, operations, data and automation instead of existing as an isolated marketing page.",

    category: "Technology",

    date: "Sep 18, 2026",

    readTime: "6 mins",

    image:
      "/images/blog/more-than-a-website.webp",

    sections: [
      {
        id: "website-as-a-system",

        title: "Think Beyond the Website",

        paragraphs: [
          "For many businesses, the website is still treated as a digital brochure. It introduces the company, lists services and provides a contact form. That approach is increasingly limited.",

          "A modern digital presence can connect marketing, sales, customer communication, commerce, analytics and internal workflows. The website becomes one visible part of a much larger system.",
        ],
      },

      {
        id: "connect-business-tools",

        title: "Connect the Tools You Already Use",

        paragraphs: [
          "Customers should not have to repeat information simply because different parts of the business use different systems. Forms can connect directly to CRMs, enquiries can trigger workflows and purchases can update operational tools automatically.",

          "Integrations remove repetitive manual work while creating a smoother experience for both customers and internal teams.",
        ],
      },

      {
        id: "automation-is-infrastructure",

        title: "Automation Is Infrastructure",

        paragraphs: [
          "Automation should not be viewed only as a collection of shortcuts. Used properly, it becomes part of the operational infrastructure of the business.",

          "Lead routing, notifications, follow-ups, reporting and data synchronisation can happen automatically, allowing teams to spend more time on decisions that actually require human attention.",
        ],
      },

      {
        id: "data-should-create-visibility",

        title: "Data Should Create Visibility",

        paragraphs: [
          "A connected digital platform gives businesses a clearer picture of how customers discover, use and respond to their products and services.",

          "Analytics become more useful when they are connected to meaningful business events instead of isolated page views. The goal is not to collect more data, but to understand what the data is telling you.",
        ],
      },

      {
        id: "conclusion",

        title: "Build a Digital Ecosystem",

        paragraphs: [
          "The most useful websites are no longer standalone destinations. They are entry points into connected digital ecosystems.",

          "When design, software, integrations and automation are considered together, the result is a platform that supports both the customer experience and the business operating behind it.",
        ],
      },
    ],
  },

  {
    slug: "building-software-ready-to-scale",

    title:
      "Building for Scale: What Makes Software Ready to Grow",

    excerpt:
      "Scalable software is not about predicting millions of users. It is about creating a foundation that can evolve without becoming fragile.",

    category: "Engineering",

    date: "Aug 27, 2026",

    readTime: "7 mins",

    image:
      "/images/blog/software-ready-to-scale.webp",

    sections: [
      {
        id: "scalability-starts-with-structure",

        title: "Scalability Starts With Structure",

        paragraphs: [
          "Software becomes difficult to scale long before servers reach their limits. Poor separation of responsibilities, tightly coupled components and unclear data flows can make even small changes risky.",

          "A good architecture creates boundaries. Individual parts of the system can evolve without forcing unnecessary changes across everything else.",
        ],
      },

      {
        id: "design-apis-carefully",

        title: "Design APIs Carefully",

        paragraphs: [
          "APIs are contracts between parts of a system. When those contracts are inconsistent or poorly defined, complexity spreads quickly.",

          "Clear request structures, predictable responses, versioning and sensible error handling make systems easier to integrate, test and extend.",
        ],
      },

      {
        id: "performance-is-a-system",

        title: "Performance Is a System",

        paragraphs: [
          "Performance problems are rarely solved by one optimisation. Database queries, caching, network requests, background jobs and frontend behaviour all contribute to how responsive the final product feels.",

          "The goal should be to understand where work happens and move expensive operations away from the critical path whenever possible.",
        ],
      },

      {
        id: "reliability-needs-observability",

        title: "Reliability Needs Observability",

        paragraphs: [
          "Systems cannot be improved effectively if teams cannot see what is happening inside them. Logging, monitoring and meaningful metrics help identify failures before they become larger problems.",

          "Observability also makes scaling safer because decisions can be based on actual behaviour rather than assumptions.",
        ],
      },

      {
        id: "conclusion",

        title: "Build for Change",

        paragraphs: [
          "Scalable software is ultimately software that can change without becoming unstable.",

          "Thoughtful architecture, clear APIs, performance awareness and strong operational visibility create the foundation required for products to grow confidently over time.",
        ],
      },
    ],
  },
];

export function getBlogBySlug(
  slug: string
) {
  return blogs.find(
    (blog) => blog.slug === slug
  );
}