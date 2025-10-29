import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      year: "2023–2027",
      title: "B.Tech in Computer Science and Engineering (Data Science)",
      description: "Currently pursuing undergraduate degree with focus on Data Science and Software Development"
    },
    {
      year: "2023",
      title: "12th Grade - CBSE",
      description: "Completed higher secondary education with excellent academic performance"
    },
    {
      year: "2021",
      title: "10th Grade - CBSE",
      description: "Completed secondary education with strong foundation in science and mathematics"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text-secondary">My Story</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm an enthusiastic B.Tech CSE (Data Science) student (Batch of 2027) deeply passionate about 
                software development and solving real-world problems. As a front-end developer, I blend creativity 
                with functionality to craft seamless, user-focused web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I thrive on exploring new technologies and building impactful products that make a difference 
                in people's lives. My journey in tech is driven by curiosity and a desire to create meaningful 
                digital experiences.
              </p>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center gap-2">
              <GraduationCap size={28} />
              Education Timeline
            </h3>
            
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/20 border border-primary/30">
                      <Calendar size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;