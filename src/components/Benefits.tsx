import { Heart, Brain, Zap, Leaf } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Enhanced Heart Health",
      color: "text-red-500",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Improved Brain Function",
      color: "text-purple-500",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "Overall Vitality",
      color: "text-yellow-500",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solutions",
      color: "text-green-500",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 ocean-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            🌊 Discover a Healthier, Greener Future
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Powered by the ocean's extraordinary potential. Our sustainable biotechnology solutions harness 
            the power of seaweeds to create premium health products while protecting marine ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover-lift border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
