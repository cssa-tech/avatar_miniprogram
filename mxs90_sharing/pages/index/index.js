// pages/select/select.js
const app = getApp();
var _tousList = [{
  name: '',
  coverImgUrl: '../../images/1.png'
}, {
    name: '类 型 2',
  coverImgUrl: '../../images/2.png'
}, {
    name: '类 型 3',
  coverImgUrl: '../../images/3.png'
}, {
    name: '类 型 4',
  coverImgUrl: '../../images/4.png'
},
{
  name: '类 型 5',
  coverImgUrl: '../../images/5.png'
},
{
  name: '类 型 6',
  coverImgUrl: '../../images/6.png'
}, {
  name: '类 型 7',
  coverImgUrl: '../../images/6.png'
}, {
  name: '类 型 8',
  coverImgUrl: '../../images/8.png'
}, {
  name: '类 型 9',
  coverImgUrl: '../../images/9.png'
}
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    touList: _tousList
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

})