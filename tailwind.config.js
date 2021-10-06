module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": "hsl(208, 49%, 24%)",
        white: "hsl(0, 0%, 100%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "desktop-editor-illustration":
          "url('./images/illustration-editor-desktop.svg')",
        "background-gradient":
          "linear-gradient(135deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
      },
    },
  },
  variants: {
    fontWeight: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
};
