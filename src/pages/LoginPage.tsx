
import React from 'react';
import Layout from '@/components/layout/Layout';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="container max-w-md mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/register"
          afterSignInUrl="/"
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

export default LoginPage;
