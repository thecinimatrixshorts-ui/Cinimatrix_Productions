import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const testimonials = [
  {
    category: "Client Testimonial / My Content Cafe",
    quote: "A Bengaluru client perspective on CiniMatrix's collaborative process, production quality, and dependable video delivery.",
    name: "My Content Cafe / Bengaluru",
    image: "restuarant.jpg",
  },
  {
    category: "Client Testimonial / Novartis",
    quote: "A structured production process that made the journey from brief to final film feel clear and confident.",
    name: "Bjorn / Novartis",
    image: "corporate_business.jpg",
  },
  {
    category: "Client Testimonial / Techno Scholars",
    quote: "Professional from start to finish — the final videos captured exactly the tone we wanted for our brand.",
    name: "Industry",
    image: "industrial.jpg",
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const interval = setInterval(() => {
      if (!isPaused.current && track) {
        track.scrollLeft += 1;
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
          track.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const scrollByAmount = (amount) => {
     isPaused.current = true;
  trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });

  // resume auto-scroll after the smooth scroll animation finishes
  setTimeout(() => {
    isPaused.current = false;
  }, 600);
  };

  return (
    <section id="testimonials" className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-lg">
            <span className="italic font-medium text-primary text-6xl glow-text ">Voices of Impact</span> Real Client stories and feedback
          </h2>
          <p className="text-muted-foreground font-body max-w-sm glass rounded-2xl py-6 px-5 glow-border">
            Video testimonials that show how clients experience CiniMatrix's
            planning, production, and delivery on real brand films.
          </p>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden shrink-0 w-[90%] sm:w-[80%] lg:w-[70%] flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-8 flex flex-col justify-between">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-6">
                  {t.category}
                </p>
                <p className="font-display text-xl md:text-2xl font-semibold leading-snug">
                  {t.quote}
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={() => scrollByAmount(-500)}
            className="h-12 w-12 rounded-full glass flex items-center justify-center hover:border-highlight transition-colors"
            aria-label="Previous"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scrollByAmount(500)}
            className="h-12 w-12 rounded-full glass flex items-center justify-center hover:border-highlight transition-colors"
            aria-label="Next"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}