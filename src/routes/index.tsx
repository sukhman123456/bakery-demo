import { createFileRoute } from "@tanstack/react-router";
import { HomeExperience } from "../components/home-experience";
import { CinematicIntro } from "../components/cinematic-intro";

function HomePage() {
  return (
    <>
      <CinematicIntro />
      <HomeExperience />
    </>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karshni Baker’s — Crafted for Sweet Moments" },
      {
        name: "description",
        content:
          "Karshni Baker’s creates handcrafted cakes, custom creations and handcrafted desserts made for every celebration in Dinanagar, Punjab.",
      },
      { property: "og:title", content: "Karshni Baker’s — Crafted for Sweet Moments" },
      {
        property: "og:description",
        content: "Premium cakes, custom creations and handcrafted desserts made for every celebration.",
      },
      { property: "og:image", content: "/images/karshni-logo.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

