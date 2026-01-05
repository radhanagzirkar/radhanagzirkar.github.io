import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f2f4ff',
          100: '#dfe5ff',
          200: '#bcc7ff',
          300: '#95a5ff',
          400: '#6d7fff',
          500: '#4c5bff',
          600: '#3b47db',
          700: '#2f38b0',
          800: '#252d8a',
          900: '#1f266d',
        },
      },
      boxShadow: {
        floating: '0 30px 120px -40px rgba(76, 91, 255, 0.5)',
      },
      backgroundImage: {
        'grid-light':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}

export default config
