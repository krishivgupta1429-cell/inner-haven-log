import { Button } from "@/components/ui/button";
import { Apple, Github } from "lucide-react";

interface SocialButtonsProps {
  onProviderClick?: (provider: "google" | "apple" | "github") => void;
}

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.951 32.91 29.418 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.153 7.957 3.043l5.657-5.657C34.675 6.053 29.6 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.651-.389-3.917z"/>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.399 16.018 18.822 12 24 12c3.059 0 5.842 1.153 7.957 3.043l5.657-5.657C34.675 6.053 29.6 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 44c5.356 0 10.273-2.053 13.971-5.404l-6.457-5.457C29.418 36 24 36 24 36c-5.393 0-9.936 3.107-12.29 7.593l-6.52-5.02C8.492 41.599 15.678 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.313 3.827-4.639 6.687-8.61 7.139l6.457 5.457C30.836 42.731 36 39.333 38.74 34.457c1.347-2.34 2.301-5.06 2.301-8.457 0-1.341-.138-2.651-.389-3.917z"/>
  </svg>
);

const SocialButtons = ({ onProviderClick }: SocialButtonsProps) => {
  return (
    <div className="space-y-2">
      <Button type="button" variant="outline" className="w-full" onClick={() => onProviderClick?.("google")}
        aria-label="Continue with Google">
        <span className="mr-2 inline-flex"><GoogleIcon /></span>
        Continue with Google
      </Button>
      <Button type="button" variant="outline" className="w-full" onClick={() => onProviderClick?.("apple")} aria-label="Continue with Apple">
        <Apple className="w-4 h-4 mr-2" /> Continue with Apple
      </Button>
      <Button type="button" variant="outline" className="w-full" onClick={() => onProviderClick?.("github")} aria-label="Continue with GitHub">
        <Github className="w-4 h-4 mr-2" /> Continue with GitHub
      </Button>
    </div>
  );
};

export default SocialButtons;


