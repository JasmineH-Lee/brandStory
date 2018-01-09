class Utils {
  constructor() {
    this.serviceUrl = "https://service.hkhand.com/";
  }

  requestHttp(params, callback) {
    var that = this;
    var url = this.serviceUrl + params.url;

    if (!params.method) {
      params.method = 'GET';
    }

    wx.request({
      url: url,
      data: params.data,
      method: params.method,
      dataType: 'json',
      success: function (res) {
        callback(res.data);
      }
    });
  }

  getOpenid() {

    var openid = wx.getStorageSync('openid');

    if (!openid) {
      this.login();
      openid = wx.getStorageSync('openid');
    }

    return openid;
  }

  login() {
    wx.login({
      success: function (res) {

        if (res.code) {

          //鍙戣捣缃戠粶璇锋眰
          wx.request({
            url: 'https://service.hkhand.com/shop/mini/login',
            data: {
              code: res.code
            },
            success: function (loginRet) {

              if (loginRet.data.status) {
                var openid = loginRet.data.data.openid;
                var session_key = loginRet.data.data.session_key;
                wx.setStorageSync('openid', openid)
              }
            }
          })
        }
      }
    });
  }
}
export { Utils };