
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";

interface OtpVerificationProps {
  phoneNumber: string;
  onVerifySuccess: () => void;
  onResendOtp: () => void;
  onCancel: () => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  phoneNumber,
  onVerifySuccess,
  onResendOtp,
  onCancel,
}) => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const handleVerify = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // For demo purposes, we'll consider any 6-digit OTP as valid
    // In a real implementation, you'd verify with a backend or service like Clerk
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "OTP Verified",
        description: "Your phone number has been verified successfully!",
      });
      onVerifySuccess();
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Verify Your Phone Number</CardTitle>
        <CardDescription>
          We've sent a verification code to {phoneNumber}. 
          Enter the 6-digit code below to verify your phone number.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        
        <p className="text-sm text-muted-foreground mt-4">
          Didn't receive code? {" "}
          <button 
            onClick={onResendOtp} 
            className="text-primary hover:underline"
            type="button"
          >
            Resend OTP
          </button>
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Button 
          variant="outline" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleVerify} 
          disabled={otp.length !== 6 || isVerifying}
        >
          {isVerifying ? "Verifying..." : "Verify OTP"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OtpVerification;
