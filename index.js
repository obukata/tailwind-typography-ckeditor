// index.js
const plugin = require('tailwindcss/plugin');

const base = require('./components/base');
const blockquote = require('./components/blockquote');
const tables = require('./components/tables');
const links = require('./components/links');
const images = require('./components/images');

module.exports = plugin(function({ addComponents, theme }) {

  addComponents(base({ theme }))
  addComponents(blockquote({ theme }))
  addComponents(tables({ theme }))
  addComponents(links({ theme }))
  addComponents(images({ theme }))

});