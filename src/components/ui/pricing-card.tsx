import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: "default" | "secondary" | "outline";
}

export const PricingCard = ({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  isPopular = false,
  buttonVariant = "default"
}: PricingCardProps) => {
  return (
    <Card className={`relative p-8 ${isPopular ? 'border-accent shadow-lg scale-105' : 'border-border/50'} transition-all duration-300 hover:shadow-lg bg-gradient-card`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
            Mais Popular
          </div>
        </div>
      )}
      
      <div className="text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-foreground">{price}</span>
            <span className="text-muted-foreground">{period}</span>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="w-full" 
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
        
        <div className="space-y-4 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};