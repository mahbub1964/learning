/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        redAccent: "#F84F4F",
        greyBg: "#34353a",
        yellowAccent: "#F9AE3F",
        mutedText: "#6A6A6A",
        skyAccent: "#3CD4F5  ",
        greenAccent: "#75DE73",
        purpleAccent: "#4c45f6",
        lightGreyBg: '#D9D9D9'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
