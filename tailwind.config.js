/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            linearGradientColors: {
                'custom': ['-45deg', '#bbb', '#a3a8e1', '#666da5', '#cd506f'],
            },
        },
    },
  plugins: [],
}

