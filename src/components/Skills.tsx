import { useEffect, useRef, useState } from "react";
import { Code, Globe, Wrench, Cloud, Palette, Download, BarChart2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CATEGORIES = [
  {
    title: "Languages",
    icon: <Code size={22} />,
    color: "hsl(338 100% 58%)",
    skills: [
      { name: "Python" },
    ],
  },
  {
    title: "Data Analytics",
    icon: <BarChart2 size={22} />,
    color: "hsla(247, 100%, 58%, 1.00)",
    skills: [
      { name: "Pandas / NumPy / Matplotlib" },
      { name: "SQL" },
      { name: "MS Excel" },
      { name: "Power BI" },
    ],
  },
  {
    title: "Web Dev",
    icon: <Globe size={22} />,
    color: "hsl(188 100% 50%)",
    skills: [
      { name: "HTML / CSS" },
      { name: "TypeScript" },
      { name: "Django / Flask" },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench size={22} />,
    color: "hsl(43 100% 58%)",
    skills: [
      { name: "GitHub / Git" },
      { name: "VS Code" },
      { name: "Unity" },
    ],
  },
  {
    title: "Cloud & AR",
    icon: <Cloud size={22} />,
    color: "hsl(271 100% 65%)",
    skills: [
      { name: "Google Cloud" },
      { name: "AR / VR" },
    ],
  },
  {
    title: "Design",
    icon: <Palette size={22} />,
    color: "hsl(188 100% 50%)",
    skills: [
      { name: "Canva", level: 78 },
      { name: "UI / UX Principles", level: 72 },
    ],
  },
];

function SkillBar({ name, level, color, active }: { name: string; level: number; color: string; active: boolean }) {
  return (
    <div className="space-y-1.5">
      <div className="flex text-sm">
        <span className="text-white/80">{name}</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{
            width: active ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: active ? `0 0 10px ${color}60` : "none",
          }}
        />
      </div>
    </div>
  );
}

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <ScrollReveal direction="up">
          <div className="mb-14">
            <span className="section-tag">✦ Expertise</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span style={{ color: "hsl(0 0% 92%)" }}>My </span>
              <span className="text-grad-secondary">Skills</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {CATEGORIES.map((cat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 70}>
              <div
                className="glass-card rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 8px 30px ${cat.color}22`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${cat.color}12`,
                      border: `1px solid ${cat.color}30`,
                      color: cat.color,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((s, si) => (
                    <SkillBar key={si} {...s} color={cat.color} active={active} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="scale">
          <div
            className="glass-card rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto relative overflow-hidden"
            style={{ border: "1px solid hsl(338 100% 58% / 0.2)" }}
          >
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(338 100% 58% / 0.04), transparent)",
                animation: "badge-bob-1 4s ease-in-out infinite",
              }}
            />
            <h3 className="text-2xl font-bold text-grad-hot mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
              Always Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-7 max-w-lg mx-auto">
              Constantly exploring machine learning, cloud computing, and modern web frameworks —
              driven by curiosity to build better solutions.
            </p>
            <button
              className="btn-primary"
              onClick={() => window.open("https://drive.google.com/file/d/1lDLY_BmvHVP3fUxFU3UAWso1CRxqzdzS/view?usp=drive_link")}
            >
              <Download size={18} /> Download Resume
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;