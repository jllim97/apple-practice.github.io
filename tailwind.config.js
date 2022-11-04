/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    maxWidth: {
      '5/6': '83.3333333333%',
      '1/3': '33.3333333333%',
      'full': '100%',
      '5/12': '41.666667%',
      '7/12': '58.333333%',
      '1/2': '50%'
    },
    screens: {
      'tablet': '832px',
      '734': '735px',
      '1068': '1069px',
      '374': '375px',
      '848': '849px',
      '833': '834px',
      'medium': '1068px',
      'small': '734px'
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: ['12px', '16px'],
    },

    extend: {
      colors: {
        'black-1': 'rgba(0,0,0,0.8)',
        'nav-link': '#f5f5f7',
        'primary':'#0071e3',
        'footer-text': '#6e6e73',
        'footer-link': '#424245',
        'footer-category': '#1d1d1f',
        'footer-href': '#0066cc',
        'black-2': '#f5f5f7',
        'footer-border-color': '#d2d2d7',
        'sticky-header': 'rgba(255,255,255,0.72)'
      },
      fontFamily: {
        'sans': ["SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica Neue","Helvetica","Arial",'sans-serif', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
