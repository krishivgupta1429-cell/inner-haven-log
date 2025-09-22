import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary-soft/20 to-accent/20 pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-wellness-calm rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-wellness-mood rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-soft/50 rounded-full text-sm text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Mental Wellness</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Journey to
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Mental Wellness</span>
              <br />
              Starts Here
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Transform your mental health with intelligent journaling, mood tracking, and personalized insights. 
              Join thousands who have found peace and clarity through mindful reflection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/dashboard">
                <Button variant="hero" size="lg" className="group">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Feel Better</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Mental wellness journey illustration" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-glow"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-wellness-energy rounded-2xl shadow-soft animate-bounce delay-300"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-wellness-stress rounded-full shadow-soft animate-bounce delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;