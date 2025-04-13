
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };
  
  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="overflow-hidden rounded-md aspect-square bg-secondary mb-3">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <button 
          onClick={toggleWishlist}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full",
            "bg-white/80 hover:bg-white transition-colors",
            isWishlisted && "text-red-500"
          )}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
        
        <h3 className="font-medium text-sm mb-1">{product.name}</h3>
        <p className="font-semibold">${product.price.toFixed(2)}</p>
        
        <div className="mt-3">
          <Button 
            className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart functionality would go here
              console.log('Added to cart:', product.id);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
