import heroRed from "@/assets/hero-red.jpg";
import juiceGreen from "@/assets/juice-green.jpg";
import juiceYellow from "@/assets/juice-yellow.jpg";

const GRAB_URL =
  "https://r.grab.com/g/6-20260525_154251_A5C6A9710BD049E3BF55531CA965DBD7_MEXMPS-3-C72GGFDDC36BTA";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Floating organic blobs */}
      <div className="absolute -top-20 -left-24 size-[420px] rounded-full bg-[var(--color-citrus)]/40 blur-3xl" />
      <div className="absolute top-40 -right-32 size-[520px] rounded-full bg-[var(--color-tomato)]/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 size-[360px] rounded-full bg-[var(--color-leaf)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            <span className="size-2 rounded-full bg-[var(--color-leaf)]" />
            100% Cold-Pressed · Bangkok
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight">
            Freshness
            <br />
            <span className="italic font-[600] text-[var(--color-tomato)]">you can</span>{" "}
            <span className="relative inline-block">
              feel.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                <path d="M2 8 C 50 -2, 150 14, 198 4" stroke="var(--color-citrus)" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Cold-pressed vegetable & fruit juice — bottled within hours of harvest.
            No added sugar, no shortcuts. Just bright, living flavor in every sip.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={GRAB_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 text-base font-semibold shadow-[0_10px_30px_-10px_var(--color-tomato)] hover:bg-primary transition-all hover:-translate-y-0.5"
            >
              View On Grab
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="size-9 rounded-full bg-[var(--color-tomato)] border-2 border-background" />
                <span className="size-9 rounded-full bg-[var(--color-leaf)] border-2 border-background" />
                <span className="size-9 rounded-full bg-[var(--color-citrus)] border-2 border-background" />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">2,400+</span> happy sippers
              </p>
            </div>
          </div>
        </div>

        {/* Image collage */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] max-w-xl mx-auto">
            <div className="absolute inset-0 blob bg-[var(--color-tomato)]/20 animate-float-slow" />
            <img
              src={heroRed}
              alt="Veggie Vibes cold-pressed tomato carrot juice surrounded by fresh produce"
              className="absolute inset-4 size-[calc(100%-2rem)] object-cover blob shadow-2xl"
              loading="eager"
            />
            <img
              src={juiceGreen}
              alt="Green guava mint cold-pressed juice"
              className="absolute -left-8 -bottom-8 w-40 sm:w-52 aspect-square object-cover blob-2 shadow-xl ring-4 ring-background animate-float"
            />
            <img
              src={juiceYellow}
              alt="Pineapple orange cold-pressed juice"
              className="absolute -right-6 -top-6 w-32 sm:w-44 aspect-square object-cover rounded-full shadow-xl ring-4 ring-background animate-float-slow"
            />
            {/* Badge */}
            <div className="absolute -right-4 bottom-10 sm:-right-10 size-28 sm:size-36 rounded-full bg-foreground text-background grid place-items-center animate-spin-slow">
              <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
                <defs>
                  <path id="circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <text fontSize="9" fontWeight="700" letterSpacing="2" fill="currentColor" fontFamily="Inter">
                  <textPath href="#circle">100% NATURAL · NO SUGAR · COLD-PRESSED · </textPath>
                </text>
              </svg>
              <span className="font-display text-2xl sm:text-3xl">★</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}