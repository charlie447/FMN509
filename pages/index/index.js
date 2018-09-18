//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    systemInfo: {},
    motto: "Pachelbel's Canon is ringing!",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    image_list: ["/images/FMN_posters/FMN0914.png",
     "/images/FMN_posters/FMN0831.jpg", 
     "/images/FMN_posters/FMN0824.jpg"]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    var that = this
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res
      })
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
