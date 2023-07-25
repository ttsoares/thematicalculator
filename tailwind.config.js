/** @type {import('tailwindcss').Config} */

module.exports = {
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
      md: "996px",
      xl: "1440px",
    },
    extend: {
      colors: {
        t: {
          main_bg: "var(--main_bg)",
          display_bg: "var(--display_bg)",
          bg_equal: "var(--bg_equal)",
          bg_keyboard: "var(--bg_keyboard)",
          equal_shad: "var(--equal_shad)",
          spc_key_shad: "var(--spc_key_shad)",
          text_out: "var(--text_out)",
          text_display: "var(--text_display)",
          norm_key_shad: "var(--norm_key_shad)",
          spc_key_bg: "var(--spc_key_bg)",
          bg_nrm_keys: "var(--bg_nrm_keys)",
          fg_keys: "var(--fg_keys",
        },
      },
    },
  },
  plugins: [],
};
