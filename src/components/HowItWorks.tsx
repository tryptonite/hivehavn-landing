import { Search, MessageSquare, Key, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "1",
    title: "Browse & Filter",
    description: "Search through hundreds of verified rooms with advanced filters for location, price, and amenities."
  },
  {
    icon: MessageSquare,
    step: "2", 
    title: "Connect & Chat",
    description: "Message landlords directly, ask questions, and schedule virtual or in-person tours."
  },
  {
    icon: Key,
    step: "3",
    title: "Secure & Move",
    description: "Complete secure payment, sign digital lease, and get your keys. It's that simple!"
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Enjoy Your Stay",
    description: "Settle into your new home with ongoing support and community resources."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How HiveHavn Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finding your perfect room is easier than ever. Follow these simple steps to get started.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-warm group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;