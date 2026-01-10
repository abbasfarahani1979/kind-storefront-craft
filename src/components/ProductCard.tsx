import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  onSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, quantity: number) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart?.(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary/30 p-4 flex items-center justify-center overflow-hidden">
        {product.onSale && <span className="badge-sale">Sale!</span>}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground text-lg hover:text-primary transition-colors cursor-pointer">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.originalPrice ? (
            <>
              <span className="price-original">${product.originalPrice.toFixed(2)}</span>
              <span className="price-sale">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="price-regular">${product.price.toFixed(2)}</span>
          )}
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <Button className="btn-cart flex-1" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
