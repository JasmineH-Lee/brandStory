// pages/goodDetail/goodDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      { img_url: '/imgs/goodDetail/banner/33.jpeg' },
      { img_url: '/imgs/goodDetail/banner/36.jpeg' },
      { img_url: '/imgs/goodDetail/banner/34.jpeg' },
      { img_url: '/imgs/goodDetail/banner/31.jpeg' },
      { img_url: '/imgs/goodDetail/banner/35.jpeg' },
      { img_url: '/imgs/goodDetail/banner/32.jpeg' },
    ],
    contents: [
      { img_url: '/imgs/goodDetail/contents/27.jpeg' },
      { img_url: '/imgs/goodDetail/contents/16.jpeg' },
      { img_url: '/imgs/goodDetail/contents/21.jpeg' },
      { img_url: '/imgs/goodDetail/contents/22.jpeg' },
      { img_url: '/imgs/goodDetail/contents/18.jpeg' },
      { img_url: '/imgs/goodDetail/contents/28.jpeg' },
      { img_url: '/imgs/goodDetail/contents/23.jpeg' },
      { img_url: '/imgs/goodDetail/contents/17.jpeg' },
      { img_url: '/imgs/goodDetail/contents/38.jpeg' },
      { img_url: '/imgs/goodDetail/contents/29.jpeg' },
      { img_url: '/imgs/goodDetail/contents/25.jpeg' },
      { img_url: '/imgs/goodDetail/contents/20.jpeg' },
      { img_url: '/imgs/goodDetail/contents/26.jpeg' },
    ],
    imgUrls: [
'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=2c166c600cd162d991e36a4e70b6c289/6a600c338744ebf83452469bdff9d72a6059a776.jpg',   'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=d9846b4d8b1001e95a311c5dd9671089/95eef01f3a292df59ab68eb1ba315c6034a87318.jpg',       'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=6418af39bb315c60579863bdecd8a076/c83d70cf3bc79f3d7c3ae71cbda1cd11738b29c6.jpg'
    ],
    good: {
      brand: 'CHANEL',
      name: 'jjjdigjerifrgdzfgsrfeyet',
      price: '111111.00',
      describe: 'jjjfdsassssssssssssssssssssssss'
    }
  },

  viewImage: function (e) {
    wx.previewImage({
      urls: this.data.imgUrls,
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