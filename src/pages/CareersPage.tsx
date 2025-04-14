
import React from 'react';
import { ArrowRight, Briefcase, UserPlus, Globe, Lightbulb, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from '@/components/layout/Layout';

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Senior Fashion Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      remote: false,
      description: "We're looking for a creative, experienced fashion designer to join our design team. You'll be responsible for designing new clothing collections, researching fashion trends, and collaborating with the production team."
    },
    {
      title: "E-commerce Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: false,
      description: "Lead our e-commerce marketing strategies to drive traffic and increase conversions. You'll develop and implement digital marketing campaigns, analyze performance metrics, and optimize our online presence."
    },
    {
      title: "Frontend Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      remote: true,
      description: "Join our technology team to build and maintain our e-commerce platform. You'll work with React, TypeScript, and modern frontend tools to create seamless shopping experiences for our customers."
    },
    {
      title: "Customer Experience Representative",
      department: "Customer Service",
      location: "Miami, FL",
      type: "Full-time",
      remote: false,
      description: "Provide exceptional customer support through various channels, including email, chat, and phone. You'll help customers with their orders, returns, and product inquiries."
    },
    {
      title: "Visual Merchandiser",
      department: "Retail",
      location: "Los Angeles, CA",
      type: "Full-time",
      remote: false,
      description: "Create compelling visual displays for our physical stores that bring our brand identity to life and enhance the customer shopping experience."
    },
    {
      title: "Supply Chain Analyst",
      department: "Operations",
      location: "Chicago, IL",
      type: "Full-time",
      remote: true,
      description: "Analyze and optimize our supply chain processes to improve efficiency and reduce costs. You'll work with data to identify opportunities and implement solutions."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Comprehensive Healthcare",
      description: "Medical, dental, and vision insurance for you and your dependents, with company contributions to HSA accounts."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Generous PTO",
      description: "Flexible vacation policy, paid holidays, and sick leave to ensure you can rest and recharge."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Professional Development",
      description: "Annual learning stipend, industry conference attendance, and regular workshops and training opportunities."
    },
    {
      icon: <UserPlus className="h-8 w-8 text-primary" />,
      title: "Family Benefits",
      description: "Parental leave for all parents, childcare assistance, and flexible work arrangements for family needs."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Remote Work Options",
      description: "Flexible work-from-home policy, with stipends for home office setup and internet costs."
    }
  ];

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build your career at StyleHub, where fashion meets innovation. We're always looking for passionate individuals to help us redefine the future of retail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="StyleHub team meeting"
                className="rounded-lg shadow-md w-full h-auto aspect-video object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-semibold">Our Culture</h2>
              <p>
                At StyleHub, we believe that fashion is more than just clothing—it's a form of self-expression that empowers individuals to be their authentic selves. Our team is united by a shared passion for creativity, innovation, and excellence.
              </p>
              <p>
                We foster an inclusive environment where diverse perspectives are valued and everyone has the opportunity to make an impact. From our designers to our developers, each team member plays a crucial role in our mission to provide exceptional fashion experiences.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-2">Innovation</h3>
                <p>We challenge the status quo and embrace new ideas, technologies, and approaches to continually improve our products and services.</p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-2">Inclusivity</h3>
                <p>We celebrate diversity and create fashion that makes everyone feel confident and represented, regardless of size, age, or style preference.</p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="text-xl font-medium mb-2">Sustainability</h3>
                <p>We're committed to reducing our environmental impact through eco-friendly practices, sustainable materials, and responsible production.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Benefits & Perks</h2>
            <p>
              We believe in taking care of our team members and providing them with the resources they need to thrive both professionally and personally.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex space-x-4">
                  <div>{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Open Positions</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex mb-6 overflow-auto whitespace-nowrap pb-1 md:whitespace-normal">
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="space-y-4">
                  {jobOpenings.map((job, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                          <h3 className="text-xl font-medium">{job.title}</h3>
                          <p className="text-muted-foreground mt-1">{job.department} • {job.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{job.type}</Badge>
                          {job.remote && <Badge variant="secondary">Remote</Badge>}
                        </div>
                      </div>
                      <p className="mt-4">{job.description}</p>
                      <div className="mt-6">
                        <Button>Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="design">
                <div className="space-y-4">
                  {jobOpenings
                    .filter(job => job.department === "Design")
                    .map((job, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-xl font-medium">{job.title}</h3>
                            <p className="text-muted-foreground mt-1">{job.department} • {job.location}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{job.type}</Badge>
                            {job.remote && <Badge variant="secondary">Remote</Badge>}
                          </div>
                        </div>
                        <p className="mt-4">{job.description}</p>
                        <div className="mt-6">
                          <Button>Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="marketing">
                <div className="space-y-4">
                  {jobOpenings
                    .filter(job => job.department === "Marketing")
                    .map((job, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-xl font-medium">{job.title}</h3>
                            <p className="text-muted-foreground mt-1">{job.department} • {job.location}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{job.type}</Badge>
                            {job.remote && <Badge variant="secondary">Remote</Badge>}
                          </div>
                        </div>
                        <p className="mt-4">{job.description}</p>
                        <div className="mt-6">
                          <Button>Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="technology">
                <div className="space-y-4">
                  {jobOpenings
                    .filter(job => job.department === "Technology")
                    .map((job, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-xl font-medium">{job.title}</h3>
                            <p className="text-muted-foreground mt-1">{job.department} • {job.location}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{job.type}</Badge>
                            {job.remote && <Badge variant="secondary">Remote</Badge>}
                          </div>
                        </div>
                        <p className="mt-4">{job.description}</p>
                        <div className="mt-6">
                          <Button>Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="operations">
                <div className="space-y-4">
                  {jobOpenings
                    .filter(job => job.department === "Operations")
                    .map((job, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                          <div>
                            <h3 className="text-xl font-medium">{job.title}</h3>
                            <p className="text-muted-foreground mt-1">{job.department} • {job.location}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{job.type}</Badge>
                            {job.remote && <Badge variant="secondary">Remote</Badge>}
                          </div>
                        </div>
                        <p className="mt-4">{job.description}</p>
                        <div className="mt-6">
                          <Button>Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-secondary p-6 rounded-lg text-center mt-10">
              <h2 className="text-xl font-medium mb-3">Don't See a Perfect Match?</h2>
              <p className="mb-6">
                We're always looking for talented individuals to join our team. Send us your resume, and we'll keep it on file for future opportunities.
              </p>
              <Button variant="outline">Send Your Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CareersPage;
