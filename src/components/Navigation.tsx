import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">MindfulSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
              Pricing
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </Link>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Link to="/dashboard">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
                Pricing
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
                About
              </a>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Link to="/dashboard">
                  <Button variant="hero" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;