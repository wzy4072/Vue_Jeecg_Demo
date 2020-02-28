/**
 * 事例功能mock模拟后台服务
 * tableData 相当于表和表数据
 * @type {*[]}
 */
var tableData = [
  { id: '000001', testMoney: '3200000', accountName: '平安银行股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'J 金融业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000002', testMoney: '200', accountName: '万科企业股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'K 房地产', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000004', testMoney: '320000', accountName: '深圳中国农大科技股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'C 制造业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000005', testMoney: '100', accountName: '深圳世纪星源股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'N 公共环保', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000006', testMoney: '2030000', accountName: '深圳市振业(集团)股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'K 房地产', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000007', testMoney: '320000', accountName: '深圳市全新好股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'K 房地产', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000008', testMoney: '320000', accountName: '神州高铁技术股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'C 制造业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000009', testMoney: '320000', accountName: '中国宝安集团股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'S 综合', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000010', testMoney: '320000', accountName: '深圳美丽生态股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'E 建筑业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000011', testMoney: '320000', accountName: '深圳市物业发展(集团)股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'K 房地产', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000012', testMoney: '5000000', accountName: '中国南玻集团股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'C 制造业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000014', testMoney: '320000', accountName: '沙河实业股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'K 房地产', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000016', testMoney: '320000', accountName: '康佳集团股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'C 制造业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000017', testMoney: '320000', accountName: '深圳中华自行车(集团)股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'C 制造业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000018', testMoney: '320000', accountName: '神州长城股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'E 建筑业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000019', testMoney: '320000', accountName: '深圳市深粮控股股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'F 批发零售', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000020', testMoney: '320000', accountName: '深圳中恒华发股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'C 制造业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000021', testMoney: '320000', accountName: '深圳长城开发科技股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'C 制造业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000023', testMoney: '320000', accountName: '深圳市天地(集团)股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'C 制造业', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
  { id: '000025', testMoney: '8000000', accountName: '深圳市特力(集团)股份有限公司', accountBankName: '贵州银行XXX分行', ccc: 'F 批发零售', testIdCard: '455411199009011212', email: "xmg@gmail.com", testMoney: "500000", testTelphone: "18565542132", testIdCard: "455411199009011212", testBankCard: "62211247515474545452", testRadio: "2", testCheckbox: ["2", "3"], singleCheckbox: "2", testNumber: "185", testSelectMultiple: ["2", "3"], testSelectSingle: "3", province: ["广东省", "深圳市"], testSwitch: "2", testDatePicker: "2019-12-12" },
]


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
    url: '/demos/regulatoryAccountimportList',
    type: 'post',
    response: config => {
      var mockList = tableData.filter(item => {
        // console.info(config.body.user + '===>' + item.name + '==>' + (config.body.user && config.body.user !== item.name))
        if (config.body.user && config.body.user !== item.name) return false
        return true
      })
      const pageList = mockList.filter((item, index) =>
        index < pageSize * config.body.nowPage && index >= pageSize * (config.body.nowPage - 1)
      )
      pageDataObject.body = pageList
      pageDataObject.total = tableData.length
      pageDataObject.nowPage = config.nowPage
      return {
        errcode: 0,
        errmesg: '查询成功',
        data: pageDataObject
      }
    }
  },
  {
    url: '/demos/addAccount',
    type: 'post',
    response: config => {
      config.body.id = RndId(10) // 生成ID
      tableData.unshift(config.body) // 存入数据
      pageDataObject.total = tableData.length
      return {
        errcode: 0
      }
    }
  },
  {
    url: '/demos/delUser',
    type: 'post',
    response: config => {
      tableData = tableData.filter(item => !config.body.id.includes(item.id))
      pageDataObject.total = tableData.length
      return {
        errcode: 0
      }
    }
  }

  // {
  //   url: '/example/updateUser',
  //   type: 'post',
  //   response: config => {
  //     let tempDate = config.body
  //     for (var index in tableData) {
  //       if (tempDate.id === tableData[index].id) {
  //         tableData[index].name = config.body.name
  //         tableData[index].date = config.body.date
  //         tableData[index].province = config.body.province
  //         tableData[index].city = config.body.city
  //         tableData[index].address = config.body.address
  //       }
  //     }
  //     return {
  //       errcode: 0
  //     }
  //   }
  // }
]
