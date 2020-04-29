<template>
  <a-modal title="Basic Modal" v-model="visible" @ok="handleOk">
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
        :initialValue="initialValue"
        @change="(val) => handleChangeVal(val, element)"
        :sortableItem="formConfs"
        :params="params"
      ></renders>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      formConfs:[],
      initialValue: {
        name: 'Tom',
        age: 12,
      },
      params: {},
      visible: false,
    }
  },
  methods: {
    handleChangeVal() {},
    openModale(confs) {
      this.visible = true
      this.formConfs = confs
      console.log(JSON.stringify(confs))
    },
    handleOk() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>

<style></style>
