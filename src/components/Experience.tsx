import { Briefcase, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const EXPERIENCES = [
  {
    title: "Open Source Contributor",
    org: "GirlScript Summer of Code",
    duration: "Jul 2025",
    location: "Online",
    desc: "Contributing to open source projects, collaborating with developers worldwide, and improving codebases across various technologies.",
    tags: ["Open Source", "Collaboration", "Git", "GitHub"],
    accent: "hsl(338 100% 58%)",
  },
  {
    title: "Technical Head",
    org: "DataVerse",
    duration: "Nov 2024 – Present",
    location: "Ghaziabad, UP",
    desc: "Working on data science projects and developing technical solutions for real-world problems with a focus on innovation and impact.",
    tags: ["Data Science", "Python", "Analytics", "Team Leadership"],
    accent: "hsl(188 100% 50%)",
  },
  {
    title: "Google Cloud Facilitator",
    org: "Google Cloud Arcade Facilitator Program",
    duration: "Apr 2025 – Jul 2025",
    location: "Online",
    desc: "Facilitating cloud computing workshops and helping participants learn Google Cloud technologies through hands-on labs and projects.",
    tags: ["Google Cloud", "Training", "Cloud Computing", "Mentoring"],
    accent: "hsl(43 100% 58%)",
  },
  {
    title: "Treasurer",
    org: "Arcade: AR/VR and E-Gaming",
    duration: "Apr 2025 – Present",
    location: "Ghaziabad, UP",
    desc: "Contributed to AR/VR development projects and e-gaming initiatives, working with cutting-edge immersive technologies.",
    tags: ["AR/VR", "Unity", "Game Development", "Immersive Tech"],
    accent: "hsl(271 100% 65%)",
  },
  {
    title: "Hacktoberfest Contributor",
    org: "Hacktoberfest",
    duration: "Oct 2025",
    location: "Online",
    desc: "Contributed to open source projects, collaborating with developers on Python and Django frameworks.",
    tags: ["Python", "Django"],
    accent: "hsl(338 100% 58%)",
  },
  {
    title: "Campus Ambassador",
    org: "HCL GUVI",
    duration: "Feb 2026 - Present",
    location: "Online",
    desc: "Promoting HCL GUVI's learning platform and programs within the campus community, organizing events, and engaging students with technology and skill development opportunities.",
    tags: ["Campus Ambassador", "HCL GUVI", "Promotion", "Engagement"],
    accent: "hsla(124, 100%, 58%, 1.00)"
  }
];

const Experience = () => (
  <section id="experience" className="py-24 px-6" style={{ background: "hsl(225 28% 5%)" }}>
    <div className="container mx-auto max-w-5xl">

      {/* Heading */}
      <ScrollReveal direction="up">
        <div className="mb-14">
          <span className="section-tag">✦ Career</span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span style={{ color: "hsl(0 0% 92%)" }}>My </span>
            <span className="text-grad-primary">Experience</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* Alternating timeline */}
      <div className="relative">
        {/* Central spine - desktop only */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5"
          style={{ background: "linear-gradient(180deg, hsl(338 100% 58%), hsl(188 100% 50%), hsl(43 100% 58%))", borderRadius: "2px" }}
        />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={i} direction={isLeft ? "left" : "right"} delay={i * 60}>
                <div className={`md:grid md:grid-cols-2 gap-6 items-center ${isLeft ? "" : ""}`}>
                  {/* Card */}
                  <div className={`${isLeft ? "" : "md:col-start-2"} group`}>
                    <div
                      className="glass-card rounded-2xl p-6 border border-border/40 transition-all duration-300 hover:-translate-y-1"
                      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 32px ${exp.accent}25`, e.currentTarget.style.borderColor = `${exp.accent}40`)}
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "", e.currentTarget.style.borderColor = "")}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className="p-2 rounded-lg flex-shrink-0"
                          style={{ background: `${exp.accent}12`, border: `1px solid ${exp.accent}30` }}
                        >
                          <Briefcase size={17} style={{ color: exp.accent }} />
                        </div>
                        <div>
                          <h3
                            className="font-bold text-white leading-tight"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                          >
                            {exp.title}
                          </h3>
                          <p className="text-sm font-semibold" style={{ color: exp.accent }}>
                            {exp.org}
                          </p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
                        <span className="flex items-center gap-1.5"><Calendar size={12} />{exp.duration}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={12} />{exp.location}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="text-xs px-2.5 py-1 rounded-full transition-all duration-200"
                            style={{
                              background: `${exp.accent}10`,
                              border: `1px solid ${exp.accent}25`,
                              color: exp.accent,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop only */}
                  <div
                    className={`hidden md:flex justify-center items-center ${isLeft ? "md:col-start-2 md:row-start-1" : "md:col-start-1 md:row-start-1"}`}
                    style={{ gridColumn: isLeft ? undefined : "1" }}
                  >
                    <div
                      className="w-4 h-4 rounded-full z-10"
                      style={{
                        background: exp.accent,
                        boxShadow: `0 0 0 4px hsl(225 28% 5%), 0 0 20px ${exp.accent}80`,
                      }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;