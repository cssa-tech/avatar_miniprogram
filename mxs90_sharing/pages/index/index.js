// pages/select/select.js
const app = getApp();
var _tousList = [{
      coverImgUrl: '../../images/0.png'
    }, {
      coverImgUrl: '../../images/7.png'
    }, {
      coverImgUrl: '../../images/8.png'
    }, {
      coverImgUrl: '../../images/9.png'
    }, {
      coverImgUrl: '../../images/1.png'
    }, {
  coverImgUrl: '../../images/2.png'
}, {
  coverImgUrl: '../../images/3.png'
}, {
  coverImgUrl: '../../images/4.png'
},
{
  coverImgUrl: '../../images/5.png'
},
{
  coverImgUrl: '../../images/6.png'
}
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
      title: '北大附中校庆头像制作',
      path: 'pages/index/index',
      imageUrl: '../../images/0.png',
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