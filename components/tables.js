// table全体のスタイル
module.exports = function({ theme } ) {
  return {
    '.prose figure.table': {
      display: 'block',
    },
    '.prose table': {
      width: '100%',
      borderCollapse: 'collapse',
    },
    '.prose table th': {
      padding: theme('spacing.2'), // p-2
      backgroundColor: theme('colors.gray.100'),
      border: `1px solid ${theme('colors.gray.200')}`,
    },
    '.prose table td': {
      padding: theme('spacing.2'), // p-2
      border: `1px solid ${theme('colors.gray.200')}`,
    },
  }
}