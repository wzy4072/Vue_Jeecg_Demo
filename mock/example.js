/**
 * 事例功能mock模拟后台服务
 * tableData 相当于表和表数据
 * @type {*[]}
 */
var tableData = [
  { id: 1, date: '2019-08-13', name: 'li Jan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 2, date: '2019-08-23', name: 'Aan Lan', address: '贵阳市观山湖区大王路小王村99号', province: '贵州省', city: '贵阳市' },
  { id: 3, date: '2019-02-09', name: 'Bi Fan', address: '上海市浦东新区张杨北路 距离市中心约15509米', province: '上海市', city: '上海市' },
  { id: 4, date: '2019-01-29', name: 'Dan Chan', address: '遵义市开发新区第三人民广场164号', province: '贵州省', city: '遵义市' },
  { id: 5, date: '2018-08-13', name: 'li Jan', address: '贵阳市观山湖区北京路180号', province: '贵州省', city: '贵阳市' },
  { id: 6, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 7, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 8, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 9, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 10, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 11, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 12, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 13, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 14, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' },
  { id: 15, date: '2012-08-23', name: 'Kan Lan', address: '广东省广州市越秀区中山六路109距离市中心约6485米', province: '广东省', city: '广州市' }]

var pageSize = 6 // 每页显示数量
var total = tableData.length // 总数据条数
var nowPage = 1 // 当前页面

var pageDataObject = {
  body: tableData,
  pageSize: pageSize,
  total: total,
  nowPage: nowPage
}

function RndId(n) {
  let id = ''
  for (var i = 0; i < n; i++) {
    id += Math.floor(Math.random() * 100000)
    return id
  }
}

/**
 * url:拦截的地址
 * type:提交类型
 * response:请求处理返回
 */
export default [
  {
    url: '/example/userInfo',
    type: 'post',
    response: config => {
      var mockList = tableData.filter(item => {
        // console.info(config.body.user + '===>' + item.name + '==>' + (config.body.user && config.body.user !== item.name))
        if (config.body.user && config.body.user !== item.name) return false
        return true
      })
      // console.info(mockList)
      const pageList = mockList.filter((item, index) =>
        index < pageSize * config.body.nowPage && index >= pageSize * (config.body.nowPage - 1)
      )
      pageDataObject.body = pageList
      pageDataObject.total = mockList.length
      pageDataObject.nowPage = config.nowPage
      return {
        errcode: 0,
        errmesg: '查询成功',
        data: pageDataObject
      }
    }
  },
  {
    url: '/example/addUser',
    type: 'post',
    response: config => {
      config.body.id = RndId(10) // 生成ID
      tableData.push(config.body) // 存入数据
      pageDataObject.total = tableData.length
      return {
        errcode: 0
      }
    }
  },
  {
    url: '/example/delUser',
    type: 'post',
    response: config => {
      tableData = tableData.filter(item => !config.body.id.includes(item.id))
      pageDataObject.total = tableData.length
      return {
        errcode:0
      }
    }
  },
  {
    url: '/example/updateUser',
    type: 'post',
    response: config => {
      let tempDate = config.body
      for (var index in tableData) {
        if (tempDate.id === tableData[index].id) {
          tableData[index].name = config.body.name
          tableData[index].date = config.body.date
          tableData[index].province = config.body.province
          tableData[index].city = config.body.city
          tableData[index].address = config.body.address
        }
      }
      return {
        errcode: 0
      }
    }
  }

]
