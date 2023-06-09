/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,html}"],
    theme: {
        fontFamily: {
            "pixeloid": ["pixeloid-sans"],
            "pixeloid-bold": ["pixeloid-sans-bold"]
        },
        colors: {
            "pokeball-red": "#f00000",
            "pokeball-black": "#222224",
            "pokeball-white": "#f0f0f0",
            white: "#FFFFFF",
            black: "#000000",
            grey: "#5F5F5F",
        },
        borderWidth: {
            40: "40px",
        },
        extend: {},
    },
    plugins: [],
};
