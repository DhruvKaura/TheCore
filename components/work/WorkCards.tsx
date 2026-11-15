import Image from "next/image";

const projects = [
  {
    title: "Vitilia Botanicals",
    year: "2026",
    category: "Wellness • E-commerce",
    service: "Web Design & Development",
    image: "/images/work/vitilia/cover-v2.webp",
    href: "/work/vitilia",
    external: false,
    cardClass: "work-card--vitilia",
  },
  {
    title: "Simkaya",
    year: "2026",
    category: "Jewellery • Social Media & Branding",
    service: "Social Media & Branding",
    image: "/images/work/simkaya.webp",
    href: "/work/simkaya",
    external: false,
    cardClass: "",
  },
  {
    title: "Lumifya",
    year: "2026",
    category: "Creative agency • Digital design",
    service: "Website Development",
    image: "/images/work/lumifya/cover.webp",
    href: "/work/lumifya",
    external: false,
    cardClass: "work-card--lumifya",
  },
  {
    title: "Adovasio",
    year: "2026",
    category: "Photography • Creative portfolio",
    service: "Website Development",
    image: "/images/work/adovasio/cover.webp",
    href: "/work/adovasio",
    external: false,
    cardClass: "work-card--adovasio",
  },
  {
    title: "Brewora",
    year: "2026",
    category: "Coffee • Food & Beverage",
    service: "Website Development",
    image: "/images/work/brewora/cover-v2.webp",
    href: "/work/brewora",
    external: false,
    cardClass: "work-card--brewora",
  },
  {
    title: "Goldify",
    year: "2026",
    category: "Fintech • Market analytics",
    service: "Website Development",
    image: "/images/work/goldify/cover.webp",
    href: "/work/goldify",
    external: false,
    cardClass: "work-card--goldify",
  },
  {
    title: "Nexora Education",
    year: "2026",
    category: "Education • Professional learning",
    service: "Website Development",
    image: "/images/work/nexora/cover.webp",
    href: "/work/nexora",
    external: false,
    cardClass: "",
  },
  {
    title: "Velora Chocolat",
    year: "2026",
    category: "Food & Beverage • E-commerce",
    service: "Website & E-commerce Development",
    image: "/images/work/velora/cover.webp",
    href: "/work/velora",
    external: false,
    cardClass: "",
  },
  {
    title: "AUREL Skincare",
    year: "2026",
    category: "Beauty & Skincare • E-commerce",
    service: "E-commerce Development",
    image: "/images/work/aurel/cover.webp",
    href: "/work/aurel",
    external: false,
    cardClass: "",
  },
  {
    title: "AUREVÉ",
    year: "2026",
    category: "Interior Design • Portfolio Website",
    service: "Branding & Website Development",
    image: "/images/work/aureve/cover.webp",
    href: "/work/aureve",
    external: false,
    cardClass: "",
  },
  {
    title: "Starlight Park",
    year: "2026",
    category: "Public Space • Visitor Website",
    service: "Website Development",
    image: "/images/work/starlight/cover.webp",
    href: "/work/starlight",
    external: false,
    cardClass: "work-card--starlight",
  },
  {
    title: "AEVION",
    year: "2026",
    category: "Industrial Technology • Product Showcase",
    service: "Website Development",
    image: "/images/work/aevion/cover.webp",
    href: "/work/aevion",
    external: false,
    cardClass: "",
  },
];

export const workProjectCount = projects.length;

export default function WorkCards({
  headingLevel: Heading = "h3",
  limit,
  offset = 0,
}: {
  headingLevel?: "h2" | "h3";
  limit?: number;
  offset?: number;
}) {
  return (
    <div className="recent-work__grid">
      {projects.slice(offset, limit === undefined ? undefined : offset + limit).map((project) => (
        <a
          key={project.title}
          href={project.href}
          target={project.external ? "_blank" : undefined}
          rel={project.external ? "noreferrer" : undefined}
          className={`work-card ${project.cardClass}`}
          aria-label={`View ${project.title}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="work-card__image"
          />

          <div className="work-card__overlay" />

          <div className="work-card__panel">
            <div className="work-card__main">
              <Heading className="work-card__title">{project.title}</Heading>
              <p className="work-card__year">{project.year}</p>
            </div>

            <div className="work-card__expanded">
              <div className="work-card__meta">
                <p>{project.category}</p>
                <span>{project.service}</span>
              </div>

              <div className="work-card__cta">
                <span>See details</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
