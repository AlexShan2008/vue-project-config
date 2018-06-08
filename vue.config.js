const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{ // 拷贝静态资源
        from: './src/static',
        to: 'static',
      }]),
    ],
  },
};
