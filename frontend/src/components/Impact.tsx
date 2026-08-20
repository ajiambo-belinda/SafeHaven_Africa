import { Lock, HandHeart, Globe2 } from "lucide-react";

const points = [
  {
    icon: <HandHeart size={20} />,
    title: "Built with responders, not just for them",
    desc: "Case workflows are shaped by feedback from NGOs, shelter staff, and legal partners already doing this work.",
  },
  {
    icon: <Lock size={20} />,
    title: "Privacy by default",
    desc: "Location sharing is opt-in, and case data is encrypted end to end.",
  },
  {
    icon: <Globe2 size={20} />,
    title: "Built for the whole continent",
    desc: "Designed to work on low-bandwidth connections and everyday devices, in the languages your community speaks.",
  },
];

export function Impact() {
  return (
    <section className="bg-cream dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold">
            Why it matters
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-gray dark:text-white">
            A safety net that actually reaches people
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-umber/10 dark:bg-gold/10 text-umber dark:text-gold flex items-center justify-center">
                {point.icon}
              </div>
              <div>
                <h3 className="font-semibold text-dark-gray dark:text-white">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm text-dark-gray/70 dark:text-white/70 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}