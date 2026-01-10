import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Headphones, MessageCircle, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I contact technical support?",
    answer: "You can reach our technical support team 24/7 via phone, email, or our live chat feature. Our average response time is under 15 minutes.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing options.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all our products. If you're not satisfied, contact us for a full refund.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime from your account dashboard. Your service will remain active until the end of your billing period.",
  },
  {
    question: "Do you provide training for your products?",
    answer: "Yes, we provide comprehensive training resources including video tutorials, documentation, and live webinars for all our products.",
  },
];

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              How can we help?
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Get the support you need with our comprehensive help resources.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
                <p className="text-muted-foreground text-sm mb-4">Available 24/7</p>
                <Button variant="outline" className="w-full">Call Now</Button>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                <p className="text-muted-foreground text-sm mb-4">Quick responses</p>
                <Button variant="outline" className="w-full">Start Chat</Button>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Documentation</h3>
                <p className="text-muted-foreground text-sm mb-4">Self-help guides</p>
                <Button variant="outline" className="w-full">View Docs</Button>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">FAQs</h3>
                <p className="text-muted-foreground text-sm mb-4">Common questions</p>
                <Button variant="outline" className="w-full">Browse FAQs</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto mt-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;