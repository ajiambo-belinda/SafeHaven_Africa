import { Card } from "./Card";

const stats = [
  { value: "24/7", label: "Emergency reporting availability" },
  { value: "Free", label: "Always, for every survivor" },
  { value: "100%", label: "Confidential, encrypted case data" },
  { value: "All", label: "Every region we can reach" },
];

export function Stats() {
  return (
    <section className="bg-cream dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-12 lg:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <Card key={stat.label} size="compact">
              <div className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-navy dark:text-gold">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-dark-gray/70 dark:text-white/70">
                  {stat.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}