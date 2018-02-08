import { Utils } from '../../utils/utils.js';
var utils = new Utils();

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [
      { img_url: '../../imgs/banner/banner1.png' , title: 'title', desc: 'desc'},
      { img_url: '../../imgs/banner/banner2.png' , title: 'title', desc: 'desc'},
      { img_url: '../../imgs/banner/banner3.jpg' , title: 'title', desc: 'desc'}
    ],
    tab: {
      list: [
        { id: 0, title: '首页' },
        { id: 1, title: '女装' },
        { id: 2, title: '包袋' },
        { id: 3, title: '男装' },
        { id: 4, title: '配饰' },
      ]
    },
    brandList: {},
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  openBrandDetail: function(event) {
    var brandId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../brandDetail/brandDetail?brand_id=' + brandId,
    })
  },

  onBannerChange: function (event) {
    console.log(event.detail);
    console.log(event.detail.current);
      if (event.detail && event.detail.current !== undefined) {
          this.setData({
              bannerCurrent: event.detail.current,
          });
      }
  },

  onLoad: function () {

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

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
