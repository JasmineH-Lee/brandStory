import { Utils } from '../../utils/utils.js';
var utils = new Utils();
var WxParse = require('../../wxParse/wxParse.js');

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
    pageData: {
      "isHistory": true,
      "isOpinion": true
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

  openHistory: function () {
    console.log(this.data.pageData.isHistory);
    if (this.data.pageData.isHistory === true) {
      // this.data.pageData.isHistory = false;
      this.setData({
        'pageData.isHistory': false
      })
    } else {
      this.setData({
        'pageData.isHistory': true
      })
    }
  },
  openOpinion: function () {
    console.log(this.data.pageData.isOpinion);
    if (this.data.pageData.isOpinion === true) {
      this.setData({
        'pageData.isOpinion': false
      })
    } else {
      this.setData({
        'pageData.isOpinion': true
      })
    }
  },

  openBrandStory: function (options) {
    var brandId = options.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../brandStory/brandStory?brand_id=' + brandId,
    })
  },

  openBrandIdentify: function (options) {
    var brandId = options.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../brandIdentify/brandIdentify?brand_id=' + brandId,
    })
  },

  goodDetail: function () {
    console.log('good-detail');
    wx.navigateTo({
      url: '../goodDetail/goodDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var brandId = options.brand_id;

    wx.showLoading({
      title: '加载中',
    })

    // 获取商品详情
    var params = {
      url: 'brand/getBrandInfoByBrandId',
      data: {
        brand_id: brandId
      }
    };
    utils.requestHttp(params, (res) => {
      console.log(res.data);
      var tmp = {
        year: res.data.create_year,
        creator: res.data.brand_founder,
        area: res.data.brand_area,
        culture: res.data.slogan,
        design: res.data.design_idea,
        biz_scope: res.data.major_operate,
        factory: res.data.company,
        official_site: res.data.official_website,
        history: res.data.born_history,
        brand_story: res.data.brand_story,
        brand_id: res.data.brand_id,
        brand_name: res.data.brand_name,
        brand_image_big: res.data.brand_image_big
      }

      this.setData({
        'brandDetail': tmp,
      });
      WxParse.wxParse('born_history', 'html', res.data.born_history, this, 5);
      WxParse.wxParse('consume_suggest', 'html', res.data.consume_suggest, this, 5);

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