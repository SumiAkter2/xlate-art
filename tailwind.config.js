/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef4444",

          secondary: "#ffffff",

          accent: "#ffffff",

          neutral: "#ffffff",

          "base-100": "#ffffff",

          info: "#ffffff",

          success: "#f97316",

          warning: "#ffffff",

          error: "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
