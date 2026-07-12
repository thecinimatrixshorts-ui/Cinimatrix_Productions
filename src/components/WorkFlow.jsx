const steps = [
  { number: "01", title: "Scripting", description: "Message, structure, and shot intent." },
  { number: "02", title: "Pre-production", description: "Planning, schedule, locations, and crew." },
  { number: "03", title: "Production", description: "Live-action shooting with cinema-grade gear." },
  { number: "04", title: "Post-production", description: "Edit, colour, sound, graphics, and polish." },
  { number: "05", title: "Delivery", description: "Formats for web, sales, ads, and internal teams." },
];

export default function WorkFlow() {
  return (
    <section className="relative bg-background py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-contain bg-center opacity-700"
        style={{ backgroundImage: "url('teams.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-lg">
            One team from first idea to final film.
          </h2>
          <p className="text-muted-foreground font-body max-w-sm glass rounded-2xl py-6 px-5 glow-border">
            Everything needed to shape, shoot, edit, and deliver business
            video under one roof — scripting, production, post, and delivery
            handled by one connected team.
          </p>
        </div>

        <div className="glass rounded-2xl p-8">
          <h3 className="font-display text-xl font-semibold mb-1">
            Production workflow
          </h3>
          <p className="text-muted-foreground text-sm font-body mb-8">
            Strategy, crew, shoot, edit, and delivery handled in-house.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 glow-border rounded-2xl">
            {steps.map((step) => (
              <div key={step.number} className="px-2 border-border pt-4">
                <p className="text-xs text-muted-foreground mb-3">
                  {step.number}
                </p>
                <h4 className="font-display font-semibold mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-muted-foreground font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}