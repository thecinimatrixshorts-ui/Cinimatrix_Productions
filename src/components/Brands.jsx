import { useState } from "react";

const brands = [
  { name: "Brand 1", logo: "lg1.jpeg" },
  { name: "Brand 2", logo: "lg2.jpeg" },
  { name: "Brand 3", logo: "lg3.jpeg" },
  { name: "Brand 4", logo: "lg4.jpeg" },
  { name: "Brand 5", logo: "lg5.jpeg" },
  { name: "Brand 6", logo: "lg6.jpeg" },
  { name: "Brand 7", logo: "lg7.jpg" },
  { name: "Brand 8", logo: "lg8.jpg" },
  { name: "Brand 9", logo: "lg9.jpg" },
];

const loopBrands = [...brands, ...brands];

export default function Brands() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative bg-background py-32 px-6 overflow-hidden min-h-[600px] flex flex-col justify-between">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('brandswww.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Heading + description */}
      <div className="relative z-10 max-w-xl">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Brands we worked with
        </h2>
        <p className="text-muted-foreground font-body max-w-md">
          CiniMatrix has partnered with corporate, hospitality, and creative
          teams to produce films that communicate clearly and build trust.
        </p>
      </div>

      {/* Logo marquee */}
      <div
        className="relative z-10 overflow-hidden mt-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`flex items-center gap-16 w-max animate-marquee ${paused ? "paused" : ""}`}
        >
          {loopBrands.map((brand, i) => (
            <img
              key={`${brand.name}-${i}`}
              src={brand.logo}
              alt={brand.name}
              className="h-30 md:h-40 rounded-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}