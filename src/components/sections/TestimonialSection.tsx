import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-gradient-card border-border/50 shadow-xl">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <Quote className="w-16 h-16 text-primary opacity-20" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                "Ajudou a organizar e crescer meu negócio"
              </h2>
              
              <blockquote className="text-xl text-muted-foreground leading-relaxed">
                "Antes usava planilhas e WhatsApp para tudo. Com a Walki Pet, automatizei 
                pagamentos, organizei minha agenda e consegui atender mais clientes. 
                Walki Pet transformou meu negócio."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-walker-orange text-walker-orange" />
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RS</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground text-lg">Roberto Silva</div>
                  <div className="text-muted-foreground">Dog Walker Profissional - São Paulo</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};