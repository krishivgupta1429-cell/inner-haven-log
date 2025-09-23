import Navigation from "@/components/Navigation";
import AuthCard from "@/components/auth/AuthCard";
import SocialButtons from "@/components/auth/SocialButtons";
import SignInForm from "@/components/auth/SignInForm";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const SignInPage = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleCredentials = async ({ email, password }: { email: string; password: string }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    setSuccess(true);
    setTimeout(() => navigate("/dashboard"), 400);
  };

  const handleOAuth = async (provider: "google" | "apple" | "github") => {
    const { error } = await supabase.auth.signInWithOAuth({ provider, options: { redirectTo: window.location.origin + "/dashboard" } });
    if (error) throw error;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-calm/20 via-background to-wellness-balance/20">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-[url('/src/assets/hero-illustration.jpg')] bg-cover bg-center" aria-hidden></div>
            </div>
            <div>
              <AuthCard title="Welcome back" description="Sign in to continue your wellness journey.">
                {success ? (
                  <div className="text-sm text-foreground mb-4">Success! Redirecting to your dashboard…</div>
                ) : null}
                <SocialButtons onProviderClick={handleOAuth} />
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border"></span></div>
                  <div className="relative flex justify-center text-xs"><span className="bg-background px-2 text-muted-foreground">or continue with</span></div>
                </div>
                <SignInForm onSubmit={({ email, password }) => handleCredentials({ email, password })} />
                <p className="mt-4 text-sm text-center text-muted-foreground">
                  New to MindfulSpace? <Link to="/signup" className="underline underline-offset-4">Create an account</Link>
                </p>
              </AuthCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;


