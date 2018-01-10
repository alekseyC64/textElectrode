module.exports = {
  cache: {
    cacheId: "textElectrode",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "textElectrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
