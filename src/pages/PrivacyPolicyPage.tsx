
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Layout from '@/components/layout/Layout';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: April 10, 2025
            </p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p>
                Welcome to elocin ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at www.elocin.com, including any other media form, media channel, mobile website, or mobile application related or connected to elocin (collectively, the "Site").
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us. For example, we collect information when you create an account, update your profile, place an order, participate in contests or promotions, contact customer service, or otherwise communicate with us. This information may include:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Personal information such as name, email address, mailing address, phone number, and payment information</li>
                <li>Account information such as username, password, and preferences</li>
                <li>Order information such as items purchased, shipping address, and order history</li>
                <li>Communications you send to us, such as customer service inquiries and product reviews</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6">Automatically Collected Information</h3>
              <p>
                When you access or use our Site, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Log information, such as your IP address, browser type, operating system, referring URLs, and pages viewed</li>
                <li>Device information, including device identifiers and settings</li>
                <li>Location information, with your consent</li>
                <li>Cookies and similar technologies to collect information about your browsing behavior</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Process transactions and send related information, including confirmations, receipts, and shipping updates</li>
                <li>Create and maintain your account</li>
                <li>Provide customer service and respond to your inquiries</li>
                <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                <li>Personalize your experience on our Site and present products and offers tailored to you</li>
                <li>Improve our Site and develop new products, services, and features</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with our legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Sharing of Information</h2>
              <p>
                We may share information about you as follows:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                <li>With third parties with whom you choose to let us share information, such as social media sites</li>
                <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process</li>
                <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of elocin or others</li>
                <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
              </ul>
              <p>
                We may also share aggregated or de-identified information, which cannot reasonably be used to identify you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Your Choices</h2>
              <p>
                You have several choices regarding the information we collect and how it is used:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li><strong>Account Information</strong>: You may update, correct, or delete your account information at any time by logging into your account or emailing us at privacy@elocin.com.</li>
                <li><strong>Cookies</strong>: Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies.</li>
                <li><strong>Promotional Communications</strong>: You may opt out of receiving promotional emails from elocin by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</li>
                <li><strong>Mobile Push Notifications</strong>: With your consent, we may send promotional and non-promotional push notifications to your mobile device. You can deactivate these messages at any time by changing the notification settings on your mobile device.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Children's Privacy</h2>
              <p>
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Site. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us at privacy@elocin.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Site home page or by email. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Site and this privacy policy to check for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-medium">elocin</p>
                <p>123 Fashion Street</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p className="mt-2">Email: privacy@elocin.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>

          <div className="bg-secondary p-6 rounded-lg text-center mt-10">
            <h2 className="text-xl font-medium mb-3">Have Questions?</h2>
            <p className="mb-6">
              If you have any questions or concerns about our privacy policy or data practices, please don't hesitate to contact us.
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

export default PrivacyPolicyPage;
