import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="TheNorthNet" className="h-12 brightness-0 invert" />
            <p className="text-secondary/80 text-sm leading-relaxed">
              Providing innovative technology solutions for businesses and individuals across Canada.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-secondary/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                    className="text-secondary/70 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {["VoxConnect", "VoxSMS", "Ir-Bridge", "Antivirus", "Microsoft 365"].map((product) => (
                <li key={product}>
                  <Link
                    to="/shop"
                    className="text-secondary/70 hover:text-primary transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-secondary/70">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Canada</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary/70">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>+1 (xxx) xxx-xxxx</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary/70">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>info@thenorthnet.ca</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 mt-10 pt-6 text-center text-secondary/60 text-sm">
          <p>&copy; {new Date().getFullYear()} TheNorthNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
