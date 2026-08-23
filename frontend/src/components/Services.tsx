import { Siren, Home, Scale, MessageCircle, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Siren size={22} />,
    title: "Emergency SOS",
    desc: "Trigger an alert and get immediate help from trusted responders.",
    color: "umber",
  },
  {
    icon: <Home size={22} />,
    title: "Safe Shelters",
    desc: "Find nearby verified shelters and safe accommodation.",
    color: "navy",
  },
  {
    icon: <Scale size={22} />,
    title: "Legal Assistance",
    desc: "Connect with legal aid organizations and get justice support.",
    color: "gold",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Counseling Support",
    desc: "Access professional counselors and mental health resources.",
    color: "navy",
  },
  {
    icon: <Users size={22} />,
    title: "Community Reporting",
    desc: "Report abuse or suspicious activities anonymously and securely.",
    color: "umber",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy dark:text-white">
            Our Services
          </h2>
          <div className="mt-3 mx-auto h-1 w-14 rounded-full bg-gold" />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
              
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                service.color === "umber" ? "bg-umber text-white" :
                service.color === "navy" ? "bg-navy text-white" :
                "bg-gold text-dark-gray"
              }`}>
                {service.icon}
              </div>

              <h3 className="mt-4 font-semibold text-dark-gray dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-dark-gray/70 dark:text-white/70 leading-relaxed flex-1">
                {service.desc}
              </p>

              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-umber dark:text-gold hover:gap-2 transition-all">
                Learn more
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}