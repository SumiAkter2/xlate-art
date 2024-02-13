/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fff",

          secondary: "#000",

          accent: "#ffffff",

          neutral: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
