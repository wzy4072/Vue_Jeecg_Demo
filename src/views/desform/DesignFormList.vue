<template>
  <div>
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

      <!-- <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>-->
    </a-form>
    <a-row>
      <a-button style="margin-right: .8rem">取消</a-button>

      <a-button type="primary" @click="handleSubmit(2)">提交</a-button>
      <a-button type="primary" @click="test">test</a-button>
    </a-row>
  </div>
</template>

<script>
// import shBankConf from "./config01";
import { getAction } from '@/api/manage'
import designUtil from '@/components/FormDesign/util'

//  法人亲办、法人兼任财务主管的情况，经办人以及财务主管身份证正反面影像资料文件名称非必输；
//  法人亲办、他人兼任财务主管的情况，财务主管身份证正反面影像资料文件名称必输，经办人身份证正反面影像资料文件名称非必输；
//  授权经办、法人兼任财务主管的情况，经办人身份证正反面影像资料文件名称必输，财务主管身份证正反面影像资料文件名称非必输；
//  授权经办、经办人兼财务主管的情况，经办人身份证正反面影像资料文件名称必输，财务主管身份证正反面影像资料文件名称非必输；
//  授权经办、他人兼财务主管的情况，经办人以及财务主管身份证正反面影像资料文件名称必输；
export default {
  data() {
    return {
      formConfs: [
        {
          type: 'title',
          // 字段名
          name: 'userName',
          label: '用户名',
          labelCol: null, // FormItem 默认 { span: 6 },
          wrapperCol: null, // FormItem 默认{ span: 6 },
        },
      ],
      form: this.$form.createForm(this),
      initialValue: {
        userName: '阿里巴巴',
      },
      params: {},
    }
  },
  mounted() {
    this.asyncGetValue()
  },
  methods: {
    asyncGetValue() {},
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    setCongValue(arr, confSet) {},
    handleChangeVal(v, e) {},
    test() {
      this.asyncGetValue()
    },
  },
}
</script>
<style scoped></style>
