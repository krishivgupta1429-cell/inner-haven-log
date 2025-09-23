import Navigation from "@/components/Navigation";
import AuthCard from "@/components/auth/AuthCard";
import PasswordInput from "@/components/auth/PasswordInput";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      setLoading(true);
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setDone(true);
      setTimeout(() => navigate("/signin"), 800);
    } catch (err: any) {
      setError(err?.message || "Unable to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-calm/20 via-background to-wellness-balance/20">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <AuthCard title="Reset password" description="Choose a new password.">
              {done ? (
                <div className="text-sm text-foreground">Password updated. Redirecting to sign in…</div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">New password</Label>
                    <PasswordInput id="password" placeholder="Create a strong password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  {error ? <div className="text-sm text-destructive">{error}</div> : null}
                  <Button type="submit" variant="hero" className="w-full" disabled={loading} aria-busy={loading}>
                    {loading ? "Updating…" : "Update password"}
                  </Button>
                </form>
              )}
            </AuthCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPasswordPage;


