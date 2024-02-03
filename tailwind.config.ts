import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000",
        "black_100": "#060606",
        "white": "#fff",
        "white_100": "#F3F3F3",
        "white_200": "#F2F2F2",
        "white_300": "#84818A",
        "white_400": "#EBFFF6",
        "white_500": "#FAFAFA",
        "white_600": "#F5F5F5",
        "white_700": "#E4E4E4",
        "white_800": "#666666",
        "white_900": "#F8F8F8",
        "white_1000": "rgba(255, 255, 255, 0.15)",
        "white_1100": "rgba(124, 239, 84, 1)",
        "dark_green": "#043A1C",
        "dark_green_100": "#043A1C",
        "green": "#62D585",
        "green_100": "rgba(98, 213, 133, 0.4)",
        "green_200": "#019939",
        "green_300": "#1DBF73",
        "green_400": "#011108",
        "green_500": "#0E4426",
        "green_600": "#7CEF54",
        "green_700": "#032124",
      },
    },
  },
  plugins: [],
};
export default config;
