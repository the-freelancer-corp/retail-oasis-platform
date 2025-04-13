
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import NewArrivals from '@/components/home/NewArrivals';
import CategoryLinks from '@/components/home/CategoryLinks';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSlider />
      <FeaturedProducts />
      <CategoryLinks />
      <NewArrivals />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6 max-w-md mx-auto">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="py-2 px-4 rounded-md flex-grow text-foreground"
            />
            <button className="bg-background text-primary py-2 px-6 rounded-md hover:bg-secondary transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
