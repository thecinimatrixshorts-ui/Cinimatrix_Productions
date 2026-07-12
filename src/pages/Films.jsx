const categories = [
  {
    id: "vlogs",
    name: "Vlogs",
    items: [
      { title: "Vlog  1", youtubeId: "4qU_3BS1S8U" },
      { title: "Vlog  2", youtubeId: "_FxSXykKVcQ" },
      { title: "Vlog  3", youtubeId: "1ck6GbK5wLA" },
      { title: "Vlog  4", youtubeId: "M6xzLAqP38c"},
    ],
  },
   {
    id: "shortfilms",
    name: "Shortflims",
    items: [
      { title: "Short Film 1", youtubeId: "fZnf7zV6mB4" },
      
    
    ],
  },
  {
    id: "restaurants",
    name: "Restaurants & Cafes",
    items: [
      { title: "Restaurant Shoot 1", video: "https://d36kinwhfswpim.cloudfront.net/showreel/cafe1.MP4" },
      { title: "Cafe Shoot 2", video: "https://d36kinwhfswpim.cloudfront.net/showreel/cafe2.MP4" },
      { title: "Cafe Shoot 3", video: "https://d36kinwhfswpim.cloudfront.net/showreel/cafe3.MP4" },
    ],
  },
  {
    id: "corporate",
    name: "Corporate / Business / Real Estate",
    items: [
      { title: "SIB 3 Telegu",  video: "https://d36kinwhfswpim.cloudfront.net/client_reel/1.mp4" },
      { title: "vo", video: "https://d36kinwhfswpim.cloudfront.net/client_reel/6.mp4" },
      { title: "SIB 7 Kannada", video: "https://d36kinwhfswpim.cloudfront.net/client_reel/5.mp4" },
      { title: "SIB 5 English", video: "https://d36kinwhfswpim.cloudfront.net/client_reel/3.mp4" },
        { title: "corporate 1",  video: "https://d36kinwhfswpim.cloudfront.net/client_reel/2.mp4" },
         { title: "SIB 1 Telegu",  video: "https://d36kinwhfswpim.cloudfront.net/client_reel/1.mp4" },

    ],
  },
];

export default function Films() {
  return (
    <section className="bg-background min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-8 mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Films
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl">
            A curated selection of our film work across vlogs, hospitality,
            and corporate storytelling.
          </p>
        </div>

{categories.map((category) => (
  <div key={category.name} className="mb-16">
    <h2 className="font-display text-2xl font-semibold mb-6">
      {category.name}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
      {category.items.map((item) => (
        <div
          key={item.title}
          className="glass rounded-xl overflow-hidden"
        >
          <div className="aspect-video bg-black">
            {item.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                src={item.video}
                controls
                className="w-full h-full"
              />
            )}
          </div>
          <p className="p-4 text-sm font-body text-muted-foreground">
            {item.title}
          </p>
        </div>
      ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
