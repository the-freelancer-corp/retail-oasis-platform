
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from '@/components/layout/Layout';
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
    toast({
      title: "Message sent",
      description: "Thank you for contacting us! We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a question or feedback? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border rounded-lg text-center shadow-sm">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-2">Phone</h3>
            <p className="text-muted-foreground mb-2">Mon-Fri from 8am to 5pm</p>
            <a href="tel:+18001234567" className="text-primary font-medium">+1 (800) 123-4567</a>
          </div>
          
          <div className="p-6 border rounded-lg text-center shadow-sm">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-2">Email</h3>
            <p className="text-muted-foreground mb-2">We'll respond as soon as possible</p>
            <a href="mailto:support@stylehub.com" className="text-primary font-medium">support@stylehub.com</a>
          </div>
          
          <div className="p-6 border rounded-lg text-center shadow-sm">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-2">Office</h3>
            <p className="text-muted-foreground mb-2">Come visit our store</p>
            <address className="not-italic text-primary font-medium">
              123 Fashion St<br />
              New York, NY 10001
            </address>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="order">Order Status</SelectItem>
                          <SelectItem value="return">Returns & Exchanges</SelectItem>
                          <SelectItem value="product">Product Information</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please type your message here..."
                          className="h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="aspect-square rounded-lg overflow-hidden mb-6">
              {/* Replace with an actual map embed in a real application */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Store Hours</h3>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <p>Monday - Friday: 10AM - 8PM</p>
                  <p>Saturday: 10AM - 6PM</p>
                  <p>Sunday: 12PM - 5PM</p>
                </div>
              </div>
              
              <h3 className="text-lg font-medium pt-2">Customer Support</h3>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MessageSquare className="h-5 w-5 mt-0.5" />
                <div>
                  <p>Available 24/7 via email</p>
                  <p>Phone support: Mon-Fri, 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
