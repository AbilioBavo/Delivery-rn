/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
          heading: "Inter_600SemiBold",
          subtitle: "Inter_500Medium",
          body:"Inter_400Regular",
          bold:"Inter_700Bold",
      },
    },
  },
  plugins: [],
}

