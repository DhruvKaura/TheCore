import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import ServiceDetail from "@/components/services/ServiceDetail";

import {
  getNextService,
  getPreviousService,
  getServiceBySlug,
  services,
} from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service =
    getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | The Core Technology`,

    description:
      service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service =
    getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const nextService =
    getNextService(slug);

  return (
    <ServiceDetail
      service={service}
      previousService={getPreviousService(slug)}
      nextService={nextService}
    />
  );
}
