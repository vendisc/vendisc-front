const { defineConfig } = require('@vue/cli-service')
const PUBLIC_PATH = '/'
module.exports = defineConfig({
  publicPath: PUBLIC_PATH,
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
})
