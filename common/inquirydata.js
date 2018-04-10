var inquiryCity = {
    shenzhen:function(number,_this){
        wx.request({
          url: 'http://api.oupag.com/dev/api/shenzhentong.php?cardno='+number,
          success: function (res) {
            _this.setData({
              cardNo:number,
              balance:res.data.card_balance,
              currentBDate:res.data.balance_time,
              outDate:res.data.card_validity
            })
          }
        })
    },
    shanghai:function(number,_this){
        wx.request({
          url: 'http://www.sptcc.com/servlet/CardAmtServelet?arg1='+number,
          success: function (res) {
              let rex = /{.*}/
              let data = JSON.parse(res.data.match(rex)[0])

              console.log(data)

            _this.setData({
              cardNo:number,
              balance:data.balance,
              currentBDate:data.lastdate,
              outDate:''
            })
          }
        })

    }
}

module.exports = inquiryCity;