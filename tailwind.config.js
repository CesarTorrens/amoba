module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blueLight: '#D7E1FC',
      blueMedium: '#3568F0',
      white: '#FFFFFF',
      primary: 'rgba(61, 70, 91, 1)',
      variant: 'rgba(172, 186, 220, 1)',
      container: 'rgba(238, 240, 246, 1)',
      descrip: 'rgba(124, 132, 152, 1)',
      placeholdercolor: 'rgba(211, 214, 223, 1)',
      gray: '#374151',
      graytwo: 'rgba(238, 240, 246, 1)',
      grayQuotes:  '#EEF0F6;'
    },
    extend: {
      height: {
        header: '10%',
        body: '90%',
      },
      boxShadow: {
        '3xl': '0 5px 20px rgba(124, 132, 152, 0.2)',
        'input': '0 1px 5px rgba(0, 0, 0, 0.25)'
      }
    },
    fontFamily: {
      'pro': [ 'Source Sans Pro', 'sans-serif' ]
    }
  },
  plugins: [],
}