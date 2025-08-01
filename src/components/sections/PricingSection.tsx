import { PricingCard } from "@/components/ui/pricing-card";

export const PricingSection = () => {
  const plans = [
    {
      title: "Gratuito",
      description: "Ajudar primeiras grainhas com um uniguao",
      price: "R$ 29",
      period: "/mês",
      features: [
        "Organizar passeios",
        "Sistema automatizado de passeios",
        "Agenda inteligente",
        "6 menuitez seus primos",
        "Notificações automáticas"
      ],
      buttonText: "Ver como Funciona",
      buttonVariant: "outline" as const
    },
    {
      title: "Básico",
      description: "Mantenha histeria de seu crianciad recobrancas",
      price: "R$ 59",
      period: "/mês",
      features: [
        "Agendamento Inteligente",
        "Mantenha histórico com crianciad",
        "Marketing seus retificada",
        "Receba automatico",
        "Histórico de passeios"
      ],
      buttonText: "Reologia e aggravas",
      isPopular: true,
      buttonVariant: "default" as const
    },
    {
      title: "Profissional",
      description: "Para expansão e alteração do crescimento",
      price: "R$ 59",
      period: "/mês",
      features: [
        "Até 50 clientes",
        "Regiões ilimitadas",
        "Campanha de conquista",
        "PIX automático",
        "Cartão integrado"
      ],
      buttonText: "Comprar Prático",
      buttonVariant: "secondary" as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Planos que crescem{" "}
            <span className="text-primary">com você</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comece grátis e evolua conforme seu negócio cresce
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              buttonText={plan.buttonText}
              isPopular={plan.isPopular}
              buttonVariant={plan.buttonVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};