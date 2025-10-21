// index.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, addBase, theme }) {
  // blockquoteの疑似要素削除
  addBase({
    '.prose blockquote p::before': { content: 'none' },
    '.prose blockquote p::after': { content: 'none' },
  });

  // aタグスタイル
  addComponents({
    '.prose a': {
      color: theme('colors.blue.500'),
      '&:hover': {
        textDecoration: 'none',
      },
    },
  });

  // figure.table display block
  addComponents({
    '.prose figure.table': {
      display: 'block',
    },
  });

  // table全体のスタイル
  addComponents({
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
  });

  // 文字サイズスケーリング対応
  addComponents({
    '.prose': {
      fontSize: 'calc(1rem * var(--scaling))',
    },
  });

  addComponents({
    '.prose .image': {
      clear: 'both',
      display: 'table',
    },
    '.prose .image.image-style-align-left': {
      float: 'left',
      marginRight: theme('spacing.6'),
    },
    '.prose .image.image-style-align-right': {
      float: 'right',
      marginLeft: theme('spacing.6'),
    },
    '.prose .image.image-style-block-align-left': {
      marginLeft: '0',
      marginRight: 'auto',
    },
    '.prose .image.image-style-block-align-right': {
      marginLeft: 'auto',
      marginRight: '0',
    },
    '.prose .image>figcaption': {
      backgroundColor: theme('colors.gray.100'),
      captionSide: 'bottom',
      display: 'table-caption',
      outlineOffset: '-1px',
      padding: '.6em',
      textAlign: 'center'
    },
  })
});