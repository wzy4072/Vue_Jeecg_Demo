<template>
  <div>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
      layout="horizontal"
    >
      <renders
        v-for="(element,index) in formConfs"
        :key="element.type + index"
        :index="index"
        :conf="element"
        :initialValue="initialValue"
        @handleChangeVal="val => handleChangeVal(val,element)"
        :sortableItem="formConfs"
      ></renders>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    <!-- <hr />
    {{formConfs}}-->
  </div>
</template>

<script>
import shBankConf from "./config01";
export default {
  data() {
    return {
      formConfs: shBankConf,
      form: this.$form.createForm(this),
      initialValue: {
        facilitatorName: "上海银行",
        companyName: "上海银行集团股份公司",
        agreementType: "A",
        agreementNumber: "91440400337919362H",
        // 91440400337919362L
        companyDesc: "No English Name",
        companyImgID: [
          {
            uid: "xxx",
            name: "XXX文件",
            status: "done",
            response: {
              data: { id: "666" }
            }
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleChangeVal(v, e) {
      console.log(v, e);
    }
  }
};
</script>
<style scoped>
</style>