import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Support", path: "/support" },
];

interface HeaderProps {
  cartCount?: number;
}

const Header = ({ cartCount = 0 }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="NorthAutomation" className="h-10 md:h-12" />
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <Link to="/login">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="gradient-header">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center gap-8 py-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-200 font-medium ${
                    location.pathname === link.path ? "text-primary-foreground font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t animate-slide-in">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 nav-link ${
                    location.pathname === link.path ? "nav-link-active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
