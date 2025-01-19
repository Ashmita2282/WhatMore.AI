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
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out forwards", // Add `forwards` to keep the final state
      },
    },
  },
};
