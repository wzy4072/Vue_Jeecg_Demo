import { industry } from './FormDesign2/industry.list'
import { liquidation } from './FormDesign2/liquidation.list'
import bankList from './FormDesign2/bankList'
import { resInitialValue, formConfs, formRelevanceConfig } from './formdesign'
let enumItems = {
  em_name1:
    [
      { ename: '少于15人', evalue: 'T' },
      { ename: '15-150人', evalue: 'S' },
      { ename: '150-2000人', evalue: 'M' },
      { ename: '2000人以上', evalue: 'L' },
    ],
  em_name2: [
    { evalue: '3000', ename: '国有企业-内资' },
    { evalue: '3010', ename: '集体企业-内资' },
    { evalue: '3011', ename: '城镇企业' },
    { evalue: '3012', ename: '乡镇企业' },
    { evalue: '3020', ename: '股份合作企业-内资' },
    { evalue: '3031', ename: '国有联营企业' },
    { evalue: '3032', ename: '集体联营企业' },
    { evalue: '3033', ename: '国有与集体联营企业' },
    { evalue: '3039', ename: '其他联营企业' },
    { evalue: '3041', ename: '国有独资公司' },
    { evalue: '3049', ename: '其他有限责任公司' },
    { evalue: '3050', ename: '股份有限公司-内资' },
    { evalue: '3061', ename: '私营独资企业' },
    { evalue: '3062', ename: '私营合伙企业' },
    { evalue: '3063', ename: '私营有限责任公司' },
    { evalue: '3064', ename: '私营股份有限公司' },
    { evalue: '3099', ename: '其他企业-内资' },
    { evalue: '3101', ename: '合资经营企业-港资' },
    { evalue: '3102', ename: '合资经营企业-澳资' },
    { evalue: '3103', ename: '合资经营企业-台资' },
    { evalue: '3104', ename: '合作经营企业-港资' },
    { evalue: '3105', ename: '合作经营企业-澳资' },
    { evalue: '3106', ename: '合作经营企业-台资' },
    { evalue: '3107', ename: '港商独资经营企业' },
    { evalue: '3108', ename: '澳商独资经营企业' },
    { evalue: '3109', ename: '台商独资经营企业' },
    { evalue: '3110', ename: '港商投资股份有限公司' },
    { evalue: '3111', ename: '澳商投资股份有限公司' },
    { evalue: '3112', ename: '台商投资股份有限公司' },
    { evalue: '3201', ename: '中外合资经营企业' },
    { evalue: '3202', ename: '中外合作经营企业' },
    { evalue: '3203', ename: '外资企业' },
    { evalue: '3204', ename: '外商投资股份有限公司' },
  ],
  em_name3: industry,
  em_name4: [
    { evalue: '01', ename: '企业法人' },
    { evalue: '02', ename: '非企业法人' }
  ],
  em_name5: [
    { evalue: '1', ename: '法人亲办' },
    { evalue: '2', ename: '授权经办' }
  ],
  em_name6: [
    { evalue: '1', ename: '法人兼任' },
    { evalue: '2', ename: '经办人兼任' },
    { evalue: '3', ename: '其它' },

  ],
  em_name7: liquidation,

  em_name8: [
    { evalue: "1", ename: '直接或间接' },
    { evalue: "2", ename: '通过人事、财务控制' },
    { evalue: "3", ename: '高级管理人员' },
    { evalue: "4", ename: '普通合伙人' },
    { evalue: "5", ename: '其它' }
  ]
}
export default [
  {
    url: '/api/enumtype/getEnumItems',
    type: 'get',
    response: config => {
      // console.log(config.query.code)
      // let result = enumItems[config.query.code]
      // console.log('enumItems[config.query.code]', result ? result[0] : '??')
      return {
        code: 200,
        data: enumItems[config.query.code]
      }
    }
  },
  {

    url: '/api/formdesign/config',
    type: 'get',
    response: config => {
      return {
        code: 200,
        data: {
          resInitialValue,
          formConfs,
          formRelevanceConfig
        }
      }
    }
  },
  {
    url: '/customer/bankAccount/getBankList',
    type: 'get',
    response: config => {
      return bankList
    }
  },
  {
    url: '/accountCenter/conductFinanceOpening/sendMobile',
    type: 'get',
    response: config => {
      return { code: 200, message: '发送成功！' }
    }
  },




]
