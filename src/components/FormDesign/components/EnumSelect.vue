<script>
import { ajaxGetEnumItems } from '@/api/api'
import { getAction, postAction } from '@/api/manage'

// 组件设计使用说明
/**
 * 1 枚举类
 * 1_1 option数量较多时，应设置showSearch，默认不展示任何选项，只有输入关键词，展示相近的最多15个选项
 * 1_2 option数量不多时，不设置showSearch, 全部选项将渲染
 *
 * 2 后台查询option
 * 2_1 option较少时， 全部展示
 *
 */
export default {
  props: {
    conf: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      options: [],
      backUpOptions: [],
      fetching: false,
      //   selectType: null
    }
  },
  created() {},
  mounted() {
    // 1 枚举类型
    this.getEnumOptions()
    // 判断类型
    // { value: '402361018886', label: '安徽省农村信用社联合社资金清算中心（不转汇）' },

    // if (this.conf.selectOptionEnumCode) {
    //   this.selectType = "enum";
    // }
    // 2 普通url请求类型
    // if (
    //   Object.prototype.toString.call(this.conf.options).slice(8, -1) ===
    //   "Object"
    // ) {
    //   this.selectType = "url";
    //   this.getUrlOptions();
    // }
  },
  methods: {
    handleChange(v, node) {
      // this.$emit("change", {
      //   type: "AsyncSelect",
      //   value: v,
      //   selectOption: node.data.props.option
      // });
      // 抛出的值 要符合antd要求 抛出组件项目的值
      this.$emit('change', v)
    },
    handleSearch(v) {
      // filterOption:false 不能少
      this.options = []
      this.fetching = true
      let filterResult = []
      for (let i = 0; i < this.backUpOptions.length; i++) {
        let option = this.backUpOptions[i]
        if (option.ename.indexOf(v) > -1) {
          filterResult.push(option)
          if (filterResult.length > 15) break
        }
      }
      setTimeout(() => {
        this.fetching = false
        this.options = filterResult
      }, 100)
    },
    getEnumOptions() {
      ajaxGetEnumItems({ code: this.conf.selectOptionEnumCode }).then((res) => {
        if (!res.data) {
          console.error('枚举：', this.conf.selectOptionEnumCode, '列表为空！')
          res.data = []
        }
        // 选项是否特别多 是否支持搜索
        if (this.conf.showSearch) {
          this.backUpOptions = res.data
          if (this.value) {
            for (let i = 0; i < this.backUpOptions.length; i++) {
              if (this.backUpOptions[i].evalue === this.value) {
                this.options = [this.backUpOptions[i]]
                break
              }
            }
          }
        } else {
          this.options = res.data
        }
      })
    },
    /**
     * 默认get
     * 默认取值res.code 200 取值res.data
     * callBack 接收res 需返回list
     *
     */
    // getUrlOptions() {
    //   let { conf } = this;
    //   let action =
    //     conf.options.method && conf.options.method.toUpperCase() === "POST"
    //       ? postAction
    //       : getAction;
    //   action(conf.options.url, {}).then(res => {
    //     if (conf.options.callBack) {
    //       this.options = conf.options.callBack(res);
    //     } else {
    //       if (res.code == 200) {
    //         this.options = res.data;
    //       } else {
    //         this.$message.error("选择候选项获取失败！");
    //       }
    //     }
    //   });
    // }
  },
  render(h) {
    let { conf, options } = this
    function renderOptions() {
    //   let labelKeys = ['ename']
      let valueKey = 'evalue'
      return options.map((option) => {
        // const labelArr = labelKeys.map((labelKey) => option[labelKey])
        return h(
          'aSelectOption',
          {
            props: {
              value: option[valueKey],
              option: option,
            },
          },
          option.ename
        //   labelArr.join('')
        )
      })
    }
    return h(
      'ASelect',
      {
        props: {
          placeholder:
            conf.placeholder === undefined
              ? '请选择' + conf.label
              : conf.placeholder,
          showSearch: conf.showSearch,
          defaultValue: this.value,
          showArrow: conf.showArrow,
          filterOption: false,
          allowClear: conf.allowClear,
        },
        on: {
          search: this.handleSearch,
          change: this.handleChange,
        },
      },
      renderOptions()
    )
  },
}
</script>
<style scoped></style>
