module.exports = {
    plugins: [
      require('tailwindcss'),
      // see: https://github.com/postcss/autoprefixer
      require('autoprefixer'),
      // see: https://cssnano.co/
      // ...(process.env.JEKYLL_ENV == 'production'
      //  ? [require('cssnano')({ preset: 'default' })]
      //  : [])
    ]
  }
