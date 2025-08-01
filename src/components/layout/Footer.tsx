export const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white py-16">
      {/* Decorative circles pattern */}
      <div className="absolute top-0 left-0 right-0 h-16 -mt-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        <div className="grid grid-cols-12 gap-2 h-full opacity-20">
          {Array.from({ length: 96 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 bg-white rounded-full"
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
                <img src="/lovable-uploads/d5969dc8-9ba1-4e75-9858-fe10deda03de.png" alt="Walki Pet" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold">Walki Pet</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A plataforma que transforma dog walkers em empresários de sucesso.
            </p>
          </div>

          {/* Produto */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Produto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Integrações
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Walki Pet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};