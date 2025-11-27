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
    },
    '.prose img': {
      display: 'inline-block'
    },
    '.prose strong': {
      color: 'inherit'
    }
  }
}