import { Utils } from '../../utils/utils.js';
var utils = new Utils();

// pages/brandList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  searchData: '',
  brandList: '',
  },

  cancelSearch: function (e) {
    wx.navigateBack({});
  },

  resetSearch: function (e) {
    console.log('reset');
    this.setData({
      scrollTop: 0,
      searchData: '',
    });
  },
  openBrandDetail: function (event) {
    var brandId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../brandDetail/brandDetail?brand_id=' + brandId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })

    // 请求接口，获取品牌数据
    var params = {
      url: 'brand/getBrandList'
    };
    utils.requestHttp(params, (res) => {
      this.setData({
        'brandList': res.data,
      });
      wx.hideLoading();
    });
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