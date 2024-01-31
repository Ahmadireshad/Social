/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/index1.html", "./ src/ *.{ html, js }"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter', sans-serif"],
        lexand: ["'Lexend Deca', sans-serif;"]
      },
      colors: {
        Verydarkblue: " hsl(233, 47%, 7%)",
        Darkdesaturatedblue: " hsl(244, 38%, 16%)",
        Softviolet: " hsl(277, 64%, 61%)",

        White: " hsl(0, 0%, 100%)",
        Slightlytransparentwhite: " hsla(0, 0%, 100%, 0.75)",
        Slightlytransparentwhite: " hsla(0, 0%, 100%, 0.6)",
      }
    },
  },
  plugins: [],
}

