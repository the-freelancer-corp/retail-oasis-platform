
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-4">About StyleHub</h1>
          <p className="text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're dedicated to bringing you quality fashion that combines style, comfort, and sustainability.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden bg-cover bg-center"
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')"}}>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Founded in 2020, StyleHub began as a small boutique in New York City with a simple mission: 
                to provide high-quality, sustainable fashion that doesn't compromise on style.
              </p>
              <p className="mb-4">
                Our founder, Emma Chen, noticed a gap in the market for affordable yet sustainable fashion options.
                Drawing from her experience in fashion design and sustainable manufacturing, she created StyleHub 
                to bridge this gap and make conscious fashion accessible to everyone.
              </p>
              <p>
                What started as a small local store has grown into a global brand, but our core values remain the same.
                We believe in ethical production, quality materials, and designs that stand the test of time.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden bg-cover bg-center aspect-square"
                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')"}}>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to reducing our environmental footprint through eco-friendly materials, 
                responsible manufacturing, and minimizing waste.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Quality & Comfort</h3>
              <p className="text-muted-foreground">
                We believe great fashion should feel as good as it looks. We carefully select materials 
                that offer comfort without compromising on durability.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"></path>
                  <circle cx="12" cy="8" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Ethical Production</h3>
              <p className="text-muted-foreground">
                We work with factories that provide fair wages and safe working conditions, 
                ensuring our products are made ethically and responsibly.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 bg-cover bg-center"
                   style={{backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')"}}>
              </div>
              <h3 className="font-semibold text-lg">Emma Chen</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 bg-cover bg-center"
                   style={{backgroundImage: "url('https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')"}}>
              </div>
              <h3 className="font-semibold text-lg">David Kim</h3>
              <p className="text-muted-foreground">Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 bg-cover bg-center"
                   style={{backgroundImage: "url('https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')"}}>
              </div>
              <h3 className="font-semibold text-lg">Sarah Johnson</h3>
              <p className="text-muted-foreground">Head of Design</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 bg-cover bg-center"
                   style={{backgroundImage: "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80')"}}>
              </div>
              <h3 className="font-semibold text-lg">Michael Torres</h3>
              <p className="text-muted-foreground">Operations Manager</p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary/5 p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join the StyleHub Community</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Discover the latest styles and be part of our journey towards sustainable fashion.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild>
              <Link to="/category/all">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
