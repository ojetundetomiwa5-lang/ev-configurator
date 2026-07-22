import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vehicles from "./components/Vehicles";
import Energy from "./components/Energy";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <Vehicles />
      </FadeIn>

      <FadeIn>
        <Energy />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </>
  );
}