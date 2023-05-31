const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablex: { max: "960px" },
      tablet: { min: "905px" },
      mobil: { max: "600px" },
    },

    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      colors: {
        xgray: {
          dark: " RGBA(0, 0, 0, 0.93)",
          medium: "#c7c7c7",
          light: "#e5e5e5",
          extralight: "#efefef",
          normal: "#f5f5f5",
        },
        xpu: {
          medium: "#4c4a78",
        },
        card: {
          dark: "#303134",
        }
      },
    },

    plugins: [],
  },
});


