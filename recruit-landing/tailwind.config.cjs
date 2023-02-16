/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'min-w-btn-primary',
    'min-w-btn-secondary',
    'min-w-nav',

    'min-h-btn-primary',
    'min-h-btn-secondary',
    'min-h-nav',
    'min-h-header'
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px'
      },
      borderRadius: {
        xs: '6px',
        sm: '8px',
        md: '23px',
        lg: '32px'
      },
      colors: {
        light: '#ffffff',
        primary: '#3c3c3c',
        secondary: '#2b292d',
        tertiary: '#2f281e',
        placeholder: '#939393',
        lightPurple: '#b57ad2',
				mediumBlue: '#3490cf'
      },
      fontFamily: {
        primary: ['Abel', 'sans-serif']
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        md: '18px',
        lg: '20px',
        xl: '22px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '40px',
        '7xl': '56px'
      },
      lineHeight: {
        xs: '13px',
        sm: '15px',
        md: '18px',
        lg: '20px',
        xl: '22px',
        '2xl': '23px',
        '3xl': '25px',
        '4xl': '28px',
        '5xl': '30px',
        '6xl': '34px',
        '7xl': '38px',
        '8xl': '40px',
        '9xl': '42px',
        '10xl': '46px',
        '11xl': '56px'
      },
      gradientColor: {
        primary: 'linear-gradient(180deg,rgba(249, 244, 252, 1) 100% rgba(255, 244, 229, 1) 0.01%,rgba(255, 244, 229, 1) 0.01%,rgba(181, 122, 210, 1) 78%',
        secondary: 'linear-gradient(180deg,rgba(255, 244, 229, 1) 0.01%,rgba(249, 244, 252, 1) 100%)'
      },
      minWidth: {
        'btn-primary': '202px',
        'btn-secondary': '160px',
        nav: '310px'
      },
      minHeight: {
        'btn-primary': '63px',
        'btn-secondary': '46px',
        nav: '28px',
        header: '78px'
      }
    }
  },
  plugins: []
}
