module.exports = {
    content: [
   
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#EF6FDE",
          secondary: "#DF84FF",
          tertiary: "#84D3FF",
          background: "#0A0B18",
          box: "#171621",
          font: "#E5E5E5",
          bg_gradient: "#543568",
        },
      },
    },
    safelist: [
      "bg-box", 
      "bg-background",
      "text-font",
    ],
    plugins: [],
  };
  