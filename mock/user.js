

let loginResponse = {
  "success": true,
  "message": "登录成功",
  "code": 200,
  "result": {
    "multi_depart": 0,
    "userInfo": {
      "id": "a75d45a015c44384a04449ee80dc3503",
      "username": "jeecg",
      "realname": "jeecg测试",
      "avatar": "user/20190220/e1fe9925bc315c60addea1b98eb1cb1349547719_1550656892940.jpg",
      "birthday": null,
      "sex": 2,
      "email": "418799587@qq.com",
      "phone": "",
      "orgCode": "A01A04",
      "status": 1,
      "delFlag": "0",
      "workNo": "A002",
      "post": "002",
      "telephone": null,
      "createBy": "admin",
      "createTime": "2019-02-13 16:02:36",
      "updateBy": "admin",
      "updateTime": "2020-02-24 15:32:08",
      "activitiSync": "1",
      "identity": 1,
      "departIds": ""
    },
    "departs": [],
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODI4NzI2MDIsInVzZXJuYW1lIjoiamVlY2cifQ.5cY5f945jnPg4jpaUKt-RfQxN7dsSeEMlPNhIPvTCmw"
  },
  "timestamp": 1582870802249
}
let loginfoResponse = {
  "success": true,
  "message": "登录成功",
  "code": 200,
  "result": {
    "totalVisitCount": 265905,
    "todayVisitCount": 873,
    "todayIp": 494
  },
  "timestamp": 1582869366053
}
let visitInfoResponse = { "success": true, "message": "操作成功！", "code": 0, "result": [{ "tian": "2020-02-22", "ip": 531, "visit": 976, "type": "02-22" }, { "tian": "2020-02-23", "ip": 474, "visit": 935, "type": "02-23" }, { "tian": "2020-02-24", "ip": 1569, "visit": 2784, "type": "02-24" }, { "tian": "2020-02-25", "ip": 1167, "visit": 2457, "type": "02-25" }, { "tian": "2020-02-26", "ip": 1120, "visit": 2375, "type": "02-26" }, { "tian": "2020-02-27", "ip": 1051, "visit": 2284, "type": "02-27" }, { "tian": "2020-02-28", "ip": 529, "visit": 952, "type": "02-28" }], "timestamp": 1582870803703 }
let getUserPermissionByToken = {
  "success": true,
  "message": "查询成功",
  "code": 200,
  "result": {
    "allAuth": [],
    "auth": [],
    "menu": [
      {
        "redirect": null,
        "path": "/dashboard/analysis",
        "component": "dashboard/Analysis",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "home",
          "title": "首页"
        },
        "name": "dashboard-analysis",
        "id": "9502685863ab87f0ad1134142788a385"
      },
      {
        "redirect": "2",
        "path": "/desform",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/online/desform",
            "component": "desform/DesignFormList",
            "route": "1",
            "meta": {
              "keepAlive": true,
              "internalOrExternal": false,
              "title": "表单设计器"
            },
            "name": "online-desform",
            "id": "c3b050978256957869d860d066bf4049"
          },
          {
            "path": "/desform/preview",
            "component": "desform/DesignPreview",
            "route": "1",
            "meta": {
              "keepAlive": true,
              "internalOrExternal": false,
              "title": "表单渲染器"
            },
            "name": "DesignPreview",
            "id": "c3b050978256957869d860d066bf4050"
          },
          {
            "path": "/desform/DraggableTest",
            "component": "DraggableTest/draggable1",
            "route": "1",
            "meta": {
              "keepAlive": true,
              "internalOrExternal": false,
              "title": "拖拽实验"
            },
            "name": "DraggableTest",
            "id": "c3b050978256957869d860d066bf4051"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "gold",
          "title": "表单设计"
        },
        "name": "desform",
        "id": "98ab93226c45e39dc2bc9aa67b377183"
      },
      {
        "redirect": null,
        "path": "/task",
        "component": "layouts/RouteView",
        "route": "1",
        "children": [
          {
            "path": "/bpm/task/MyComponents",
            "component": "Demos/myComponents",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "我的组件"
            },
            "name": "bpm-task-myComponents",
            "id": "1939e035e803a99ceecb6f5563570fb3"
          },
          {
            "path": "/bpm/task/demo1",
            "component": "Demos/demo1",
            "route": "2",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "练习页面"
            },
            "name": "bpm-task-demo1",
            "id": "1939e035e803a99ceecb6f5563570fb4"
          }
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "share-alt",
          "title": "个人办公"
        },
        "name": "task",
        "id": "baf16b7174bd821b6bab23fa9abb200d"
      },


      {
        "redirect": null,
        "path": "/splunk",
        "component": "layouts/RouteView",
        "route": "1",
        "name": "splunk0512",
        "id": "splunk0512",
        "children": [
          {
            "path": "/splunk/login",
            "component": "Splunk/login",
            "route": "1",
            "meta": {
              "keepAlive": false,
              "internalOrExternal": false,
              "title": "登录"
            },
            "name": "splunk0512login",
            "id": "splunk0512login"
          },
     
        ],
        "meta": {
          "keepAlive": false,
          "internalOrExternal": false,
          "icon": "share-alt",
          "title": "Splunk"
        }       
      },
      {
        "redirect": null, "path": "/message", "component": "layouts/RouteView", "route": "1",
        "children": [
          {
            "path": "/modules/message/sysMessageList", "component": "modules/message/SysMessageList", "route": "1",
            "meta":
              { "keepAlive": false, "internalOrExternal": false, "title": "消息管理" }, "name": "modules-message-sysMessageList", "id": "944abf0a8fc22fe1f1154a389a574154"
          }],
        "meta":
          { "keepAlive": false, "internalOrExternal": false, "icon": "message", "title": "消息中心" },
        "name": "message", "id": "5c8042bd6c601270b2bbd9b20bccc68b"
      }
    ]
  },
  "timestamp": 1582869363800
}
let listByUser = { "success": true, "message": "操作成功！", "code": 0, "result": { "anntMsgTotal": 0, "sysMsgList": [], "sysMsgTotal": 0, "anntMsgList": [] }, "timestamp": 1582869366071 }
export default [
  {
    url: '/sys/login',
    type: 'post',
    response: config => {
      return loginResponse
    }
  },
  {
    url: '/sys/loginfo',
    type: 'get',
    response: config => {
      return loginfoResponse
    }
  },
  {
    url: '/sys/visitInfo',
    type: 'get',
    response: config => {
      return visitInfoResponse
    }
  },
  {
    url: '/sys/permission/getUserPermissionByToken',
    type: 'get',
    response: config => {
      return getUserPermissionByToken
    }
  },
  {
    url: '/sys/annountCement/listByUser',
    type: 'get',
    response: config => {
      return listByUser
    }
  },


]
