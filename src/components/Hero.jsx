export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://d36kinwhfswpim.cloudfront.net/showreel/showreel.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-ink/60" />

      <div className="absolute bottom-16 left-6 md:left-16 z-10 max-w-2xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
         Advertisement & Video Production company in Bangalore
        </h1>
        <p className="mt-3 text-lg font-medium text-white/90">
          Cinimatrix Production is a Bangalore-based video agency crafting powerful visual stories for brands across the globe.
        </p>
        <p className="mt-2 text-white/90 font-body">
           We move seamlessly between worlds—from 
            high-tech industrial shoots and slick product videos to the vibrant energy of restaurants, fitness gyms, and educational campuses.We turn your unique message into a 
            compelling visual experience that people actually want to watch. Whether you are a local business or a global brand, we help you build trust and stand out through stunning visuals.
        </p>
      </div>
    </section>
  );
}