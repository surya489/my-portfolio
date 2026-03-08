import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import ContactCTA from "@/components/home/ContactCTA";
import GithubActivity from "@/components/home/GithubActivity";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <GithubActivity />
      <FeaturedProjects />
      <Testimonials />
      <Skills />
      <Experience />
      <ContactCTA />
    </>
  );
}
