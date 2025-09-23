import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import PasswordInput from "./PasswordInput";

interface SignInFormProps {
  onSubmit?: (data: { email: string; password: string; remember: boolean }) => Promise<void> | void;
}

const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

const SignInForm = ({ onSubmit }: SignInFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isFormValid) return;
    try {
      setLoading(true);
      await onSubmit?.({ email, password, remember });
    } catch (err: any) {
      setError(err?.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={email.length > 0 && !isEmailValid}
          aria-describedby="email-hint" required />
        <p id="email-hint" className="text-xs text-muted-foreground">Use a valid email address</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} aria-invalid={password.length > 0 && !isPasswordValid} required />
        <p className="text-xs text-muted-foreground">At least 8 characters</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" checked={remember} onCheckedChange={(v) => setRemember(Boolean(v))} />
          <Label htmlFor="remember" className="text-sm text-muted-foreground">Remember me</Label>
        </div>
        <a href="/forgot-password" className="text-sm underline underline-offset-4">Forgot password?</a>
      </div>
      {error ? <div role="alert" className="text-sm text-destructive">{error}</div> : null}
      <Button type="submit" variant="hero" className="w-full" disabled={!isFormValid || loading} aria-busy={loading}>
        {loading ? "Signing in…" : "Sign in"}
      </Button>
    </form>
  );
};

export default SignInForm;


