
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Layout from '@/components/layout/Layout';

const FAQPage = () => {
  const faqs = {
    general: [
      {
        question: "What is elocin?",
        answer: "elocin is an online fashion retailer offering a wide range of clothing, accessories, and footwear for men and women. We focus on providing high-quality, trendy items at accessible prices."
      },
      {
        question: "How do I create an account?",
        answer: "Creating an account is easy! Click on the user icon in the top navigation bar and select 'Register'. Fill in your details and follow the instructions. Having an account allows you to track orders, save favorites, and checkout faster."
      },
      {
        question: "Do you have physical stores?",
        answer: "Currently, elocin is an online-only retailer, but we're planning to open physical locations in major cities in the near future. Follow our social media for announcements!"
      },
      {
        question: "How can I contact customer service?",
        answer: "You can reach our customer service team through our Contact page, by email at support@elocin.com, or by phone at +1 (555) 123-4567 during business hours (Monday-Friday, 9AM-6PM EST)."
      }
    ],
    orders: [
      {
        question: "How do I place an order?",
        answer: "Browse our products, add items to your cart, and proceed to checkout. You can checkout as a guest or with your account. Follow the steps to provide shipping and payment information, and confirm your order."
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "You can modify or cancel your order within 1 hour of placing it. After that, please contact customer service as soon as possible, and we'll do our best to accommodate your request before shipping."
      },
      {
        question: "How do I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can also view your order status by logging into your account and visiting the Orders section."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are securely processed and encrypted."
      }
    ],
    shipping: [
      {
        question: "How much does shipping cost?",
        answer: "We offer free standard shipping on orders over $50. For orders under $50, standard shipping costs $5.99. Express shipping options are available at checkout for an additional fee."
      },
      {
        question: "How long will it take to receive my order?",
        answer: "Standard shipping typically takes 3-5 business days. Express shipping takes 1-2 business days. International shipping varies by location and can take 7-14 business days."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. Import duties and taxes may apply and are the responsibility of the customer."
      },
      {
        question: "My order is delayed. What should I do?",
        answer: "If your order is taking longer than expected, please check the tracking information first. If there's no update for 48 hours, please contact our customer service team with your order number."
      }
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most items in unused condition with original packaging and tags. Some exceptions apply, such as underwear, swimwear, and sale items marked as final sale."
      },
      {
        question: "How do I return an item?",
        answer: "Log into your account, go to your orders, and select 'Return Item'. Follow the instructions to generate a return label. Pack the item(s) securely with all original packaging and attach the return label."
      },
      {
        question: "How long does the refund process take?",
        answer: "Once we receive your return, it takes 1-2 business days to process. The refund will be issued to your original payment method and may take an additional 3-5 business days to appear in your account."
      },
      {
        question: "Can I exchange an item instead of returning it?",
        answer: "Yes, you can request an exchange for a different size or color of the same item during the return process. If the item is available, we'll ship the exchange once we receive your return."
      }
    ],
    product: [
      {
        question: "How do I find my size?",
        answer: "Each product page includes a size guide with detailed measurements. If you're between sizes, we generally recommend sizing up. If you're still unsure, please contact customer service for assistance."
      },
      {
        question: "Are your product images accurate to the actual color?",
        answer: "We make every effort to display colors accurately, but colors may vary depending on your screen settings. We recommend checking the detailed product description for color information."
      },
      {
        question: "What materials do you use in your clothing?",
        answer: "We use a variety of materials depending on the product. Each item's description includes detailed fabric information. We strive to use sustainable and high-quality materials whenever possible."
      },
      {
        question: "Do you offer plus sizes?",
        answer: "Yes! We believe fashion should be inclusive. Most of our collections are available in sizes XS to 3XL. We're continuously expanding our size range to be more inclusive."
      }
    ]
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about elocin, orders, shipping, and more.
            </p>
          </div>

          <div className="bg-background rounded-lg border shadow-sm p-6">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="flex mb-8 overflow-auto whitespace-nowrap pb-1 md:whitespace-normal">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="orders">Orders & Payment</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="returns">Returns & Refunds</TabsTrigger>
                <TabsTrigger value="product">Product Information</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.general.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="orders">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.orders.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="shipping">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.shipping.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="returns">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.returns.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="product">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.product.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center py-6">
            <h2 className="text-xl font-semibold mb-4">Didn't find what you're looking for?</h2>
            <p className="mb-6 text-muted-foreground">
              Our customer service team is here to help you with any other questions you may have.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
