/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0040E0",
        "custom-gray": {
          100: "#E1E1E1",
          200: "#939393",
          300: "#656565",
          400: "#4D4D4D",
          500: "#3D3D3D",
        },
      },
      boxShadow: {
        input: "0 4px 2px 0 rgba(224,224, 224, 0.25)",
        table: "0 4px 4px 0 rgba(0,0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
