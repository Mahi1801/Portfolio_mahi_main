import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Globe, Wrench, Cloud, Palette, Download } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["C", "Python", "JavaScript"],
      color: "primary"
    },
    {
      title: "Web Development",
      icon: <Globe size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "Django", "Flask"],
      color: "secondary"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      skills: ["GitHub", "VS Code", "Unity"],
      color: "accent"
    },
    {
      title: "Technologies",
      icon: <Cloud size={24} />,
      skills: ["AR/VR", "Google Cloud"],
      color: "primary"
    },
    {
      title: "Design",
      icon: <Palette size={24} />,
      skills: ["Canva Designing", "UI/UX Principles"],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20";
      case "accent":
        return "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20";
      default:
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-accent";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full bg-${category.color}/20 border border-${category.color}/30 group-hover:bg-${category.color}/30 transition-all duration-300 mb-4`}>
                  <span className={getIconColor(category.color)}>{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold gradient-text-secondary">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className={`${getColorClasses(category.color)} transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <Card className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Always Learning</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm constantly exploring new technologies and frameworks to stay current with industry trends. 
              My passion for learning drives me to take on new challenges and expand my technical expertise 
              in areas like machine learning, cloud computing, and modern web frameworks.
            </p>
            <Button 
              onClick={() => {
                const resumeUrl = "https://drive.google.com/uc?export=download&id=1vxdNJqgYpEnQidmDVbBQSQNwJUc_C_Pe";
                window.open(resumeUrl, '_blank');
              }}
              className="btn-hero"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;