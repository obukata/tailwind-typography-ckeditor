// 画像関連のスタイル
module.exports = {
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
  '.prose .image > figcaption': {
    backgroundColor: theme('colors.gray.100'),
    captionSide: 'bottom',
    display: 'table-caption',
    outlineOffset: '-1px',
    padding: '.6em',
    textAlign: 'center'
  },
}