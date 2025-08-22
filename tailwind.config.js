/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // RedigoPA Brand Colors
        brand: {
          primary: '#0E5977',     // Blu oceano profondo
          secondary: '#EDA03E',   // Arancione ambra
          'primary-dark': '#0A4A64', // Versione più scura per gradient
          'secondary-dark': '#D97706', // Hover state arancione
        },
        neutral: {
          dark: '#1F2937',        // Grigio antracite testi principali
          medium: '#6B7280',      // Grigio medio testi secondari
          light: '#F9FAFB',       // Grigio chiarissimo sfondi
          border: '#E5E7EB',      // Border sottili
          placeholder: '#9CA3AF', // Placeholder text
          input: '#D1D5DB',       // Input borders default
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Sistema tipografico Poppins
        'hero-desktop': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-desktop': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-mobile': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.3rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.2rem', { lineHeight: '1.6', fontWeight: '400' }],
        'button': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'small': ['0.9rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      boxShadow: {
        'brand-light': 'rgba(14, 89, 119, 0.08) 0px 4px 16px',
        'brand-medium': 'rgba(14, 89, 119, 0.15) 0px 8px 32px',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(14, 89, 119, 0.7) 0%, transparent 100%)',
        'social-gradient': 'linear-gradient(135deg, #0E5977 0%, #0A4A64 100%)',
        'service-accent': 'linear-gradient(90deg, #0E5977 0%, #EDA03E 100%)',
      }
    },
  },
  plugins: [],
} 