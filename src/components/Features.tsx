import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Brain, 
  BarChart3, 
  MessageCircle, 
  Shield, 
  Zap,
  Heart,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Journaling",
      description: "Express your thoughts with our intuitive journaling interface. Track patterns and insights over time.",
      color: "wellness-calm"
    },
    {
      icon: Heart,
      title: "Mood Tracking",
      description: "Monitor your emotional wellbeing with simple emoji sliders and visual progress tracking.",
      color: "wellness-mood"
    },
    {
      icon: TrendingUp,
      title: "Wellness Analytics",
      description: "Understand your mental health patterns with beautiful charts and actionable insights.",
      color: "wellness-energy"
    },
    {
      icon: MessageCircle,
      title: "AI Companion",
      description: "Chat with your supportive AI companion for guidance, encouragement, and personalized advice.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Weekly Summaries",
      description: "Receive intelligent weekly reports highlighting your progress and areas for growth.",
      color: "wellness-stress"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your mental health data is encrypted and secure. Only you have access to your personal insights.",
      color: "success"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need for 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Mental Wellness</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed by mental health experts to support your journey to better wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;