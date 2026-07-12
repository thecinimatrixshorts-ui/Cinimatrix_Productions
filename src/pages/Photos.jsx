import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "b1.jpeg", alt: "Brand shoot 1" },
  { src: "b2.jpeg", alt: "Brand shoot 2" },
  { src: "b3.jpeg", alt: "Event coverage" },
  { src: "b4.jpeg", alt: "Product shoot" },
  { src: "b5.jpeg", alt: "Portrait session" },
  { src: "b6.jpeg", alt: "Campaign shoot" },
];

export default function Photos() {
  const [activeIdx, setActiveIdx] = useState(null);

  const close = () => setActiveIdx(null);
  const prev = () =>
    setActiveIdx((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () =>
    setActiveIdx((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-background min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-8 mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Photos
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl">
            A gallery of our photography work — brand shoots, events, and
            portraits captured with a cinematic eye.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, idx) => (
            <button
              key={photo.src}
              onClick={() => setActiveIdx(idx)}
              className="glass rounded-xl overflow-hidden break-inside-avoid block w-full text-left"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center px-6"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 p-3 rounded-full glass hover:border-highlight transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:border-highlight transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <img
            src={photos[activeIdx].src}
            alt={photos[activeIdx].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:border-highlight transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
}