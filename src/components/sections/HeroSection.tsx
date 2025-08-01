import { Button } from "@/components/ui/button";
export const HeroSection = () => {
  return <section className="h-[80vh] relative overflow-hidden pt-16" style={{
    backgroundImage: `url('/lovable-uploads/4a2fa95c-1d6a-428b-8cd2-079ec0fd783d.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Overlay para melhor legibilidade */}
      <div className="absolute inset-0 bg-primary/20" />
      
      <div className="container mx-auto px-4 relative z-10 py-[34px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-0">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-700">
                Transforme sua Paixão por Pets em
                
                por Pets em
                <span className="text-walker-orange">Negócio Lucrativo</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Para quem quer transformar o amor por animais em uma carreira organizada, 
                lucrativa e profissional.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
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
    </section>;
};