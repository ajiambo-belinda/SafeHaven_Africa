// PLACEHOLDER CONTENT — these are fictional organization names for layout
// purposes only. Replace with real, confirmed partner organizations (with
// their permission to display their name/logo) before this goes live.
const partners = [
  "Amani NGO Network",
  "Kesho Legal Aid",
  "Jamii Shelters Alliance",
  "Tumaini Counseling Collective",
  "Mkoa Response Corps",
];

export function Partners() {
  return (
    <section className="bg-cream dark:bg-charcoal border-y border-dark-gray/10 dark:border-white/10 transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-dark-gray/40 dark:text-white/40 mb-6">
          Working alongside organizations across the region
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((name) => (
            <span
              key={name}
              className="font-semibold text-dark-gray/60 dark:text-white/60 text-sm sm:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}