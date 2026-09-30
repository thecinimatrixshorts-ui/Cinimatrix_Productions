import { useEffect, useRef } from "react";

const VIDEO_ID = "s_zvJkrwXs8";

export default function Hero() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const off = () => {
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      ["captions", "cc"].forEach((mod) =>
        win.postMessage(
          JSON.stringify({ event: "command", func: "unloadModule", args: [mod] }),
          "*"
        )
      );
    };
    const t = setTimeout(off, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <iframe
        ref={iframeRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[max(100vw,177.78vh)] h-[max(100vh,56.25vw)]"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3&cc_load_policy=0&enablejsapi=1`}
        allow="autoplay; encrypted-media"
        title="Showreel"
        tabIndex={-1}
      />

      <div className="absolute inset-0 bg-ink/60" />

      <div className="absolute bottom-16 left-6 md:left-16 z-10 max-w-2xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
          Advertisement & Video Production company in Bangalore
        </h1>
        <p className="mt-3 text-lg font-medium text-white/90">
          Cinimatrix Production is a Bangalore-based video agency crafting powerful visual stories for brands across the globe.
        </p>
        <p className="mt-2 text-white/90 font-body">
          We move seamlessly between worlds—from high-tech industrial shoots and slick product videos to the vibrant energy of restaurants, fitness gyms, and educational campuses. We turn your unique message into a compelling visual experience that people actually want to watch. Whether you are a local business or a global brand, we help you build trust and stand out through stunning visuals.
        </p>
      </div>
    </section>
  );
}