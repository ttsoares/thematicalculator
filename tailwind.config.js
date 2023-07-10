/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    extend: {
      colors: {
        t: {
          main_bg: "var(--main_bg)",
          tog_keypad: "var(--tog_keypad)",
          screen_bg: "var(--screen_bg)",
          key_bg: "var(--key_bg)",
          key_shad: "var(--key_shad)",
          key_bg_tog: "var(--key_bg_tog)",
          red_key_shad: "var(--red_key_shad)",
          orange_key_bg: "var(--orange_key_bg)",
          orange_key_shad: "var(--orange_key_shad)",
          text_light: "var(--text_light)",
          text_dark: "var(--text_dark)",
        },
      },
    },
  },
  plugins: [],
});
