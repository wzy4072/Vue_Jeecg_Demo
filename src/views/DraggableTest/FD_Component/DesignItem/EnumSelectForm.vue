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
</template>

<script>
import common from '@/utils/common'
export let EnumSelectConf = {
  type: 'EnumSelect',
  icon: 'dictionary',
  name: '',
  label: '字典Select',
  disabled: true, // 是否禁用
  rules: [],
  selectOptionEnumCode: 'limbic_shbank_comDibilityLimit',
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
        {
          type: 'input',
          label: '字典code',
          name: 'selectOptionEnumCode',
          required: true,
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
