import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Smartphone, Globe, Zap } from "lucide-react";

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Palette size={32} />,
      title: "Custom Design",
      description: "Unique, brand-focused designs tailored to your vision"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-First",
      description: "Responsive designs that work perfectly on all devices"
    },
    {
      icon: <Globe size={32} />,
      title: "Modern Web Tech",
      description: "Built with the latest technologies for optimal performance"
    },
    {
      icon: <Zap size={32} />,
      title: "Fast & Efficient",
      description: "Optimized for speed and exceptional user experience"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Service */}
        <div className="mb-16">
          <Card className="glass-card p-12 text-center hover:scale-105 transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex p-6 rounded-full bg-primary/20 border border-primary/30 mb-8 glow-primary">
                <Globe size={48} className="text-primary" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text-secondary">Web Designing</span>
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Clean, responsive, and user-centric website design for individuals and organizations. 
                I create digital experiences that not only look stunning but also drive results and 
                engage your audience effectively.
              </p>

              <Button 
                className="btn-hero"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </div>
          </Card>
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
              <div className="inline-flex p-4 rounded-full bg-secondary/20 border border-secondary/30 group-hover:bg-secondary/30 transition-all duration-300 mb-4">
                <span className="text-secondary">{feature.icon}</span>
              </div>
              <h4 className="text-lg font-semibold mb-3 gradient-text">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">My Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Discover</h4>
                <p className="text-muted-foreground text-sm">Understanding your goals, target audience, and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 border-2 border-secondary text-secondary font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Design</h4>
                <p className="text-muted-foreground text-sm">Creating wireframes, mockups, and interactive prototypes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent text-accent font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Develop</h4>
                <p className="text-muted-foreground text-sm">Building responsive, fast, and user-friendly websites</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;