import { Shield, CreditCard, Calendar, Users, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Verified Landlords",
    description: "All landlords are background-checked and verified for your safety and peace of mind."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe, encrypted payment processing with automatic receipts and payment tracking."
  },
  {
    icon: Calendar,
    title: "Flexible Lease Terms",
    description: "From monthly to yearly leases. Choose what works best for your lifestyle."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "24/7 customer support and active community of tenants and landlords."
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Rooms in the best neighborhoods, close to universities, work, and amenities."
  },
  {
    icon: Star,
    title: "Quality Guarantee",
    description: "Every room is inspected and rated. Find exactly what you're looking for."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose HiveHavn?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make room hunting simple, safe, and stress-free with features designed for modern living.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;