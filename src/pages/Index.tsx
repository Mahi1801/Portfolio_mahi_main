import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Sparkle Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Large glittering sparkles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/30 rounded-full animate-pulse-glow"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 1.5}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
        {/* Medium sparkles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute bg-accent/25 rounded-full animate-pulse-glow"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`
            }}
          />
        ))}
        {/* Small twinkling stars */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute bg-secondary/20 rounded-full animate-pulse-glow"
            style={{
              width: '1px',
              height: '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${0.8 + Math.random() * 1.2}s`,
              boxShadow: '0 0 6px currentColor'
            }}
          />
        ))}
        {/* Floating glitter particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`glitter-${i}`}
            className="absolute bg-primary-glow/40 rounded-full animate-float"
            style={{
              width: '0.5px',
              height: '0.5px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              filter: 'blur(0.3px)',
              boxShadow: '0 0 4px currentColor'
            }}
          />
        ))}
      </div>
      
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
