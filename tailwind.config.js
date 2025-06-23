/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enable dark mode
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#16a34a', // Green
                    foreground: '#ffffff',
                },
                light: {
                    background: '#f8fafc',
                    card: '#ffffff',
                    text: '#1f2937',
                    'text-secondary': '#6b7280',
                }
            },
        },
    },
    plugins: [],
}; 