import type { Config } from "tailwindcss";
const sharedConfig = require("@repo/tailwind-config");

// import sharedConfig from "@repo/tailwind-config";
/** @type {import('tailwindcss').Config} */
const config: Pick<Config, "presets" | "content"> = {
  content: [
    "./src/**/*.{tsx,ts,js}",
    "./search/**/*.{tsx,ts,js}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}", // must use this line to compile and generate our RizzUI components style
  ],
  presets: [sharedConfig],
};

export default config;
