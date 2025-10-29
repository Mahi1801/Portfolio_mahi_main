import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Open Source Contributor",
      organization: "GirlScript Summer of Code",
      duration: "Jul 2025 – Present",
      location: "Online",
      description: "Contributing to open source projects, collaborating with developers worldwide, and improving codebases across various technologies.",
      tags: ["Open Source", "Collaboration", "Git", "GitHub"]
    },
    {
      title: "Technical Head",
      organization: "DataVerse",
      duration: "Nov 2024 – Present",
      location: "Ghaziabad, UP",
      description: "Working on data science projects and developing technical solutions for real-world problems with a focus on innovation and impact.",
      tags: ["Data Science", "Python", "Analytics", "Team Leadership"]
    },
    {
      title: "Google Cloud Facilitator",
      organization: "Google Cloud Arcade Facilitator Program",
      duration: "Apr 2025 – Jul 2025",
      location: "Online",
      description: "Facilitating cloud computing workshops and helping participants learn Google Cloud technologies through hands-on labs and projects.",
      tags: ["Google Cloud", "Training", "Cloud Computing", "Mentoring"]
    },
    {
      title: "Treasurer",
      organization: "Arcade: AR/VR and E-Gaming",
      duration: "Apr 2025 – Jun 2025",
      location: "Ghaziabad, UP",
      description: "Contributed to AR/VR development projects and e-gaming initiatives, working with cutting-edge immersive technologies.",
      tags: ["AR/VR", "Unity", "Game Development", "Immersive Tech"]
    },
    {
      title: "Hackoberfest Contributor",
      organization: "Hacktoberfest",
      duration: "Oct 2025",
      location: "Online",
      description: "Contributed to projects and initiatives, working with cutting-edge immersive technologies.",
      tags: ["Python", "Django",]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="p-4 rounded-full bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all duration-300 self-start">
                  <Briefcase size={24} className="text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-bold gradient-text-secondary">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h4 className="text-lg font-semibold text-primary">{exp.organization}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => {
                      const colors = ["primary", "secondary", "accent"];
                      const colorClass = colors[tagIndex % colors.length];
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
                      return (
                        <Badge 
                          key={tagIndex} 
                          className={`${getColorClasses(colorClass)} transition-all duration-300 hover:scale-105`}
                        >
                          {tag}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;