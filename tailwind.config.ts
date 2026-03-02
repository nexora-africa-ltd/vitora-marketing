import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      /* ——— Brand Colors (§3.1) ——— */
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        brand: {
          burgundy: {
            DEFAULT: '#3D000F',
            50:  '#FDF2F4',
            100: '#F9E3E7',
            200: '#F0C4CC',
            300: '#E49BA8',
            400: '#D06A7E',
            500: '#B84058',
            600: '#9B2A42',
            700: '#7C1E33',
            800: '#5C1525',
            900: '#3D000F',  // primary – headings, CTA bg
          },
          teal: {
            DEFAULT: '#1A4D5C',
            50:  '#EFF8FA',
            100: '#D5EDF2',
            200: '#AADBE5',
            300: '#72C0D0',
            400: '#3C9DB3',
            500: '#267D93',
            600: '#1F6478',
            700: '#1A4D5C',  // secondary – links, icons, accents
            800: '#163D4A',
            900: '#112F38',
          },
          gold: {
            DEFAULT: '#D4A574',
            50:  '#FBF6F0',
            100: '#F5E8D9',
            200: '#EDCFB0',
            300: '#D4A574',  // accent – badges, highlights
            400: '#C48D56',
            500: '#B07740',
            600: '#946033',
            700: '#764C29',
            800: '#5C3B20',
            900: '#422B18',
          },
        },
        /* Semantic aliases */
        success: '#2E7D4A',
        error:   '#C62828',
        slate:   '#64748B',  // body text
      },

      /* ——— Typography (§3.2) ——— */
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Hero & section headings (mobile → desktop via responsive prefix)
        'hero':      ['3rem',   { lineHeight: '1.1', fontWeight: '800' }],   // 48px
        'hero-lg':   ['4.5rem', { lineHeight: '1.05', fontWeight: '800' }],  // 72px
        'section':   ['2.25rem',{ lineHeight: '1.2', fontWeight: '700' }],   // 36px
        'section-lg':['3rem',   { lineHeight: '1.15', fontWeight: '700' }],  // 48px
        'sub':       ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],   // 24px
        'sub-lg':    ['1.875rem',{ lineHeight: '1.25', fontWeight: '600' }], // 30px
      },

      /* ——— Decorative (§3.5) ——— */
      borderRadius: {
        xl: '0.75rem',   // 12px – cards
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        hover: '0 10px 25px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #3D000F 0%, #1A4D5C 100%)',
      },

      /* ——— Animation tokens ——— */
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up':  'fade-up 0.6s ease-out forwards',
        'fade-in':  'fade-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
