// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[],
    musicname:'',
    theUrl:'https://musicapi.leanapp.cn/search?keywords=',
    tapOn:0,
    hotSearch:[],
    isShow:true,
    album:'',
  },
  input:function(e){
    this.setData({
      musicname:e.detail.value,
    })
    if(this.data.musicname === ''){
      this.setData({
        isShow:true,
        musicList:[],
      })
    }
  },
  junp(e){
    console.log(e.currentTarget.dataset.index);
    this.setData({
      tapOn:e.currentTarget.dataset.index,
    })
  },
  search:function(){
    if(this.data.musicname !== ''){
    // var url = this.data.theUrl + "'"+ this.data.musicname + "'";
    wx.request({
      url:"https://musicapi.leanapp.cn/search",
      data:{
        keywords:this.data.musicname
      },
      // url: url,
      success:(res)=>{
        console.log(res.data)
        this.setData({
          musicList:res.data.result.songs,
          isShow:false,
        })
      }
    })
  }
  },
  toHotSearch:function(e){
    console.log(e.currentTarget.dataset.name);
    this.setData({
      musicname:e.currentTarget.dataset.name,
    })
    this.search();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://musicapi.leanapp.cn/search/hot/detail",
      success:(res)=>{
        console.log(res.data.result.hots)
        this.setData({
          hotSearch:res.data.result.hots,
        })
      }
    })
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