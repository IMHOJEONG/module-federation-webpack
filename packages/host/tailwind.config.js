import sharedConfig from "@repo/tailwind-config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,ts,js}",
    "./search/**/*.{tsx,ts,js}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // must use this line to compile and generate our RizzUI components style
  ],
  theme: {
    extend: {},
  },
  presets: [sharedConfig],
};
