const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    extend: { backgroundImage: theme => ({
      'letter-bg': "url('https://res.cloudinary.com/djuqxjkh3/image/upload/v1615149449/my-website/Dise%C3%B1o_sin_t%C3%ADtulo_3_spm83j.svg')",
     })},
  },
  variants: {
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
    colors: {
      banner:{ 
      100:'#dc466c'
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
}
