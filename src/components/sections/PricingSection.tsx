import { PricingCard } from "@/components/ui/pricing-card";
export const PricingSection = () => {
  const plans = [{
    title: "Gratuito",
    description: "Até 5 clientes ativos ou 30 dias",
    price: "R$ 0",
    period: "/mês",
    features: ["Organizar passeios", "Sistema automatizado suas rottas graninha", "Agenda inteligente", "6 menuitez seus primos", "Notificações automáticas"],
    buttonText: "Ver como Funciona",
    colorScheme: "free" as const
  }, {
    title: "Básico",
    description: "Para dog walkers em crescimento",
    price: "R$ 59",
    period: "/mês",
    features: ["Agendamento Inteligente", "Mantenha histórico com crianciad", "Marketing seus retificada", "Receba automatico", "Histórico de passeios"],
    buttonText: "Começar Prático",
    colorScheme: "basic" as const
  }, {
    title: "Profissional",
    description: "Para automatização completa",
    price: "R$ 59",
    period: "/mês",
    features: ["Até 50 clientes", "Regiões ilimitadas", "Campanha de conquista", "PIX automático", "Cartão integrado"],
    buttonText: "Começar Prático",
    colorScheme: "pro" as const
  }];
  return <section className="py-20 bg-pricing-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 lg:text-5xl">
            Planos que crescem{" "}
            <span className="text-primary">com você</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-50">
            Comece grátis e evolua conforme seu negócio cresce
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => <PricingCard key={index} title={plan.title} description={plan.description} price={plan.price} period={plan.period} features={plan.features} buttonText={plan.buttonText} colorScheme={plan.colorScheme} />)}
        </div>
      </div>
    </section>;
};