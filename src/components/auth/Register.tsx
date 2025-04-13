
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import OtpVerification from './OtpVerification';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegisterFormValues | null>(null);
  
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });
  
  function onSubmit(data: RegisterFormValues) {
    // Store registration data for after OTP verification
    setRegistrationData(data);
    
    // Show OTP verification
    toast({
      title: "OTP Sent",
      description: `A verification code has been sent to ${data.phone}`,
    });
    
    setShowOtpVerification(true);
  }
  
  const handleOtpVerificationSuccess = () => {
    // Here you would complete the registration process
    // using the stored registration data
    if (!registrationData) return;
    
    // Simulate successful registration after OTP verification
    console.log('Registration successful with OTP verification:', registrationData);
    
    toast({
      title: 'Registration Successful',
      description: 'Your account has been created!',
    });
    
    // Redirect to login page
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };
  
  const handleResendOtp = () => {
    if (!registrationData?.phone) return;
    
    toast({
      title: "OTP Resent",
      description: `A new verification code has been sent to ${registrationData.phone}`,
    });
  };
  
  const handleCancelOtp = () => {
    setShowOtpVerification(false);
  };
  
  if (showOtpVerification && registrationData) {
    return (
      <div className="container max-w-md mx-auto py-12">
        <OtpVerification
          phoneNumber={registrationData.phone}
          onVerifySuccess={handleOtpVerificationSuccess}
          onResendOtp={handleResendOtp}
          onCancel={handleCancelOtp}
        />
      </div>
    );
  }
  
  return (
    <div className="container max-w-md mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-muted-foreground">Sign up to get started with StyleHub</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                  <Input type="email" placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="1234567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full mt-6">
            Create Account
          </Button>
          
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account?</span>{' '}
            <Link to="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Register;
