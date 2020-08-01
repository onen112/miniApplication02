// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // http://musicapi.leanapp.cn/album?id=32311
    poster:'',
    name:"",
    src:"https://music.163.com/song/media/outer/url?id=",
    author:"",
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages();
    var Page = pages[pages.length - 1];//当前页
    var prevPage = pages[pages.length - 2];  //上一个页面
    if(prevPage.data.tag !== 1){
    var url = this.data.src +  prevPage.data.musicList[prevPage.data.tapOn].id + ".mp3";
    console.log(prevPage.data.musicList[prevPage.data.tapOn])
    var url_p = "https://musicapi.leanapp.cn/album?id=" + prevPage.data.musicList[prevPage.data.tapOn].album.id;
    console.log(prevPage.data.musicList[prevPage.data.tapOn].album.id);
    wx.request({
      url: url_p,
      success:(res)=>{
        console.log(res.data.album.blurPicUrl);
        this.setData({
          poster:res.data.album.blurPicUrl,
        })
      }
    })
    this.setData({
      name:prevPage.data.musicList[prevPage.data.tapOn].name,
      src:url,
      poster:url_p
    })
    
  }
  else{
    console.log(prevPage.data.rankList[prevPage.data.tapOn])
    var src = this.data.src + prevPage.data.rankList[prevPage.data.tapOn].id
    this.setData({
      name:prevPage.data.rankList[prevPage.data.tapOn].name,
      poster:prevPage.data.rankList[prevPage.data.tapOn].al.picUrl,
      src:src,
      author:prevPage.data.rankList[prevPage.data.tapOn].ar[0].name,
    })
  }
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