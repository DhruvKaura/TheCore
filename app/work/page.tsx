import WorkCards from "@/components/work/WorkCards";
import ContactProject from "@/components/sections/ContactProject";

export default function WorkPage() {
  return (
    <main className="work-page">
      <div className="work-page__container">
        <h1 className="work-page__title">Our work</h1>
        <WorkCards headingLevel="h2" />
      </div>
      <ContactProject />
    </main>
  );
}
