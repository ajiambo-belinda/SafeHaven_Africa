import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { HowItWorks } from "../components/HowItWorks";
import { Impact } from "../components/Impact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <HowItWorks />
      <Impact />
      <Footer />
    </>
  );
}