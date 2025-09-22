import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with your wellness journey",
      features: [
        "Daily journaling",
        "Basic mood tracking",
        "Simple progress charts",
        "Community support"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Unlock advanced insights and AI-powered features",
      features: [
        "Everything in Free",
        "AI wellness companion",
        "Weekly intelligent summaries",
        "Advanced analytics & trends",
        "Custom mood categories",
        "Data export & backup",
        "Priority support"
      ],
      buttonText: "Start Premium Trial",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Lifetime",
      price: "$199",
      period: "one-time",
      description: "Complete wellness toolkit with lifetime access",
      features: [
        "Everything in Premium",
        "Lifetime updates",
        "Premium integrations",
        "Personal wellness coach",
        "Custom data insights",
        "API access",
        "White-label options"
      ],
      buttonText: "Get Lifetime Access",
      buttonVariant: "wellness" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Wellness Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready for advanced AI insights and personalized guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-medium transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-gradient-card' 
                  : 'bg-gradient-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-hero text-white border-0 px-4 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-4">
                  {plan.name === "Premium" && <Crown className="w-6 h-6 text-primary mr-2" />}
                  <CardTitle className="text-xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                </div>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.buttonVariant}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <span>✓ Secure payments</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Data privacy guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;