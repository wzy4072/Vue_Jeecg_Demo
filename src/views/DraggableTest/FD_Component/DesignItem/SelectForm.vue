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
    <a-row v-for="(k, index) in keys" :key="k.id">
      <a-col :span="12">
        <a-form-item :label-col="{ span: 0 }" :wrapper-col="{ span: 24 }">
          <a-input
            v-decorator="[`options[${index}].label`]"
            :placeholder="'选项名字' + index"
            style="width: 80%;"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label-col="{ span: 0 }" :wrapper-col="{ span: 24 }">
          <a-input
            v-decorator="[`options[${index}].value`]"
            :placeholder="'选项值' + index"
            style="width: 80%; "
          />
          <a-icon
            v-if="keys.length > 1"
            type="minus-circle-o"
            :disabled="keys.length === 1"
            @click="() => remove(k)"
          /> </a-form-item
        ></a-col>
    </a-row>

    <a-form-item>
      <a-button type="dashed" style="width: 60%" @click="add">
        <a-icon type="plus" /> Add field
      </a-button>
    </a-form-item>

    <a-button type="primary" @click="handleSaveItem">保存</a-button>
  </a-form>
</template>

<script>
import common from '@/utils/common'
export let SelectConf = {
  type: 'select',
  icon: 'select',
  // 三种下拉选择
  name: '',
  allowClear: true,
  label: 'Select',
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
  options: [],
}

let id = 1

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
          type: 'switchs',
          name: 'required',
          label: '是否必填',
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'switchs',
          name: 'disabled',
          label: '是否禁用',
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
        {
          type: 'switchs',
          name: 'allowClear',
          label: '允许清空',
          rules: [],
          labelCol: { span: 6 },
          wrapperCol: { span: 12 },
        },
      ],
      params: {},
      visible: false,
      keys: [],
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
    remove(k) {
      if (this.keys.length === 1) {
        return
      }
      this.keys = this.keys.filter((key) => key !== k)
    },

    add() {
      id++
      this.keys.push(id)
    }
  },
}
</script>
