import { useState } from "react";
import { TrendingUp, X } from "lucide-react";

const latestWork = [
  {
    title: "Offer Branding",
    category: "Digital Ad",
    thumbnail: "cp2.png",
    video: "https://d36kinwhfswpim.cloudfront.net/client_reel/CP2.mp4 ", // or a youtubeId if it's hosted on YT
  },
  {
    title: "Personal Branding",
    category: "Social Media Ad",
    thumbnail: "cp6.png",
    video: "https://d36kinwhfswpim.cloudfront.net/client_reel/CP6.mp4",
  },
  {
    title: "Service Branding",
    category: "Factory Tour & Manufacturing Video",
    thumbnail: "cp3.PNG",
    video: "https://d36kinwhfswpim.cloudfront.net/client_reel/5.mp4 ",
  },
];

const moreWork = [
  { title: "Offer Branding", stat: "232.5K views in the last 30 days.", image: "1.jpeg" },
  { title: "Personal Branding", stat: "180K reach across platforms.", image: "2.jpeg" },
  { title: "Service Branding", stat: "45K engagement this quarter.", image: "3.jpeg" },
];

export default function LatestWork() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-background py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-xl">
            Latest video work and its reach towards brand
          </h2>
          <p className="text-muted-foreground font-body max-w-sm glass rounded-2xl py-6 px-5 glow-border">
            A quick window into our recent Cinimatrix production projects for brands that needed polished videos for sales, launches, advertisement, websites and its audiences reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {latestWork.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveVideo(item)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] block text-left w-full"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {item.category}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moreWork.map((item) => (
            <div key={item.title} className="glass rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-video object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center px-6"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 p-3 rounded-full glass hover:border-highlight transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div
            className="w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {activeVideo.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            ) : (
              <video
                src={activeVideo.video}
                controls
                autoPlay
                className="w-full h-full rounded-xl bg-black"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}