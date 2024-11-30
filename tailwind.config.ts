import type { Config } from "tailwindcss";
import daisyui from 'daisyui'


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B1F3B", // Dark navy
          light: "#2D3A63",   // Lighter navy
        },
        secondary: {
          DEFAULT: "#D2A679", // Warm brown
          light: "#EBD3B0",   // Light beige-brown
        },
        
        
      },
    }
    
  },
  plugins: [daisyui],
} satisfies Config;
