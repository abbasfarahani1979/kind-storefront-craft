import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About TheNorthNet
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Providing innovative technology solutions for businesses across Canada since our founding.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card rounded-xl p-8 shadow-md">
                <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide businesses with reliable, cutting-edge technology solutions that drive growth and efficiency. We believe in making technology accessible and easy to use for everyone.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-md">
                <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading technology partner for Canadian businesses, known for our exceptional service, innovative solutions, and commitment to customer success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-accent/50">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                "24/7 Technical Support",
                "Canadian-Based Team",
                "Competitive Pricing",
                "Industry Expertise",
                "Fast Response Times",
                "Custom Solutions",
                "Secure Infrastructure",
                "Dedicated Account Managers",
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of IT professionals brings decades of combined experience to help your business succeed. We're passionate about technology and committed to delivering exceptional service.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;