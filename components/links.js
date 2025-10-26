module.exports = function({ theme } ) {
  return {
    '.prose a': {
      color: theme('colors.blue.500'),
      '&:hover': {
        textDecoration: 'none',
      },
    },
  }
}