import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { label: "Vlogs", thumbnail: "documentry.jpg", link: "/films#vlogs" },
  { label: "Restaurants & Cafes", thumbnail: "restuarant.jpg", link: "/films#restaurants" },
  { label: "Corporate / Real Estate", thumbnail: "corporate_business.jpg", link: "/films#corporate" },
  { label: "Product", thumbnail: "product.jpg", link: "/photos" }, 
  { label: "Shortfilms", thumbnail: "short_film.jpg", link: "/films#shortfilms" },
  { label: "Industrial", thumbnail: "industrial.jpg", link: "/films#shortfilms" },
  { label: "testimonial", thumbnail: "testimonial.jpg", link: "/TestimonialPage" },
];

const loopItems = [...categories, ...categories];

export default function Kam() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-primary/5 py-32 px-6 relative overflow-hidden">
      <div className="w-full relative">

        <div
          className="overflow-hidden "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`flex gap-6 w-max animate-marquee ${paused ? "paused" : ""}`}>
            {loopItems.map((cat, i) => (
              <Link
                to={cat.link}
                key={`${cat.label}-${i}`}
                className="group relative shrink-0 w-[22rem] h-120 rounded-xl overflow-hidden glass"
              >
                <img
                  src={cat.thumbnail}
                  alt={cat.label}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-display font-semibold text-lg text-center px-4">
                    {cat.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
