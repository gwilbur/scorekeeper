const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}
