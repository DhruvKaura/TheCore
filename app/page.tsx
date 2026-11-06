import Hero from "@/components/sections/Hero";
import ClientStory from "@/components/sections/ClientStory";
import RecentWork from "@/components/sections/RecentWork";
import ScrollStatement from "@/components/sections/ScrollStatement";
import FounderSection from "@/components/sections/FounderSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesStack from "@/components/sections/ServicesStack";
import ProjectSpotlight from "@/components/sections/ProjectSpotlight";
import ClientStories from "@/components/sections/ClientStories";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import BlogPreview from "@/components/sections/BlogPreview";
import ContactProject from "@/components/sections/ContactProject";

export default function Home() {
  return (
    <main>

      <Hero />

      <ClientStory />

      <RecentWork />

      <div className="core-story-flow">
        <ScrollStatement />

        <FounderSection />
      </div>

      <WhyChooseUs />

      <ServicesStack />

      <ProjectSpotlight />
      <ClientStories />
      <TeamSection />
      <FAQSection />
      <BlogPreview />

<ContactProject />

    </main>
  );
}