
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';

// Mock data for new arrivals
const newArrivals = [
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
  }
];

const NewArrivals: React.FC = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <Link to="/category/new" className="text-primary hover:underline text-sm font-medium">
            View All
          </Link>
        </div>
        
        <div className="product-grid">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
