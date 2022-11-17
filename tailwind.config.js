/** @type {import('tailwindcss').Config} */
module.exports = {
  backgroundImage: {
    'hero-pattern': "url('/src/assets/images/bg.png')",
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF"
        }
      }
    ]
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
