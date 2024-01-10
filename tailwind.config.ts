import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BF9D7D',
          tiny: '#FAF7F5',
          40: '#F1EAE4',
          60: '#E1D1C2',
          80: '#D0B79F',
          120: '#7B6651'
        },
        success: {
          DEFAULT: '#52DD7E',
          10: '#E8FEE7',
          20: '#BCFBBD',
          120: '#299F65', 
        },
        info: {
          DEFAULT: '#3BADEF',
          10: '#E6FBFE',
          20: '#B1EFFD',
          120: '#1D66AC',
        },
        error: {
          DEFAULT: '#DA3E51',
          10: '#FDECEF',
          20: '#F5CCD1',
          120: '#C22538',
        },
        black: {
          DEFAULT: '#000000',
          10: '#F9F9F9',
          40: '#ECECEC',
          60: '#909090',
          80: '#4B4B4B',
          dark: '#140F0A',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
