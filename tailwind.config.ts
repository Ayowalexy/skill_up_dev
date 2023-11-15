import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blur-bg': "url('/images/svgs/gradient.svg')",
        'card': "url('/images/svgs/card.svg')",
        'quote': "url('/images/svgs/quote.svg')"
      },
    },
    fontFamily: {
      sans: ['var(--font-poppins)'],
      mons: ['var(--font-montserrat)'],
    },
  },
  plugins: [],
}
export default config
