// pages/select/select.js
const app = getApp();
// var _tousList = [{
//       coverImgUrl: '../../images/uiuc_june/1.png'
//     }, {
//       coverImgUrl: '../../images/uiuc_june/2.png'
//     }, {
//       coverImgUrl: '../../images/uiuc_june/3.png'
//     }, {
//       coverImgUrl: '../../images/uiuc_june/4.png'
//     }, {
//       coverImgUrl: '../../images/uiuc_june/5.png'
//     }, {
//       coverImgUrl: '../../images/uiuc_june/6.png'
//     }, {
//       coverImgUrl: '../../images/uiuc_june/7.png'
//     }, {
//       coverImgUrl: '../../images/uiuc_june/8.png'
//     }
// ]
var _tousList = [
  {
    coverImgUrl: '../../images/uiuc_mid_autumn_21/pekkie.png',
    author: "Pekkie",
  }, 
  {
    coverImgUrl: '../../images/uiuc_mid_autumn_21/YY.png',
    author: "丫丫",
  },
  {
    coverImgUrl: '../../images/uiuc_mid_autumn_21/mag.png',
    author: "Mag",
  }, 
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    touList: _tousList,
    indicatorDots: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击选项进入详情页
  detail: function (e) {
    // console.log(e)
    var touNum = e.currentTarget.dataset.tounum
    if (_tousList[touNum] != undefined) {
      app.globalData.toubgsrc = _tousList[touNum].coverImgUrl
      wx.navigateTo({ url: '../madeph/madeph' })
    }
  },

  onShareAppMessage: function (res) {
    return {
      title: '头像制作',
      path: 'pages/index/index',
      imageUrl: '../../images/1.png',
      success: function (shareTickets) {
        //
      },
      fail: function (res) {
        //
      },
      complete: function (res) {
        //
      }
    }
  }

})