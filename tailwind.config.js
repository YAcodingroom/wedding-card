/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Condensed, Noto Sans TC, sans-serif",
    },
    extend: {
      height: {
        screen: "100dvh",
        imageBox: "calc(80dvh - 6rem)",
      },
      backgroundImage: {
        main: "url('https://images.unsplash.com/photo-1628285580264-8680e5761859?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        rsvp: "url('https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      fontFamily: {
        playwrite: "Playwrite NO, cursive",
        noto: "Noto Serif TC, serif",
      },
    },
  },
  plugins: [],
};
