import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const y = window.scrollY + 130;
      for (let i = NAV.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV[i].id);
        if (el && el.offsetTop <= y) { setActive(NAV[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sliding pill
  useEffect(() => {
    if (!navRef.current || !pillRef.current) return;
    const btn = navRef.current.querySelector<HTMLButtonElement>(`[data-id="${active}"]`);
    if (btn) {
      pillRef.current.style.left = `${btn.offsetLeft}px`;
      pillRef.current.style.width = `${btn.offsetWidth}px`;
    }
  }, [active]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-border/40 shadow-xl shadow-black/30"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="font-['Syne'] font-800 text-xl tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            <span className="text-grad-primary">M</span>
            <span style={{ color: "hsl(0 0% 80%)" }}>ahi</span>
            <span style={{ color: "hsl(338 100% 58%)" }}>.</span>
          </button>

          {/* Desktop nav */}
          <div ref={navRef} className="hidden md:flex items-center gap-1 relative">
            {NAV.map((n) => (
              <button
                key={n.id}
                data-id={n.id}
                onClick={() => go(n.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full z-10 relative ${active === n.id ? "text-white" : "text-muted-foreground hover:text-white"
                  }`}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {n.label}
              </button>
            ))}
            {/* Pink underline pill */}
            <div
              ref={pillRef}
              className="absolute bottom-1 h-0.5 rounded-full transition-all duration-400"
              style={{
                background: "linear-gradient(90deg, hsl(338 100% 58%), hsl(271 100% 65%))",
                boxShadow: "0 0 10px hsl(338 100% 58% / 0.7)",
              }}
            />
          </div>

          {/* CTA */}
          <button
            onClick={() => go("contact")}
            className="hidden md:block btn-primary text-sm px-5 py-2.5"
          >
            Let's Talk ✦
          </button>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-white transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden animate-slide-down bg-background/96 backdrop-blur-2xl border-b border-border/40">
          <div className="px-6 py-4 space-y-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${active === n.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-white"
                  }`}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {n.label}
              </button>
            ))}
            <div className="pt-2">
              <button onClick={() => go("contact")} className="btn-primary w-full justify-center">
                Let's Talk ✦
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;