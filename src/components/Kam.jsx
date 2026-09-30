import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Documentary", thumbnail: "/documentry.jpg", link: "/films#vlogs" },
  { label: "Restaurants & Cafes", thumbnail: "/restuarant.jpg", link: "/films#restaurants" },
  { label: "Corporate / Real Estate", thumbnail: "/corporate_business.jpg", link: "/films#corporate" },
  { label: "Product", thumbnail: "/product.jpg", link: "/photos" },
  { label: "Short Films", thumbnail: "/short_film.jpg", link: "/films#shortfilms" },
  { label: "Industrial", thumbnail: "/industrial.jpg", link: "/films#shortfilms" },
  { label: "Testimonials", thumbnail: "/testimonial.jpg", link: "/TestimonialPage" },
];

const loopItems = [...categories, ...categories];

export default function Kam() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-primary/5 py-14 md:py-32 px-0 md:px-6 relative overflow-hidden">
      <div className="w-full relative">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onTouchCancel={() => setPaused(false)}
        >
          <div
            className={`flex gap-4 md:gap-6 pr-4 md:pr-6 w-max animate-marquee ${paused ? "paused" : ""}`}
          >
            {loopItems.map((cat, i) => (
              <Link
                to={cat.link}
                key={`${cat.label}-${i}`}
                className="group relative shrink-0 w-56 h-80 sm:w-64 sm:h-96 md:w-[22rem] md:h-120 rounded-xl overflow-hidden glass"
              >
                <img
                  src={cat.thumbnail}
                  alt={cat.label}
                  loading="lazy"
                  className="w-full h-full object-cover md:object-contain"
                />

                {/* Mobile: label always visible at the bottom (no hover on touch) */}
                <div className="md:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent pt-10 pb-3 px-3">
                  <span className="font-display font-semibold text-sm">
                    {cat.label}
                  </span>
                </div>

                {/* Desktop: hover overlay */}
                <div className="hidden md:flex absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
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