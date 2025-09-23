import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const AuthCard = ({ title, description, children }: AuthCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto bg-background/90 backdrop-blur border-border shadow-soft">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
        {description ? (
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent>
        {children}
        <p className="mt-6 text-xs text-muted-foreground text-center">
          By continuing, you agree to our {" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground">Terms</a> and {" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground">Privacy Policy</a>.
        </p>
      </CardContent>
    </Card>
  );
};

export default AuthCard;


