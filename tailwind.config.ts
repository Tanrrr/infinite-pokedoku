import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        type_1: '#aa9',
        type_2: '#b54',
        type_3: '#89f',
        type_4: '#a59',
        type_5: '#db5',
        type_6: '#ba6',
        type_7: '#ab2',
        type_8: '#66b',
        type_9: '#aab',
        type_10: '#f42',
        type_11: '#39f',
        type_12: '#7c5',
        type_13: '#fc3',
        type_14: '#f59',
        type_15: '#6cf',
        type_16: '#76e',
        type_17: '#754',
        type_18: '#e9e',
      },
    },
  },
  plugins: [],
}
export default config
