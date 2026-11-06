import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import ApproachSection from "@/components/about/ApproachSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import ProjectSpotlight from "@/components/sections/ProjectSpotlight";
import TeamSection from "@/components/about/TeamSection";
import ContactProject from "@/components/sections/ContactProject";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <WhoWeAre />

      <ApproachSection />

      <AchievementsSection />

      <ProjectSpotlight />

      <TeamSection />

      <ContactProject />
    </main>
  );
}