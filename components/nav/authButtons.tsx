"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AuthButtons() {
  const router = useRouter();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [signUpLoading, setSignUpLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setLoginLoading(true);
    // add a 500ms delay to show loading state (good ux flow)
    setTimeout(() => {
      router.push("/login");
      setLoginLoading(false);
    }, 500);
  };

  const handleSignUp = () => {
    setSignUpLoading(true);
    // add a 500ms delay to show loading state (good ux flow)
    setTimeout(() => {
      router.push("/sign-up");
      setSignUpLoading(false);
    }, 500);
  };

  return (
    <div className="flex items-center space-x-8">
      <Button
        className="bg-transparent text-white border border-gray-200 rounded-lg cursor-pointer hover:bg-transparent hover:shadow-sm hover:shadow-white transition-all duration-300"
        onClick={handleLogin}
      >
        {loginLoading ? (
          <Loader2 className="w-6 h-6 mx-2 animate-spin" />
        ) : (
          "Log In"
        )}
      </Button>
      <Button
        className="bg-transparent text-white border border-gray-200 rounded-lg cursor-pointer hover:bg-transparent hover:shadow-sm hover:shadow-white transition-all duration-300"
        onClick={handleSignUp}
      >
        {signUpLoading ? (
          <Loader2 className="w-6 h-6 mx-2 animate-spin" />
        ) : (
          "Sign Up"
        )}
      </Button>
    </div>
  );
}
export default AuthButtons;
