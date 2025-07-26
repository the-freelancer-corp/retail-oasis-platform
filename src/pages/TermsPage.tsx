
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '@/components/layout/Layout';

const TermsPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: April 10, 2025
            </p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p>
                Welcome to elocin. These terms and conditions ("Terms") govern your access to and use of the elocin website, mobile application, and services (collectively, the "Service"). Please read these Terms carefully before using the Service.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Eligibility</h2>
              <p>
                The Service is intended solely for users who are 18 years of age or older. By using the Service, you represent and warrant that you are 18 years of age or older and that you have the right, authority, and capacity to enter into these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Account Registration</h2>
              <p>
                To access certain features of the Service, you may be required to register for an account. When you register, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify elocin immediately of any unauthorized use of your account.
              </p>
              <p>
                elocin reserves the right to suspend or terminate your account if any information provided during the registration process or thereafter proves to be inaccurate, not current, or incomplete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Products and Orders</h2>
              <p>
                elocin offers various products for sale through the Service. We reserve the right to modify, discontinue, or otherwise change any product at any time without notice.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Pricing and Availability</h3>
              <p>
                All prices are shown in US dollars and do not include taxes or shipping costs, which will be added at checkout. elocin reserves the right to change prices at any time without notice. Despite our efforts, a small number of the items in our catalog may be mispriced or shown as available when they are not. If an item's correct price is higher than our stated price, we will, at our discretion, either contact you for instructions before shipping or cancel your order and notify you of such cancellation.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Order Acceptance</h3>
              <p>
                Your receipt of an electronic or other form of order confirmation does not signify our acceptance of your order, nor does it constitute confirmation of our offer to sell. elocin reserves the right at any time after receipt of your order to accept or decline your order for any reason.
              </p>
              
              <h3 className="text-xl font-medium mt-6">Payment</h3>
              <p>
                We accept various payment methods as indicated at checkout. By providing a payment method, you represent and warrant that you are authorized to use the designated payment method and that you authorize us to charge your payment method for the total amount of your order (including any taxes and shipping costs).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Shipping and Delivery</h2>
              <p>
                elocin ships to the addresses you provide during checkout. Shipping costs and estimated delivery times are provided at checkout. elocin is not responsible for any delays, loss, or damage during shipping.
              </p>
              <p>
                For international orders, you may be subject to import duties and taxes, which are collected once the package reaches the destination country. elocin has no control over these charges and cannot predict their amount. Please contact your local customs office for further information before placing your order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Returns and Refunds</h2>
              <p>
                elocin offers returns and refunds in accordance with our Return Policy, which is incorporated into these Terms by reference. For more information on our return and refund procedures, please see our Return Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Intellectual Property Rights</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of elocin and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of elocin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">User Conduct</h2>
              <p>
                You agree that you will not:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Use the Service in any manner that could disable, overburden, damage, or impair the Service</li>
                <li>Use any robot, spider, or other automatic device, process, or means to access the Service for any purpose</li>
                <li>Use any manual process to monitor or copy any of the material on the Service</li>
                <li>Use any device, software, or routine that interferes with the proper working of the Service</li>
                <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful</li>
                <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service</li>
                <li>Use the Service for any purpose in violation of any applicable law or regulation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ELOCIN EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL ELOCIN, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless elocin, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Governing Law</h2>
              <p>
                These Terms and your use of the Service shall be governed by and construed in accordance with the laws of the State of New York, without giving effect to any choice or conflict of law provision or rule.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Changes to Terms</h2>
              <p>
                elocin reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-medium">elocin Legal Department</p>
                <p>123 Fashion Street</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p className="mt-2">Email: legal@elocin.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>

          <div className="bg-secondary p-6 rounded-lg text-center mt-10">
            <h2 className="text-xl font-medium mb-3">Questions About Our Terms?</h2>
            <p className="mb-6">
              If you have any questions or concerns about our terms of service, please don't hesitate to contact us.
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

export default TermsPage;
