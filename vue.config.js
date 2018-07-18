module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/firestore-explorer/'
    : '/',
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      }]
    }
  }
}