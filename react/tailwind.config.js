import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                "jbm": ["JetBrains Mono"]
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',

                /* Standard Colors */
                ihccRed: 'rgb(120, 47, 64)',
                ihccYellow: 'rgb(255, 164, 0)',
                ihccWhite: 'rgb(255, 255, 255)',
                ihccBlack: 'rgb(0, 0, 0)',

                /* Event Colors */
                ihccRedDark: 'rgb(105, 37, 64)',
                ihccYellowDark: 'rgb(204, 118, 6)',
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms")
    ],
};
