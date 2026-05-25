import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Products } from "@/components/landing/Products";
import { WhyUs } from "@/components/landing/WhyUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCta } from "@/components/landing/FinalCta";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veggie Vibes — Freshness You Can Feel" },
      { name: "description", content: "Cold-pressed vegetable & fruit juice made fresh daily. No added sugar. Order Veggie Vibes on GrabFood." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <WhyUs />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}