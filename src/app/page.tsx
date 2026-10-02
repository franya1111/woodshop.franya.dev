"use client";

import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Categories } from "@/components/site/categories";
import { Benefits } from "@/components/site/benefits";
import { FeaturedProducts } from "@/components/site/featured-products";
import { Bestsellers } from "@/components/site/bestsellers";
import { Gallery } from "@/components/site/gallery";
import { About } from "@/components/site/about";
import { Testimonials } from "@/components/site/testimonials";
import { Newsletter } from "@/components/site/newsletter";
import { Footer } from "@/components/site/footer";
import { CartDrawer } from "@/components/site/cart-drawer";
import { QuickView } from "@/components/site/quick-view";
import { useReveal } from "@/hooks/use-reveal";

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--wood-950)]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Categories />
        <Benefits />
        <FeaturedProducts />
        <Bestsellers />
        <Gallery />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />

      {/* Global overlays */}
      <CartDrawer />
      <QuickView />
    </div>
  );
}
