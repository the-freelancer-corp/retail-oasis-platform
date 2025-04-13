
import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AccountLayout from '@/components/account/AccountLayout';
import { useToast } from "@/hooks/use-toast";

// Sample wishlist data (would come from API in real app)
const initialWishlistItems = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "T-Shirts",
    inStock: true
  },
  {
    id: 2,
    name: "Vintage Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Jackets",
    inStock: true
  },
  {
    id: 3,
    name: "Leather Chelsea Boots",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Footwear",
    inStock: false
  }
];

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const { toast } = useToast();

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your wishlist."
    });
  };

  const addToCart = (id: number, name: string) => {
    // In a real app, you would add the item to the cart via an API
    console.log(`Adding item ${id} to cart`);
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`
    });
  };

  return (
    <AccountLayout title="My Wishlist">
      <div className="space-y-6">
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="group bg-background border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
                <div className="p-4">
                  <Link to={`/product/${item.id}`} className="block">
                    <h3 className="font-medium line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
                    <p className="font-medium mt-2">${item.price.toFixed(2)}</p>
                  </Link>
                  <div className="mt-4">
                    <Button
                      variant={item.inStock ? "default" : "outline"}
                      size="sm"
                      className="w-full"
                      disabled={!item.inStock}
                      onClick={() => item.inStock && addToCart(item.id, item.name)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-6">Start adding items to your wishlist to save them for later.</p>
            <Button asChild>
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </AccountLayout>
  );
};

export default WishlistPage;
