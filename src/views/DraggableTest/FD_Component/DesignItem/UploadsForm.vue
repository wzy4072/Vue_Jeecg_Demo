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
    <a-button type="primary" @click="test">test</a-button>
  </a-form>
</template>

<script>
import common from '@/utils/common'

export let UploadsConf = {
  type: 'uploads',
  icon: 'uploads',
  name: '',
  label: 'Uploads',
  fileName: 'fileInfo',
  action: '/serve/fieupload',
  headers: {
    authorization: 'authorization-text',
  },
  valuePropName: 'fileList',
  disabled: false,
  required: true,
  rules: [],
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
  watch: {
    propData: {
      handler: function() {
        for (let k in this.propData) {
          try {
            this.form.setFieldsValue({ k: this.propData[k] })
          } catch (err) {
              console.log(err)
          }
        }
      },
      deep: true,
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
          disabled: false,
          required: false,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'input',
          label: '字段名',
          name: 'name',
          disabled: false,
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'input',
          label: 'fileName',
          name: 'fileName',
          disabled: false,
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'input',
          label: 'action',
          name: 'action',
          disabled: false,
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
         {
          type: 'input',
          label: 'valuePropName',
          name: 'valuePropName',
          disabled: false,
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },

        
        {
          type: 'input',
          label: 'headers',
          name: 'headers.authorization',
          disabled: false,
          required: true,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },

        {
          type: 'number',
          label: '标题宽',
          name: 'labelCol.span',
          disabled: false,
          required: false,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'number',
          label: '表单宽',
          name: 'wrapperCol.span',
          disabled: false,
          required: false,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'switchs',
          name: 'required',
          label: '是否必填',
          disabled: false,
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'switchs',
          name: 'disabled',
          label: '是否禁用',
          disabled: false,
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
    test() {
      this.form.get
    },
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
