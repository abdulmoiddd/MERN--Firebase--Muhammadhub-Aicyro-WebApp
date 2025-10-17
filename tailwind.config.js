// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        signature: ['"Dancing Script"', "cursive"],
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      colors: {
        primary: "#6C63FF", // Main accent color (buttons, highlights)
        primaryHover: "#7D6DFF", // Hover state for primary elements
        secondary: "#8F6BFF", // Secondary accent (gradients, hover)
        background: "#0C0618", // Main dark background
        gradientStart: "#1A093C", // Header gradient start
        gradientEnd: "#2E1B4A", // Header gradient end

        heading: "#FFFFFF", // Headings / titles
        highlight: "#9E8BFF", // Highlighted text (e.g., “Security”)
        text: "#B7B7C9", // Body text
        muted: "#8E8EAA", // Muted / secondary text

        border: "#1E1E2E", // Border / divider lines
        overlay: "#00000080", // Semi-transparent overlays
      },
    },
  },
  plugins: [],
};

// extend: {
//   animation: {
//     "gradient-x": "gradient-x 8s ease infinite",
//   },
//   keyframes: {
//     "gradient-x": {
//       "0%, 100%": { "background-position": "0% 50%" },
//       "50%": { "background-position": "100% 50%" },
//     },
//   },
// }
