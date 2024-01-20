import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // extend is for customization only, the default won't be touched
    extend: {
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "400px",
        ...defaultTheme.screens,
      },
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "grey-blue": "hsl(233, 8%, 42%)",
        "grey-blue-light": "hsl(220, 16%, 96%)",
        "white-98": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "bg-mobile": "url('/src/assets/images/bg-intro-mobile.svg')",
        "bg-desktop": "url('/src/assets/images/bg-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
