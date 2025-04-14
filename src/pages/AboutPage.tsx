
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from '@/components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About StyleHub</h1>
            <p className="text-lg text-muted-foreground">
              Your premier destination for fashionable clothing and accessories.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p>
              Founded in 2020, StyleHub started with a simple mission: to provide fashion-forward individuals with high-quality, 
              trendy clothing at accessible prices. What began as a small online boutique has grown into a thriving e-commerce 
              platform serving customers worldwide.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="StyleHub team" 
                className="rounded-lg shadow-md w-full h-auto"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-medium">From Passion to Profession</h3>
                <p>
                  Our founder's passion for fashion and commitment to quality craftsmanship has shaped every aspect of our 
                  business. We've grown from a team of 3 to over 50 dedicated fashion enthusiasts who work tirelessly to 
                  bring you the latest trends and timeless classics.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-2">Quality</h3>
                <p>We source the finest materials and partner with ethical manufacturers to ensure every piece meets our high standards.</p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                <p>We're committed to reducing our environmental impact through eco-friendly practices and sustainable sourcing.</p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-2">Inclusion</h3>
                <p>We celebrate diversity and design clothing that makes everyone feel confident and stylish, regardless of size or style preference.</p>
              </div>
            </div>
          </div>

          <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Alex Johnson", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { name: "Jamie Smith", role: "Design Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { name: "Morgan Lee", role: "Head of Marketing", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { name: "Taylor Wong", role: "Customer Experience", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square mb-3 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-lg text-center mt-8">
            <h2 className="text-2xl font-semibold mb-3">Join Our Journey</h2>
            <p className="mb-6">
              We're always looking for passionate individuals to join our growing team. Check out our current openings!
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline">View Careers</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
