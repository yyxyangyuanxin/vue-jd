module.exports = {
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: false,
      },
    },
  },
};
