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
});