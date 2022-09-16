// pages/select/select.js
const app = getApp();

const _tousList1 = [
  {
    coverImgUrl: '../../images/uiuc_mid_autumn_21/pekkie.png',
    author: 'Pekkie',
  }, 
  {
    coverImgUrl: '../../images/uiuc_mid_autumn_21/YY.png',
    author: '丫丫',
  },
  {
    coverImgUrl: '../../images/uiuc_mid_autumn_21/mag.png',
    author: 'Mag',
  }, 
  {
    coverImgUrl: '../../images/uiuc_mid_autumn_21/tianny.png',
    author: 'Tianny',
  },
]

const _tousList2 = [{
  coverImgUrl: '../../images/uiuc_mid_autumn_22/wang.png',
  author: '王若玘',
},
{
  coverImgUrl: '../../images/uiuc_mid_autumn_22/chen.png',
  author: '陈谦路',
}, 
{
  coverImgUrl: '../../images/uiuc_mid_autumn_22/du1.png',
  author: '林子秋',
}, 
{
  coverImgUrl: '../../images/uiuc_mid_autumn_22/du2.png',
  author: '林子秋',
},
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: 2022,
    touList: _tousList2,
    indicatorDots: true
  },

  switchTo2021() {
    this.setData ({
      touList: _tousList1,
      year: 2021
    })
  },

  switchTo2022() {
    this.setData ({
      touList: _tousList2,
      year: 2022
    })
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
    if (this.data.year == 2021) {
      if (_tousList1[touNum] != undefined) {
        app.globalData.toubgsrc = _tousList1[touNum].coverImgUrl
        wx.navigateTo({ url: '../madeph/madeph' })
      }
    } else if (this.data.year == 2022) {
      if (_tousList2[touNum] != undefined) {
        app.globalData.toubgsrc = _tousList2[touNum].coverImgUrl
        wx.navigateTo({ url: '../madeph/madeph' })
      }
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