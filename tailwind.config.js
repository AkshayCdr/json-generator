/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                textGrey: "#444",
                backGroundDark: "#222222",
            },
        },
    },
    plugins: [],
};
