import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Three.js 3D background */}
      <ThreeBackground />

      {/* All sections */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border/30 text-center">
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
             <span style={{ color: "hsl(338 100% 58%)" }}>Mahi Singhal</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
