const steps = [
  {
    number: "01",
    title: "Reach out",
    desc: "Submit an emergency report or browse resources — no account required to get started.",
  },
  {
    number: "02",
    title: "Get matched",
    desc: "A case is created and routed to the nearest available responder, shelter, or counselor.",
  },
  {
    number: "03",
    title: "Receive support",
    desc: "Track your case, message your responder, and access ongoing legal or counseling support.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy dark:bg-charcoal transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">
            How it works
          </p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
            Three steps between you and support
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-5xl font-bold text-gold/40">
  {step.number}
</span>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}