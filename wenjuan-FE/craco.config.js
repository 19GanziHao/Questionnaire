// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  devServer: {
    port: 8000, // B 端
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    configure(webpackConfig) {
      // 只在生产环境中使用
      if (webpackConfig.mode === 'production') {
        // 抽离公共代码 只在生成环境
        if (webpackConfig.optimization === null) {
          webpackConfig.optimization = {}
        }
        webpackConfig.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            antd: {
              name: 'antd-chunk',
              test: /antd/,
              priority: 100,
            },
            reactDom: {
              name: 'reactDom-chunk',
              test: /react-dom/,
              priority: 99,
            },
            vendors: {
              name: 'vendors-chunk',
              test: /node_modules/,
              priority: 98,
            },
          },
        }
      }
      return webpackConfig
    },
  },
}
