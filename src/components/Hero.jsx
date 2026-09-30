import { useEffect, useRef } from "react";

const VIDEO_ID = "s_zvJkrwXs8";

export default function Hero() {
  const iframeRef = useRef(null);
  const timerRef = useRef(null);

  const hideCaptions = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(JSON.stringify({ event: "listening", id: 1, channel: "widget" }), "*");
    ["captions", "cc"].forEach((mod) =>
      win.postMessage(
        JSON.stringify({ event: "command", func: "unloadModule", args: [mod] }),
        "*"
      )
    );
  };

  const handleLoad = () => {
    let tries = 0;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      hideCaptions();
      if (++tries > 12) clearInterval(timerRef.current);
    }, 500);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <iframe
        ref={iframeRef}
        onLoad={handleLoad}
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          // 115% tall so the bottom ~13% (caption zone) is pushed off-screen
          height: "max(115vh, 64.69vw)",
          width: "max(204.44vh, 115vw)",
        }}
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