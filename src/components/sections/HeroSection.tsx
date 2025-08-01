import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-walker-orange rounded-full blur-xl" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary-light rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforme sua{" "}
                <span className="text-walker-orange">Paixão por Pets</span>
                <br />
                em Negócio Lucrativo
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                A plataforma completa que conecta dog walkers profissionais com tutores que 
                buscam o melhor cuidado para seus pets. Gerencie, cresça e fature mais com nossa tecnologia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Começar Agora - Grátis
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <PlayCircle className="w-5 h-5" />
                Ver Como Funciona
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-walker-orange" />
                <span>Setup em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Teste Grátis por 30 Dias</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="/lovable-uploads/cc225b88-35b4-42ec-8c94-874dd4570b77.png" 
                alt="Dog walker profissional passeando com múltiplos cachorros de diferentes raças"
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-bounce">
                <div className="text-white font-bold text-lg">+50%</div>
                <div className="text-white/80 text-sm">Mais Clientes</div>
              </div>
              
              <div className="absolute bottom-20 left-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-pulse">
                <div className="text-white font-bold text-lg">4.9★</div>
                <div className="text-white/80 text-sm">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};