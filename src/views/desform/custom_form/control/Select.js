

export default (_self, h) => {
  let conf = _self.conf
  let labelName = 'label'
  let valueName = 'value'
  let optionNodes = conf.options.map(v => {
    return h(
      "ASelectOption", {
      props: {
        value: "" + v[valueName]
      },
    },
      v[labelName]
    );
  })

  // 携带了OPTIONS的
  return [
    h(
      "ASelect", {
      props: {
        placeholder: conf.placeholder || "",
      },
      directives: [
        {
          name: "decorator",
          value: [
            conf.name,
            { rules: conf.rules, initialValue: _self.initialValue[conf.name] }
          ]
        }
      ]
    },
      optionNodes
    )
  ];
};

/**
 * 
 * selectOptionType: 1
 * 1 携带OPTIONS
 * 2 使用云平台字典枚举
 */

export let selectConf = {
  // 对应数据库内类型
  type: 'select',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '选择框',
  placeholder: '',
  // 是否显示行内元素
  inlineBlock: false,
  // 是否必填
  require: true,
  // 选项内数据
  items: Array.apply(null, { length: 5 })
    .map((k, v) => {
      return {
        label_value: v + 1,
        label_name: "选项" + (v + 1),
      }
    }),
  // 绑定的值
  value: '',
  // 表单name
  name: '',
  // 验证错误提示信息
  ruleError: '请选择',
  // 是否关联字段
  relation: false,
  // 关联字段name
  relation_name: '',
  // 关联字段value
  relation_value: '',
  // 是否被渲染
  visibility: true
}
