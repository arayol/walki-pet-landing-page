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
  colorScheme: 'free' | 'basic' | 'pro';
}

export const PricingCard = ({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  colorScheme
}: PricingCardProps) => {
  const colorClasses = {
    free: {
      bg: 'bg-pricing-free',
      button: 'bg-pricing-free-accent hover:bg-pricing-free-accent/90',
      text: 'text-pricing-free-accent'
    },
    basic: {
      bg: 'bg-pricing-basic',
      button: 'bg-pricing-basic-accent hover:bg-pricing-basic-accent/90',
      text: 'text-pricing-basic-accent'
    },
    pro: {
      bg: 'bg-pricing-pro',
      button: 'bg-pricing-pro-accent hover:bg-pricing-pro-accent/90',
      text: 'text-pricing-pro-accent'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <Card className={`${colors.bg} p-8 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      <div className="text-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-foreground">{price}</span>
            <span className="text-muted-foreground text-sm">{period}</span>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className={`w-full text-white font-semibold ${colors.button}`}
        >
          {buttonText}
        </Button>
        
        <div className="space-y-3 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};