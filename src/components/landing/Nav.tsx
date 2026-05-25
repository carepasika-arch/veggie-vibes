const GRAB_URL =
  "https://r.grab.com/g/6-20260525_154251_A5C6A9710BD049E3BF55531CA965DBD7_MEXMPS-3-C72GGFDDC36BTA";

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="size-9 rounded-full bg-[var(--color-leaf)] grid place-items-center text-primary-foreground font-display font-black">
            V
          </span>
          <span className="font-display text-xl font-black tracking-tight font-sans">
            Veggie Vibes
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
          <a href="#products" className="hover:text-primary transition-colors">Juices</a>
          <a href="#why" className="hover:text-primary transition-colors">Why us</a>
          <a href="#love" className="hover:text-primary transition-colors">Review</a>
        </nav>
        <a
          href={GRAB_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:bg-primary transition-colors"
        >
          Order on GrabFood
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}