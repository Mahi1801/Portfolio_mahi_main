import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Heart, Users } from "lucide-react";

const Projects = () => {
  const featuredProject = {
    title: "Empowerlink",
    description: "Platform connecting vendors with NGOs for financial empowerment.",
    longDescription: "Bridge between local vendors and organizations providing support through registration, resource matching, and impact tracking.",
    technologies: ["TypeScript", "React", "Web Development", "Social Impact", "Community Building"],
    features: [
      "Vendor Registration System",
      "Resource Matching Algorithm", 
      "Partnership Management",
      "Financial Assistance Portal"
    ],
    impact: {
      vendors: "100+",
      partnerships: "15+",
      funding: "$50K+"
    },
    githubUrl: "https://github.com/Mahi1801/Empowerlink"
  };

  const otherProjects = [
    {
      title: "Amazon Clone",
      description: "E-commerce platform clone with modern styling",
      technologies: ["CSS", "HTML"],
      githubUrl: "https://github.com/Mahi1801/Amazon_Clone"
    },
    {
      title: "WonderLove Project",
      description: "Interactive web application for community engagement",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/Mahi1801/WonderLove_Project"
    },
    {
      title: "AR Projects",
      description: "Augmented reality web experiences and applications",
      technologies: ["CSS", "HTML"],
      githubUrl: "https://github.com/Mahi1801/AR-Project-2"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Featured Project */}
        <Card className="glass-card p-8 lg:p-12 mb-16 hover:scale-[1.02] transition-all duration-300 border border-primary/20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
              <Heart size={24} className="text-primary" />
            </div>
            <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2">Featured Project</Badge>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Project Info - Takes 3/5 of the space */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold gradient-text-secondary mb-4">
                {featuredProject.title}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuredProject.description}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {featuredProject.longDescription}
              </p>

              {/* Technologies */}
               <div>
                <h4 className="font-semibold mb-3 gradient-text">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, index) => {
                    const colors = ["primary", "secondary", "accent"];
                    const colorClass = colors[index % colors.length];
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
                        key={index} 
                        className={`${getColorClasses(colorClass)} transition-all duration-300 hover:scale-105`}
                      >
                        {tech}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="btn-hero"
                  onClick={() => window.open(featuredProject.githubUrl, '_blank')}
                >
                  <ExternalLink size={20} className="mr-2" />
                  View Project
                </Button>
                <Button 
                  variant="outline" 
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={() => window.open(featuredProject.githubUrl, '_blank')}
                >
                  <Github size={20} className="mr-2" />
                  Source Code
                </Button>
              </div>
            </div>

            {/* Project Features & Impact - Takes 2/5 of the space */}
            <div className="lg:col-span-2 space-y-6">
              {/* Key Features */}
              <Card className="glass-card p-6 h-fit">
                <h4 className="font-semibold mb-4 gradient-text flex items-center gap-2">
                  <Users size={20} />
                  Key Features
                </h4>
                <div className="space-y-3">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Card>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-semibold mb-12 text-center gradient-text">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {otherProjects.map((project, index) => (
              <Card key={index} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 border border-primary/10 flex flex-col h-full">
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold mb-4 gradient-text-secondary leading-tight">{project.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => {
                      const colors = ["primary", "secondary", "accent"];
                      const colorClass = colors[techIndex % colors.length];
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
                          key={techIndex} 
                          className={`${getColorClasses(colorClass)} transition-all duration-300 hover:scale-105 text-xs px-2 py-1`}
                        >
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full mt-auto"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  View Project
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="glass-card p-8 max-w-3xl mx-auto border border-primary/20">
              <h4 className="text-xl font-semibold mb-4 gradient-text">Want to see more?</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Explore my complete collection of projects and contributions on GitHub, 
                or let's discuss how we can build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/Mahi1801', '_blank')}
                >
                  <Github size={20} className="mr-2" />
                  View All Projects
                </Button>
                <Button 
                  className="btn-hero"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Build Something Together
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;