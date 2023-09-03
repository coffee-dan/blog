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
    darkMode: 'class',
    // https://tailwindcss.com/docs/theme
    theme: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      extend: {
        gridTemplateColumns: {
          'left-rail': '150px 1fr',
        },
        // see: https://getbootstrap.com/docs/5.0/layout/z-index/
        zIndex: {
          'dropdown': 1000,
          'sticky': 1020,
          'fixed': 1030,
          'modal-backdrop': 1040,
          'offcanvas': 1050,
          'modal': 1060,
          'popover': 1070,
          'tooltip': 1080,
        }
      }
    },
    plugins: []
  }
