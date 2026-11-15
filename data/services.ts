export type ServiceProcess = {
  title: string;
  description: string;
};

export type ServiceItem = {
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  subtitle: string;
  price: string;

  listingImage: string;

  visualOne: string;
  visualTwo: string;

  capabilities: string[];

  introTitle: string;
  introLead: string;
  introDescription: string;

  whatWeDoLead: string;
  whatWeDoDescription: string;

  whatWeDo: {
    title: string;
    description: string;
  }[];

  included: string[];

  idealFor: string[];

  process: ServiceProcess[];

  deliverables: string[];
};

export const services: ServiceItem[] = [
  {
    number: "01",

    slug: "branding",

    title: "Branding",

    shortDescription:
      "We build complete brand identities, from strategy and positioning to visual systems that make businesses distinctive and memorable.",

    subtitle:
      "Does your brand say what you want it to say?",

    price: "$2500",

    listingImage:
      "/images/services/list/branding.webp",

    visualOne:
      "/images/services/branding/branding-visual-01.webp",

    visualTwo:
      "/images/services/branding/branding-visual-02.webp",

    capabilities: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Typography",
      "Colour Systems",
      "Brand Guidelines",
      "Creative Direction",
      "Brand Applications",
    ],

    introTitle:
      "Build a brand people remember.",

    introLead:
      "Strong businesses are built on strong brands.",

    introDescription:
      "Branding shapes how your business is perceived today and remembered tomorrow. We create distinctive, strategic identities that build trust, set you apart and create a foundation for long-term growth.",

    whatWeDoLead:
      "More than a logo. A complete brand system.",

    whatWeDoDescription:
      "We build brands from the strategy up — defining how you're positioned, how you look and how you communicate across every touchpoint.",

    whatWeDo: [
      {
        title: "Brand Strategy",
        description:
          "Positioning, audience, messaging, values, personality and brand direction.",
      },
      {
        title: "Visual Identity",
        description:
          "Logo, typography, colours, imagery, graphic language and supporting visual elements.",
      },
      {
        title: "Brand Guidelines",
        description:
          "Clear rules that keep your identity consistent across digital and physical experiences.",
      },
      {
        title: "Brand Applications",
        description:
          "Business cards, digital assets, presentations, packaging, social media and marketing materials.",
      },
    ],

    included: [
      "Brand discovery and positioning",
      "Creative direction",
      "Logo system",
      "Colour and typography system",
      "Visual language",
      "Brand guidelines",
      "Digital brand assets",
      "Final organised asset package",
    ],

    idealFor: [
      "New businesses launching their brand",
      "Startups preparing to enter the market",
      "Established businesses ready for a rebrand",
      "Businesses with inconsistent branding",
      "Companies moving into a more premium position",
    ],

    process: [
      {
        title: "Discover",
        description:
          "We learn about your business, audience, competitors, goals and what makes you different.",
      },
      {
        title: "Define",
        description:
          "We establish positioning, personality, messaging and creative direction.",
      },
      {
        title: "Design",
        description:
          "We translate strategy into a distinctive visual identity and complete brand system.",
      },
      {
        title: "Refine",
        description:
          "We collaborate, gather feedback and fine-tune the identity until everything feels right.",
      },
      {
        title: "Deliver",
        description:
          "You receive an organised brand system ready to use across every touchpoint.",
      },
    ],

    deliverables: [
      "Logo files",
      "Colour palette",
      "Typography system",
      "Brand guidelines",
      "Social media assets",
      "Digital brand assets",
      "Presentation-ready assets",
    ],
  },

  {
    number: "02",

    slug: "web-design-development",

    title: "Web Design & Development",

    shortDescription:
      "Web design and development for business websites, Shopify stores and WordPress sites. We build responsive websites and custom React and Next.js experiences.",

    subtitle:
      "Responsive business websites, Shopify stores and WordPress sites built around what your visitors need to do.",

    price: "$2500",

    listingImage:
      "/images/services/list/web-design-development.webp",

    visualOne:
      "/images/services/web-design-development/web-design-visual-01.webp",

    visualTwo:
      "/images/services/web-design-development/web-design-visual-02.webp",

    capabilities: [
      "UX/UI",
      "Landing Pages",
      "Responsive Design",
      "Shopify",
      "WordPress",
      "Next.js",
      "React",
      "CMS",
      "Conversion Design",
      "Performance",
    ],

    introTitle:
      "Web development for business websites and online stores",

    introLead:
      "Choose a platform based on how you’ll sell, publish and grow.",

    introDescription:
      "Whether you’re launching a first website or redesigning an existing one, we plan the site around how people find you and what they need next: compare your services, enquire or shop. We design for mobile and desktop from the start.",

    whatWeDoLead:
      "Shopify, WordPress and custom web development",

    whatWeDoDescription:
      "We help you choose Shopify for selling online, WordPress for teams that need to publish and edit content, or a custom build when you need a more tailored interface or integration.",

    whatWeDo: [
      {
        title: "Responsive Website Design & Redesign",
        description:
          "We plan the sitemap, navigation and page layouts for business websites, portfolios and landing pages, with clear paths to enquire or buy on any screen.",
      },
      {
        title: "Shopify Store Development",
        description:
          "We build Shopify storefronts with tailored themes, product and collection pages, and a shopping journey suited to your catalogue.",
      },
      {
        title: "WordPress Website Development",
        description:
          "We build WordPress websites with reusable page layouts and an editing setup that lets your team update service pages, publish articles and manage content.",
      },
      {
        title: "Custom React & Next.js Development",
        description:
          "For websites that need a custom interface or integrations, we use React and Next.js and connect a CMS where your team needs control over content.",
      },
    ],

    included: [
      "Discovery and strategy",
      "Sitemap",
      "UX wireframes",
      "Responsive UI design",
      "Frontend development",
      "CMS setup",
      "Performance optimisation",
      "Technical SEO foundations",
      "Launch support",
    ],

    idealFor: [
      "Businesses launching a new website",
      "Companies replacing an outdated website",
      "Brands requiring a stronger digital presence",
      "Teams needing custom functionality",
      "Businesses focused on conversion and performance",
    ],

    process: [
      {
        title: "Discover",
        description:
          "We define audiences, objectives, content, functionality and technical requirements.",
      },
      {
        title: "Structure",
        description:
          "We create the sitemap, page hierarchy and essential user journeys.",
      },
      {
        title: "Design",
        description:
          "We develop the visual system, responsive layouts and interactions.",
      },
      {
        title: "Build",
        description:
          "The approved experience becomes a production-ready website.",
      },
      {
        title: "Launch",
        description:
          "We check mobile layouts, page performance, titles, descriptions and internal links before launch. For redesigns, we also plan redirects for URLs that change.",
      },
    ],

    deliverables: [
      "Responsive website",
      "Design system",
      "CMS",
      "Source code",
      "Performance optimisation",
      "Technical setup",
      "Launch package",
    ],
  },

  {
    number: "03",

    slug: "software-solutions",

    title: "Software Solutions",

    shortDescription:
      "We engineer custom platforms, applications, APIs and backend systems designed around real operational needs.",

    subtitle:
      "Software should make the business simpler, not more complicated.",

    price: "$2500",

    listingImage:
      "/images/services/list/software-solutions.webp",

    visualOne:
      "/images/services/software-solutions/software-visual-01.webp",

    visualTwo:
      "/images/services/software-solutions/software-visual-02.webp",

    capabilities: [
      "Web Applications",
      "Backend Systems",
      "APIs",
      "Automation",
      "FastAPI",
      "React",
      "Databases",
      "Cloud Architecture",
    ],

    introTitle:
      "Software shaped around your business.",

    introLead:
      "The right technology removes friction.",

    introDescription:
      "We build digital products and internal systems that connect workflows, automate repetitive work and create scalable foundations for growth.",

    whatWeDoLead:
      "Custom engineering without unnecessary complexity.",

    whatWeDoDescription:
      "We design software around the actual problem — choosing the architecture, technologies and integrations required to solve it reliably.",

    whatWeDo: [
      {
        title: "Digital Products",
        description:
          "Custom applications and platforms built around customers or internal operations.",
      },
      {
        title: "Backend Engineering",
        description:
          "APIs, authentication, databases, queues, caching and robust business logic.",
      },
      {
        title: "Automation",
        description:
          "Connected workflows that reduce repetitive manual work.",
      },
      {
        title: "System Integration",
        description:
          "Reliable connections between your platforms, tools and third-party services.",
      },
    ],

    included: [
      "Technical discovery",
      "Architecture planning",
      "Frontend and backend engineering",
      "Database design",
      "API development",
      "Authentication",
      "Testing",
      "Deployment support",
    ],

    idealFor: [
      "Startups building an MVP",
      "Businesses replacing manual workflows",
      "Teams developing internal platforms",
      "Companies integrating multiple systems",
      "Products preparing for scale",
    ],

    process: [
      {
        title: "Understand",
        description:
          "We define the problem, workflows, requirements and users.",
      },
      {
        title: "Architect",
        description:
          "We design the system structure, data model and integrations.",
      },
      {
        title: "Build",
        description:
          "We develop the application incrementally around tested functionality.",
      },
      {
        title: "Validate",
        description:
          "We test behaviour, performance and edge cases.",
      },
      {
        title: "Deploy",
        description:
          "We prepare the system for production and future development.",
      },
    ],

    deliverables: [
      "Production application",
      "Frontend",
      "Backend",
      "API layer",
      "Database",
      "Technical documentation",
      "Deployment configuration",
    ],
  },

  {
    number: "04",

    slug: "ecommerce-solutions",

    title: "E-Commerce Solutions",

    shortDescription:
      "We build connected commerce experiences that make discovering, purchasing and managing products easier.",

    subtitle:
      "Turn digital storefronts into connected commerce systems.",

    price: "$2500",

    listingImage:
      "/images/services/list/ecommerce-solutions.webp",

    visualOne:
      "/images/services/ecommerce-solutions/ecommerce-visual-01.webp",

    visualTwo:
      "/images/services/ecommerce-solutions/ecommerce-visual-02.webp",

    capabilities: [
      "Shopify",
      "Custom Commerce",
      "Checkout",
      "Subscriptions",
      "Product UX",
      "Integrations",
      "Automation",
      "Performance",
    ],

    introTitle:
      "Commerce built around how customers buy.",

    introLead:
      "A store is only one part of the commerce experience.",

    introDescription:
      "We connect product discovery, checkout, inventory, payments and post-purchase workflows into experiences built to convert and scale.",

    whatWeDoLead:
      "From storefront to operations.",

    whatWeDoDescription:
      "We work across customer experience and commerce infrastructure so your store feels polished at the front and works efficiently behind the scenes.",

    whatWeDo: [
      {
        title: "Storefront Experience",
        description:
          "Responsive collections, product pages, navigation and conversion-focused interfaces.",
      },
      {
        title: "Custom Functionality",
        description:
          "Bundles, subscriptions, combinations, personalised experiences and custom workflows.",
      },
      {
        title: "Commerce Integrations",
        description:
          "Payments, shipping, CRM, inventory and operational systems.",
      },
      {
        title: "Optimisation",
        description:
          "Performance, conversion improvements and friction reduction throughout the purchase journey.",
      },
    ],

    included: [
      "Commerce strategy",
      "Store UX",
      "Responsive design",
      "Theme or custom development",
      "Checkout optimisation",
      "Integrations",
      "Analytics setup",
      "Launch support",
    ],

    idealFor: [
      "New e-commerce brands",
      "Stores preparing to scale",
      "Businesses migrating platforms",
      "Brands requiring custom commerce features",
      "Stores improving conversion performance",
    ],

    process: [
      {
        title: "Audit",
        description:
          "We understand products, customers, operations and current friction.",
      },
      {
        title: "Plan",
        description:
          "We map the buying journey, structure and required integrations.",
      },
      {
        title: "Design",
        description:
          "We create a clear and conversion-focused storefront experience.",
      },
      {
        title: "Develop",
        description:
          "We implement commerce functionality and integrations.",
      },
      {
        title: "Optimise",
        description:
          "We test the experience and improve performance before launch.",
      },
    ],

    deliverables: [
      "Commerce storefront",
      "Product templates",
      "Checkout setup",
      "Custom functionality",
      "Integrations",
      "Analytics",
      "Launch-ready store",
    ],
  },

  {
    number: "05",

    slug: "seo",

    title: "SEO",

    shortDescription:
      "We improve technical foundations, content structure and search visibility to build sustainable organic growth.",

    subtitle:
      "Be easier to discover when your customers are searching.",

    price: "$2500",

    listingImage:
      "/images/services/list/seo.webp",

    visualOne:
      "/images/services/seo/seo-visual-01.webp",

    visualTwo:
      "/images/services/seo/seo-visual-02.webp",

    capabilities: [
      "Technical SEO",
      "Content Strategy",
      "Keyword Research",
      "On-Page SEO",
      "Search Architecture",
      "Analytics",
      "Audits",
      "Performance",
    ],

    introTitle:
      "Search visibility built for the long term.",

    introLead:
      "Organic growth starts with strong foundations.",

    introDescription:
      "We combine technical optimisation, content structure and search strategy so your website becomes easier for both people and search engines to understand.",

    whatWeDoLead:
      "SEO without shortcuts.",

    whatWeDoDescription:
      "We focus on discoverability, technical quality and relevant content rather than chasing temporary tactics.",

    whatWeDo: [
      {
        title: "Technical SEO",
        description:
          "Crawlability, indexing, performance, structured data and technical health.",
      },
      {
        title: "Content Architecture",
        description:
          "Pages and information structured around what customers actually search for.",
      },
      {
        title: "On-Page Optimisation",
        description:
          "Titles, metadata, headings, internal linking and page-level improvements.",
      },
      {
        title: "Measurement",
        description:
          "Analytics and reporting that focus on meaningful search performance.",
      },
    ],

    included: [
      "SEO audit",
      "Keyword research",
      "Technical recommendations",
      "Content mapping",
      "On-page optimisation",
      "Internal linking strategy",
      "Analytics review",
      "Performance reporting",
    ],

    idealFor: [
      "Businesses investing in organic growth",
      "Websites with poor visibility",
      "Companies launching new websites",
      "Stores with large product catalogues",
      "Brands competing in search-heavy markets",
    ],

    process: [
      {
        title: "Audit",
        description:
          "We identify technical, structural and content opportunities.",
      },
      {
        title: "Research",
        description:
          "We understand search demand, intent and competition.",
      },
      {
        title: "Structure",
        description:
          "We align content and site architecture with meaningful topics.",
      },
      {
        title: "Optimise",
        description:
          "We implement technical and on-page improvements.",
      },
      {
        title: "Measure",
        description:
          "We monitor performance and refine based on real results.",
      },
    ],

    deliverables: [
      "SEO audit",
      "Keyword map",
      "Technical action plan",
      "On-page recommendations",
      "Content structure",
      "Reporting framework",
    ],
  },

  {
    number: "06",

    slug: "social-media-marketing",

    title: "Social Media Marketing",

    shortDescription:
      "We create strategic social content systems that make brands more consistent, relevant and recognisable.",

    subtitle:
      "Build a social presence people actually want to follow.",

    price: "$2500",

    listingImage:
      "/images/services/list/social-media-marketing.webp",

    visualOne:
      "/images/services/social-media-marketing/social-media-visual-01.webp",

    visualTwo:
      "/images/services/social-media-marketing/social-media-visual-02.webp",

    capabilities: [
      "Content Strategy",
      "Campaigns",
      "Short-Form Video",
      "Creative Direction",
      "Content Systems",
      "Social Design",
      "Analytics",
      "Publishing",
    ],

    introTitle:
      "Social content with a clear point of view.",

    introLead:
      "Consistency matters more than simply posting more.",

    introDescription:
      "We build content systems that connect strategy, visual direction and production so your brand shows up consistently across social channels.",

    whatWeDoLead:
      "Strategy and creativity working together.",

    whatWeDoDescription:
      "From planning to production, we develop social systems that make content easier to create and more recognisable to the people seeing it.",

    whatWeDo: [
      {
        title: "Content Strategy",
        description:
          "Themes, formats, audiences, channels and content direction.",
      },
      {
        title: "Creative Direction",
        description:
          "Visual systems that keep content recognisable without becoming repetitive.",
      },
      {
        title: "Production",
        description:
          "Static content, short-form video, campaign assets and platform-specific creative.",
      },
      {
        title: "Performance",
        description:
          "Review and refinement informed by engagement and meaningful audience behaviour.",
      },
    ],

    included: [
      "Social strategy",
      "Content pillars",
      "Creative direction",
      "Content calendar",
      "Social graphics",
      "Short-form video assets",
      "Reporting",
    ],

    idealFor: [
      "Brands building a stronger online presence",
      "Businesses without a consistent content system",
      "Product launches",
      "Growing consumer brands",
      "Teams requiring ongoing content support",
    ],

    process: [
      {
        title: "Understand",
        description:
          "We define audience, platforms, positioning and objectives.",
      },
      {
        title: "Plan",
        description:
          "We establish content pillars, formats and publishing direction.",
      },
      {
        title: "Create",
        description:
          "We produce visual and video content around the approved system.",
      },
      {
        title: "Publish",
        description:
          "Content is structured for the channels where it will live.",
      },
      {
        title: "Improve",
        description:
          "Performance informs the next cycle of creative decisions.",
      },
    ],

    deliverables: [
      "Content strategy",
      "Creative system",
      "Static assets",
      "Video assets",
      "Content calendar",
      "Campaign assets",
      "Performance reporting",
    ],
  },

  {
    number: "07",

    slug: "cyber-security",

    title: "Cyber Security",

    shortDescription:
      "We help strengthen digital systems through security reviews, architecture improvements and practical protection measures.",

    subtitle:
      "Security should be part of the system, not an afterthought.",

    price: "$2500",

    listingImage:
      "/images/services/list/cyber-security.webp",

    visualOne:
      "/images/services/cyber-security/cyber-security-visual-01.webp",

    visualTwo:
      "/images/services/cyber-security/cyber-security-visual-02.webp",

    capabilities: [
      "Security Reviews",
      "Application Security",
      "Infrastructure",
      "Access Control",
      "Authentication",
      "Hardening",
      "Monitoring",
      "Risk Reduction",
    ],

    introTitle:
      "Build digital systems with security in mind.",

    introLead:
      "Reliable technology needs strong foundations.",

    introDescription:
      "We assess digital systems, identify practical risks and improve the controls protecting applications, infrastructure and sensitive business information.",

    whatWeDoLead:
      "Security that fits the technology you actually use.",

    whatWeDoDescription:
      "Our focus is practical protection — understanding risk and strengthening systems without making everyday operations unnecessarily difficult.",

    whatWeDo: [
      {
        title: "Security Review",
        description:
          "Assessment of applications, infrastructure, access and common risk areas.",
      },
      {
        title: "Application Security",
        description:
          "Authentication, authorisation, secure API patterns and application controls.",
      },
      {
        title: "Infrastructure Hardening",
        description:
          "Improved configuration, access boundaries and deployment practices.",
      },
      {
        title: "Monitoring",
        description:
          "Visibility into important events and unusual system behaviour.",
      },
    ],

    included: [
      "Security assessment",
      "Risk findings",
      "Prioritised recommendations",
      "Authentication review",
      "Access-control review",
      "Infrastructure recommendations",
      "Security documentation",
    ],

    idealFor: [
      "Companies operating custom software",
      "Businesses handling sensitive information",
      "Teams preparing systems for growth",
      "Applications undergoing infrastructure changes",
      "Businesses improving technical resilience",
    ],

    process: [
      {
        title: "Assess",
        description:
          "We understand the system, assets, access and current controls.",
      },
      {
        title: "Identify",
        description:
          "We document practical risks and areas requiring improvement.",
      },
      {
        title: "Prioritise",
        description:
          "Findings are ordered by potential impact and urgency.",
      },
      {
        title: "Strengthen",
        description:
          "Recommended improvements are implemented or prepared for implementation.",
      },
      {
        title: "Review",
        description:
          "We validate improvements and document the resulting security posture.",
      },
    ],

    deliverables: [
      "Security review",
      "Risk report",
      "Improvement roadmap",
      "Security configuration guidance",
      "Access recommendations",
      "Technical documentation",
    ],
  },

  {
    number: "08",

    slug: "it-support",

    title: "IT Support",

    shortDescription:
      "Reliable technology support for businesses that need their systems, devices and infrastructure to keep working.",

    subtitle:
      "Technology should support the work, not interrupt it.",

    price: "$2500",

    listingImage:
      "/images/services/list/it-support.webp",

    visualOne:
      "/images/services/it-support/it-support-visual-01.webp",

    visualTwo:
      "/images/services/it-support/it-support-visual-02.webp",

    capabilities: [
      "Troubleshooting",
      "Infrastructure",
      "Workstations",
      "Networks",
      "System Setup",
      "Maintenance",
      "Technical Support",
      "Operations",
    ],

    introTitle:
      "Dependable technology behind the business.",

    introLead:
      "Good support keeps problems small.",

    introDescription:
      "We help businesses maintain, troubleshoot and improve the technology their teams depend on every day.",

    whatWeDoLead:
      "Practical support when systems need attention.",

    whatWeDoDescription:
      "From workstation issues to infrastructure and configuration, we help keep technology stable, organised and usable.",

    whatWeDo: [
      {
        title: "Technical Support",
        description:
          "Diagnosis and resolution of everyday hardware and software issues.",
      },
      {
        title: "Infrastructure",
        description:
          "Support for networks, devices, business systems and connectivity.",
      },
      {
        title: "Setup & Configuration",
        description:
          "Reliable setup of new systems, workstations and connected tools.",
      },
      {
        title: "Maintenance",
        description:
          "Ongoing attention to updates, stability and technical housekeeping.",
      },
    ],

    included: [
      "Technology review",
      "Troubleshooting",
      "System configuration",
      "Workstation support",
      "Network assistance",
      "Maintenance guidance",
      "Technical documentation",
    ],

    idealFor: [
      "Small and growing companies",
      "Teams without internal IT resources",
      "Businesses improving technology reliability",
      "Companies moving offices or systems",
      "Teams needing ongoing technical assistance",
    ],

    process: [
      {
        title: "Understand",
        description:
          "We assess the issue, environment and impact on your team.",
      },
      {
        title: "Diagnose",
        description:
          "We identify the root cause rather than only treating symptoms.",
      },
      {
        title: "Resolve",
        description:
          "We implement the appropriate technical fix.",
      },
      {
        title: "Validate",
        description:
          "The system is checked to confirm normal operation.",
      },
      {
        title: "Improve",
        description:
          "Where useful, we recommend changes that reduce repeat issues.",
      },
    ],

    deliverables: [
      "Technical support",
      "System fixes",
      "Configuration",
      "Infrastructure recommendations",
      "Maintenance guidance",
      "Technical documentation",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find(
    (service) => service.slug === slug
  );
}

export function getPreviousService(slug: string) {
  const index = services.findIndex(
    (service) => service.slug === slug
  );

  if (index === -1) {
    return services[0];
  }

  return services[
    (index - 1 + services.length) % services.length
  ];
}

export function getNextService(slug: string) {
  const index = services.findIndex(
    (service) => service.slug === slug
  );

  if (index === -1) {
    return services[0];
  }

  return services[
    (index + 1) % services.length
  ];
}
