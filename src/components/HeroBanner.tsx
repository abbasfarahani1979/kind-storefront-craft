import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroTech from "@/assets/hero-tech.jpg";
import heroCommunication from "@/assets/hero-communication.jpg";
import heroSecurity from "@/assets/hero-security.jpg";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: heroTech,
    title: "IT Solutions & Support",
    subtitle: "24/7 Technical Support for Your Business",
  },
  {
    image: heroCommunication,
    title: "Communication Services",
    subtitle: "VoIP, SMS, and More for Modern Businesses",
  },
  {
    image: heroSecurity,
    title: "Cybersecurity Solutions",
    subtitle: "Protect Your Digital Assets",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative wave-bg bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative">
          {/* Slides */}
          <div className="flex items-center justify-center min-h-[300px] md:min-h-[400px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="text-center md:text-left md:w-1/2 space-y-4">
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
                    {slide.subtitle}
                  </p>
                  <Button className="btn-primary mt-4 animate-fade-in">
                    Learn More
                  </Button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-h-[200px] md:max-h-[350px] object-contain animate-fade-in"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card shadow-md rounded-full hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card shadow-md rounded-full hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-border"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
