import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          to: { transform: 'translate(calc(-50% - 16px))' },
        },
      },
    },
  },
  plugins: [],
}
export default config
