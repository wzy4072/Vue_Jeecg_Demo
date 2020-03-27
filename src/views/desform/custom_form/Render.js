import ItemIcon from './ItemIcon';
import input from './control/Input';
import number from './control/Number';
import checkbox from './control/CheckBox';
import radio from './control/Radio';
import select from './control/Select';
import text from './control/Text';
import cascader from './control/Cascader';
import title from './control/Title';
import hr from './control/Hr';
import p from './control/P';
import uploads from './control/Uploads';
import datepicker from './control/DatePicker';
import address from './control/Address';
import trigger from './config/trigger';
// import AsyncComponent from './control/AsyncComponent.vue' // 
import AsyncSelect from "./components/AsyncSelect"; // 枚举下拉

const form_item = {
  title,
  hr,
  p,
  input,
  number,
  select,
  radio,
  checkbox,
  datepicker,
  cascader,
  address,
  uploads,
  text,
};

const displayControl = (_self, sortableItem, name, value) => {
  // 默认不显示
  let display = false;
  for (let i in sortableItem) {
    // 循环出sortableItem内被关联字段并且其状态为显示并且其值与用户预设被关联字段值匹配
    // 不匹配,进行下一次判断
    if (sortableItem[i].name != name || !sortableItem[i].visibility) {
      continue;
    }
    // checkbox的value为数组, 判断是否存在  非数组直接比对字符串
    if ((Array.isArray(sortableItem[i].value) && sortableItem[i].value.indexOf(value) >= 0) ||
      sortableItem[i].value == value) {
      display = true;
      // name唯一,已匹配则不必循环之后数据
      break;
    }
  }
  return display;
}

export default {
  name: 'renders',
  components: { AsyncSelect },
  render(h) {
    var $this = this;
    // 获取当前控件渲染
    const arr = (form_item[this.conf.type.toLowerCase()] && form_item[this.conf.type.toLowerCase()](this, h)) || [];

    // 拥有绑定的值，需回填到控件
    this.$set(this.conf, 'value', typeof this.value !== "undefined" ? this.value : this.conf.value);
    // 显示配置按钮并且控件允许被配置
    const item_icon = this.configIcon && this.conf.config ? ItemIcon(this, h) : [];
    // 已被绑定name,且require为必填,视为校验字段
    const validate = !!this.conf.name && !!this.conf.require;
    // 非 Title Hr P 需要FormItem
    if (['title', 'hr', 'p'].indexOf((this.conf.type.toLowerCase())) < 0) {
      // 关联的组件判断是否展示
      if (this.conf.relation && !displayControl(this, this.sortableItem, this.conf.relation_name, this.conf.relation_value)) {
        // 隐藏该控件并设置该控件标记为隐藏
        this.$emit('changeVisibility', this.index, false);
        return h("span");
      }
      // 设置该控件标记为显示
      this.$emit('changeVisibility', this.index, true);
      let FormItem = {
        props: {
          label: this.conf.label ? this.conf.label + '：' : '',
          labelCol: this.conf.labelCol || { span: 5 },  // 局部覆盖全局
          wrapperCol: this.conf.wrapperCol || { span: 12 }, // 局部覆盖全局
          trigger: this.conf.trigger || 'change'
        }
      };
      if (this.conf.type == 'AsyncSelect') {
        let AnyNode = h(this.conf.type, {
          props: {
            conf: this.conf
          },
          directives: [
            {
              name: "decorator",
              value: [
                this.conf.name,
                { rules: this.conf.rules || [], initialValue: this.initialValue[this.conf.name] }
              ]
            }
          ]
        })
        return h("AFormItem", FormItem, [AnyNode])
      }
      return h("AFormItem", FormItem, arr.concat(item_icon));
    } else {
      return h(
        "div", {
        style: {
          'position': 'relative'
        },
        class: {
          items: true
        },
      },
        arr.concat(item_icon)
      );
    }
  },
  props: {
    // 当前控件的配置
    conf: {
      type: Object,
      default() {
        return {};
      }
    },
    // 当前控件的index,config 和 delete 会用到
    index: {
      type: Number,
      default: 0
    },
    // 整个表单的数据
    initialValue: {
      type: Object,
      default() {
        return {}
      }
    },
    // 是否显示配置按钮
    configIcon: {
      type: Boolean,
      default: false
    },
    // 当前控件绑定的值 方便数据回填
    value: [String, Number, Array],
    // 当前被clone控件列表
    sortableItem: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}