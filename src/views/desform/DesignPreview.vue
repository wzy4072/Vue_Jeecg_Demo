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
  comDibilityLimit: "T",
  custType: "3012",
  industry: "A0132",
  depositHuman: "02",
  resDistList: ["130000000000", "130600000000", "130604000000", "130604001000"],
  AddressCascader: [
    "130000000000",
    "130600000000",
    "130604000000",
    "130604001000"
  ],
  regTePhone: "13212345678",
  workDistList: [
    "130000000000",
    "130600000000",
    "130604000000",
    "130604001000"
  ],
  regStrentDoor: [
    "130000000000",
    "130600000000",
    "130604000000",
    "130604001000"
  ],
  appApplyType: "1",
  cfoType: "1"
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

//  法人亲办、法人兼任财务主管的情况，经办人以及财务主管身份证正反面影像资料文件名称非必输；
//  法人亲办、他人兼任财务主管的情况，财务主管身份证正反面影像资料文件名称必输，经办人身份证正反面影像资料文件名称非必输；
//  授权经办、法人兼任财务主管的情况，经办人身份证正反面影像资料文件名称必输，财务主管身份证正反面影像资料文件名称非必输；
//  授权经办、经办人兼财务主管的情况，经办人身份证正反面影像资料文件名称必输，财务主管身份证正反面影像资料文件名称非必输；
//  授权经办、他人兼财务主管的情况，经办人以及财务主管身份证正反面影像资料文件名称必输；
let formRelevanceConfig = [
  {
    rules: [
      { name: "appApplyType", value: "1" },
      { name: "cfoType", value: "1" }
    ],
    relevance: "and",
    result: [
      {
        name: "cfoName",
        rules: [{ required: false, message: "请输入财务主管姓名" }]
      },
      {
        name: "checkerName",
        rules: [{ required: false, message: "请输入经办人姓名" }]
      }
    ]
  },
  {
    rules: [
      { name: "appApplyType", value: "1" },
      { name: "cfoType", value: "2" }
    ],
    relevance: "and",
    result: [
      {
        name: "cfoName",
        rules: [{ required: true, message: "请输入财务主管姓名" }]
      },
      {
        name: "checkerName",
        rules: [{ required: false, message: "请输入经办人姓名" }]
      }
    ]
  },

  {
    rules: [
      { name: "appApplyType", value: "1" },
      { name: "cfoType", value: "3" }
    ],
    relevance: "and",
    result: [
      {
        name: "cfoName",
        rules: [{ required: true, message: "请输入财务主管姓名" }]
      },
      {
        name: "checkerName",
        rules: [{ required: false, message: "请输入经办人姓名" }]
      }
    ]
  },

  {
    rules: [
      { name: "appApplyType", value: "2" },
      { name: "cfoType", value: "1" }
    ],
    relevance: "and",
    result: [
      {
        name: "cfoName",
        rules: [{ required: false, message: "请输入财务主管姓名" }]
      },
      {
        name: "checkerName",
        rules: [{ required: true, message: "请输入经办人姓名" }]
      }
    ]
  },
  {
    rules: [
      { name: "appApplyType", value: "2" },
      { name: "cfoType", value: "2" }
    ],
    relevance: "and",
    result: [
      {
        name: "cfoName",
        rules: [{ required: false, message: "请输入财务主管姓名" }]
      },
      {
        name: "checkerName",
        rules: [{ required: true, message: "请输入经办人姓名" }]
      }
    ]
  },
  {
    rules: [
      { name: "appApplyType", value: "2" },
      { name: "cfoType", value: "3" }
    ],
    relevance: "and",
    result: [
      {
        name: "cfoName",
        rules: [{ required: true, message: "请输入财务主管姓名" }]
      },
      {
        name: "checkerName",
        rules: [{ required: true, message: "请输入经办人姓名" }]
      }
    ]
  }
];

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
    setCongValue(arr, confSet) {
      for (let i = 0; i < arr.length; i++) {
        const conf = arr[i];
        if (conf.hasOwnProperty("panes")) {
          conf.panes = this.setCongValue(conf.panes, confSet);
        }
        if (conf.hasOwnProperty("columns")) {
          conf.columns = this.setCongValue(conf.columns, confSet);
        }
        if (conf.hasOwnProperty("list")) {
          conf.list = this.setCongValue(conf.list, confSet);
        }
        if (conf.name === confSet.name) {
          // arr[i] = Object.assign({}, conf, confSet);
          arr[i].rules = JSON.parse(JSON.stringify(confSet.rules));
          console.log("confSet", confSet.rules[0].required);
          console.log("arr[i]", arr[i].rules[0].required);
          break;
        }
      }
      return arr;
    },
    handleChangeVal(v, e) {
      this.$nextTick(() => {
        if (["appApplyType", "cfoType"].includes(v.name)) {
          // 处理联动
          formRelevanceConfig.map(item => {
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
              this.form.validateFields((err, values) => {});
            }
          });
        }
      });
      // console.log("DesignPreview_handleChangeVal");
      // console.log(v, e);
    },
    test() {
      let { form } = this;
      form.setFields();
    }
  }
};
</script>
<style scoped>
</style>