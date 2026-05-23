import { useRef, MouseEvent, useState } from "react";
import { ExternalLink, Github, X, Heart, Users, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* ─── Data ─────────────────────────────────────────────── */
const FEATURED = {
  title: "Indian Road Lane Compliance Analysis",
  tagline: "To study and analyze the extent of lane departure and lane encroachment using ML models.",
  description:
    "Analysed Indian road traffic footage to extract and process frame-level vehicle compliance data. Classified 4+ vehicle types and computed lane discipline metrics using Python & scikit-learn to surface critical traffic behaviour insights.",
  technologies: ["Python", "Pandas", "Streamlit", "scikit-learn", "OpenCV", "Machine Learning"],
  features: [
    "Analysed Indian road traffic footage to extract and process frame-level vehicle compliance data",
    "Classified 4+ vehicle types and computed lane discipline metrics using Python & scikit-learn",
    "Deployed a Streamlit dashboard tracking 3+ KPIs (compliance rate, violation frequency, vehicle-wise breakdown)",
    "Surfaced traffic behaviour insights from 1000+ examined frames",
  ],
  impact: { frames: "1,000+", vehicles: "4+ Types", metrics: "3+ KPIs" },
  github: "https://github.com/Mahi1801/Road-Lane-Compilance-Analysis",
};

const FEATURED_2 = {
  title: "DeliverIQ – Delivery Feature Impact Analytics",
  tagline: "Quantifying post-feature delivery degradation and SLA breach spikes using statistical methods.",
  description:
    "Built an end-to-end analytics pipeline on 3,000+ simulated orders; applied Welch's T-Test and Chi-Square to quantify 18% delivery time degradation and 2.1x SLA breach spike post feature removal to drive data-backed rollback recommendations.",
  technologies: ["Python", "SQL", "MySQL", "Power BI", "Jupyter Notebook", "A/B Testing"],
  features: [
    "Built an end-to-end analytics pipeline on 3,000+ simulated orders",
    "Applied Welch's T-Test and Chi-Square to quantify 18% delivery time degradation and 2.1x SLA breach spike",
    "Architected Python ETL + MySQL aggregation layer for structured data storage",
    "4-page Power BI dashboard with KPI cards, heatmaps, and trend lines",
  ],
  impact: { orders: "3,000+", delay: "18% ↑", breach: "2.1x Spike" },
  github: "https://github.com/Mahi1801/delivery-impact-analysis",
};

const PROJECTS = [
  {
    title: "Empowerlink",
    desc: "Platform connecting vendors with NGOs for financial empowerment.",
    tags: ["TypeScript", "React", "Social Impact"],
    github: "https://github.com/Mahi1801/EMPOWERLINK_PRO",
    accent: "hsl(338 100% 58%)",
    detail:
      "Empowerlink bridges the gap between local vendors and NGOs, enabling transparent financial transactions and empowerment programs through a modern web interface built with TypeScript and React.",
  },
  {
    title: "Blue Carbon MRV System",
    desc: "AI-enhanced Monitoring and Verification system for carbon stock assessment.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Remote Sensing"],
    github: "https://github.com/Mahi1801/Blue-Carbon-MRV",
    accent: "hsl(188 100% 50%)",
    detail:
      "Developed an AI-enhanced Monitoring and Verification system for carbon stock assessment, integrating data science with remote sensing technologies. Streamlined automated carbon reporting, reducing manual data entry requirements for environmental ecosystem analysis.",
  },
  {
    title: "Next-Gen Industrial HMI Control System",
    desc: "Real-time industrial HMI dashboard monitoring 6 live sensor signals with AI alarm prioritization.",
    tags: ["Python", "Plotly Dash", "PyQt6", "scikit-learn", "SQLite"],
    github: "https://github.com/Mahi1801/Industrial-HMI-System",
    accent: "hsl(43 100% 58%)",
    detail:
      "Built a real-time industrial HMI dashboard in Python monitoring 6 live sensor signals with AI-powered alarm prioritization, reducing alert noise across 100+ concurrent notifications. Implemented a 5-layer modular system with 3 role-based views, anomaly detection via Isolation Forest, and YAML-driven auto-generated UI panels deployable on Raspberry Pi.",
  },
];

