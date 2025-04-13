
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
import { Input } from "@/components/ui/input";
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

// FAQ Data
const faqCategories = [
  {
    id: "orders",
    label: "Orders & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days depending on the destination and customs clearance."
      },
      {
        question: "How do I track my order?",
        answer: "Once your order has been shipped, you will receive an email with a tracking number and link. You can also track your order by logging into your account and viewing your order history."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to many countries worldwide. Shipping costs and delivery times vary by location. You can view available shipping options during checkout."
      },
      {
        question: "Can I change or cancel my order?",
        answer: "Orders can be changed or canceled within 1 hour of placing them. After that time, orders are processed and cannot be modified. Please contact our customer support immediately if you need to make changes."
      },
      {
        question: "Is there a minimum order requirement?",
        answer: "No, there is no minimum order requirement. However, orders under $50 will incur a shipping fee of $5.99 for domestic shipping."
      }
    ]
  },
  {
    id: "returns",
    label: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of receipt. Items must be unworn, unwashed, and with all original tags attached. Certain items like intimates and face masks are final sale for hygiene reasons."
      },
      {
        question: "How do I initiate a return?",
        answer: "To initiate a return, log in to your account, go to your order history, select the order you want to return, and follow the return instructions. You will receive a prepaid return label via email."
      },
      {
        question: "How long does it take to process a return?",
        answer: "Returns typically take 5-7 business days to process after we receive the item. Refunds are issued to the original payment method."
      },
      {
        question: "Can I exchange an item instead of returning it?",
        answer: "Yes, exchanges are available for size and color variations of the same item. To request an exchange, follow the same process as returns but select 'Exchange' instead of 'Return'."
      },
      {
        question: "Do I have to pay for return shipping?",
        answer: "Return shipping is free for exchanges and for returns due to our error. For other returns, a $5.99 return shipping fee will be deducted from your refund."
      }
    ]
  },
  {
    id: "products",
    label: "Products & Sizing",
    questions: [
      {
        question: "How do I find my size?",
        answer: "We provide detailed size guides for each product category. You can find size charts on individual product pages. If you're between sizes, we generally recommend sizing up."
      },
      {
        question: "Are your products sustainable?",
        answer: "We are committed to sustainability and use eco-friendly materials whenever possible. Look for our 'Eco-Friendly' tag on products made from organic, recycled, or sustainably sourced materials."
      },
      {
        question: "How should I care for my items?",
        answer: "Care instructions are provided on the product page and on the care label of each item. Generally, we recommend washing in cold water and air drying to extend the life of your garments."
      },
      {
        question: "Do you offer plus sizes?",
        answer: "Yes, we offer an inclusive range of sizes from XS to 3XL for most of our styles. We're constantly expanding our size range to be more inclusive."
      },
      {
        question: "Are your products true to size?",
        answer: "Our products generally fit true to size, but certain styles may fit differently. We recommend checking the specific sizing notes on each product page and reading customer reviews for fit information."
      }
    ]
  },
  {
    id: "account",
    label: "Account & Orders",
    questions: [
      {
        question: "How do I create an account?",
        answer: "You can create an account by clicking on the 'Account' icon in the navigation menu and selecting 'Register'. You'll need to provide your email address and create a password."
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer: "Click on 'Account', then 'Login', and select 'Forgot Password'. Enter the email address associated with your account, and we'll send you instructions to reset your password."
      },
      {
        question: "Can I place an order without creating an account?",
        answer: "Yes, we offer guest checkout for customers who prefer not to create an account. However, creating an account allows you to track orders, save favorites, and enjoy a faster checkout experience."
      },
      {
        question: "How can I check the status of my order?",
        answer: "You can check your order status by logging into your account and viewing your order history. If you checked out as a guest, you can use the order tracking link sent to your email."
      },
      {
        question: "How do I update my account information?",
        answer: "Log into your account, navigate to 'Account Settings', and you can update your personal information, addresses, and payment methods."
      }
    ]
  },
  {
    id: "payment",
    label: "Payment & Promotions",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. You can also use StyleHub gift cards as payment."
      },
      {
        question: "Is it safe to enter my credit card information on your website?",
        answer: "Yes, our website uses SSL encryption to protect your personal information. We do not store your full credit card details on our servers."
      },
      {
        question: "Do you offer discounts for students or military personnel?",
        answer: "Yes, we offer a 10% discount for students and 15% for active military and veterans. To receive these discounts, please verify your status through our verification partner at checkout."
      },
      {
        question: "How do I apply a promo code?",
        answer: "You can enter your promo code in the designated field during checkout. Please note that only one promo code can be applied per order, and some restrictions may apply."
      },
      {
        question: "Do you price match?",
        answer: "We do not currently offer price matching. However, if an item you purchased goes on sale within 7 days of your purchase, contact customer service, and we may be able to adjust the price."
      }
    ]
  }
];

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState("orders");
  
  const allQuestions = faqCategories.flatMap(category => category.questions);
  
  const filteredQuestions = searchQuery
    ? allQuestions.filter(
        q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqCategories.find(cat => cat.id === activeTab)?.questions || [];

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find answers to common questions about our products, ordering, shipping, and more.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
          <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
        
        {/* FAQ Tabs and Content */}
        {searchQuery ? (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-medium mb-4">Search Results</h2>
            {filteredQuestions.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredQuestions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                No results found for "{searchQuery}". Try a different search term or browse our categories.
              </p>
            )}
            <Button 
              variant="ghost" 
              className="mt-4"
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="orders" onValueChange={setActiveTab} className="max-w-3xl mx-auto">
            <TabsList className="mb-8 flex flex-wrap h-auto justify-center gap-2">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        )}
        
        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            We're here to help! Reach out to our customer support team.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
