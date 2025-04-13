
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Mock product data
const products = {
  '1': {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586363052424-347fe9784df5?q=80&w=1471&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1374&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1527&auto=format&fit=crop'
    ],
    description: 'A classic white t-shirt made from 100% organic cotton. Features a crew neck and short sleeves. Perfect for everyday wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    details: [
      'Made from 100% organic cotton',
      'Regular fit',
      'Crew neck',
      'Short sleeves',
      'Machine washable'
    ],
    category: 'tops'
  },
  // Additional products would be defined here
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const product = products[id as keyof typeof products];
  
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p>We couldn't find the product you're looking for.</p>
      </div>
    );
  }
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const addToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Please select a size',
        variant: 'destructive',
      });
      return;
    }
    
    if (!selectedColor) {
      toast({
        title: 'Please select a color',
        variant: 'destructive',
      });
      return;
    }
    
    console.log('Adding to cart:', {
      product,
      quantity,
      selectedSize,
      selectedColor,
    });
    
    toast({
      title: 'Added to cart',
      description: `${quantity} x ${product.name} (${selectedSize}, ${selectedColor})`,
    });
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    
    toast({
      title: isWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
      description: product.name,
    });
  };
  
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="product-image-gallery">
          <div className="thumbnail-column">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          <div className="main-image-container">
            <img 
              src={product.images[activeImage]} 
              alt={product.name}
              className="main-image rounded-md"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    px-4 py-2 border rounded-md
                    ${selectedSize === size 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-border hover:border-primary'}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Color</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`
                    px-4 py-2 border rounded-md
                    ${selectedColor === color 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-border hover:border-primary'}
                  `}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <button 
                onClick={decreaseQuantity}
                className="p-2 border border-r-0 rounded-l-md"
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </button>
              
              <div className="px-4 py-2 border-y text-center w-16">
                {quantity}
              </div>
              
              <button 
                onClick={increaseQuantity}
                className="p-2 border border-l-0 rounded-r-md"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button onClick={addToCart} className="flex-1">
              Add to Cart
            </Button>
            
            <Button 
              variant="outline" 
              className="p-2"
              onClick={toggleWishlist}
            >
              <Heart 
                size={20} 
                fill={isWishlisted ? "currentColor" : "none"} 
                className={isWishlisted ? "text-red-500" : ""}
              />
            </Button>
            
            <Button variant="outline" className="p-2">
              <Share2 size={20} />
            </Button>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs defaultValue="details" className="mt-8">
            <TabsList className="w-full grid grid-cols-3 mb-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                {product.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="shipping">
              <p>Free shipping on all orders over $50. Delivery typically takes 3-5 business days.</p>
              <p className="mt-2">For international shipping options, please check our shipping policy page.</p>
            </TabsContent>
            
            <TabsContent value="reviews">
              <p className="text-center text-muted-foreground py-6">No reviews yet. Be the first to review this product!</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
