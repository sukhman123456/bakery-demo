import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { BRAND } from "../lib/bakery-data";

export const Route = createFileRoute("/cafe")({
  head: () => ({
    meta: [
      { title: "Bakery Specials — Karshni Baker’s Dinanagar" },
      {
        name: "description",
        content: "Explore handcrafted celebration cakes, desserts, and bakery specials at Karshni Baker's.",
      },
    ],
  }),
  component: CafeRedirectNotice,
});

function CafeRedirectNotice() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-cream)] flex items-center justify-center px-6">
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[var(--color-sand)] shadow-xl text-center max-w-lg mx-auto">
        <span className="section-eyebrow">Artisanal Bakery</span>
        <h1 className="font-serif text-3xl font-medium text-[var(--color-chocolate)] mb-3">
          Karshni Baker’s
        </h1>
        <p className="text-sm text-[#55443B] leading-relaxed mb-6">
          We operate exclusively as a premier bakery in Dinanagar, specializing in handcrafted celebration cakes, custom creations, and fine patisserie.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/cakes" className="btn btn-primary w-full sm:w-auto text-xs">
            <span>Explore Cakes Collection</span>
            <ArrowRight size={15} />
          </Link>
          <Link to="/" className="btn btn-cream w-full sm:w-auto text-xs">
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}