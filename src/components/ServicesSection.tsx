import { Monitor, Shield, Headphones, Globe, Smartphone, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "IT Support",
    description: "Professional technical support for businesses of all sizes.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business from digital threats and attacks.",
  },
  {
    icon: Headphones,
    title: "VoIP Solutions",
    description: "Modern communication systems for your business needs.",
  },
  {
    icon: Globe,
    title: "Web Services",
    description: "Website development and hosting solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Mobile app development and management.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Secure cloud storage and computing solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We offer a wide range of technology services to help your business thrive in the digital age.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              to="/services"
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
