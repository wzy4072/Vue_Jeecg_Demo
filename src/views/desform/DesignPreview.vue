<template>
  <div>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      ref="form"
      @submit="handleSubmit"
      layout="horizontal"
    >
      <renders
        v-for="(element,index) in formConfs"
        :key="element.type + index"
        :index="index"
        :conf="element"
        :initialValue="initialValue"
        @change="val => handleChangeVal(val,element)"
        :sortableItem="formConfs"
        :params="params"
      ></renders>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
    <!-- {{formConfs}} -->
    <a-button type="primary" @click="test">test</a-button>
  </div>
</template>

<script>
// import shBankConf from "./config01";
import { getAction } from "@/api/manage";
import moment from "moment";

function transDate(dateValue, format) {
  if (!dateValue) return null;
  console.log("dateValue", dateValue);
  return typeof dateValue === "string"
    ? moment(dateValue, format)
    : dateValue.format(format);
}

function transformData(confs, values) {
  confs.map(conf => {
    if (conf.hasOwnProperty("list")) {
      values = transformData(conf.list, values);
    } else {
      // 处理日期字段格式 对象转字符串 字符串转对象
      if (conf.type == "datepicker") {
        let dateValue = values[conf.name];
        values[conf.name] = transDate(dateValue, conf.dateValueFormat);
      }
    }
  });
  return values;
}

//  法人亲办、法人兼任财务主管的情况，经办人以及财务主管身份证正反面影像资料文件名称非必输；
//  法人亲办、他人兼任财务主管的情况，财务主管身份证正反面影像资料文件名称必输，经办人身份证正反面影像资料文件名称非必输；
//  授权经办、法人兼任财务主管的情况，经办人身份证正反面影像资料文件名称必输，财务主管身份证正反面影像资料文件名称非必输；
//  授权经办、经办人兼财务主管的情况，经办人身份证正反面影像资料文件名称必输，财务主管身份证正反面影像资料文件名称非必输；
//  授权经办、他人兼财务主管的情况，经办人以及财务主管身份证正反面影像资料文件名称必输；
export default {
  data() {
    return {
      formConfs: [],
      form: this.$form.createForm(this),
      initialValue: {},
      params: {
        financeNo: "SHBankW2009901A"
      }
    };
  },
  mounted() {
    this.asyncGetValue();
  },
  methods: {
    asyncGetValue() {
      getAction("/api/formdesign/config").then(res => {
        this.formConfs = res.data.formConfs;
        this.initialValue = transformData(
          this.formConfs,
          res.data.resInitialValue
        );
        this.formRelevanceConfig = res.data.formRelevanceConfig;
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // 处理日期字段格式
          values = transformData(this.formConfs, values);
          console.log("Received values of form: ", values);
        }
      });
    },
    setCongValue(arr, confSet) {
      for (let i = 0; i < arr.length; i++) {
        const conf = arr[i];
        if (conf.hasOwnProperty("list")) {
          conf.list = this.setCongValue(conf.list, confSet);
        }
        if (conf.name === confSet.name) {
          arr[i][confSet.key] = JSON.parse(JSON.stringify(confSet.value));
          break;
        }
      }
      return arr;
    },
    handleChangeVal(v, e) {
      this.$nextTick(() => {
        if (["appApplyType", "cfoType"].includes(v.name)) {
          // 处理联动
          this.formRelevanceConfig.map(item => {
            let rulesRes = item.rules.map(rule => {
              return this.form.getFieldValue(rule.name) === rule.value;
            });
            if (
              (item.relevance === "or" && rulesRes.includes(true)) ||
              (item.relevance === "and" && !rulesRes.includes(false))
            ) {
              // 执行
              item.result.map(set => {
                this.formConfs = this.setCongValue(this.formConfs, set);
              });
              // this.form.validateFields((err, values) => {});
            }
          });
        }
      });
      // console.log("DesignPreview_handleChangeVal");
      // console.log(v, e);
    },
    test() {
      this.asyncGetValue();
    }
  }
};
</script>
<style scoped>
</style>