const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./views/**/*.hbs",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Quicksand', ...defaultTheme.fontFamily.sans],
            }
        },
    },
    plugins: [],
}

