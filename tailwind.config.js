/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#FDFCDC",
        secondary: "#219dbc",
        hover: "#89186f",
        gray: {
          100: "#787878",
          200: "rgba(0, 0, 0, 0.6)",
          300: "rgba(0, 0, 0, 0.5)",
          400: "rgba(255, 255, 255, 0.6)",
        },
        lavender: "#dcdeeb",
        plum: "#9d7cc0",
        lavenderblush: "#f2e3ef",
        black: "#000",
        purple: "#961a7a",
        darkslategray: {
          100: "#323031",
          200: "#312f30",
        },
        thistle: "#eed2e9",
        dimgray: "#797278",
      },
      spacing: {},
      // fontFamily: "Caros",
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "49xl": "68px",
      "22xl": "41px",
      "35xl": "54px",
      inherit: "inherit",
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
