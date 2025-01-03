/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "blue",
        secondary: "gray",
        danger: "red",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        ubuntubold: ["Ubunto-Bold", "sans-serif"],
        ubuntulight: ["Ubuntu-Light", "sans-serif"],
        ubunturegular: ["Ubuntu-Regular", "sans-serif"],
        kantumruy: ["Kantumruy", "sans-serif"],
      },
      fontSize: {
        h1: ["40px", "48px"],
        h2: ["32px", "38.4px"],
        h3: ["28px", "33.6px"],
        h4: ["24px", "28.8px"],
        h5: ["20px", "24px"],
        h6: ["18px", "21.6px"],
        p: ["16px", "19.2px"],
        text: ["14px", "16.8px"],
        caption: ["22px", "19.2px"],
        title: ["22px", "26.4px"],
        subtitle: ["16px", "19.2px"],
      },
      borderRadius: {
        xss: "1px",
        sms: "2px",
        mds: "4px",
        lgs: "6px",
        xls: "8px",
        "2xls": "12px",
        "3xls": "16px",
        "4xls": "20px",
        "5xls": "24px",
        fulls: "9999px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
