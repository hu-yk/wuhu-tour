const app = getApp();
Page({
  data: {
    url: app.globalData.webUrl
  },
  onLoad(options) {
    if (options.url) {
      this.setData({ url: decodeURIComponent(options.url) });
    }
  }
});
