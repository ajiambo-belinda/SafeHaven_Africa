import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Safety & Trust",
    desc: "Every interaction is built around confidentiality, security, and putting survivors first.",
  },
  {
    icon: <HeartHandshake size={20} />,
    title: "Compassion & Empowerment",
    desc: "We meet people where they are, without judgment, and help them reclaim their sense of agency.",
  },
  {
    icon: <Globe2 size={20} />,
    title: "Community & African Identity",
    desc: "Built for and rooted in African communities, drawing on local networks of care and resilience.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-cream dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold bg-umber/10 dark:bg-gold/10 px-4 py-1.5 rounded-full">
            About Us
          </span>

          <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
            <span className="text-navy dark:text-white">Our Mission for a </span>
            <span className="text-gold">Safer Africa</span>
          </h2>

          <p className="mt-4 text-dark-gray/70 dark:text-white/70 leading-relaxed">
            SafeHaven Africa exists to give vulnerable individuals and
            communities across the continent immediate access to emergency
            assistance, safe shelter, legal support, and counseling — through
            a platform that's secure, accessible, and built around real human
            need. Our vision is simple: a safer Africa, where anyone facing
            violence, abuse, displacement, or crisis can quickly find
            protection, support, and hope.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="rounded-2xl border border-dark-gray/10 dark:border-white/10 bg-white dark:bg-navy p-6"
            >
              <div className="h-11 w-11 rounded-full bg-umber/10 text-umber dark:bg-gold/10 dark:text-gold flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="mt-4 font-semibold text-dark-gray dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-dark-gray/70 dark:text-white/70 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}