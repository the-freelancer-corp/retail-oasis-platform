
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

// Mock category data
const categoryData: Record<string, { title: string; description: string }> = {
  all: {
    title: 'All Products',
    description: 'Browse our complete collection of products',
  },
  tops: {
    title: 'Tops',
    description: 'T-shirts, shirts, blouses, and more',
  },
  bottomwear: {
    title: 'Bottom Wear',
    description: 'Jeans, pants, skirts, and shorts',
  },
  footwear: {
    title: 'Footwear',
    description: 'Shoes, boots, sandals, and sneakers',
  },
  accessories: {
    title: 'Accessories',
    description: 'Watches, bags, jewelry, and more',
  },
  layering: {
    title: 'Layering',
    description: 'Jackets, coats, cardigans, and sweaters',
  },
  new: {
    title: 'New Arrivals',
    description: 'Our latest and newest products',
  }
};

// Mock product data
const allProducts = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop',
    category: 'tops'
  },
  {
    id: '2',
    name: 'Slim Fit Denim Jeans',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1626&auto=format&fit=crop',
    category: 'bottomwear'
  },
  {
    id: '3',
    name: 'Leather Sneakers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1528&auto=format&fit=crop',
    category: 'footwear'
  },
  {
    id: '4',
    name: 'Minimalist Watch',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1588&auto=format&fit=crop',
    category: 'accessories'
  },
  {
    id: '5',
    name: 'Oversized Wool Coat',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1548624313-0fb941b50889?q=80&w=1470&auto=format&fit=crop',
    category: 'layering'
  },
  {
    id: '6',
    name: 'Ribbed Knit Sweater',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop',
    category: 'tops'
  },
  {
    id: '7',
    name: 'Leather Crossbody Bag',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1476&auto=format&fit=crop',
    category: 'accessories'
  },
  {
    id: '8',
    name: 'Chunky Ankle Boots',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop',
    category: 'footwear'
  },
  {
    id: '9',
    name: 'Relaxed Fit Chinos',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1587&auto=format&fit=crop',
    category: 'bottomwear'
  },
  {
    id: '10',
    name: 'Casual Button-Up Shirt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1525&auto=format&fit=crop',
    category: 'tops'
  },
  {
    id: '11',
    name: 'Denim Jacket',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1587&auto=format&fit=crop',
    category: 'layering'
  },
  {
    id: '12',
    name: 'Leather Belt',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1553981834-a23298697129?q=80&w=1470&auto=format&fit=crop',
    category: 'accessories'
  }
];

const CategoryPage: React.FC = () => {
  const { slug = 'all' } = useParams<{ slug: string }>();
  const category = categoryData[slug] || categoryData.all;
  
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  
  // Filter products by category (and "new" is a special case)
  const filteredProducts = allProducts.filter(product => {
    if (slug === 'all') return true;
    if (slug === 'new') return ['5', '6', '7', '8'].includes(product.id);
    return product.category === slug;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });
  
  const toggleSize = (size: string) => {
    setSelectedSizes(
      selectedSizes.includes(size)
        ? selectedSizes.filter(s => s !== size)
        : [...selectedSizes, size]
    );
  };
  
  const toggleColor = (color: string) => {
    setSelectedColors(
      selectedColors.includes(color)
        ? selectedColors.filter(c => c !== color)
        : [...selectedColors, color]
    );
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden flex items-center gap-2">
                <Filter size={16} />
                Filter Products
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>
                  Narrow down your product search
                </SheetDescription>
              </SheetHeader>
              
              {/* Mobile Filters Content */}
              <div className="py-4">
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider
                    defaultValue={[0, 200]}
                    max={200}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Size</h3>
                  <div className="space-y-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                      <div key={size} className="flex items-center gap-2">
                        <Checkbox
                          id={`size-${size}`}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => toggleSize(size)}
                        />
                        <label htmlFor={`size-${size}`}>{size}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Color</h3>
                  <div className="space-y-2">
                    {['Black', 'White', 'Blue', 'Red', 'Green'].map(color => (
                      <div key={color} className="flex items-center gap-2">
                        <Checkbox
                          id={`color-${color}`}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={() => toggleColor(color)}
                        />
                        <label htmlFor={`color-${color}`}>{color}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full mt-4">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-3">
            <span className="font-medium">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="new">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Product Count */}
          <div className="text-muted-foreground text-sm">
            {sortedProducts.length} products
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Desktop Sidebar Filters */}
          <div className="hidden md:block">
            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Price Range
                  <ChevronDown size={16} />
                </h3>
                <Slider
                  defaultValue={[0, 200]}
                  max={200}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Size
                  <ChevronDown size={16} />
                </h3>
                <div className="space-y-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <div key={size} className="flex items-center gap-2">
                      <Checkbox
                        id={`desktop-size-${size}`}
                        checked={selectedSizes.includes(size)}
                        onCheckedChange={() => toggleSize(size)}
                      />
                      <label htmlFor={`desktop-size-${size}`}>{size}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 flex items-center justify-between">
                  Color
                  <ChevronDown size={16} />
                </h3>
                <div className="space-y-2">
                  {['Black', 'White', 'Blue', 'Red', 'Green'].map(color => (
                    <div key={color} className="flex items-center gap-2">
                      <Checkbox
                        id={`desktop-color-${color}`}
                        checked={selectedColors.includes(color)}
                        onCheckedChange={() => toggleColor(color)}
                      />
                      <label htmlFor={`desktop-color-${color}`}>{color}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full mt-4">Apply Filters</Button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="md:col-span-3">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-medium mb-2">No products found</h2>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search criteria.
                </p>
              </div>
            ) : (
              <div className="product-grid">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CategoryPage;
