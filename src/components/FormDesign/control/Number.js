export default (_self, h) => {
  let conf = _self.conf
  return [
    h('AInputNumber', {
      props: {
        placeholder: conf.placeholder,
        disabled: conf.disabled,
        min: conf.min,
        max: conf.max,
        size: conf.size,
        step: conf.step
      },
      directives: [
        {
          name: "decorator",
          value: [
            conf.name,
            { rules: conf.rules || null, initialValue:  eval("_self.initialValue." + conf.name) }
          ]
        }
      ]
    })
  ];
};


export let inputConf = {
  // 对应数据库内类型
  type: 'number',
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '输入框',
  placeholder: '',
  // 是否显示行内元素
  inlineBlock: false,
  // 是否必填
  require: true,
  // 最大长度
  maxLength: 20,
  // 选项内数据
  items: [{ "label_value": null, "label_name": "" }],
  value: '',
  // 表单name
  name: '',
  // 验证错误提示信息
  ruleError: '该字段不能为空',
  // 是否关联字段
  relation: false,
  // 关联字段name
  relation_name: '',
  // 关联字段value
  relation_value: '',
  // 是否被渲染
  visibility: true
}
