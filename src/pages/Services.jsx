const services = [
    
  {
    label: "Restaurants and Cafes",
    description:
      "From sizzling culinary visuals to vibrant ambiance captures, we create mouth-watering video content that tells your eatery's unique story and brings foodies through your doors.",
    image: "cafe.jpg",
  },
  {
    label: "Fitness and Sports",
    description:
      "High-energy, dynamic videography that captures the grit, passion, and movement of your fitness brand, training programs, or sporting events to inspire your community.",
    image: "fitness.jpg",
  },
  {
    label: "Corporate Videos",
    description:
      "We craft high-impact corporate narratives, executive profiles, and internal communications that amplify your brand's core message and drive strategic business growth.",
    image: "corporate_business.jpg",
  },
  {
    label: "Documentaries",
    description:
      "Human-centric storytelling at its finest. We dive deep into real stories, capturing authentic emotions and powerful narratives that resonate profoundly with your audience.",
    image: "documentry1.jpg",
  },
  {
    label: "Industrial Videos",
    description:
      "From automated factory floors to complex manufacturing processes, we document large-scale industrial operations with the technical precision required for serious B2B communication.",
    image: "indust.jpg",
  },
]

export default function Services() {
  return (
    <section className="bg-background min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold max-w-xl">
            Professional Video Production Services in Bengaluru, India
          </h1>
          <p className="text-muted-foreground font-body max-w-md">
            Welcome to CiniMatrix Production, your source for video
            production and photography in Bengaluru. We specialize in
            corporate, product, and industrial videos, branded content, and
            photography — explore our services and elevate your visual
            presence.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {services.map((service, i) => (
            <div
              key={service.label}
              className={`flex flex-col md:flex-row gap-10 items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.label}
                  className="w-full aspect-[4/3] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="w-full md:w-1/2">
                <span className="inline-block font-display text-2xl md:text-3xl font-bold border-b-4 border-primary pb-2 mb-6">
                  {service.label}
                </span>
                <p className="italic text-muted-foreground font-body text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}