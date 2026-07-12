import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-xs uppercase tracking-wide text-muted-foreground border border-border glow-border rounded-full px-4 py-1.5 mb-8 animate-float">
          Start a Project
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold max-w-xl">
            Tell us what you need .
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-3 max-w-md">
            <p className="text-muted-foreground font-body">
              Planning a brand film, product launch, documentary, testimonial
              video, or campaign? Share your brief and CiniMatrix will
              respond with a practical next step.
            </p>
            
          </div>
        </div>
      <div className="flex flex-col items-center gap-8">
        <img
  src="logo_2.png"
  alt="CiniMatrix Productions"
  className="mx-auto max-w-full h-auto  w-220 md:w-[60rem]"
/>
        
        <Link
              to="/contact"
              className="shrink-0 inline-block glow-border items-center justify-center bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Contact Us
            </Link>
      </div>
      </div>
    </section>
  );
}