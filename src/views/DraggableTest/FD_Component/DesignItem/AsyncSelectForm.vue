<template>
  <a-form
    :form="form"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 12 }"
    ref="form"
    layout="horizontal"
  >
    <renders
      v-for="(element, index) in formConfs"
      :key="element.type + index"
      :index="index"
      :conf="element"
      :initialValue="propData"
      :sortableItem="formConfs"
      :params="params"
    ></renders>
    <a-button type="primary" @click="handleSaveItem">保存</a-button>
  </a-form>
  <!-- <div>propData{{ propData }}</div> -->
</template>

<script>
import common from '@/utils/common'
export let AsyncSelectConf = {
  type: 'AsyncSelect',
  icon: 'dictionary',
  name: '',
  label: 'urlSelect',
  disabled: true, // 是否禁用
  rules: [],
  showSearch: true,
  options: {
    url: '/customer/bankAccount/getBankList',
    callBack: (res) => {
      return res.data
    },
    valueKey: 'id',
    labelKeys: 'bankAcco;bankAcconame',
  },
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
}
export default {
  props: {
    propData: {
      type: Object,
      required: true,
    },
    defaultValueList: {
      type: Array,
      default: function() {
        return []
      },
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      formConfs: [
        {
          type: 'input',
          label: '标题',
          name: 'label',
          required: false,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'input',
          label: '字段名',
          name: 'name',
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'input',
          label: 'url',
          name: 'options.url',
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'input',
          label: 'valueKey',
          name: 'options.valueKey',
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'input',
          label: 'labelKeys',
          name: 'options.labelKeys',
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'input',
          label: 'callBack',
          name: 'options.callBack',
          required: false,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },

        {
          type: 'number',
          label: '标题宽',
          name: 'labelCol.span',
          required: false,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'number',
          label: '表单宽',
          name: 'wrapperCol.span',
          required: false,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
      ],
      params: {},
      visible: false,
    }
  },
  methods: {
    handleSaveItem() {
      this.form.validateFields((err, values) => {
        if (!err) {
          let newFormList = common.deepClone(
            this.$store.state.formDesign.formList
          )
          console.log('这里需要将callback字符串 转换为对象')
          newFormList = common.recurrence(newFormList, (item) => {
            if (item.key === this.$store.state.formDesign.activeKey) {
              return Object.assign({}, item, values)
            } else {
              return item
            }
          })
          this.$store.dispatch('formDesign/setFormList', newFormList)
        }
      })
    },
  },
}
</script>
