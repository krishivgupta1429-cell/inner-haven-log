import Navigation from "@/components/Navigation";
import AuthCard from "@/components/auth/AuthCard";
import SocialButtons from "@/components/auth/SocialButtons";
import SignUpForm from "@/components/auth/SignUpForm";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleCredentials = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { name } } });
    if (error) throw error;
    setSuccess(true);
    // If email confirmations are enabled, you may want to show a confirmation message instead
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
              <AuthCard title="Create your account" description="Join MindfulSpace to track your wellness with care.">
                {success ? (
                  <div className="text-sm text-foreground mb-4">Account created! Redirecting to your dashboard…</div>
                ) : null}
                <SocialButtons onProviderClick={handleOAuth} />
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border"></span></div>
                  <div className="relative flex justify-center text-xs"><span className="bg-background px-2 text-muted-foreground">or sign up with email</span></div>
                </div>
                <SignUpForm onSubmit={({ name, email, password }) => handleCredentials({ name, email, password })} />
                <p className="mt-4 text-sm text-center text-muted-foreground">
                  Already have an account? <Link to="/signin" className="underline underline-offset-4">Sign in</Link>
                </p>
              </AuthCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;


