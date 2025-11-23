import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Sprout, BrainCircuit } from "lucide-react";

const Innovations = () => {
  const innovations = [
    {
      icon: Waves,
      title: "Ocean Omega-3 Extraction",
      description: "Breakthrough seaweed cultivation and omega-3 extraction technology that delivers premium marine nutrients while promoting sustainable ocean farming practices.",
      status: "Phase 3 Clinical Trials",
      statusColor: "bg-primary",
    },
    {
      icon: Sprout,
      title: "Sustainable Seaweed Farming",
      description: "Innovative ocean farming techniques for sustainable seaweed cultivation and marine ecosystem protection.",
      status: "In Development",
      statusColor: "bg-accent",
    },
    {
      icon: BrainCircuit,
      title: "Personalized Medicine AI",
      description: "AI-driven drug personalization for optimal treatment outcomes.",
      status: "Clinical Testing",
      statusColor: "bg-secondary",
    },
  ];

  return (
    <section id="innovations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Latest Innovations
          </h2>
          <p className="text-xl text-muted-foreground">
            Breakthrough technologies shaping the future
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {innovations.map((innovation, index) => (
            <Card
              key={index}
              className="hover-lift border-2 hover:border-primary transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl ocean-gradient flex items-center justify-center flex-shrink-0">
                    <innovation.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{innovation.title}</CardTitle>
                      <Badge className={`${innovation.statusColor} text-white`}>
                        {innovation.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {innovation.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-card rounded-2xl border-2 border-primary/20 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <Waves className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-primary">Marine Biotechnology</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our flagship innovation combines breakthrough seaweed cultivation with advanced extraction 
                technology. This approach not only delivers premium omega-3 nutrients but also promotes 
                sustainable ocean farming practices, contributing to carbon capture and marine ecosystem health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
