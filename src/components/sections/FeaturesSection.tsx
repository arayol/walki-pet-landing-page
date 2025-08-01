import { FeatureCard } from "@/components/ui/feature-card";
import { 
  Calendar, 
  Users, 
  CreditCard, 
  Megaphone, 
  BarChart3, 
  Clock 
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado que otimiza sua agenda e maximiza seus ganhos",
      features: [
        "Agenda sincronizada",
        "Notificações automáticas", 
        "Remarcação fácil"
      ]
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Mantenha histórico completo e construa relacionamentos duradouros",
      features: [
        "Perfis detalhados",
        "Histórico de passeios",
        "Notas personalizadas"
      ]
    },
    {
      icon: CreditCard,
      title: "Pagamentos Seguros",
      description: "Receba automaticamente sem se preocupar com cobranças",
      features: [
        "PIX automático",
        "Cartão integrado",
        "Relatórios financeiros"
      ]
    },
    {
      icon: Megaphone,
      title: "Marketing Automático",
      description: "Atraia novos clientes com nossa tecnologia de marketing",
      features: [
        "Perfil público otimizado",
        "Integração redes sociais",
        "Avaliações gerenciadas"
      ]
    },
    {
      icon: BarChart3,
      title: "Relatórios e Analytics",
      description: "Dados que ajudam você a tomar decisões inteligentes",
      features: [
        "Dashboard completo",
        "Métricas de performance",
        "Insights de crescimento"
      ]
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas e foque no que importa",
      features: [
        "Automação de processos",
        "Templates prontos",
        "Integração WhatsApp"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tudo que você precisa para{" "}
            <span className="text-primary">profissionalizar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma solução completa que cuida de todos os aspectos do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};