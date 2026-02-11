import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e1e2f',
        secondary: '#97c680',
        accent: '#e94560',
        orange: '#feba88',
        background: '#f5f0eb',
        'background-header': '#ffffff',
        'text-dark': '#1e1e2f',
        'text-light': '#6b7280',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Archia', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
