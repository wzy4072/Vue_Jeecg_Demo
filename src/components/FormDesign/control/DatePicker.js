import designUtil from '@/components/FormDesign/util'
import moment from 'moment';
export default (_self, h) => {
  let conf = _self.conf
  let dateLimit = {
    disabledDateBefore(current) {
      //只能选择当前日期前的日期

      return current && current > moment().endOf('day')
    },
    disabledDateAfter(current) {
      //只能选择当前日期后的日期
      return current && current < moment().endOf('day')
    }
  }
  return [
    h('ADatePicker', {
      props: {
        placeholder: conf.placeholder || "请选择日期",
        disabledDate: dateLimit[conf.disabledDate] || null,
        format: conf.dateFormat,
        // open:false
      },
      on: {
      },
      directives: [
        {
          name: "decorator",
          value: [
            conf.name,
            { rules: conf.rules, initialValue:  designUtil.deepKey(_self.initialValue, conf.name) }
          ]
        }
      ]
    })
  ]
}


export let datePickerConf = {
  // 对应数据库内类型
  type: 'datepicker',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '时间选择',
  placeholder: '请选择日期',
  // 是否显示行内元素
  inlineBlock: false,
  // 是否必填
  require: true,
  // 表单name
  name: '',
  // 绑定的值
  value: "",
  // 验证错误提示信息
  ruleError: '选项不能为空',
  // 是否关联字段
  relation: false,
  // 关联字段name
  relation_name: '',
  // 关联字段value
  relation_value: '',
  // 是否被渲染
  visibility: true,
  // 是否需要时分
  format: 'yyyy年MM月dd日'
}
