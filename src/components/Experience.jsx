const stats = [
  { number: "4+", label: "years in producing corporate, cafe, product, industrial, fitness, documentry films." },
  { number: "84+", label: "clients served across bengaluru and indian markets." },
  { number: "1000+", label: "videos created for sales, ads, website and socal media" },
  { number: "Pan-India", label: "Crew available for shoots across India." },
];

const capabilities = [
  { title: "Social Media management", description: "strategy, planning, community management, content creation, growth strategy " },
  { title: "Web Devlopment", description: "UI/UX design, development & coding, launch & optimization" },
  { title: "Product Shoots", description: "Clean, detail-focused videos and photos that showcase texture, function, and value." },
  { title: "Brand Films", description: "Story-led films that capture your brand's voice and values for campaigns and launches." },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-32 px-6">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/30 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-xl">
            <span className="font-medium italic text-primary/90 text-6xl glow-text">
            Advertisment and video production </span> 
              for Bengaluru, india and global brands
          </h2>
          <p className="text-muted-foreground font-body max-w-sm">
           For 4+ years, cinimatrix production has helped companies and brands in technology, education, lifestyle, fitness with sharper business videos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.number} className="glass rounded-xl p-6">
              <p className="font-display text-3xl font-bold mb-2">
                {stat.number}
              </p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="glass rounded-xl p-6">
              <h3 className="font-display font-semibold mb-3">{cap.title}</h3>
              <p className="text-sm text-muted-foreground font-body">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}