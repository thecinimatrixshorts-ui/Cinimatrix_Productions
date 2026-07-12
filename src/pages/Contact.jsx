import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "sending" | "sent" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  return (
    <section className="bg-background min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass rounded-2xl p-8 mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl">
            Have a project in mind? Tell us about it and we'll get back to
            you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 md:col-span-2 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-highlight transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-highlight transition-colors"
            />
            <textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-transparent border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-highlight transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-primary-foreground rounded-xl py-3 font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-highlight">Message sent! We'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Try again or email us directly.</p>
            )}
          </form>

          <div className="glass rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <Mail className="text-highlight shrink-0" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">cinimatrixproduction@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-highlight shrink-0" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91 79754 67983</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-highlight shrink-0" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}