/* ─── Tilt Card ─────────────────────────────────────────── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
    el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: "transform 0.1s ease", willChange: "transform" }}>
      {children}
    </div>
  );
}

/* ─── Project Modal ─────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box glass-card" style={{ border: `1px solid ${project.accent}40` }}>
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-white transition-colors"
          style={{ background: "hsl(225 28% 8%)", zIndex: 10 }}
        >
          <X size={18} />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Syne', sans-serif", color: project.accent }}
            >
              {project.title}
            </h2>
            <p className="text-muted-foreground">{project.desc}</p>
          </div>

          {/* Detail */}
          <p className="text-white/80 leading-relaxed mb-6">{project.detail}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: `${project.accent}12`,
                  border: `1px solid ${project.accent}30`,
                  color: project.accent,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              className="btn-primary flex-1 justify-center"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github size={16} /> View on GitHub
            </button>
            <button
              className="btn-outline"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
const Projects = () => {
  const [modal, setModal] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6" style={{ background: "hsl(225 28% 5%)" }}>
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <ScrollReveal direction="up">
          <div className="mb-14">
            <span className="section-tag">✦ Portfolio</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span style={{ color: "hsl(0 0% 92%)" }}>Selected </span>
              <span className="text-grad-hot">Projects</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured */}
        <ScrollReveal direction="up">
          <div className="relative mb-16">
            {/* Animated conic border */}
            <div
              className="rounded-2xl p-[1px]"
              style={{
                background: "linear-gradient(135deg, hsl(338 100% 58%), hsl(188 100% 50%), hsl(43 100% 58%), hsl(338 100% 58%))",
                backgroundSize: "300% 300%",
                animation: "gradient-spin 6s linear infinite",
              }}
            >
              <div className="glass-card rounded-2xl p-8 lg:p-10" style={{ background: "hsl(225 28% 5%)" }}>
                {/* Featured badge */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: "hsl(338 100% 58% / 0.1)", border: "1px solid hsl(338 100% 58% / 0.25)" }}
                  >
                    <Heart size={18} style={{ color: "hsl(338 100% 58%)" }} />
                  </div>
                  <span
                    className="section-tag"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    ★ Featured Project
                  </span>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Info */}
                  <div className="lg:col-span-3 space-y-5">
                    <h3
                      className="text-3xl font-bold text-grad-secondary"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {FEATURED.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">{FEATURED.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{FEATURED.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {FEATURED.technologies.map((t, i) => {
                        const colors = ["hsl(338 100% 58%)", "hsl(188 100% 50%)", "hsl(43 100% 58%)", "hsl(271 100% 65%)"];
                        const c = colors[i % colors.length];
                        return (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-full"
                            style={{
                              background: `${c}10`,
                              border: `1px solid ${c}28`,
                              color: c,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    {/* Impact stats */}
                    <div className="grid grid-cols-3 gap-3 pt-1">
                      {Object.entries(FEATURED.impact).map(([k, v]) => (
                        <div
                          key={k}
                          className="rounded-xl p-3 text-center"
                          style={{ background: "hsl(225 28% 8%)", border: "1px solid hsl(var(--border) / 0.4)" }}
                        >
                          <div
                            className="text-lg font-bold"
                            style={{ fontFamily: "'Syne', sans-serif", color: "hsl(338 100% 58%)" }}
                          >
                            {v}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">{k}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-1">
                      <button
                        className="btn-primary text-sm px-5 py-2.5"
                        onClick={() => window.open(FEATURED.github, "_blank")}
                      >
                        <ExternalLink size={15} /> View Project
                      </button>
                      <button
                        className="btn-outline text-sm px-5 py-2.5"
                        onClick={() => window.open(FEATURED.github, "_blank")}
                      >
                        <Github size={15} /> Source
                      </button>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2">
                    <div
                      className="rounded-2xl p-5 h-full"
                      style={{ background: "hsl(225 28% 7%)", border: "1px solid hsl(var(--border) / 0.4)" }}
                    >
                      <h4
                        className="font-bold text-white flex items-center gap-2 mb-4"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        <Users size={16} style={{ color: "hsl(338 100% 58%)" }} /> Key Features
                      </h4>
                      <ul className="space-y-3">
                        {FEATURED.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: "hsl(338 100% 58%)" }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="relative mb-16">
            {/* Animated conic border */}
            <div
              className="rounded-2xl p-[1px]"
              style={{
                background: "linear-gradient(135deg, hsl(338 100% 58%), hsl(188 100% 50%), hsl(43 100% 58%), hsl(338 100% 58%))",
                backgroundSize: "300% 300%",
                animation: "gradient-spin 6s linear infinite",
              }}
            >
              <div className="glass-card rounded-2xl p-8 lg:p-10" style={{ background: "hsl(225 28% 5%)" }}>
                {/* Featured badge */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: "hsl(338 100% 58% / 0.1)", border: "1px solid hsl(338 100% 58% / 0.25)" }}
                  >
                    <Heart size={18} style={{ color: "hsl(338 100% 58%)" }} />
                  </div>
                  <span
                    className="section-tag"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    ★ Featured Project
                  </span>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Info */}
                  <div className="lg:col-span-3 space-y-5">
                    <h3
                      className="text-3xl font-bold text-grad-secondary"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {FEATURED_2.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">{FEATURED_2.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{FEATURED_2.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {FEATURED_2.technologies.map((t, i) => {
                        const colors = ["hsl(338 100% 58%)", "hsl(188 100% 50%)", "hsl(43 100% 58%)", "hsl(271 100% 65%)"];
                        const c = colors[i % colors.length];
                        return (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-full"
                            style={{
                              background: `${c}10`,
                              border: `1px solid ${c}28`,
                              color: c,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    {/* Impact stats */}
                    <div className="grid grid-cols-3 gap-3 pt-1">
                      {Object.entries(FEATURED_2.impact).map(([k, v]) => (
                        <div
                          key={k}
                          className="rounded-xl p-3 text-center"
                          style={{ background: "hsl(225 28% 8%)", border: "1px solid hsl(var(--border) / 0.4)" }}
                        >
                          <div
                            className="text-lg font-bold"
                            style={{ fontFamily: "'Syne', sans-serif", color: "hsl(338 100% 58%)" }}
                          >
                            {v}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">{k}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-1">
                      <button
                        className="btn-primary text-sm px-5 py-2.5"
                        onClick={() => window.open(FEATURED_2.github, "_blank")}
                      >
                        <ExternalLink size={15} /> View Project
                      </button>
                      <button
                        className="btn-outline text-sm px-5 py-2.5"
                        onClick={() => window.open(FEATURED_2.github, "_blank")}
                      >
                        <Github size={15} /> Source
                      </button>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2">
                    <div
                      className="rounded-2xl p-5 h-full"
                      style={{ background: "hsl(225 28% 7%)", border: "1px solid hsl(var(--border) / 0.4)" }}
                    >
                      <h4
                        className="font-bold text-white flex items-center gap-2 mb-4"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        <Users size={16} style={{ color: "hsl(338 100% 58%)" }} /> Key Features
                      </h4>
                      <ul className="space-y-3">
                        {FEATURED_2.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: "hsl(338 100% 58%)" }}
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Other projects */}
        <ScrollReveal direction="up">
          <h3
            className="text-2xl font-bold text-grad-primary mb-8"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Other Projects
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 70}>
              <TiltCard className="h-full">
                <div
                  className="glass-card rounded-2xl p-5 flex flex-col h-full cursor-pointer group transition-all duration-300"
                  onClick={() => setModal(p)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${p.accent}40`;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${p.accent}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  {/* Title */}
                  <h4
                    className="font-bold text-white mb-2 flex items-start justify-between"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {p.title}
                    <ArrowUpRight
                      size={16}
                      className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: p.accent }}
                    />
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${p.accent}10`,
                          border: `1px solid ${p.accent}25`,
                          color: p.accent,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm transition-all duration-200 text-muted-foreground hover:text-white group/btn"
                      style={{ border: "1px solid hsl(var(--border) / 0.5)" }}
                      onClick={(e) => { e.stopPropagation(); setModal(p); }}
                    >
                      Details
                    </button>
                    <button
                      className="p-2 rounded-xl text-muted-foreground hover:text-white transition-colors"
                      style={{ border: "1px solid hsl(var(--border) / 0.5)" }}
                      onClick={(e) => { e.stopPropagation(); window.open(p.github, "_blank"); }}
                    >
                      <Github size={14} />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal direction="scale">
          <div
            className="glass-card rounded-2xl p-8 text-center max-w-2xl mx-auto"
            style={{ border: "1px solid hsl(338 100% 58% / 0.18)" }}
          >
            <h4
              className="text-xl font-bold text-grad-hot mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Explore More
            </h4>
            <p className="text-muted-foreground mb-6 text-sm">
              Check my full collection on GitHub — or let's build something together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                className="btn-primary"
                onClick={() => window.open("https://github.com/Mahi1801", "_blank")}
              >
                <Github size={16} /> All Projects
              </button>
              <button
                className="btn-outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let's Build Together
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}

      <style>{`
        @keyframes gradient-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Projects;