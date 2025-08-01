import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section 
      className="min-h-screen relative overflow-hidden pt-16"
      style={{
        backgroundImage: `url('/lovable-uploads/c5990aad-9f8c-4934-8957-0cc37033f5d9.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para melhor legibilidade */}
      <div className="absolute inset-0 bg-primary/20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                plataforma para{" "}
                <br />
                <span className="text-walker-orange">DogWalker</span>
              </h1>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                Para quem quer transformar o amor por animais em uma carreira organizada, 
                lucrativa e profissional.
              </p>
              
              <p className="text-base text-white/80 leading-relaxed max-w-lg">
                Com ferramentas inteligentes de agendamento, gestão de clientes, 
                pagamentos e marketing, você ganha tempo, mais clientes e 
                previsibilidade financeira.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
              >
                CRIAR CONTA GRÁTIS
              </Button>
            </div>
          </div>
          
          {/* Illustration area - the background image shows the dog walker */}
          <div className="relative lg:block hidden">
            {/* Content is handled by background image */}
          </div>
        </div>
      </div>
    </section>
  );
};