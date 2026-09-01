import { Users, Home, Globe, Quote, Heart, Handshake } from "lucide-react";

const stats = [
  { icon: <Users size={18} />, value: "10,254+", label: "Lives Supported", color: "umber" },
  { icon: <Home size={18} />, value: "532+", label: "Shelters Verified", color: "navy" },
  { icon: <Handshake size={18} />, value: "320+", label: "Partner Organizations", color: "gold" },
  { icon: <Globe size={18} />, value: "20+", label: "African Countries", color: "navy" },
];

export function Impact() {
  return (
    <section id="ourimpact" className="bg-dark-gray/5 dark:bg-navy/30 transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold bg-umber/10 dark:bg-gold/10 px-4 py-1.5 rounded-full">
              Our Impact
            </span>

            <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
              <span className="text-navy dark:text-white">Changing Lives Across </span>
              <span className="text-gold">Africa</span>
            </h2>

            <p className="mt-4 text-black dark:text-white/70 leading-relaxed max-w-md">
              Together, we are building safer communities — one report answered,
              one shelter placement, one supported survivor at a time.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center sm:items-start sm:text-left gap-2">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center shadow-sm ${
                    stat.color === "umber" ? "bg-umber text-white" :
                    stat.color === "navy" ? "bg-navy text-white" :
                    "bg-gold text-dark-gray"
                  }`}>
                    {stat.icon}
                  </div>
                  <p className="text-lg font-bold text-navy dark:text-gold">{stat.value}</p>
                  <p className="text-xs text-dark-gray/60 dark:text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-navy rounded-2xl shadow-sm p-6 relative max-w-sm mx-auto lg:mx-0">
            <Quote className="text-gold" size={32} />
            <p className="mt-2 text-dark-gray dark:text-white/90 leading-relaxed">
              SafeHaven Africa gave me hope when I had none. Today, I am safe,
              supported, and rebuilding my life.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-dark-gray/70 dark:text-white/60">
                — A Survivor
              </span>
              <Heart size={16} className="text-umber/50" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#impact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-umber text-white text-sm font-semibold hover:bg-umber/90 transition-colors">
            See Our Impact
          </a>
        </div>
      </div>
    </section>
  );
}