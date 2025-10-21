// index.js
const plugin = require('tailwindcss/plugin');

const base = require('./components/base');
const blockquote = require('./components/blockquote');
const tables = require('./components/tables');
const links = require('./components/links');
const images = require('./components/images');

module.exports = plugin(function({ addComponents, addBase, theme }) {

  addComponents(base)
  addComponents(blockquote)
  addComponents(tables)
  addComponents(links)
  addComponents(images)

});