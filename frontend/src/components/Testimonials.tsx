import { Card } from "./Card";

// PLACEHOLDER CONTENT — these are fictional quotes for layout purposes only.
// Replace with real, verified quotes, and only with explicit informed
// consent from the person quoted, before this goes live.
const testimonials = [
  {
    quote:
      "I did not know where to turn. Within an hour of submitting a report, someone called me back and helped me find a place to stay that night.",
    name: "M.",
    context: "Survivor, Nairobi",
  },
  {
    quote:
      "The dashboard cut our average case response time significantly. We finally have one place to see every open case.",
    name: "David O.",
    context: "NGO case worker",
  },
  {
    quote:
      "Being able to update our shelter capacity in real time means fewer people get turned away or sent somewhere already full.",
    name: "Grace N.",
    context: "Shelter administrator",
  },
];

export function Testimonials() {
  return (
    <section id="about" className="bg-cream dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold">
            Voices from the network
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-gray dark:text-white">
            People we've supported
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <p className="text-[15px] leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-4 border-t border-dark-gray/10 dark:border-white/10 text-sm">
                <span className="font-semibold text-dark-gray dark:text-white">
                  {t.name}
                </span>
                <span className="text-dark-gray/60 dark:text-white/60"> — {t.context}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}