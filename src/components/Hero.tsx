import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-mahi-new.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">{/* Added pt-20 to account for fixed navbar */}
      {/* Enhanced Sparkle Background */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
        <div className="shape shape-7"></div>
        <div className="shape shape-8"></div>
        <div className="shape shape-9"></div>
        <div className="shape shape-10"></div>
        <div className="shape shape-11"></div>
        <div className="shape shape-12"></div>
      </div>
      
      {/* Additional sparkle layers */}
      <div className="sparkle-layer">
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
        <div className="sparkle sparkle-4"></div>
        <div className="sparkle sparkle-5"></div>
        <div className="sparkle sparkle-6"></div>
        <div className="sparkle sparkle-7"></div>
        <div className="sparkle sparkle-8"></div>
        <div className="sparkle sparkle-9"></div>
        <div className="sparkle sparkle-10"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Main profile image */}
              <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56">
                <img 
                  src={profileImage} 
                  alt="Mahi Singhal"
                  className="w-full h-full rounded-full object-cover border-4 border-primary/80 shadow-elegant relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse-glow"></div>
                {/* Gradient background */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 blur-xl scale-110"></div>
                {/* Floating particles effect */}
                <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow"></div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="gradient-text">Mahi</span>{" "}
            <span className="gradient-text-secondary">Singhal</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Hi, I'm Mahi – a front-end developer passionate about building intuitive web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-hero"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-12">
            <a href="https://github.com/Mahi1801" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 glow-primary">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mahi-singhal-0675b9304/" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full border border-secondary/20 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 glow-secondary">
              <Linkedin size={24} />
            </a>
            <button
               onClick={() => scrollToSection('contact')}
               className="p-3 rounded-full border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 glow-accent">
              <Mail size={24} />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="cursor-pointer animate-bounce"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown size={32} className="mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;