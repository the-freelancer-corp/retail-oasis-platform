
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';

// Mock data for featured products
const featuredProducts = [
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
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/category/all" className="text-primary hover:underline text-sm font-medium">
            View All
          </Link>
        </div>
        
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
