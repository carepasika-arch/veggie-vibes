import lineup from "@/assets/lineup.jpg";
import juiceCoconut from "@/assets/juice-coconut.jpg";

const points = [
  { num: "01", title: "Fresh ingredients", desc: "Sourced from local Thai farms — picked at peak ripeness." },
  { num: "02", title: "Wellness-focused", desc: "Designed by nutritionists to fit real, busy lifestyles." },
  { num: "03", title: "Convenient healthy choice", desc: "Grab-and-go bottles that travel with you everywhere." },
  { num: "04", title: "Freshly made & delivered", desc: "From press to your door in under 24 hours via GrabFood." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute -left-32 top-20 size-[500px] rounded-full bg-[var(--color-citrus)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative aspect-square max-w-lg">
            <img
              src={lineup}
              alt="Veggie Vibes full lineup of cold-pressed juices"
              className="size-full object-cover blob shadow-2xl"
            />
            <img
              src={juiceCoconut}
              alt="Coconut water cold-pressed juice"
              className="absolute -bottom-10 -right-8 w-44 sm:w-56 aspect-square object-cover rounded-full ring-8 ring-background shadow-xl animate-float"
            />
            <div className="absolute -top-6 -left-6 rotate-[-8deg] bg-foreground text-background px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Bottled · with · love
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-berry)]">Why Veggie Vibes</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            A juice<br />
            <span className="italic font-[600] text-[var(--color-leaf)]">worth the squeeze.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            We started Veggie Vibes because Bangkok deserves real juice — not from concentrate,
            not over-pasteurized, not sweetened. Just produce, pressed.
          </p>

          <ul className="mt-10 space-y-5">
            {points.map((p) => (
              <li key={p.num} className="flex gap-5 group">
                <span className="shrink-0 size-12 rounded-full bg-secondary grid place-items-center font-mono text-sm font-bold group-hover:bg-[var(--color-tomato)] group-hover:text-primary-foreground transition-colors">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}