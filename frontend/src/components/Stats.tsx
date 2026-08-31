import { Users, Home, Headset, Globe } from "lucide-react";

const stats = [
  { icon: <Users size={20} />, value: "10,000+", label: "Lives Supported", color: "umber" },
  { icon: <Home size={20} />, value: "500+", label: "Verified Shelters", color: "navy" },
  { icon: <Headset size={20} />, value: "24/7", label: "Emergency Assistance", color: "gold" },
  { icon: <Globe size={20} />, value: "20+", label: "African Countries", color: "navy" },
];

export function Stats() {
  return (
    <div className="relative z-10 -mt-10 lg:-mt-12 px-5 sm:px-8">
      <div className="mx-auto max-w-2xl text-center mb-6 pt-10 lg:pt-14">
  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold bg-umber/10 dark:bg-gold/10 px-4 py-1.5 rounded-full">
    By The Numbers
  </span>
  <h2 className="mt-3 text-2xl lg:text-3xl font-bold">
    <span className="text-navy dark:text-white">Real Reach, Real </span>
    <span className="text-gold">Results</span>
  </h2>
  <p className="mt-3 text-sm text-dark-gray/70 dark:text-white/70 leading-relaxed">
    Every number here represents a person who found help, a shelter that
    opened its doors, or a community made a little safer.
  </p>
</div>

      <div className="mx-auto max-w-6xl bg-white dark:bg-navy rounded-2xl shadow-xl px-6 sm:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <div className={`h-11 w-11 rounded-full flex items-center justify-center shrink-0 ${
  stat.color === "umber" ? "bg-umber text-white" :
  stat.color === "navy" ? "bg-navy text-white" :
  "bg-gold text-dark-gray"
}`}>
  {stat.icon}
</div>
            <div>
              <p className="text-lg lg:text-xl font-bold text-navy dark:text-gold">
                {stat.value}
              </p>
              <p className="text-xs text-dark-gray/60 dark:text-white/60">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}