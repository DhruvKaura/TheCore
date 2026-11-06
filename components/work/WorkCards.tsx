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
];

export default function WorkCards({
  headingLevel: Heading = "h3",
  limit,
}: {
  headingLevel?: "h2" | "h3";
  limit?: number;
}) {
  return (
    <div className="recent-work__grid">
      {projects.slice(0, limit).map((project) => (
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
