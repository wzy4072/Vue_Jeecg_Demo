import ItemIcon from './ItemIcon'
import input from './control/Input'
import number from './control/Number'
import switchs from './control/Switch'
import checkbox from './control/CheckBox'
import radio from './control/Radio'
import select from './control/Select'
import text from './control/Text'
import cascader from './control/Cascader'
import title from './control/Title'
import hr from './control/Hr'
import p from './control/P'
import uploads from './control/Uploads'
import datepicker from './control/DatePicker'
import address from './control/Address'
import trigger from './config/trigger'
// import AsyncComponent from './control/AsyncComponent.vue' //
import AsyncSelect from './components/AsyncSelect' // 枚举下拉
import EnumSelect from './components/EnumSelect' // 枚举下拉
import AddressCascader from './components/AddressCascader' //省市区街级联
import Grid from './components/Grid'
import Tabs from './components/Tabs'
import MobileVerifi from './components/MobileVerifi'
import designUtil from '@/components/FormDesign/util'

const form_item = {
  title,
  hr,
  p,
  input,
  switchs,
  number,
  select,
  radio,
  checkbox,
  datepicker,
  cascader,
  address,
  uploads,
  text,
}

const displayControl = (_self, sortableItem, name, value) => {
  // 默认不显示
  let display = false
  for (let i in sortableItem) {
    // 循环出sortableItem内被关联字段并且其状态为显示并且其值与用户预设被关联字段值匹配
    // 不匹配,进行下一次判断
    if (sortableItem[i].name != name || !sortableItem[i].visibility) {
      continue
    }
    // checkbox的value为数组, 判断是否存在  非数组直接比对字符串
    if (
      (Array.isArray(sortableItem[i].value) &&
        sortableItem[i].value.indexOf(value) >= 0) ||
      sortableItem[i].value == value
    ) {
      display = true
      // name唯一,已匹配则不必循环之后数据
      break
    }
  }
  return display
}

export default {
  name: 'renders',
  components: {
    EnumSelect,
    AsyncSelect,
    AddressCascader,
    Grid,
    Tabs,
    MobileVerifi,
  },
  render(h) {
    // 获取当前控件渲染
    const arr =
      (form_item[this.conf.type.toLowerCase()] &&
        form_item[this.conf.type.toLowerCase()](this, h)) ||
      []
    // const item_icon = this.configIcon ? ItemIcon(this, h) : [];
    let FormItem = {
      props: {
        label: this.conf.label ? this.conf.label + '：' : '',
        labelCol: this.conf.labelCol || { span: 5 }, // 局部覆盖全局
        wrapperCol: this.conf.wrapperCol || { span: 12 }, // 局部覆盖全局
        trigger: this.conf.trigger || 'change',
      },
    }

    if (['grid', 'tabs'].includes(this.conf.type)) {
      const tagName = this.conf.type
      return (
        <tagName
          conf={this.conf}
          params={this.params}
          initialValue={this.initialValue}
          onchange={(v) => {
            this.$emit('change', v)
          }}
        />
      )
    }

    // 正则处理
    // r.pattern = '/' + r.pattern.replace(/\*|\.|\?|\+|\$|\^|\||\\|\/|\[|\]|\(|\)|\{|\}/g, "\\$&") + '/'

    if (
      ['EnumSelect', 'AsyncSelect', 'AddressCascader', 'MobileVerifi'].includes(
        this.conf.type
      )
    ) {
      // params 目前只有 AddressCascader 请求时需要传递 financeNo
      let AnyNode = h(this.conf.type, {
        props: {
          conf: this.conf,
          params: this.params,
        },
        on: {
          change: (v) => {
            // let emitValue = {}
            // if (Object.prototype.toString.call(v).slice(8, -1) === "Object" && v.type == 'AsyncSelect') {
            //   emitValue = { name: this.conf.name, value: v.value, selectOption: v.selectOption }
            // } else {
            //   emitValue = { name: this.conf.name, value: v, }
            // }
            // console.log(emitValue)
            this.$emit('change', { name: this.conf.name, value: v })
          },
        },
        directives: [
          {
            name: 'decorator',
            value: [
              this.conf.name,
              {
                rules: this.conf.rules || [],
                initialValue: eval('this.initialValue.' + this.conf.name),
              },
            ],
          },
        ],
      })
      return h('AFormItem', FormItem, [AnyNode])
    }
    if (['rawHTML'].includes(this.conf.type)) {
      return h('div', {
        domProps: {
          innerHTML: this.conf.content,
        },
      })
    }
    return h('AFormItem', FormItem, arr)
  },
  props: {
    // 当前控件的配置
    conf: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    params: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    // 当前控件的index,config 和 delete 会用到
    index: {
      type: Number,
      default: 0,
    },
    // 整个表单的数据
    initialValue: {
      type: Object,
      default() {
        return {}
      },
    },
    // 是否显示配置按钮
    configIcon: {
      type: Boolean,
      default: false,
    },
    // 当前控件绑定的值 方便数据回填
    value: [String, Number, Array],
    // 当前被clone控件列表
    sortableItem: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
