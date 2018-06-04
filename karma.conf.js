module.exports = function (config) {
  config.set({
    // 测试框架
    plugins: ['karma-mocha', 'karma-chai'],
    // your config
    files: ['test/unit/*.spec.js'],
  });
};
