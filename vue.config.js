const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/views',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
})
