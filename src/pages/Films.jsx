import { useState } from "react";
import { Play } from "lucide-react";

const categories = [
  {
    id: "vlogs",
    name: "Vlogs",
    groups: [
      {
        format: "wide",
        items: [
          { title: "Vlog 1", id: "4qU_3BS1S8U" },
          { title: "Vlog 2", id: "_FxSXykKVcQ" },
          { title: "Vlog 3", id: "1ck6GbK5wLA" },
          { title: "Vlog 4", id: "M6xzLAqP38c" },
        ],
      },
    ],
  },
  {
    id: "shortfilms",
    name: "Short Films",
    groups: [
      { format: "wide", items: [{ title: "Short Film 1", id: "fZnf7zV6mB4" }] },
    ],
  },
  {
    id: "restaurants",
    name: "Restaurants & Cafes",
    groups: [
      {
        format: "short",
        items: [
          { title: "Restaurant Reel 1", id: "btxxHpujA2Q" },
          { title: "Cafe Reel 2", id: "aM_9vlNE39c" },
          { title: "Cafe Reel 3", id: "lmnDYIXcT_0" },
        ],
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate / Business",
    groups: [
      {
        label: "Reels",
        format: "short",
        items: [
          { title: "Corporate Reel 1", id: "RGmUpZ58X40" },
          { title: "Corporate Reel 2", id: "gh2MF867kI0" },
          { title: "Corporate Reel 3 (English)", id: "qYoZ-i13U-Q" },
          { title: "Corporate Reel 4", id: "3zqREV0x9B4" },
        ],
      },
      {
        label: "Films",
        format: "wide",
        items: [
          { title: "Corporate Film 1", id: "Maquvd91ZTA" },
          { title: "Corporate Film 2", id: "nu0YSAY_pGI" },
          { title: "Corporate Film 3", id: "7JsqQdS4tdg" },
        ],
      },
    ],
  },
  {
    id: "personal-branding",
    name: "Personal Branding & Promotional",
    groups: [
      {
        format: "short",
        items: [
          { title: "Personal Brand 1", id: "8p2qpvNbAlM" },
          { title: "Personal Brand 2", id: "5XmDEnMjrAU" },
          { title: "Personal Brand 3", id: "oATlg-f76XY" },
          { title: "Personal Brand 4", id: "yJ5WPTSAy3A" },
        ],
      },
    ],
  },
  {
    id: "influencers",
    name: "Influencer Marketing",
    groups: [
      {
        format: "short",
        items: [
          { title: "Influencer Campaign 1", id: "F5ZpIoAwVpM" },
          { title: "Influencer Campaign 2", id: "eQHHratLMvw" },
          { title: "Influencer Campaign 3", id: "tvhvFM66WRg" },
          { title: "Influencer Campaign 4", id: "gax6utEcAdw" },
        ],
      },
    ],
  },
  {
    id: "product",
    name: "Product Shoots",
    
    groups: [
      
      {
        format: "short",
        items: [
          { title: "Product Reel 1", id: "d_gmFqePiNM" },
          { title: "Product reel 2", id: "ZBs9aZL4gp0" }
         ],
      },
    ],
  },
];

function VideoCard({ item, format }) {
  const [playing, setPlaying] = useState(false);
  const ratio = format === "short" ? "aspect-[9/16]" : "aspect-video";

  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className={`relative bg-black ${ratio}`}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&playsinline=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${item.title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
              <span className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-primary text-white glow-border">
                <Play size={20} fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="p-3 md:p-4 text-xs md:text-sm font-body text-muted-foreground">
        {item.title}
      </p>
    </div>
  );
}

export default function Films() {
  return (
    <section className="bg-background min-h-screen pt-28 md:pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-5 md:p-8 mb-10 md:mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Films
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl">
            A curated selection of our film work across vlogs, hospitality,
            and corporate storytelling.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.id} id={category.id} className="mb-14 md:mb-16 scroll-mt-28">
            <h2 className="font-display text-xl md:text-2xl font-semibold mb-5 md:mb-6">
              {category.name}
            </h2>

            {category.groups.map((group, gi) => (
              <div key={gi} className="mb-8 last:mb-0">
                {group.label && (
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                    {group.label}
                  </h3>
                )}
                <div
                  className={
                    group.format === "short"
                      ? "grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
                      : "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                  }
                >
                  {group.items.map((item) => (
                    <VideoCard key={item.id} item={item} format={group.format} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}