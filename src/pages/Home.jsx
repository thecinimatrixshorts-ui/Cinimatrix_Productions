import Hero from "../components/Hero";
import Kam from "../components/Kam";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import LatestWork from "../components/LatestWork";
import WorkFlow from "../components/WorkFlow";
import ContactCTA from "../components/cos";
export default function Home() {
  return (
    <div>
      <Hero />
      <Kam />
      <Experience />
      <Testimonials />
      <Brands />
      <LatestWork />
      <WorkFlow />
      
      <ContactCTA />

    </div>
  );
}