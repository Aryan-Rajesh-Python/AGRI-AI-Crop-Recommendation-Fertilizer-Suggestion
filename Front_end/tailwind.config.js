/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9600ff",

          secondary: "#00fd54",

          accent: "#3f00ff",

          neutral: "#150a07",

          "base-100": "#f8faff",

          info: "#00d4ff",

          success: "#5fbe00",

          warning: "#ff9f00",

          error: "#ff71a1",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
