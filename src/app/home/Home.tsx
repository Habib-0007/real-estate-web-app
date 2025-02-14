import Feedback from "./components/Feedback";
import HeroSection from "./components/HeroSection";
import ShowCase from "./components/ShowCase";

const Home = () => {
  return (
    <section className="mb-20">
      <HeroSection />
      <ShowCase />
      <Feedback />
    </section>
  );
};

export default Home;
