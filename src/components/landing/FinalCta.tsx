import juiceBerry from "@/assets/juice-berry.jpg";

const GRAB_URL =
  "https://r.grab.com/g/6-20260525_154251_A5C6A9710BD049E3BF55531CA965DBD7_MEXMPS-3-C72GGFDDC36BTA";

export function FinalCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--color-tomato)] text-primary-foreground p-10 md:p-16 lg:p-20">
          <div className="absolute -top-32 -right-32 size-[500px] rounded-full bg-[var(--color-citrus)]/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 size-[420px] rounded-full bg-[var(--color-berry)]/40 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest opacity-80">Ready when you are</p>
              <h2 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95]">
                One tap.<br />
                <span className="italic font-[600]">One sip.</span><br />
                Pure good.
              </h2>
              <p className="mt-6 text-lg opacity-90 max-w-md">
                Order Veggie Vibes on GrabFood and we'll deliver fresh-pressed bottles straight to your door.
              </p>
              <a
                href={GRAB_URL}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-background text-foreground px-8 py-5 text-lg font-bold shadow-xl hover:-translate-y-1 transition-transform"
              >
                Order on GrabFood
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="relative">
              <img
                src={juiceBerry}
                alt="Veggie Vibes berry cold-pressed juice"
                className="size-full max-w-md mx-auto aspect-square object-cover blob shadow-2xl animate-float-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}