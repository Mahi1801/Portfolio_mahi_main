import { GraduationCap, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const EDUCATION = [
  {
    year: "2023–2027",
    degree: "B.Tech CSE (Data Science)",
    note: "Batch of 2027",
    desc: "Pursuing undergraduate degree focused on Data Science & Software Development.",
  },
  {
    year: "2023",
    degree: "12th Grade — CBSE",
    note: "Higher Secondary",
    desc: "Completed with excellent performance in Science & Computer Science.",
  },
  {
    year: "2021",
    degree: "10th Grade — CBSE",
    note: "Secondary School",
    desc: "Strong foundation in Science, Mathematics, and Computer Science.",
  },
];

const About = () => {
  const tags = ["Python", "SQL", "MS Excel", "Power BI", "Google Cloud", "AR/VR", "TypeScript"];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <ScrollReveal direction="up">
          <div className="mb-14">
            <span className="section-tag">✦ About Me</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span style={{ color: "hsl(0 0% 92%)" }}>Who I </span>
              <span className="text-grad-primary">Am</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bio + Education */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Bio */}
          <ScrollReveal direction="left">
            <div className="glass-card rounded-2xl p-8 h-full border-0 outline outline-1 outline-border/30 hover:outline-primary/30 transition-all duration-400 space-y-5">
              <h3
                className="text-2xl font-bold text-grad-secondary"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                My Story
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm an enthusiastic{" "}
                <span className="text-white font-semibold">B.Tech CSE (Data Science)</span> student
                (Batch of 2027) deeply passionate about data analysis and software development and solving real-world
                problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a Data Analyst and Front-end Developer, I blend{" "}
                <span className="text-white font-semibold">creativity with functionality</span> to
                craft seamless dashboards, user-focused web applications — from analyzing data to open-source
                contributions.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full transition-all duration-300 cursor-default"
                    style={{
                      background: "hsl(338 100% 58% / 0.08)",
                      border: "1px solid hsl(338 100% 58% / 0.25)",
                      color: "hsl(338 100% 68%)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "hsl(338 100% 58% / 0.18)";
                      el.style.boxShadow = "0 0 12px hsl(338 100% 58% / 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "hsl(338 100% 58% / 0.08)";
                      el.style.boxShadow = "";
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Education timeline */}
          <ScrollReveal direction="right">
            <div>
              <h3
                className="text-2xl font-bold text-grad-primary flex items-center gap-2 mb-8"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <GraduationCap size={26} /> Education
              </h3>
              <div className="relative pl-7">
                <div className="timeline-track" />
                <div className="space-y-5">
                  {EDUCATION.map((e, i) => (
                    <ScrollReveal key={i} direction="up" delay={i * 120}>
                      <div
                        className="relative glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                        onMouseEnter={(el) => (el.currentTarget.style.boxShadow = "0 8px 28px hsl(338 100% 58% / 0.14)")}
                        onMouseLeave={(el) => (el.currentTarget.style.boxShadow = "")}
                      >
                        {/* Timeline dot */}
                        <div
                          className="absolute -left-[1.88rem] top-6 w-3 h-3 rounded-full border-2"
                          style={{
                            background: "hsl(225 30% 4%)",
                            borderColor: "hsl(338 100% 58%)",
                            boxShadow: "0 0 12px hsl(338 100% 58% / 0.7)",
                          }}
                        />
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={13} style={{ color: "hsl(338 100% 58%)" }} />
                          <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{
                              color: "hsl(338 100% 58%)",
                              background: "hsl(338 100% 58% / 0.1)",
                              border: "1px solid hsl(338 100% 58% / 0.25)",
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {e.year}
                          </span>
                          <span className="text-xs text-muted-foreground">{e.note}</span>
                        </div>
                        <h4 className="font-semibold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                          {e.degree}
                        </h4>
                        <p className="text-sm text-muted-foreground">{e.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;