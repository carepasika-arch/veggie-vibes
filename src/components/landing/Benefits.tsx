const items = [
  {
    title: "Cold-Pressed Daily",
    desc: "Hydraulically pressed every morning to lock in nutrients and flavor.",
    color: "var(--color-tomato)",
    icon: "❄️",
  },
  {
    title: "No Added Sugar",
    desc: "Just whole fruit and veg. Nothing sneaky, ever.",
    color: "var(--color-leaf)",
    icon: "🚫",
  },
  {
    title: "Packed with Nutrients",
    desc: "Vitamins, enzymes and antioxidants in every 250ml bottle.",
    color: "var(--color-citrus)",
    icon: "✺",
  },
  {
    title: "Fresh Fruits & Veg",
    desc: "Sourced from trusted Thai farms — never frozen, never from concentrate.",
    color: "var(--color-berry)",
    icon: "✿",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-tomato)]">Why we squeeze</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Good things,<br />
              <span className="italic font-[600] text-[var(--color-leaf)]">pressed in.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-base">
            Every bottle is a tiny ritual of care — picked, washed, pressed and bottled
            within hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative p-7 rounded-3xl bg-card border border-foreground/5 hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl overflow-hidden"
            >
              <div
                className="absolute -top-10 -right-10 size-32 blob opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: it.color }}
              />
              <div className="relative">
                <div
                  className="size-14 rounded-2xl grid place-items-center text-2xl mb-6"
                  style={{ background: it.color, color: "white" }}
                >
                  {it.icon}
                </div>
                <h3 className="font-display font-bold text-foreground font-sans">{it.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
                <div className="mt-6 text-xs font-mono tracking-widest text-foreground/40">
                  0{i + 1} / 04
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}