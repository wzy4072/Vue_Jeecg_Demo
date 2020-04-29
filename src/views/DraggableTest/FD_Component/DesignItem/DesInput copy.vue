<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-03 08:37:07
 * @LastEditTime: 2019-10-14 10:36:17
 * @LastEditors: Please set LastEditors
 -->
<template>
  <a-form laba-position="top" laba-width="80px" size="mini">
    <a-form-item label="标题">
      <a-input v-model="data.label" size="small"></a-input>
    </a-form-item>
    <a-form-item label="字段">
      <a-input v-model="data.name" size="small"></a-input>
    </a-form-item>
    <a-form-item label="宽度">
      <a-input v-model="data.width" size="small"></a-input>
    </a-form-item>
    <a-form-item label="最大长度">
      <a-input-number
        v-model="data.maxlength"
        :min="1"
        :max="50"
        label="最大长度"
        size="small"
      ></a-input-number>
    </a-form-item>
    <a-form-item label="占位内容">
      <a-input v-model="data.placeholder" size="small"></a-input>
    </a-form-item>

    <a-form-item label="是否必填">
      <a-switch
        v-model="data.required"
        active-color="#13ce66"
        inactive-color="#EEEEEE"
      ></a-switch>
    </a-form-item>
    <a-form-item label="是否禁用">
      <a-switch
        v-model="data.disabled"
        active-color="#13ce66"
        inactive-color="#EEEEEE"
      ></a-switch>
    </a-form-item>
  </a-form>
</template>

<script>
import common from '@/utils/common'

export default {
  props: {
    propData: {
      type: Object,
      required: true,
      default: function() {
        return {
          label: '单行文本',
          type: 'input',
          code: '',
          icon: '/static/img/form-design/input.png',
          width: '100%',
          defaultValue: '',
          required: false,
          disabled: false,
          dataType: 'string',
          placeholder: '',
          maxlength: 30,
          regEx: '',
          key: common.getGuid(),
        }
      },
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
      data: {},
    }
  },
  methods: {},
  mounted() {},
  watch: {
    data: {
      handler: function(value) {
        // console.log('tihs.$store', this.$store)
        let newFormList = common.deepClone(
          this.$store.state.formDesign.formList
        )
        newFormList = common.recurrence(newFormList, (item) => {
          if (item.key === this.$store.state.formDesign.activeKey) {
            return value
          } else {
            return item
          }
        })
        // this.$store.commit('formDesign/updateActiveKey', value.key)
        this.$store.dispatch('formDesign/setFormList', newFormList)
      },
      deep: true,
    },
    propData: {
      handler: function(value) {
        this.data = common.deepClone(value)
      },
      deep: true,
      // immediate: true
    },
  },
}
</script>

<style></style>
