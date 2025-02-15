import CTA from "./components/CTA";
import Feedback from "./components/Feedback";
import HeroSection from "./components/HeroSection";
import SearchProperties from "./components/SearchProperties";
import ShowCase from "./components/ShowCase";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <SearchProperties />
      <ShowCase />
      <Feedback />
      <CTA />
    </section>
  );
};

export default Home;
