module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'blue-ice': '#C5E4E7',
                'blue-sharpe': '#00474B',
                'blue-java': '#26C2AD'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}