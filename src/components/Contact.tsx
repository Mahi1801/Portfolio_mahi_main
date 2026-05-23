import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Wifi, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";

const CONTACT_INFO = [
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "mahi225singhal@gmail.com",
    href: "mailto:mahi225singhal@gmail.com",
    color: "hsl(338 100% 58%)",
  },
  {
    icon: <Linkedin size={20} />,
    title: "LinkedIn",
    value: "/in/mahi-singhal-0675b9304",
    href: "https://www.linkedin.com/in/mahi-singhal-0675b9304/",
    color: "hsl(188 100% 50%)",
  },
  {
    icon: <Github size={20} />,
    title: "GitHub",
    value: "github.com/Mahi1801",
    href: "https://github.com/Mahi1801",
    color: "hsl(43 100% 58%)",
  },
];

const QUICK = [
  { icon: <MapPin size={15} />, text: "Based in India", color: "hsl(338 100% 58%)" },
  { icon: <Wifi size={15} />, text: "Available for remote work", color: "hsl(188 100% 50%)" },
  { icon: <Clock size={15} />, text: "Response within 24 hours", color: "hsl(43 100% 58%)" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_da8fdt8",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_3sbje6g",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: "mahi225singhal@gmail.com"
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "CSdPCkCoMQZDGv8GD"
      );
      toast({ title: "Message Sent! 🎉", description: "I'll get back to you soon!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({ title: "Failed to Send", description: "Please try again or email me directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <ScrollReveal direction="up">
          <div className="mb-14">
            <span className="section-tag">✦ Contact</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span style={{ color: "hsl(0 0% 92%)" }}>Get In </span>
              <span className="text-grad-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Ready to bring your ideas to life? Let's collaborate and create something amazing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form — 3/5 */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div
              className="glass-card rounded-2xl p-8 h-full"
              style={{ border: "1px solid hsl(338 100% 58% / 0.15)" }}
            >
              <h3
                className="text-xl font-bold mb-6 text-grad-secondary"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Send a Message
              </h3>
              <form onSubmit={submit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs text-muted-foreground uppercase tracking-wider"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Name
                    </label>
                    <input
                      id="name" name="name" value={form.name}
                      onChange={change} required placeholder="Your name"
                      className="input-neon"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs text-muted-foreground uppercase tracking-wider"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email" value={form.email}
                      onChange={change} required placeholder="your@email.com"
                      className="input-neon"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs text-muted-foreground uppercase tracking-wider"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject" name="subject" value={form.subject}
                    onChange={change} required placeholder="What's this about?"
                    className="input-neon"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs text-muted-foreground uppercase tracking-wider"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={5} value={form.message}
                    onChange={change} required placeholder="What's on your mind?"
                    className="input-neon"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary w-full justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <Send size={17} className={loading ? "animate-spin" : ""} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Info — 2/5 */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal direction="right">
              <div className="glass-card rounded-2xl p-5 space-y-2" style={{ border: "1px solid hsl(var(--border) / 0.4)" }}>
                <h3 className="font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Let's Connect</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Always excited to discuss opportunities, collaborate on interesting projects, or chat about tech and development.
                </p>
              </div>
            </ScrollReveal>

            {CONTACT_INFO.map((info, i) => (
              <ScrollReveal key={i} direction="right" delay={i * 90}>
                <a
                  href={info.href}
                  target={info.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="block glass-card rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${info.color}40`;
                    e.currentTarget.style.boxShadow = `0 6px 24px ${info.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-2.5 rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `${info.color}12`,
                        border: `1px solid ${info.color}30`,
                        color: info.color,
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {info.title}
                      </p>
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}

            <ScrollReveal direction="right" delay={300}>
              <div
                className="glass-card rounded-2xl p-5 space-y-3"
                style={{ border: "1px solid hsl(var(--border) / 0.4)" }}
              >
                <h4
                  className="text-sm font-bold text-grad-primary"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Quick Facts
                </h4>
                {QUICK.map((q, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span style={{ color: q.color }}>{q.icon}</span>
                    {q.text}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;