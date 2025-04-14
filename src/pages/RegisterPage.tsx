
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SignUp } from '@clerk/clerk-react';

const RegisterPage: React.FC = () => {
  return (
    <Layout>
      <div className="container max-w-md mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground">Sign up to get started with StyleHub</p>
        </div>
        <SignUp 
          routing="path"
          path="/register"
          signInUrl="/login"
          afterSignUpUrl="/"
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "shadow-none",
              formButtonPrimary: 
                "bg-primary hover:bg-primary/90 text-primary-foreground",
            }
          }}
        />
      </div>
    </Layout>
  );
}

export default RegisterPage;
