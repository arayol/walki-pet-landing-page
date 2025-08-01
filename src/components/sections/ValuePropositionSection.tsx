import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, DollarSign, TrendingUp, Shield } from "lucide-react";
export const ValuePropositionSection = () => {
  const benefits = [{
    icon: Calendar,
    title: "Organizar passeios",
    subtitle: "com agenda inteligente",
    description: "Sistema automatizado que otimiza horários e maximiza ganhos"
  }, {
    icon: DollarSign,
    title: "Gerenciar clientes",
    subtitle: "e receber pagamentos",
    description: "Tudo integrado em uma só plataforma, sem complicação"
  }, {
    icon: TrendingUp,
    title: "Atrair mais pets",
    subtitle: "sem complicação",
    description: "Marketing automático e perfil profissional otimizado"
  }];
  return <section className="bg-section-yellow py-[93px]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Por que começar sozinho se{" "}
            <span className="text-primary">podemos te ajudar a escalar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que você precisa para:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
           {benefits.map((benefit, index) => <Card key={index} className="p-8 text-center bg-section-yellow">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <h4 className="text-lg font-semibold text-primary mb-4">
                {benefit.subtitle}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>)}
        </div>

        <div className="text-center space-y-8">
          <div className="bg-section-yellow rounded-2xl p-8 max-w-4xl mx-auto border border-border/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-success" />
              <span className="text-xl font-bold text-foreground">
                Experimente 30 dias grátis – sem compromisso!
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Sem cartão de crédito • Cancelamento a qualquer momento
            </p>
             <Button size="lg" variant="default" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
               <a href="#pricing">Ver Planos e Começar Grátis</a>
             </Button>
          </div>
        </div>
      </div>
    </section>;
};