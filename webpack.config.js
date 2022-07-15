const path = require('path')
module.exports = {
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      images: path.resolve(__dirname, './src/assets/images')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
}