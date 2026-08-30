import { motion } from "framer-motion";
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
        <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-center max-w-2xl mx-auto"
>
  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold bg-umber/10 dark:bg-gold/10 px-4 py-1.5 rounded-full">
    Our Services
  </span>

  <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
    <span className="text-navy dark:text-white">What We Offer on </span>
    <span className="text-gold">SafeHaven</span>
    <span className="text-navy dark:text-white">?</span>
  </h2>

  <p className="mt-4 text-dark-gray/70 dark:text-white/70 leading-relaxed">
    From the moment you reach out, you're connected to real people and
    real resources — emergency responders, verified shelters, legal
    guidance, and counseling, all coordinated through one trusted network
    built for communities across Africa.
  </p>
</motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-dark-gray/10 dark:border-white/10 bg-white dark:bg-navy p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
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

              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.96 }}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-umber dark:text-gold w-fit"
              >
                Learn more
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}