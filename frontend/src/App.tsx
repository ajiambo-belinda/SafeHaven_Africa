import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Impact } from "./components/Impact";
import { Testimonials } from "./components/Testimonials";
import { Partners } from "./components/Partners";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream dark:bg-charcoal transition-colors">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Impact />
      <Testimonials />
      <Partners />
      <CTA />
       <Footer />
    </div>
  );
}

export default App;