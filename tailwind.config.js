// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all relevant files in the src directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary-3":
          "linear-gradient(135deg, #CF9FF9 0%, #FDA19B 50%, #FFDAC2 100%)",
      },
      animation: {
        scroll: "scroll 20s linear infinite", // Adjust speed here
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" }, // Start from right
          "100%": { transform: "translateX(-100%)" }, // Move to left
        },
      },
    },
  },
};
