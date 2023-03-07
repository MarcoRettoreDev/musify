const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                greenPrimary: "#15803d",
                greenSecondary: "#166534",
                blackPrimary: "#0e0e11",
                blackSecondary: "#15191d",
                whitePrimary: "#e2e8f0",
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
