import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does HiveHavn verify landlords?",
    answer: "We conduct thorough background checks including identity verification, property ownership confirmation, and previous tenant reviews. All landlords must provide valid documentation and pass our safety screening process."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and bank transfers. All payments are processed securely through our encrypted payment system with automatic receipts and payment tracking."
  },
  {
    question: "Can I tour a room before committing?",
    answer: "Absolutely! We encourage virtual and in-person tours. You can schedule tours directly with landlords through our platform. Many rooms also have virtual tour options available."
  },
  {
    question: "What if I need to break my lease early?",
    answer: "Lease terms vary by landlord, but many offer flexible options. We help facilitate communication between tenants and landlords to find mutually beneficial solutions for early lease termination."
  },
  {
    question: "Is there a security deposit required?",
    answer: "Security deposit requirements vary by property and landlord. The deposit amount and terms are clearly stated in each listing. All deposits are held securely and returned according to lease terms."
  },
  {
    question: "How quickly can I move in?",
    answer: "Move-in times vary, but many rooms are available immediately or within a few days. Once you complete the application and payment process, move-in can often happen within 24-48 hours."
  },
  {
    question: "What support is available after I move in?",
    answer: "We provide ongoing support through our 24/7 customer service team. We also maintain an active community forum and offer resources for tenant rights and property maintenance issues."
  },
  {
    question: "Are utilities included in the rent?",
    answer: "Utility inclusion varies by listing. Each room's details clearly specify what's included (electricity, water, internet, etc.). You can filter search results based on utility inclusion preferences."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about renting through HiveHavn.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card rounded-xl border-0 shadow-card px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;