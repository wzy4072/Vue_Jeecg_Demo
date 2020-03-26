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

    <a-button type="primary" @click="test">test</a-button>
  </div>
</template>

<script>
import shBankConf from "./config01";
import moment from "moment";
let resInitialValue = {
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
  ],
  // 日期 需要根据配置文件查找字段 格式 转换为moment对象
  companyFoundDate: moment("2020-03-20", "YYYY-MM-DD"),
  confirmationDate: moment("2020-03-20", "YYYY-MM-DD"),
  scopeOfBus: 666,
  agreementMoney: 20,
  comDibilityLimit: "T"
};

// 处理日期字段格式
function transformDate(confs, values) {
  confs.map(conf => {
    if (conf.type == "datepicker") {
      let dateValue = values[conf.name];
      values[conf.name] = dateValue
        ? dateValue.format(conf.dateValueFormat)
        : null;
    }
  });
  return values;
}

export default {
  data() {
    return {
      formConfs: [],
      form: this.$form.createForm(this),
      initialValue: {}
    };
  },
  mounted() {
    this.asyncGetValue();
  },
  methods: {
    asyncGetValue() {
      setTimeout(() => {
        this.formConfs = shBankConf;
        this.initialValue = resInitialValue;
      }, 500);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // 处理日期字段格式
          values = transformDate(this.formConfs, values);
          console.log("Received values of form: ", values);
        }
      });
    },

    handleChangeVal(v, e) {
      console.log(v, e);
    },
    test() {}
  }
};
</script>
<style scoped>
</style>