const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Permanent Marker", "cursive"],
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    textColor: ["hover", "active"],
  },
  plugins: [],
};
