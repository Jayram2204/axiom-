/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Enhanced Axiom Brand Colors with better contrast
        background: {
          primary: '#0a0a0f',
          secondary: '#121218',
          tertiary: '#1a1a24',
        },
        stellar: {
          50: '#f4f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9b5de5',
          500: '#7b3ff2',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3c1361',
        },
        accent: {
          blue: '#00d4ff',
          'blue-dark': '#0099ff',
        },
        success: {
          DEFAULT: '#00ff88',
          dark: '#00cc6a',
          light: '#4dffaa',
        },
        warning: {
          DEFAULT: '#ff9500',
          dark: '#ffb84d',
          light: '#ffb84d',
        },
        danger: {
          DEFAULT: '#ff3b30',
          dark: '#ff6b6b',
          light: '#ff8a80',
        },
        text: {
          primary: '#ffffff',
          secondary: '#f5f5f7',
          muted: '#a0a0ab',
          disabled: '#8e8e93',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "stellar-glow": {
          "0%, 100%": { opacity: 0.6, transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: 1, transform: "scale(1.02) rotate(0.5deg)" },
        },
        "comet-trail": {
          "0%": { opacity: 1, transform: "scale(1)" },
          "100%": { opacity: 0, transform: "scale(0.3)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        "pulse": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "stellar-glow": "stellar-glow 6s ease-in-out infinite alternate",
        "comet-trail": "comet-trail 0.8s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse": "pulse 2s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
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
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(123, 63, 242, 0.3)',
        'glow': '0 0 20px rgba(123, 63, 242, 0.4)',
        'glow-lg': '0 0 30px rgba(123, 63, 242, 0.5)',
        'accent-glow': '0 0 20px rgba(0, 212, 255, 0.4)',
        'success-glow': '0 0 20px rgba(0, 255, 136, 0.4)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}