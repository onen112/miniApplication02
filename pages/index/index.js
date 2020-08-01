Page({
  data:{
    rankList:[],
    index:0,
  },
  jump:function(e){
    this.setData({
      index:e.currentTarget.dataset.index
    })
  },
  onLoad:function(options){
    wx.request({
      url: "https://musicapi.leanapp.cn/toplist/detail",
      success:(res)=>{
        console.log(res.data.list)
        var topList = [];
        for(var i = 0;i < 4;i++){
          topList[i] = res.data.list[i];
        }
        console.log(topList)
        this.setData({
          rankList:topList,
        })
      }
    })
    // wx.request({
    //   url: "http://musicapi.leanapp.cn/playlist/detail?id=19723756",
    //   success:(res)=>{
    //     console.log(res)

    //   }
    // })
  }
})