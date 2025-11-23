import { Sprout, Recycle, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Sprout,
      title: "Agriculture",
      description: "Seaweed-based agricultural solutions including bio-fertilizers and soil enhancers for sustainable farming.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Recycle,
      title: "Bio Plastic",
      description: "Eco-friendly bioplastics derived from seaweed waste, offering sustainable alternatives to traditional plastics.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Educational programs and materials about marine biotechnology, sustainability, and ocean conservation.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Heart,
      title: "Health Supplements",
      description: "Premium omega-3 and omega-6 supplements extracted from marine sources for optimal health.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative biotech products from the ocean for a sustainable future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="hover-lift border-2 hover:border-primary transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl ${product.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className={`w-8 h-8 ${product.color}`} />
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
