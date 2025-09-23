import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PasswordInput from "./PasswordInput";

interface SignUpFormProps {
  onSubmit?: (data: { name: string; email: string; password: string }) => Promise<void> | void;
}

const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

const getPasswordScore = (pwd: string) => {
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score; // 0..5
};

const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isEmailValid = emailRegex.test(email);
  const isNameValid = name.trim().length >= 2;
  const passwordScore = useMemo(() => getPasswordScore(password), [password]);
  const isPasswordValid = passwordScore >= 3; // good enough baseline
  const isFormValid = isEmailValid && isNameValid && isPasswordValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isFormValid) return;
    try {
      setLoading(true);
      await onSubmit?.({ name, email, password });
    } catch (err: any) {
      setError(err?.message || "Unable to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={name.length > 0 && !isNameValid} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={email.length > 0 && !isEmailValid} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput id="password" placeholder="Create a strong password" value={password} onChange={(e) => setPassword(e.target.value)} aria-invalid={password.length > 0 && !isPasswordValid} required />
        <div className="h-2 w-full bg-muted rounded overflow-hidden" aria-hidden>
          <div className={`h-full transition-smooth ${passwordScore <= 1 ? 'bg-destructive w-1/5' : passwordScore === 2 ? 'bg-orange-500 w-2/5' : passwordScore === 3 ? 'bg-yellow-500 w-3/5' : passwordScore === 4 ? 'bg-lime-500 w-4/5' : 'bg-green-600 w-full'}`}></div>
        </div>
        <p className="text-xs text-muted-foreground">Use at least 8 characters with a mix of letters, numbers, and symbols.</p>
      </div>
      {error ? <div role="alert" className="text-sm text-destructive">{error}</div> : null}
      <Button type="submit" variant="hero" className="w-full" disabled={!isFormValid || loading} aria-busy={loading}>
        {loading ? "Creating account…" : "Create account"}
      </Button>
    </form>
  );
};

export default SignUpForm;


