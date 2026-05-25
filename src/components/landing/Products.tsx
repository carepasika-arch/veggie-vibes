import juiceKale from "@/assets/juice-kale.jpg";
import juiceBeet from "@/assets/juice-beet.jpg";
import juiceOrange from "@/assets/juice-orange.jpg";
import juicePeach from "@/assets/juice-peach.jpg";

const products = [
  {
    name: "Green Clean",
    tag: "Kale · Apple · Pineapple",
    desc: "Leafy, crisp, and quietly cleansing. Your daily reset in a bottle.",
    img: juiceKale,
    bg: "oklch(0.92 0.08 145)",
    accent: "var(--color-leaf)",
  },
  {
    name: "Deep De",
    tag: "Beet · Pineapple · Guava",
    desc: "Deep ruby pour with a sweet, earthy finish. Antioxidants on tap.",
    img: juiceBeet,
    bg: "oklch(0.85 0.1 0)",
    accent: "var(--color-berry)",
  },
  {
    name: "Carrot Vision",
    tag: "Carrot · Orange · Apple",
    desc: "Sun-kissed, sparkling and full of C. Brightens your day, literally.",
    img: juiceOrange,
    bg: "oklch(0.9 0.11 60)",
    accent: "var(--color-tomato)",
  },
  {
    name: "Daily Vital",
    tag: "Carrot · Apple · Guava",
    desc: "Smooth, mellow and grounding. A garden in your glass.",
    img: juicePeach,
    bg: "oklch(0.9 0.07 50)",
    accent: "var(--color-peach)",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-leaf)]">The lineup</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Four flavors,<br />
            <span className="italic font-[600] text-[var(--color-tomato)]">infinite vibes.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group relative rounded-3xl overflow-hidden bg-card border border-foreground/5 hover:-translate-y-2 transition-all duration-500"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{ background: p.bg }}
              >
                <img
                  src={p.img}
                  alt={`${p.name} cold-pressed juice — ${p.tag}`}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wide"
                  style={{ color: p.accent }}
                >
                  No. 0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-foreground font-sans">{p.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: p.accent }}>
                  {p.tag}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-xl font-black font-sans">฿80</span>
                  <span className="text-xs text-muted-foreground">250ml</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}