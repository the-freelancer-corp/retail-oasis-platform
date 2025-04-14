
import React from 'react';
import { ArrowRight, Truck, Clock, Globe, Package, Wallet, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from '@/components/layout/Layout';

const ShippingPage = () => {
  const shippingMethods = [
    {
      name: "Standard Shipping",
      time: "3-5 business days",
      price: "Free on orders over $50, otherwise $5.99",
      icon: <Truck className="h-10 w-10 text-primary" />
    },
    {
      name: "Express Shipping",
      time: "1-2 business days",
      price: "$12.99",
      icon: <Clock className="h-10 w-10 text-primary" />
    },
    {
      name: "International Shipping",
      time: "7-14 business days",
      price: "Starting at $19.99",
      icon: <Globe className="h-10 w-10 text-primary" />
    }
  ];

  const returnsInfo = [
    {
      question: "How do I return an item?",
      answer: "To return an item, log into your account, go to your orders, and select 'Return Item'. Follow the instructions to generate a return label. Pack the item(s) securely with all original packaging and attach the return label."
    },
    {
      question: "What is the return window?",
      answer: "We offer a 30-day return policy for most items in unused condition with original packaging and tags. The return window begins on the date you receive your order."
    },
    {
      question: "Are there any items that cannot be returned?",
      answer: "Some items cannot be returned due to hygiene concerns or other reasons. These include underwear, swimwear, and sale items marked as final sale. Please check the product description for any return restrictions."
    },
    {
      question: "How long does it take to process a refund?",
      answer: "Once we receive your return, it takes 1-2 business days to process. The refund will be issued to your original payment method and may take an additional 3-5 business days to appear in your account."
    },
    {
      question: "Can I exchange an item instead of returning it?",
      answer: "Yes, you can request an exchange for a different size or color of the same item during the return process. If the item is available, we'll ship the exchange once we receive your return."
    }
  ];

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Shipping & Returns</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our shipping methods and return policy
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Shipping Methods</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {shippingMethods.map((method, index) => (
                <div key={index} className="bg-background border rounded-lg p-6 flex flex-col">
                  <div className="mb-4">{method.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{method.name}</h3>
                  <div className="text-muted-foreground flex-1">
                    <p className="mb-1"><Clock className="inline h-4 w-4 mr-2" />{method.time}</p>
                    <p><Wallet className="inline h-4 w-4 mr-2" />{method.price}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-muted p-6 rounded-lg flex gap-4 items-start">
              <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Important Note</h3>
                <p className="text-muted-foreground">
                  Shipping times are estimates and may be affected by weather conditions, holidays, or other unforeseen
                  circumstances. For the most accurate delivery estimate, please refer to the tracking information provided
                  after your order ships.
                </p>
              </div>
            </div>
          </section>
          
          <section className="pt-6 space-y-6">
            <h2 className="text-2xl font-semibold">Order Tracking</h2>
            <p>
              Once your order ships, you will receive a confirmation email with tracking information. You can also
              track your order by logging into your account and viewing your order history.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <Package className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Track Your Order</h3>
                <p className="text-muted-foreground mb-4">
                  Already have a tracking number? Enter it below to get real-time updates on your package.
                </p>
                <Button asChild>
                  <Link to="/account/orders">View Your Orders <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              
              <div className="border rounded-lg p-6">
                <AlertCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">Shipping Issues?</h3>
                <p className="text-muted-foreground mb-4">
                  If your order is taking longer than expected or if you have any other concerns, please contact our
                  customer service team.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Support <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </section>
          
          <section className="pt-6 space-y-6">
            <h2 className="text-2xl font-semibold">Returns & Exchanges</h2>
            <p>
              We want you to be completely satisfied with your purchase. If for any reason you are not, we offer a
              hassle-free return and exchange policy.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {returnsInfo.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="bg-secondary p-6 rounded-lg text-center mt-6">
              <h3 className="text-xl font-medium mb-3">Ready to Return an Item?</h3>
              <p className="mb-6">
                Log into your account to initiate a return or exchange. For more information, check our
                detailed return policy.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button asChild>
                  <Link to="/account/orders">Start a Return <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline">View Full Return Policy</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPage;
