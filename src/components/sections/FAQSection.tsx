import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o período de teste gratuito?",
      answer: "Você tem 30 dias completos para testar todas as funcionalidades da plataforma sem pagar nada. Não é necessário cartão de crédito para começar e você pode cancelar a qualquer momento."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou penalidades. Após o cancelamento, você ainda terá acesso às funcionalidades até o final do período já pago."
    },
    {
      question: "Como funciona o sistema de pagamentos?",
      answer: "A plataforma integra com PIX e cartão de crédito, permitindo que você receba automaticamente pelos serviços prestados. Os pagamentos são processados de forma segura e você recebe relatórios detalhados."
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer: "Não! A Walki Pet foi desenvolvida para ser simples e intuitiva. O setup leva apenas 5 minutos e nossa equipe oferece suporte completo para você começar."
    },
    {
      question: "A plataforma funciona no celular?",
      answer: "Sim! A Walki Pet é totalmente responsiva e funciona perfeitamente em smartphones, tablets e computadores. Você pode gerenciar seus passeios de qualquer lugar."
    },
    {
      question: "Como funciona o marketing automático?",
      answer: "Criamos automaticamente um perfil profissional otimizado para você, integramos com redes sociais e ajudamos a divulgar seus serviços para atrair novos clientes na sua região."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Perguntas{" "}
            <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossa plataforma
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};