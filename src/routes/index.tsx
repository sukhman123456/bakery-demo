import { createFileRoute } from "@tanstack/react-router";
import { HomeExperience } from "../components/home-experience";
import { BRAND, REAL_PHOTOS } from "../lib/bakery-data";

function HomePage() {
  return <HomeExperience />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND.name} — ${BRAND.category} | Dinanagar` },
      {
        name: "description",
        content: `${BRAND.name} creates handcrafted celebration cakes, custom milestone creations, and artisanal delicacies in Dinanagar, Punjab.`,
      },
      { property: "og:title", content: `${BRAND.name} — ${BRAND.tagline}` },
      {
        property: "og:description",
        content: `${BRAND.heroDescription}`,
      },
      { property: "og:image", content: REAL_PHOTOS.hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
