import Image from "next/image";

export default function WorkWebsiteGallery({
  project,
  heading,
  description,
  previews,
}: {
  project: string;
  heading: string;
  description: string;
  previews: readonly [string, string];
}) {
  return (
    <section className="work-detail__section work-detail__section--tint">
      <div className="work-detail__container">
        <div className="work-detail__split-heading">
          <p className="work-detail__section-label">
            <span aria-hidden="true">+</span> Our approach
          </p>
          <div>
            <h2>{heading}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div
          className="work-detail__page-panels work-detail__page-panels--pair"
          role="region"
          aria-label="Interior website screenshots"
          tabIndex={0}
        >
          {previews.map((alt, index) => (
            <figure key={alt}>
              <Image
                src={`/images/work/${project}/website-preview-${index + 1}.webp`}
                alt={alt}
                width={2880}
                height={2640}
                unoptimized
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
