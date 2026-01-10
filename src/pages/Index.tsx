import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ProductCard, { Product } from "@/components/ProductCard";
import ServicesSection from "@/components/ServicesSection";
import { products } from "@/data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    toast.success(`${product.name} added to cart!`, {
      description: `Quantity: ${quantity}`,
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} />

      <main className="flex-1">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title">All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${product.id * 100}ms` }}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact our team for personalized IT solutions tailored to your business needs.
            </p>
            <button className="bg-card text-foreground hover:bg-secondary transition-colors font-semibold rounded-lg px-8 py-3">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;