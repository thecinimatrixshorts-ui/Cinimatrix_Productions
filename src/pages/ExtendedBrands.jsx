const brands = [
  { name: "", logo: "lg1.jpeg" },
  { name: "", logo: "lg2.jpeg" },
  { name: "", logo: "lg3.jpeg" },
  { name: "", logo: "lg4.jpeg" },
  { name: "", logo: "lg5.jpeg" },
  { name: "", logo: "lg6.jpeg" },
  { name: "", logo: "lg7.jpg" },
  { name: "", logo: "lg8.jpg" },
  { name: "", logo: "lg9.jpg" },

];

export default function ExtendedBrands() {
  return (
    <section className="bg-background min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-16">
          Some of the brands we've worked with
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="glass rounded-xl p-6 flex items-center justify-center aspect-square hover:border-highlight transition-colors"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}