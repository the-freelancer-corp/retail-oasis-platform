
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import AdminLayout from '@/components/admin/AdminLayout';

const generalFormSchema = z.object({
  storeName: z.string().min(2, "Store name must be at least 2 characters"),
  storeEmail: z.string().email("Please enter a valid email address"),
  storePhone: z.string().min(10, "Phone number must be at least 10 characters"),
  storeCurrency: z.string().min(1, "Please select a currency"),
  storeAddress: z.string().min(5, "Address must be at least 5 characters"),
  storeDescription: z.string().optional(),
});

const notificationFormSchema = z.object({
  orderConfirmation: z.boolean(),
  orderShipped: z.boolean(),
  orderDelivered: z.boolean(),
  lowStock: z.boolean(),
  newReview: z.boolean(),
  newCustomer: z.boolean(),
});

type GeneralFormValues = z.infer<typeof generalFormSchema>;
type NotificationFormValues = z.infer<typeof notificationFormSchema>;

const SettingsPage = () => {
  const { toast } = useToast();

  const generalForm = useForm<GeneralFormValues>({
    resolver: zodResolver(generalFormSchema),
    defaultValues: {
      storeName: "StyleHub",
      storeEmail: "contact@stylehub.com",
      storePhone: "1234567890",
      storeCurrency: "usd",
      storeAddress: "123 Fashion Street, New York, NY 10001",
      storeDescription: "Premium fashion store offering the latest trends in clothing and accessories.",
    },
  });

  const notificationForm = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues: {
      orderConfirmation: true,
      orderShipped: true,
      orderDelivered: true,
      lowStock: true,
      newReview: false,
      newCustomer: false,
    },
  });

  function onSubmitGeneral(data: GeneralFormValues) {
    console.log("General settings submitted:", data);
    toast({
      title: "Settings updated",
      description: "Your store settings have been updated successfully.",
    });
  }

  function onSubmitNotifications(data: NotificationFormValues) {
    console.log("Notification settings submitted:", data);
    toast({
      title: "Notification settings updated",
      description: "Your notification preferences have been updated successfully.",
    });
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Store Settings</h1>
          <p className="text-muted-foreground">Manage your store settings and preferences</p>
        </div>

        <div className="bg-background rounded-lg border shadow-sm p-6">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="payment">Payment Methods</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="tax">Tax</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Form {...generalForm}>
                <form onSubmit={generalForm.handleSubmit(onSubmitGeneral)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={generalForm.control}
                      name="storeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Store Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Store Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={generalForm.control}
                      name="storeEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Store Email</FormLabel>
                          <FormControl>
                            <Input placeholder="contact@yourstore.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={generalForm.control}
                      name="storePhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Store Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (123) 456-7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={generalForm.control}
                      name="storeCurrency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Currency</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select currency" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="usd">USD ($)</SelectItem>
                              <SelectItem value="eur">EUR (€)</SelectItem>
                              <SelectItem value="gbp">GBP (£)</SelectItem>
                              <SelectItem value="cad">CAD (C$)</SelectItem>
                              <SelectItem value="aud">AUD (A$)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={generalForm.control}
                    name="storeAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Store Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Street Name, City, State, Zip" {...field} />
                        </FormControl>
                        <FormDescription>
                          This address will be used on your invoices and for shipping calculations.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={generalForm.control}
                    name="storeDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Store Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter a brief description of your store"
                            className="h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          This description will appear in your store's metadata and help with SEO.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Save General Settings</Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Form {...notificationForm}>
                <form onSubmit={notificationForm.handleSubmit(onSubmitNotifications)} className="space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={notificationForm.control}
                      name="orderConfirmation"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>Order Confirmation</FormLabel>
                            <FormDescription>
                              Notify when a new order is placed
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="orderShipped"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>Order Shipped</FormLabel>
                            <FormDescription>
                              Notify when an order is shipped
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="orderDelivered"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>Order Delivered</FormLabel>
                            <FormDescription>
                              Notify when an order is delivered
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="lowStock"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>Low Stock Alert</FormLabel>
                            <FormDescription>
                              Notify when product inventory is running low
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="newReview"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>New Review</FormLabel>
                            <FormDescription>
                              Notify when a new product review is submitted
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={notificationForm.control}
                      name="newCustomer"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>New Customer</FormLabel>
                            <FormDescription>
                              Notify when a new customer registers
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit">Save Notification Settings</Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="payment">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Payment Settings</h3>
                <p className="text-muted-foreground mb-6">Configure your payment gateways and methods.</p>
                <Button>Configure Payment Methods</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Shipping Settings</h3>
                <p className="text-muted-foreground mb-6">Configure your shipping zones, methods, and rates.</p>
                <Button>Configure Shipping</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="tax">
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">Tax Settings</h3>
                <p className="text-muted-foreground mb-6">Configure your tax rates and regions.</p>
                <Button>Configure Taxes</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SettingsPage;
