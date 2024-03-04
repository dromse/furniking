import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-lg": "1170px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-gray": {
          100: "#f7f8fa",
          300: "#c2c2c2",
          400: "#b0b0b0",
          450: "#838383",
          500: "#555555",
        },
        "custom-green": { 200: "#cfebcd", 500: "#7AC751" },
        "custom-blue": {
          50: "#f2fbff",
          100: "#f3fbff",
          200: "#f9fdff",
          500: "#00B7F1",
        },
        "custom-red": "#ff6868",
      },
    },
  },
  plugins: [],
};
export default config;
