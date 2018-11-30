var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk = null;

Page({
    data: {
        latitude: '',
        longitude: ''
    },
    onLoad: function () {
        var self = this;

        qqmapsdk = new QQMapWX({
            key: 'EZ6BZ-3GE3K-PJ5J7-AEPW5-IOMCO-E4F6J'
        });

        wx.getLocation({
            type: 'gcj02',
            success: function (res) {
                console.log("Get Location: ", res);
                self.setData({ latitude: res.latitude, longitude: res.longitude })
            }
        })
        
    },
    getSuggestions: function(e){
        var input = e.detail.value;
        var self = this;
        var filteredData = lodash.filter(self.data.areas, function(area){
            return area.fullname.includes(input);
        });
        self.setData({
            suggestions: filteredData,
            searchValue: input
        });
    },
    openLocation: function(e) {
        const latitude = this.data.latitude
        const longitude = this.data.longitude
        wx.openLocation({
            latitude,
            longitude,
            scale: 18
        });
    },
    chooseLocation: function(e) {
        wx.chooseLocation({
            success: function(res) {
                console.log("Choosen Location: ", res);
            }
        });
    }
})
