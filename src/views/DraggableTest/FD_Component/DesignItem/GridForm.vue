<template>
  <a-form
    :form="form"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 12 }"
    ref="form"
    layout="horizontal"
  >
    <a-form-item
      v-for="(k, index) in keys"
      :key="k.id"
      :label-col="{ span: 0 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-input-number
        v-decorator="[
          `list[${index}].span`,
          {
            rules: [{ required: true, message: 'require!' }],
          },
        ]"
        placeholder="列宽"
        style="width: 80%;"
      />
    </a-form-item>

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
import { InputConf } from '@/views/DraggableTest/FD_Component/DesignItem/InputForm'

export let GridConf = {
  label: 'Grid',
  type: 'grid',
  icon: 'row',
  name: '',
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
  list: [
    {
      span: 12,
      type: 'col',
      list: [InputConf],
    },
    {
      span: 12,
      type: 'col',
      list: [InputConf],
    },
  ],
}
let id = 3

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
      formConfs: [],
      params: {},
      visible: false,
      keys: [1, 2],
    }
  },
  methods: {
    handleSaveItem() {
      //   let tempCol = {
      //     span: 12,
      //     type: 'col',
      //     list: [InputConf],
      //   }
      this.form.validateFields((err, values) => {
        if (!err) {
          let newFormList = common.deepClone(
            this.$store.state.formDesign.formList
          )
          console.log('666+', JSON.stringify(newFormList))

          newFormList = common.recurrence(newFormList, (item) => {
            if (item.key === this.$store.state.formDesign.activeKey) {
              // 这里特殊处理
              values.list = values.list.map((col, cIndex) => {
                let colIpt = common.deepClone(InputConf)
                colIpt.name = common.getGuid2()
                colIpt.key = common.getGuid()

                let newCol = Object.assign(
                  {},
                  {
                    key: common.getGuid(),
                    list: [colIpt],
                  },
                  item.list[cIndex] || {},
                  col
                )
                return newCol
              })
              return Object.assign({}, item, values)
            } else {
              return item
            }
          })
          console.log('666-', JSON.stringify(newFormList))
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
    },
  },
}
</script>
