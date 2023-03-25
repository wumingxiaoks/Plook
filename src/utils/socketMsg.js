var data = {
    "type":0,
    "data":null,
    "roomId":null,
    "ownerId":null
}

//房间相关
const roomFun = {
    data,
    init:()=> data.type =1, //视频相关
    //获取所有房间
    getAll(){
        this.init()
        this.data.data = {"type":0}
        return JSON.stringify(data)
    },
    //进入房间
    joinRoom(){
        this.init()
        this.data.data = {"type":1}
        //this.data.roomId = roomId //房间加入
        return JSON.stringify(data)
    }
    
}

//视频相关
const videoFun = {
  data,
  init:()=> data.type =2, //视频相关
  //播放事件
  play(event){
    this.init()
    this.data.data = {"type":0,"play":event} //暂停or播放
    return JSON.stringify(data)
  },
  //跳转事件
  reach(time){
    this.init()
    this.data.data = {"type":1,"reach":time} //暂停or播放
    return JSON.stringify(data)
  },
  //切换资源
  src(src){
    this.init()
    this.data.data = {"type":2,"src":src} //暂停or播放
    return JSON.stringify(data)    
  }
}

//消息相关
const chatFun = {
  data,
  init:()=> data.type =3, //消息相关
  //发送消息
  send(msg){
    this.init()
    this.data.data = {"type":0,"msg":msg}
    return JSON.stringify(data)    
  }

}

const socketMsg = {
    data,
  //初始化参数
  init:function(userInfo){
    this.data.ownerId = userInfo.userName
    this.data.roomId = userInfo.roomId
  },
  roomFun,//房间相关
  videoFun,//视频
  chatFun,//消息

}


export default socketMsg