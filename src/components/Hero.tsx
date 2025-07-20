import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Find Your Perfect 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Room</span> Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with verified landlords, secure payments, and flexible lease terms. 
              Your ideal living space is just a click away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Search className="mr-2 h-5 w-5" />
                Find Your Room Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                List Your Property
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span>Flexible Lease Terms</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span>Verified Landlords</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="Modern, comfortable bedroom perfect for young professionals" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card rounded-xl p-4 shadow-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-sm font-semibold text-foreground">💰 From $500/month</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-sm font-semibold text-foreground">✅ Verified & Safe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;