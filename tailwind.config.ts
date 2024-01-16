import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#E51C23',
        'dark-primary': '#453E3E',
        secondary: '#8D7777',
        third: '#FFF8F8',
        grass: '#8BC34A',
        poison: '#AA22B0',
        fire: '#FF7A00',
        flying: '#CC9CF7',
        water: '#2BC3FF',
        bug: '#8BC34A',
        'dark': '##1f2937',
        electric: '#facc15',
        psychic: '#c026d3',
        ground: '#78350f',
      },
      boxShadow: {
        base: '0px 0px 4px 0px #00000040'
      }
    },
  },
  plugins: [],
}
export default config
