import BlogHero from "@/components/blog/BlogHero";
import BlogListing from "@/components/blog/BlogListing";
import ContactProject from "@/components/sections/ContactProject";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />

      <BlogListing />

      <ContactProject />
    </main>
  );
}