export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-7 rounded-full bg-[var(--color-leaf)] grid place-items-center text-primary-foreground font-display font-black text-xs">
            V
          </span>
          <span className="font-display font-bold text-foreground font-sans">Veggie Vibes</span>
        </div>
        <p>© {new Date().getFullYear()} Veggie Vibes · Cold-pressed in Bangkok</p>
      </div>
    </footer>
  );
}