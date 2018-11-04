//index.js
//获取应用实例
const app = getApp()
const compressed_image_url ="http://lg-db0uiwcs-1257702736.wxlagame.com/compressed/"

Page({
  data: {
    systemInfo: {},
    motto: "Pachelbel's Canon is ringing!",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiper_imgs: [
      compressed_image_url+"fmn08311_compressed.jpg",
      compressed_image_url+"fmn09281_compressed.jpg",
      compressed_image_url+"fmn08241_compressed.jpg"
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    image_list: [compressed_image_url +"fmn09141_compressed.jpg",
      compressed_image_url +"fmn08311_compressed.jpg", 
      compressed_image_url +"fmn08241_compressed.jpg"],
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
  // redirect to post page
  toPost: function (event){
    wx.navigateTo({
      url: '../post/post',
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
