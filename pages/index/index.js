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
    swiper_imgs: [
      "/images/FMN_posters/FMN0831.jpg",
      "/images/FMN_posters/FMN0831.jpg",
      "/images/FMN_posters/FMN0824.jpg"
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    image_list: ["/images/FMN_posters/FMN0914.png",
     "/images/FMN_posters/FMN0831.jpg", 
     "/images/FMN_posters/FMN0824.jpg"],
    test:"#000000"
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
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
