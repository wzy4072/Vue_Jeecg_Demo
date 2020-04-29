import designUtil from '@/components/FormDesign/util'

export default (_self, h) => {
  let conf = _self.conf
  return [h('span', designUtil.deepKey(_self.initialValue, conf.name))]
}

export let inputConf = {
  type: 'title',
  // 字段名
  name: '',
  label: 'Title',
  labelCol: null, // FormItem 默认 { span: 6 },
  wrapperCol: null, // FormItem 默认{ span: 6 },
}
