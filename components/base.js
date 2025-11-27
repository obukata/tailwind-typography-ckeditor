// prose全体のスタイル
module.exports = function({ theme } ) {
  return {
    '.prose': {
      fontSize: '1em',
    },
    '.prose::after': {
      content: '""',
      display: 'table',
      clear: 'both',
    }
  }
}