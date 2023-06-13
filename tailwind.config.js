/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './node_modules/flowbite-react/**/*.js',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        }
    },
    plugins: [
        require("flowbite/plugin")
    ],
}
