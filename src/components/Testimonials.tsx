import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Graduate Student",
    image: "👩‍🎓",
    rating: 5,
    text: "HiveHavn made finding a room near campus so easy! The verification process gave me confidence, and my landlord has been amazing. Highly recommend!"
  },
  {
    name: "Marcus Rodriguez", 
    role: "Software Engineer",
    image: "👨‍💻",
    rating: 5,
    text: "As someone new to the city, HiveHavn was a lifesaver. Found the perfect room in a great neighborhood within a week. The process was seamless!"
  },
  {
    name: "Emily Johnson",
    role: "Marketing Professional",
    image: "👩‍💼",
    rating: 5,
    text: "The flexible lease terms were exactly what I needed for my short-term project. Great community and excellent customer support throughout."
  },
  {
    name: "David Kim",
    role: "Medical Resident",
    image: "👨‍⚕️",
    rating: 5,
    text: "Secure payments and verified landlords gave me peace of mind. Found a quiet room perfect for studying. Thank you, HiveHavn!"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Tenants Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy tenants who found their perfect room through HiveHavn.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Flexible</div>
              <div className="text-sm">Lease Terms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm">Verified Landlords</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;