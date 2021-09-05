module.exports = {
  publicPath: "/slotmachine/",
  lintOnSave: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false
  }
};
