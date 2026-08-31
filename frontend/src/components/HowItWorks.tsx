import { FileEdit, Users, HeartHandshake, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: <FileEdit size={24} />,
    title: "Request Help",
    desc: "Submit a request or trigger an SOS when you need immediate assistance.",
    color: "umber",
  },
  {
    number: 2,
    icon: <Users size={24} />,
    title: "Get Matched",
    desc: "We match you with the right resources, shelters, and support services.",
    color: "navy",
  },
  {
    number: 3,
    icon: <HeartHandshake size={24} />,
    title: "Receive Support",
    desc: "Get the help you need and ongoing support until you are safe and stable.",
    color: "gold",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-cream dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 lg:py-16">
        <div className="text-center max-w-2xl mx-auto">
  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-umber dark:text-gold bg-umber/10 dark:bg-gold/10 px-4 py-1.5 rounded-full">
    How It Works
  </span>

  <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
    <span className="text-navy dark:text-white">Your Path to Safety in </span>
    <span className="text-gold">3 Simple Steps</span>
  </h2>

  <p className="mt-4 text-dark-gray/70 dark:text-white/70 leading-relaxed">
    No complicated forms, no waiting rooms. Reaching out, getting matched
    with the right support, and receiving real help — all in one guided
    process.
  </p>
</div>

        <div className="mt-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-3">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-3 lg:flex-1">
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className={`h-14 w-14 rounded-full flex items-center justify-center ${
                    step.color === "umber" ? "bg-umber text-white" :
                    step.color === "navy" ? "bg-navy text-white" :
                    "bg-gold text-dark-gray"
                  }`}>
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-navy dark:bg-gold text-white dark:text-dark-gray text-[11px] font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-gray dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-dark-gray/70 dark:text-white/70 leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block text-dark-gray/30 dark:text-white/30 shrink-0 mx-2" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}