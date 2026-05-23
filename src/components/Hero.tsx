import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-mahi-new.jpg";
import ScrollReveal from "./ScrollReveal";

const ROLES = [
  "Data Analyst",
  "Front-End Developer",
  "Open Source Contributor",
];

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length)
        t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 68);
      else
        t = setTimeout(() => setTyping(false), 1800);
    } else {
      if (displayed.length > 0)
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 36);
      else {
        setIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, idx]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const socials = [
    { href: "https://github.com/Mahi1801", icon: <Github size={20} />, label: "GitHub", color: "hsl(338 100% 58%)" },
    { href: "https://www.linkedin.com/in/mahi-singhal-0675b9304/", icon: <Linkedin size={20} />, label: "LinkedIn", color: "hsl(188 100% 50%)" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "hsl(338 100% 58%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl"
          style={{ background: "hsl(188 100% 50%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="space-y-7">
            {/* Tag */}
            <ScrollReveal direction="up">
              <span className="section-tag">✦ Available for opportunities</span>
            </ScrollReveal>

            {/* Name */}
            <ScrollReveal direction="up" delay={60}>
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <span style={{ color: "hsl(0 0% 95%)" }}>Hi, I'm</span>{" "}
                <br />
                <span className="text-grad-hot">Mahi</span>{" "}
                <span style={{ color: "hsl(0 0% 88%)" }}>Singhal</span>
              </h1>
            </ScrollReveal>

            {/* Typewriter */}
            <ScrollReveal direction="up" delay={120}>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                I'm a{" "}
                <span
                  className="font-semibold"
                  style={{ color: "hsl(0 0% 92%)", fontFamily: "'DM Mono', monospace" }}
                >
                  {displayed}
                </span>
                <span className="tw-cursor" />
              </p>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal direction="up" delay={160}>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Building elegant, impactful digital experiences — blending creativity with code
                to craft solutions that truly matter.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary" onClick={() => go("projects")}>
                  View My Work <ArrowRight size={16} />
                </button>
                <button className="btn-outline" onClick={() => go("contact")}>
                  Let's Connect
                </button>
              </div>
            </ScrollReveal>

            {/* Socials */}
            <ScrollReveal direction="up" delay={240}>
              <div className="flex items-center gap-4 pt-2">
                {socials.map(({ href, icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="p-3 rounded-full border border-border/50 text-muted-foreground transition-all duration-300 hover:scale-110"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = color;
                      el.style.color = color;
                      el.style.boxShadow = `0 0 18px ${color}55`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "";
                      el.style.color = "";
                      el.style.boxShadow = "";
                    }}
                  >
                    {icon}
                  </a>
                ))}
                <button
                  className="p-3 rounded-full border border-border/50 text-muted-foreground transition-all duration-300 hover:scale-110"
                  onClick={() => go("contact")}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "hsl(43 100% 58%)";
                    el.style.color = "hsl(43 100% 58%)";
                    el.style.boxShadow = "0 0 18px hsl(43 100% 58% / 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "";
                    el.style.color = "";
                    el.style.boxShadow = "";
                  }}
                >
                  <Mail size={20} />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Profile Image */}
          <ScrollReveal direction="right" delay={100}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative" style={{ width: 300, height: 300 }}>
                {/* Outer spin ring */}
                <div
                  className="absolute animate-spin-slow rounded-full"
                  style={{
                    inset: "-24px",
                    border: "1px dashed hsl(338 100% 58% / 0.45)",
                    boxShadow: "0 0 24px hsl(338 100% 58% / 0.15)",
                  }}
                />
                {/* Inner reverse spin */}
                <div
                  className="absolute animate-spin-rev rounded-full"
                  style={{
                    inset: "-12px",
                    border: "1px solid hsl(188 100% 50% / 0.3)",
                  }}
                />

                {/* Orbiting dots */}
                {[
                  { anim: "orbit-a 7s linear infinite", color: "#ff2d78" },
                  { anim: "orbit-b 10s linear infinite", color: "#00d4ff" },
                  { anim: "orbit-c 8s linear infinite", color: "#ffb800" },
                ].map(({ anim, color }, i) => (
                  <div
                    key={i}
                    className="absolute inset-0"
                    style={{ animation: anim }}
                  >
                    <div
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: color,
                        boxShadow: `0 0 14px ${color}`,
                        top: "50%",
                        left: "50%",
                        marginTop: "-6px",
                        marginLeft: "-6px",
                      }}
                    />
                  </div>
                ))}

                {/* Photo */}
                <img
                  src={profileImage}
                  alt="Mahi Singhal"
                  className="w-full h-full rounded-full object-cover relative z-10 animate-pulse-pink"
                  style={{
                    border: "3px solid hsl(338 100% 58% / 0.7)",
                    boxShadow: "0 0 50px hsl(338 100% 58% / 0.35)",
                  }}
                />

                <div
                  className="absolute animate-badge-2 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl text-xs font-semibold"
                  style={{
                    bottom: "14%",
                    right: "-90px",
                    background: "hsl(225 28% 8%)",
                    border: "1px solid hsl(188 100% 50% / 0.35)",
                    color: "hsl(188 100% 50%)",
                    fontFamily: "'DM Mono', monospace",
                    boxShadow: "0 4px 20px hsl(188 100% 50% / 0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  ☁ Cloud
                </div>
                <div
                  className="absolute animate-badge-3 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl text-xs font-semibold"
                  style={{
                    bottom: "5%",
                    left: "-78px",
                    background: "hsl(225 28% 8%)",
                    border: "1px solid hsl(43 100% 58% / 0.35)",
                    color: "hsl(43 100% 58%)",
                    fontFamily: "'DM Mono', monospace",
                    boxShadow: "0 4px 20px hsl(43 100% 58% / 0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  🐍 Python
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => go("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors animate-float"
          >
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
              scroll
            </span>
            <ChevronDown size={20} style={{ color: "hsl(338 100% 58%)" }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;