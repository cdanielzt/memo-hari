/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "!./node_modules/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        border: "rgb(214 220 231)",
        ring: "rgb(154 168 191)",
        background: "rgb(255 255 255)",
        foreground: "rgb(45 37 32)",
        primary: {
          DEFAULT: "rgb(52 52 52)",
          foreground: "rgb(250 250 250)",
        },
        secondary: {
          DEFAULT: "rgb(237 234 231)",
          foreground: "rgb(52 52 52)",
        },
        accent: {
          DEFAULT: "rgb(201 181 163)",
          foreground: "rgb(28 38 57)",
        },
        muted: {
          DEFAULT: "rgb(240 244 248)",
          foreground: "rgb(100 116 139)",
        },
        card: {
          DEFAULT: "rgb(255 255 255)",
          foreground: "rgb(15 23 42)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "rgb(248 250 252)",
        },
      },
    },
  },
  plugins: [],
}

