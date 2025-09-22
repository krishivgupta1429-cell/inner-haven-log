import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      
      {/* Footer */}
      <footer className="bg-muted/20 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 MindfulSpace. Built with ❤️ for mental wellness.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Ready to add backend functionality? 
              <span className="text-primary font-medium"> Connect to Supabase</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
