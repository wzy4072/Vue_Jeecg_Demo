import designUtil from '@/components/FormDesign/util'


export default (_self, h) => {
  let conf = _self.conf
  return [
    h('AInput', {
      props: {
        placeholder: conf.placeholder === undefined ? ('请输入' + conf.label) : conf.placeholder,
        disabled: conf.disabled,
        allowClear: conf.allowClear
      },
      directives: [
        {
          name: "decorator",
          value: [
            conf.name,
            { rules: designUtil.getRules(conf), initialValue: eval("_self.initialValue." + conf.name) }
          ]
        }
      ]
    })
  ];
};


export let inputConf = {
  type: 'input',
  // 字段名
  name: '',
  label: 'Input',
  // 是否是配置页面  
  config: true,
  // 是否禁用
  disabled: false,
  required: true,
  rules: [],
  labelCol: null, // FormItem 默认 { span: 6 },
  wrapperCol: null // FormItem 默认{ span: 6 },
}
