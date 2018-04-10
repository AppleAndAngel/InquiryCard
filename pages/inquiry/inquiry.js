// pages/inquiry/inquiry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputNo:'',
    cityArray:[{
      city:'深圳',
      pinyin:'shenzhen'  
    },{
      city:'上海',
      pinyin:'shanghai'
    }],
    cityIndex:0
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
  inputCardNo(e){
    this.setData({
      inputNo:e.detail.value
    })
  },
  inquiryCardNo(){
    dsd
  },
  bindPickerChange(e){
    this.setData({
      cityIndex:e.detail.value
    })
    console.log(e)
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