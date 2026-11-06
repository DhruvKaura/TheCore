import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ContactProject from "@/components/sections/ContactProject";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      <ServicesList />

      <ContactProject />
    </main>
  );
}