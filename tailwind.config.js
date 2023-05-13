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
                sans: ["Istok Web", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                greenPrimary: "#15803d",
                greenSecondary: "#166534",
                blackPrimary: "#0e0e11",
                blackSecondary: "#15191d",
                blackSoft: "#292926",
                whitePrimary: "#e2e8f0",
                whiteLight: "#818792",
                greyPrimary: "#3D3B3C",
                greySecondary: "#7F7979",
                greyLight: "#d1d5da",
                greyDark: "#262626",
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("daisyui"),
        require("@tailwindcss/forms"),
    ],
};
