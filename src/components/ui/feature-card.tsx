import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const FeatureCard = ({ icon: Icon, title, description, features }: FeatureCardProps) => {
  return (
    <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="space-y-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
        </div>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};