module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"], // Adjust paths as per your project structure
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      colors: {
        dark: "#0a0a0a",
        light: "#f5f5f5",
        green: "#daf5d8",
        red: "#fdd7d9",
        purple: "#e6dafc",
      },
      borderColor: {
        'theme-border': 'var(--theme-border-color)',
      },
    },
  },
  plugins: [],
};
