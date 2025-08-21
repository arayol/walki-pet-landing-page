import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // === CORES DE SISTEMA ===
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // === CORES PRIMÁRIAS ===
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          light: 'hsl(var(--primary-light))',
          glow: 'hsl(var(--primary-glow))'
        },
        
        // === CORES SECUNDÁRIAS ===
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        
        // === CORES DE APOIO ===
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        info: 'hsl(var(--info))',
        
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        
        // === CORES TEMÁTICAS ===
        walker: {
          blue: 'hsl(var(--walker-blue))',
          orange: 'hsl(var(--walker-orange))',
          purple: 'hsl(var(--walker-purple))',
        },
        dog: {
          brown: 'hsl(var(--dog-brown))'
        },
        grass: {
          green: 'hsl(var(--grass-green))'
        },
        sky: {
          blue: 'hsl(var(--sky-blue))'
        },
        
        // === BACKGROUNDS DE SEÇÕES ===
        section: {
          primary: 'hsl(var(--section-primary))',
          secondary: 'hsl(var(--section-secondary))',
          accent: 'hsl(var(--section-accent))',
          neutral: 'hsl(var(--section-neutral))'
        },
        
        // === PRICING ===
        pricing: {
          free: 'hsl(var(--pricing-free))',
          'free-accent': 'hsl(var(--pricing-free-accent))',
          basic: 'hsl(var(--pricing-basic))',
          'basic-accent': 'hsl(var(--pricing-basic-accent))',
          pro: 'hsl(var(--pricing-pro))',
          'pro-accent': 'hsl(var(--pricing-pro-accent))',
        },
        
        // === SIDEBAR ===
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      
      // === GRADIENTES ===
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-section': 'var(--gradient-section)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-accent': 'var(--gradient-accent)',
      },
      
      // === TIPOGRAFIA ===
      fontFamily: {
        'sans': ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['var(--font-heading)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // === ESPAÇAMENTOS ===
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      
      // === BORDER RADIUS ===
      borderRadius: {
        'none': '0',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'full': 'var(--radius-full)',
      },
      
      // === SOMBRAS ===
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'primary': 'var(--shadow-primary)',
        'glow': 'var(--shadow-glow)',
      },
      
      // === ANIMAÇÕES ===
      transitionDuration: {
        'fast': '150ms',
        'smooth': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-hard': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // === KEYFRAMES ===
      keyframes: {
        // Animações do Accordion
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        
        // Animações customizadas
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: 'var(--shadow-primary)' },
          '50%': { boxShadow: 'var(--shadow-glow)' }
        }
      },
      
      // === ANIMAÇÕES ===
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;