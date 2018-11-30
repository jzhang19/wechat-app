//app.js
App({
  onLaunch: function () {
    wx.setEnableDebug({
      enableDebug: true
    });
  },
  getUserInfo:function(cb){
    
  },
  globalData:{
    userInfo:null
  }
})
