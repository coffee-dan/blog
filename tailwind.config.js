module.exports = {
    // all the places where tailwind is used
    content: [
      './_authors/*.md',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
      './*.html',
    ],
    // https://tailwindcss.com/docs/theme
    theme: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      }
    },
    plugins: []
  }
