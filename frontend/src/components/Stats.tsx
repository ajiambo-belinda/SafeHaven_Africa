import { Users, Home, Headset, Globe } from "lucide-react";

const stats = [
  { icon: <Users size={20} />, value: "10,000+", label: "Lives Supported" },
  { icon: <Home size={20} />, value: "500+", label: "Verified Shelters" },
  { icon: <Headset size={20} />, value: "24/7", label: "Emergency Assistance" },
  { icon: <Globe size={20} />, value: "20+", label: "African Countries" },
];

export function Stats() {
  return (
    <div className="relative z-10 -mt-10 lg:-mt-12 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl bg-white dark:bg-navy rounded-2xl shadow-xl px-6 sm:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-dark-gray/5 dark:bg-white/10 text-dark-gray dark:text-white flex items-center justify-center shrink-0">
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