const reviews = [
  {
    quote: "Finally a juice that doesn't taste like sugar water. The Green Clean is my morning ritual.",
    name: "Care",
    role: "Yoga instructor, Sukhumvit",
    color: "var(--color-leaf)",
  },
  {
    quote: "I order through GrabFood twice a week. Deep De is unreal — like a bottled sunset.",
    name: "Pukkie",
    role: "Designer, Sathorn",
    color: "var(--color-berry)",
  },
  {
    quote: "You can actually taste the freshness. My skin has never looked better, honestly.",
    name: "Nacny",
    role: "Content creator",
    color: "var(--color-tomato)",
  },
];

export function Testimonials() {
  return (
    <section id="love" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-tomato)]">Customer love</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Review
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="relative p-8 rounded-3xl bg-card border border-foreground/5 hover:-translate-y-1 transition-all hover:shadow-xl"
              style={{ rotate: i % 2 === 0 ? "-1deg" : "1deg" }}
            >
              <div className="text-5xl leading-none font-display" style={{ color: r.color }}>"</div>
              <blockquote className="mt-2 text-lg leading-relaxed font-display font-sans">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="size-10 rounded-full" style={{ background: r.color }} />
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
                <div className="ml-auto text-xs" style={{ color: r.color }}>★★★★★</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}