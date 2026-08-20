import heroPhoto from "../assets/map.png";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="hero" className="bg-cream dark:bg-charcoal transition-colors">
     <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold bg-umber/10 dark:bg-gold/10 px-3 py-1.5 rounded-full">
            Your safety. Your voice. Our mission.
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-dark-gray dark:text-white">
            You're not alone.
            <br />
            Help is closer than you think.
          </h1>

          <p className="mt-6 text-lg text-dark-gray/70 dark:text-white/70 max-w-xl leading-relaxed">
            SafeHaven Africa connects survivors of violence, abuse, and crisis
            to nearby shelters, legal support, and counselors — quickly,
            privately, and on any device.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Report an emergency</Button>
            <Button variant="outline">Find a shelter near me</Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroPhoto}
            alt="A mother and child, representing the communities SafeHaven Africa supports"
            className="w-full max-w-md rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}