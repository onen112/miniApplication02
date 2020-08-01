// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url_mus:"",
    rankList:[],
    rankOn:[],
    tapOn:0,
    tag:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前页
    var prevPage = pages[pages.length - 2];  //上一个页面
    var rankArr = [];
    this.setData({
      rankOn:prevPage.data.rankList[prevPage.data.index],
    })
    // console.log(prevPage.data.rankList[prevPage.data.index])
    var url = "https://musicapi.leanapp.cn/playlist/detail?id=" + prevPage.data.rankList[prevPage.data.index].id;
    var that = this;
    wx.request({
      url: "https://musicapi.leanapp.cn/playlist/detail",
      data:{
        id:prevPage.data.rankList[prevPage.data.index].id,
      },
      success:(res)=>{
        // console.log(res.data.privileges);
        var url_mus = ""; 
        var url_temp = "https://musicapi.leanapp.cn/song/detail?ids="; 
        for(var i = 0; i < res.data.privileges.length;i++){
          url_mus = url_temp + res.data.privileges[i].id;
          var j = 0;
          wx.request({
            url: url_mus,
            success:(rest)=>{
              rankArr[j] = rest.data.songs[0];
              j++;
              if(j == 100){
                that.setData({
                  rankList:rankArr,
                })
              }
            }
          })
          
        }
        console.log(rankArr)
      }
    })
  },
  jump:function(e){
    console.log(e.currentTarget.dataset.index);
    this.setData({
      tapOn:e.currentTarget.dataset.index,
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