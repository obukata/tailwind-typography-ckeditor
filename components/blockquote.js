// blockquoteの疑似要素削除
module.exports = function({ theme } ) {
  return {
    '.prose blockquote p::before': {
      content: 'none'
    },
    '.prose blockquote p::after': {
      content: 'none'
    },
  }
}