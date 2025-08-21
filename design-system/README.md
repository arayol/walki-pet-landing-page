# 🐕 Sistema de Design PetWalker

Este é o sistema de design completo para o projeto PetWalker, inspirado nas cores e elementos visuais de dog walkers.

## 📁 Como usar

1. **Copie o arquivo `index.css`** para `src/index.css`
2. **Copie o arquivo `tailwind.config.ts`** para a raiz do projeto
3. **Instale as dependências** necessárias se ainda não estiverem instaladas

## 🎨 Paleta de Cores

### Cores Primárias
- **Primary**: `hsl(259 47% 35%)` - Roxo do dog walker
- **Primary Light**: `hsl(259 35% 55%)` - Versão mais clara
- **Primary Glow**: `hsl(259 60% 70%)` - Para efeitos de brilho

### Cores Secundárias  
- **Secondary**: `hsl(33 85% 60%)` - Laranja do dog walker
- **Accent**: `hsl(190 85% 50%)` - Azul vibrante

### Cores Temáticas
- **Walker Blue**: `hsl(200 85% 45%)`
- **Walker Orange**: `hsl(33 85% 60%)`
- **Walker Purple**: `hsl(259 60% 70%)`
- **Dog Brown**: `hsl(25 45% 55%)`
- **Grass Green**: `hsl(120 40% 45%)`
- **Sky Blue**: `hsl(190 85% 50%)`

## 🌈 Gradientes

### Gradientes Principais
```css
--gradient-primary: linear-gradient(135deg, hsl(259 47% 35%), hsl(259 60% 70%));
--gradient-secondary: linear-gradient(135deg, hsl(33 85% 60%), hsl(33 100% 75%));
--gradient-hero: linear-gradient(135deg, hsl(259 60% 70%), hsl(280 50% 80%));
```

### Como usar no Tailwind
```jsx
<div className="bg-gradient-primary">
<div className="bg-gradient-secondary">
<div className="bg-gradient-hero">
```

## 📝 Tipografia

### Classes Utilitárias
```jsx
<h1 className="hero-text">Título Hero</h1>
<h2 className="section-title">Título de Seção</h2>
<p className="section-subtitle">Subtítulo de Seção</p>
```

### Gradientes de Texto
```jsx
<h1 className="text-gradient-primary">Texto com gradiente primário</h1>
<h1 className="text-gradient-secondary">Texto com gradiente secundário</h1>
```

## 🎭 Componentes Utilitários

### Botões
```jsx
<button className="btn-primary">Botão Primário</button>
<button className="btn-secondary">Botão Secundário</button>
```

### Cards
```jsx
<div className="card-elevated">
  Card com elevação e hover
</div>
```

### Containers
```jsx
<section className="section-container">
  Container padrão de seção
</section>
```

## ✨ Efeitos e Animações

### Sombras Especiais
```jsx
<div className="shadow-primary">Sombra primária</div>
<div className="shadow-glow">Sombra com brilho</div>
```

### Transições
```jsx
<div className="transition-smooth hover:-translate-y-1">
  Transição suave com elevação
</div>
```

### Animações
```jsx
<div className="animate-fade-in">Fade in</div>
<div className="animate-fade-in-up">Fade in de baixo</div>
<div className="animate-slide-in-right">Slide da direita</div>
<div className="animate-bounce-gentle">Bounce suave</div>
<div className="animate-glow-pulse">Pulso de brilho</div>
```

## 🏠 Backgrounds de Seções

### Classes para diferentes seções
```jsx
<section className="bg-section-primary">Seção primária</section>
<section className="bg-section-secondary">Seção secundária</section>
<section className="bg-section-accent">Seção accent</section>
<section className="bg-section-neutral">Seção neutra</section>
```

## 💰 Pricing Cards

### Cores específicas para pricing
```jsx
<div className="bg-pricing-free border-pricing-free-accent">
  Plano Gratuito
</div>
<div className="bg-pricing-basic border-pricing-basic-accent">
  Plano Básico
</div>
<div className="bg-pricing-pro border-pricing-pro-accent">
  Plano Pro
</div>
```

## 🌙 Modo Escuro

O sistema suporta modo escuro automaticamente. Todas as cores têm suas versões dark mode definidas.

```jsx
<html className="dark">
  <!-- Automaticamente aplica o tema escuro -->
</html>
```

## 📱 Responsividade

O sistema usa breakpoints padrão:
- **sm**: 640px
- **md**: 768px  
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1400px

## ⚡ Variáveis CSS Customizadas

Todas as cores, gradientes e efeitos são definidos como variáveis CSS, permitindo fácil customização:

```css
:root {
  --primary: 259 47% 35%;
  --gradient-primary: linear-gradient(...);
  --shadow-primary: 0 10px 30px -10px hsl(259 47% 35% / 0.3);
}
```

## 🔧 Customização

Para customizar cores ou efeitos, basta alterar as variáveis CSS no arquivo `index.css` na seção `:root`.

---

**Feito com 💜 para o PetWalker**