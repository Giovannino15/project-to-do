/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-background': "url('/public/images/aa.jpg')",
      },
    },
  },
  plugins: [],
}

