import { TrendingUp, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: TrendingUp, value: "7+", label: "Research Projects" },
    { icon: Award, value: "2+", label: "Patents Filed" },
    { icon: Clock, value: "1+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Kairova Biotech
          </h2>
          <p className="text-xl text-muted-foreground">
            Leading the next generation of biotechnology innovations
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 space-y-6 text-lg text-foreground/90">
          <div className="p-8 bg-card rounded-2xl shadow-lg hover-lift border border-border">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Transforming Healthcare Through Ocean Innovation
            </h3>
            <p className="leading-relaxed">
              At Kairova Biotech Pvt. Ltd., we leverage premium marine resources — advancing carbon capture, 
              chemical-free farming, and a circular economy. Based in Indore, Madhya Pradesh, we're shaping 
              a sustainable future through the extraordinary potential of seaweeds.
            </p>
          </div>

          <div className="p-8 bg-card rounded-2xl shadow-lg hover-lift border border-border">
            <p className="leading-relaxed">
              Our commitment to sustainability extends beyond health; we promote a circular economy by 
              developing eco-friendly bioplastics from seaweed, reducing our environmental footprint while 
              harnessing the ocean's power for global impact.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-2xl shadow-lg hover-lift border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-300" />
              <div className="text-5xl font-bold mb-2 text-gradient">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
