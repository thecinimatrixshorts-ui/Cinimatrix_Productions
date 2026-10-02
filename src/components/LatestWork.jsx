import { useState, useEffect } from "react";
import { X } from "lucide-react";

const latestWork = [
  {
    title: "Offer Branding",
    category: "Digital Ad",
    thumbnail: "/cp2.png",
    youtubeId: "8p2qpvNbAlM",
    format: "short",
  },
  {
    title: "Personal Branding",
    category: "Social Media Ad",
    thumbnail: "/cp6.png",
    youtubeId: "F5ZpIoAwVpM",
    format: "short",
  },
  {
    title: "Service Branding",
    category: "Factory Tour & Manufacturing Video",
    thumbnail: "/cp3.PNG",
    youtubeId: "qYoZ-i13U-Q",
    format: "short",
  },
];

const moreWork = [
  { title: "Offer Branding", stat: "232.5K views in the last 30 days.", image: "/1.jpeg" },
  { title: "Personal Branding", stat: "180K reach across platforms.", image: "/2.jpeg" },
  { title: "Service Branding", stat: "45K engagement this quarter.", image: "/3.jpeg" },
];

export default function LatestWork() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Close on Escape + lock page scroll while the modal is open
  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e) => e.key === "Escape" && setActiveVideo(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <section className="bg-background py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 mb-8 md:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold max-w-xl">
            Latest video work and its reach towards brand
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-body md:max-w-sm glass rounded-2xl py-5 px-4 md:py-6 md:px-5 glow-border">
            A quick window into our recent Cinimatrix production projects for brands that needed polished videos for sales, launches, advertisement, websites and its audiences reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {latestWork.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveVideo(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] block text-left w-full"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {item.category}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {moreWork.map((item) => (
            <div key={item.title} className="glass rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full aspect-video object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center px-4 md:px-6"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full glass hover:border-highlight transition-colors z-10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div
            className={
              activeVideo.format === "short"
                ? "h-[85svh] aspect-[9/16] max-w-full"
                : "w-full max-w-3xl aspect-video"
            }
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&playsinline=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
}