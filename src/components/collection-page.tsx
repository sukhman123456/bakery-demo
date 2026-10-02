import { Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import type { ReactNode } from "react";

export function CollectionPage({ eyebrow, title, description, image, imageAlt, children }: { eyebrow: string; title: string; description: string; image: string; imageAlt: string; children?: ReactNode }) {
  return <main className="inner-page"><section className="inner-hero"><img src={image} alt={imageAlt} /><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p><a className="button button-cream" href="tel:+919888526072"><Phone size={16} /> Call Now</a></div></section>{children}<div className="inner-back"><Link className="text-link" to="/"><ArrowLeft size={17} /> Back to home</Link></div></main>;
}