import { Button } from "./Button";

export function CTA() {
  return (
    <section id="get-involved" className="bg-cream dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4">
        <div className="rounded-3xl bg-navy px-8 py-14 lg:px-16 lg:py-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-2xl mx-auto">
            Whether you need help or want to give it, there's a place for you here
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto leading-relaxed">
            Join as a volunteer, partner with us as an organization, or reach
            out for support. Every part of the network matters.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">Become a volunteer</Button>
            <Button variant="outline">Partner with us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}