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
    formConfs: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
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
