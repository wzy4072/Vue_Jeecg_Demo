import designUtil from '@/components/FormDesign/util'

export default (_self, h) => {
  let conf = _self.conf
  return [
    h('ASwitch', {
      props: {
        placeholder: null,
        disabled: conf.disabled,
      },
      directives: [
        {
          name: 'decorator',
          value: [
            conf.name,
            {
              initialValue: designUtil.deepKey(_self.initialValue, conf.name),
              valuePropName: 'checked',
            },
          ],
        },
      ],
    }),
  ]
}

export let inputConf = {
  type: 'switch',
  // 字段名
  name: '',
  label: 'Switch',
  // 是否禁用
  disabled: false,
  required: true,
  rules: [],
  labelCol: null, // FormItem 默认 { span: 6 },
  wrapperCol: null, // FormItem 默认{ span: 6 },
}
