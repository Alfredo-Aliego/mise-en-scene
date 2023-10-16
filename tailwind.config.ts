import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      "luxury",
      "dark",
      "lofi",
      {
        customLight: {
          primary: "#EFEFEF", // light gray
          secondary: "#FFFFFF", // This color needs to be adjusted
          text: "#000000",
          "base-100": "#ffffff",
        },
        customDark: {
          primary: "#101010",

          secondary: "#181818",
          text: "#ffffff",

          accent: "#374151",

          neutral: "#2a323c",

          "base-100": "#000000",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
      },
      margin: {
        "10vh": "10vh",
      },
      boxShadow: {
        bottom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },

  plugins: [require("daisyui")],
};
export default config;
