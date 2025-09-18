import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0047AB",
        // etc
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        heading: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
