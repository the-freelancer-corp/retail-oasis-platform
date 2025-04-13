
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Category {
  name: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  {
    name: 'Tops',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1527&auto=format&fit=crop',
    slug: 'tops'
  },
  {
    name: 'Bottom Wear',
    image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1587&auto=format&fit=crop',
    slug: 'bottomwear'
  },
  {
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1518894781321-630e638d0742?q=80&w=1470&auto=format&fit=crop',
    slug: 'footwear'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1582142886933-41c830375d9c?q=80&w=1470&auto=format&fit=crop',
    slug: 'accessories'
  },
  {
    name: 'Layering',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1470&auto=format&fit=crop',
    slug: 'layering'
  }
];

const CategoryLinks: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8 text-center">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.slug}`} 
              key={category.slug}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-300",
                  "group-hover:scale-105"
                )}
              />
              <div className={cn(
                "absolute inset-0 flex items-center justify-center",
                "bg-black/40 group-hover:bg-black/60 transition-colors"
              )}>
                <h3 className="text-white font-semibold text-lg md:text-xl">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryLinks;
