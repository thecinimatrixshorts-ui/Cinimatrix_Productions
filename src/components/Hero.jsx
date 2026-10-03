import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "tiYGyUSJaO0";

export default function Hero() {
  const iframeRef = useRef(null);
  const timerRef = useRef(null);
  const [ready, setReady] = useState(false);

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
    // wait a moment so YouTube's spinner/logo isn't visible during the fade
    setTimeout(() => setReady(true), 1200);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  return (
    <section className="relative h-svh md:h-screen w-full overflow-hidden bg-black">
      {/* Thumbnail shows instantly, the video fades in over it */}
      <img
        src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <iframe
        ref={iframeRef}
        onLoad={handleLoad}
        className={`absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none h-[max(115svh,64.69vw)] w-[max(204.44svh,115vw)] transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3&cc_load_policy=0&enablejsapi=1`}
        allow="autoplay; encrypted-media"
        title="Showreel"
        tabIndex={-1}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/40" />
      {/* Extra gradient on phones so the text stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent md:hidden" />

      <div className="absolute bottom-10 md:bottom-16 left-5 right-5 md:left-16 md:right-auto z-10 max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Advertisement & Video Production company in Bangalore
        </h1>
        <p className="mt-3 text-base md:text-lg font-medium text-white/90">
          Cinimatrix Production is a Bangalore-based video agency crafting powerful visual stories for brands across the globe.
        </p>
        {/* Long paragraph hidden on phones so it doesn't cover the video */}
        <p className="mt-2 hidden md:block text-white/90 font-body">
          We move seamlessly between worlds—from high-tech industrial shoots and slick product videos to the vibrant energy of restaurants, fitness gyms, and educational campuses. We turn your unique message into a compelling visual experience that people actually want to watch. Whether you are a local business or a global brand, we help you build trust and stand out through stunning visuals.
        </p>
      </div>
    </section>
  );
}