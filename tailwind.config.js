/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        'w-16': 16,
        'h-9': 9,
      },
      colors: {
        lotus: {
          blue: {
            DEFAULT: '#1e40af', // Primary blue (deep, professional)
            light: '#60a5fa',  // Lighter shade for gradients/hover
            dark: '#172554',   // Darker shade for contrast
          },
          // Optionally retain existing colors
          brown: '#8B6144',
          green: '#90A955',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};