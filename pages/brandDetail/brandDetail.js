// pages/brandDetail/brandDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brandDetail: {
      year: '1910年',
      creator: 'Gabrielle Chanel',
      area:'法国巴黎',
      factory: '123',
      biz_scope: '高端皮包香水生产',
      culture: '流行稍纵即逝，风格永存',
      design: '高雅、简约、精美',
      official_site: 'http://www.chanel.com/'
    },
    goodsClassicList: [
      { img: '../../imgs/test/jasmine.png', name: '123' },
      { img: '../../imgs/test/jasmine.png', name: '123' },
      { img: '../../imgs/test/jasmine.png', name: '123' },
      { img: '../../imgs/test/jasmine.png', name: '123' },
    ],
    goodsHotList: [
      { img: '../../imgs/test/jasmine.png', name: '123' },
      { img: '../../imgs/test/jasmine.png', name: '123' },
      { img: '../../imgs/test/jasmine.png', name: '123' },
      { img: '../../imgs/test/jasmine.png', name: '123' },
    ],
  },

  openBrandStory: function () {
    console.log('story');
    wx.redirectTo({
      url: '../brandStory/brandStory',
    })
  },

  openBrandIdentify: function () {
    console.log('identify');
    wx.redirectTo({
      url: '../brandIdentify/brandIdentify',
    })
  },

  goodDetail: function () {
    console.log('good-detail');
    wx.redirectTo({
      url: '../goodDetail/goodDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})